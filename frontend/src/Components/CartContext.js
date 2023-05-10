import React, { useContext, useEffect, useReducer } from 'react'
import { createContext } from 'react'
import reducer from "./Cartreducer"

let initialState={
    
     cart:[],
     total_item:"",
     total_price:"",
     shipping_fee:500,
    
     
}
let CartContext=createContext()
let CartProvider=({children})=>{
    let [state,dispatch]=useReducer(reducer,initialState)
   let  addtocart=(id,amount,brand,product,description)=>{
dispatch({type:"ADD_TO_CART",payload:{id,amount,brand,product,description}})
   }
   let setDecrease=(id)=>{
    dispatch({type:"SET_DECREEMENT",payload:id})
   }
   let setincreement=(id)=>{
    dispatch({type:"SET_INCREEMENT",payload:id})
   }
   let remove=(id)=>{
    dispatch({type:"REMOVE_ITEM",payload:id})
   }
   let clearCart=()=>{
    dispatch({type:"CLEAR_CART"})
   }
   //sorting
//    let sorting=()=>{
// dispatch({type:"GET_SORT_VALUE"})
//    }
//    useEffect(()=>{
// dispatch({type:"SORTING_PRODUCTS"})
//    },[state.sorting_value])
   useEffect(()=>{
    dispatch({type:"GET_TOTAL_ITEM"})
    dispatch({type:"CART_TOTAL_PRICE"})
    localStorage.setItem("myntra",JSON.stringify(state.cart))
   },[state.cart])
    return <CartContext.Provider value={{...state,addtocart,remove,clearCart,setDecrease,setincreement}} >{children}</CartContext.Provider>
}
let useCartConext=()=>{
    return useContext(CartContext)
}
export {CartProvider,useCartConext}