import { AuthAction as action } from "../store/Store";

const LoginHandler = (
  email: string,
  password: string,
  isSignupActive: boolean
) => {
  return async (dispatch: any) => {
    dispatch(action.authRequest());
    let url = "";
    if (isSignupActive) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBBbhGFE8rCNCWRffqcLfSvJEjiW60ksF4";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBBbhGFE8rCNCWRffqcLfSvJEjiW60ksF4";
    }

    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
        returnSecureToken: true,
      }),
      headers: {
        "Content-type": "application/JSON",
      },
    })
      .then((Response) => {
        if (Response.ok) {
          return Response.json();
        } else {
          throw new Error("authentication failed");
        }
      })
      .then((data) => {
        console.log(data);
        dispatch(action.authSuccess(data.idToken));
        sessionStorage.setItem("user", data.user);
        sessionStorage.setItem("token", data.idToken);
      })
      .catch((err) => alert(err.message));
  };
};

export default LoginHandler;
