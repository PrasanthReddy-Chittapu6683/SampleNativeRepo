import { catchify } from "./promises";
import { api } from "./api";

export const loginOrRegister = async (email) => {
  const url = "user/register";
  const result = await api.post({
    url,
    data: {
      email,
      source: "checkin",
    },
  });

  if (!result?.payload?.verification_id) {
    throw new Error("Verification id missing from response");
  }

  return result.payload.verification_id;
};
export const verify = async (verificationId, code) => {
  const [codeErr, codeResult] = await catchify(
    api.post({
      url: "user/verify",
      data: {
        code,
        verification_id: verificationId,
      },
    })
  );
  let success = !codeErr;

  if (!codeResult?.payload?.token) {
    success = false;
  }

  return {
    success,
    user: codeResult?.payload?.user,
    token: codeResult?.payload?.token,
    error: codeErr,
  };
};
