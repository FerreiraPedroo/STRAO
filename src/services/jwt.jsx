import * as JWT from "jwt-decode";

export const verifyExpTimeJWT = (token) => {
  const { exp } = JWT.default(token);

  const expTime = exp * 1000;
  const currentTime = new Date().getTime();

  if (expTime <= currentTime) {
    return false;
  }
  return true;
};

export const decodeJWT = (token) => {
  const result = JWT.default(token);

  return result;
};
