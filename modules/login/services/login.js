import { api } from "../../../core/services/api";
import { mutate } from "swr";
import { useNavigation } from "@react-navigation/native";
import { useIsLoggedIn } from "../../../core/services/auth";

export const useAfterLogin = () => {
  const navigation = useNavigation();
  const [, setIsLoggedIn] = useIsLoggedIn();

  return async () => {
    setIsLoggedIn(true);
    const agreements = await api
      .get({
        url: "agreement",
      })
      .then((res) => res.payload);

    if (agreements.length) {
      await mutate(
        "agreement",
        () => ({
          payload: agreements,
        }),
        {
          revalidate: false,
        }
      );
      navigation.reset({
        index: 0,
        routes: [{ name: "Agreements" }],
      });
    } else {
      navigation.reset({
        index: 0,
        routes: [{ name: "Main" }],
      });
    }
  };
};
