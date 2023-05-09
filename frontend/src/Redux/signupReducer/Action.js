import axios from "axios";
import {
  Get_Sign_Up_Failure,
  Get_Sign_Up_Req,
  Get_Sign_Up_Success,
} from "./Actiontypes";

export const sign_In_Action = (Inputvalue) => (dispatch) => {
  dispatch({ type: Get_Sign_Up_Req });
  return axios({
    method: "post",
    url: "http://localhost:8080/user/signup",
    headers: { "Content-Type": "application/json" },
    data: Inputvalue,
  })
    .then((res) => {
      {
        return dispatch({
          type: Get_Sign_Up_Success,
          payload: res.data.message,
        });
      }
    })
    .catch((err) => dispatch({ type: Get_Sign_Up_Failure }));
};
