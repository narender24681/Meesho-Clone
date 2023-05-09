import {
  LOGIN_FAILURE,
  LOGIN_REQ,
  LOGIN_SUCCESS,
  LOG_OUT,
} from "./ActionTypes";

const init = {
  token: "",
  isLoading: false,
  isError: false,
  msg: "",
};

export const reducer = (state = init, { type, payload }) => {
  switch (type) {
    case LOGIN_REQ:
      return { ...state, isLoading: true, isError: false };
    case LOGIN_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        token: payload.token,
        msg: payload.msg,
      };
    }
    case LOG_OUT:
      return { ...state, token: "" };
    case LOGIN_FAILURE:
      return { ...state, isLoading: false, isError: true };
    default:
      return state;
  }
};
