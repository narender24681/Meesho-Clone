import {
  Get_Sign_Up_Failure,
  Get_Sign_Up_Req,
  Get_Sign_Up_Success,
} from "./Actiontypes";

const intialState = {
  msg: "",
  isLoading: false,
  isError: false,
};
export const reducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case Get_Sign_Up_Req:
      return { ...state, isLoading: true, isError: false };
    case Get_Sign_Up_Success:
      return { ...state, isLoading: false, msg: payload, isError: false };
    case Get_Sign_Up_Failure:
      return { ...state, isLoading: false, isError: true };
    default:
      return state;
  }
};
