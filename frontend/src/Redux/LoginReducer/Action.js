import axios from "axios";
import { LOGIN_FAILURE, LOGIN_REQ, LOGIN_SUCCESS } from "./ActionTypes";

export const loginAction = (InputValue) => (dispatch) => {
  dispatch({ type: LOGIN_REQ });
  return axios({
    method: "post",
    url: "http://localhost:8080/user/login",
    headers: { "Content-Type": "application/json" },
    data: InputValue,
  })
    .then((res) =>
      dispatch({
        type: LOGIN_SUCCESS,
        payload: { token: res.data.token, msg: res.data.Message },
      })
    )
    .catch((err) => dispatch({ type: LOGIN_FAILURE }));
};
