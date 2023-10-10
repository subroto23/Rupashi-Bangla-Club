import Cookie from "js-cookie";

const SetCookie = (cookieName, secretKey) => {
  Cookie.set(cookieName, secretKey, {
    expires: 1,
    secure: true,
    sameSite: "strict",
    path: "/",
  });
};

export default SetCookie;
