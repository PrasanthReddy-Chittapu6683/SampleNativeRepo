import { getAuthToken, logout, useIsLoggedIn } from "./auth";
import superagent from "superagent";
import useSWR, { mutate } from "swr";
import { API_URL } from "@env";
import { useToast } from "native-base";
import { baseToastProps } from "../constants/errors";
import { useEffect, useRef } from "react";
import { AppState } from "react-native";
import { resetNavigation } from "./navigation";
import { timeout } from "./promises";

export const api = {
  async createHeaders(headers) {
    const finalHeaders = {
      ...(headers || {}),
      "Content-Type": "application/json",
    };

    if (await getAuthToken()) {
      finalHeaders["x-user-token"] = await getAuthToken();
    }

    return finalHeaders;
  },

  async request({ url, method, data, headers }) {
    if (!url) {
      return null;
    }

    const urlToUse = `${API_URL}/${url}`;
    const req = superagent[method](urlToUse);
    const finalHeaders = await this.createHeaders(headers);

    if (data) {
      if (method === "get") {
        req.query(data);
      }

      if (method === "post" || method === "patch" || method === "delete") {
        req.send(data);
      }
    }

    req.set(finalHeaders);

    try {
      const result = await req;
      const body = result.body;

      return {
        status: "SUCCESS",
        payload: body,
      };
    } catch (e) {
      if (e?.response?.body?.error) {
        e.message = e.response.body.error;
      }
      throw e;
    }
  },

  get(args) {
    return this.request({
      ...args,
      method: "get",
    });
  },

  post(args) {
    return this.request({
      ...args,
      method: "post",
    });
  },

  patch(args) {
    return this.request({
      ...args,
      method: "patch",
    });
  },

  delete(args) {
    return this.request({
      ...args,
      method: "delete",
    });
  },
};

export const ApiState = {
  Idle: "idle",
  Loading: "loading",
  Error: "error",
  Success: "success",
};

export const useApi = (url, args, options) => {
  const [loggedIn] = useIsLoggedIn();
  const { data, error, isValidating, mutate } = useSWR(
    url,
    async () => {
      if (options?.fetcher) {
        return options?.fetcher();
      }
      if (options?.beforeFetch) {
        await options.beforeFetch();
      }

      if (options?.delay) {
        console.log("delay start");
        await timeout(options?.delay);
      }

      return api
        .get({
          url,
          ...args,
        })
        .then((res) => {
          options?.onSuccess?.(res?.payload);
          return res;
        });
    },
    {
      // revalidateIfStale: false,
      revalidateOnFocus: true,
    }
  );

  if (error) {
    console.log({
      error,
    });
    if (error?.status === 401) {
      if (loggedIn) {
        logout();
      }

      resetNavigation("Home");
    }

    return [ApiState.Error, null];
  }

  if (isValidating) {
    return [ApiState.Loading, data?.payload || options?.defaultValue];
  }

  if (!isValidating && !data) {
    return [ApiState.Idle, options?.defaultValue];
  }

  return [ApiState.Success, data?.payload || options?.defaultValue, mutate];
};

export const useApiRequest = (method) => {
  const toast = useToast();
  return (args) => {
    return api[method](args).catch((e) => {
      toast.show({
        ...baseToastProps,
        description: args.errorMessage || e.message || "Network Error",
        status: "error",
      });
      throw e;
    });
  };
};

export const useRefreshDataOnAppFocus = () => {
  const appState = useRef(AppState.currentState);
  const subscription = useRef();

  useEffect(() => {
    subscription.current = AppState.addEventListener(
      "change",
      (nextAppState) => {
        if (appState.current === "background" && nextAppState === "active") {
          mutate(
            () => true,
            (data) => data,
            { revalidate: true }
          );
        }

        appState.current = nextAppState;
      }
    );

    return () => {
      if (subscription.current) {
        subscription.current.remove();
      }
    };
  }, []);
};
