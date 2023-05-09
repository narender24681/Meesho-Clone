
import axios from "axios";
import { PRODUCT_FAILURE, PRODUCT_REQUEST, GET_PRODUCT_SUCCESS, SINGLE_PRODUCT_SUCCESS } from "./actionType";


export const GetProduct=(paramObj)=>(dispatch)=>{
    dispatch({type:PRODUCT_REQUEST})
    axios.get("http://localhost:8080/products",paramObj)
    .then((res)=>{
        console.log("product",res)
        dispatch({type:GET_PRODUCT_SUCCESS,payload:res.data})
    }).catch(()=>{
        dispatch({type:PRODUCT_FAILURE})
    })
}


export const GetSingleProduct=(id)=>(dispatch)=>{
    dispatch({type:PRODUCT_REQUEST})
    axios.get(`http://localhost:8080/products/${id}`)
    .then((res)=>{
        console.log("single",res)
        dispatch({type:SINGLE_PRODUCT_SUCCESS,payload:res.data})
    }).catch(()=>{
        dispatch({type:PRODUCT_FAILURE})
    })
}