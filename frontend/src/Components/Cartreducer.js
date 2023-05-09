import React from 'react'
const CartReducer = (state,action) => {
if(action.type==="ADD_TO_CART"){
    let {id,amount,brand,product}=action.payload
    // console.log(product)
    let existingproduct=state.cart.find((el)=>
el.id===id
    )
    if(existingproduct){
let updatedProduct=state.cart.map((el)=>{
    if(el.id===id){
        let newAmount=el.amount+amount
        return{
            ...el,
            amount:newAmount
            }
    }else{
        return el
    }
   
})
return{
    ...state,
    cart:updatedProduct
}
    }else{

    
    let cartProduct;
    cartProduct={
        id,
        brand,
        amount,
price:product.price,
category:product.category,
image:product.image,
max:product.qunatity,
description:product.description
    }
    return{
        ...state,
        cart:[...state.cart,cartProduct]
    }
}
}
if(action.type==="SET_DECREEMENT"){
    let updatedProduct=state.cart.map((el)=>{
        if(el.id===action.payload){
           let decAmount=el.amount-1
       return{
        ...el,
        amount:decAmount
       }
        }else{
            return el
        }
    })
    return {
        ...state,
        cart:updatedProduct
    }
}
if(action.type==="SET_INCREEMENT"){
    let updatedProduct=state.cart.map((el)=>{
        if(el.id===action.payload){
           let incAmount=el.amount+1
       return{
        ...el,
        amount:incAmount
       }
        }else{
            return el
        }
    })
    return {
        ...state,
        cart:updatedProduct
    }
}
    if(action.type==="REMOVE_ITEM"){
        let updatedData=state.cart.filter((elem)=>elem.id!==action.payload)
        return {
            ...state,
cart:updatedData
        }

    
}
if(action.type==="CLEAR_CART"){
    return {
        ...state,
        cart:[]
    }
}
if(action.type==="GET_TOTAL_ITEM"){
    let updatedItem=state.cart.reduce((initial,currElem)=>{
let {amount}=currElem
initial=initial+amount
return initial
    },0)
    return {
        ...state,
        total_item:updatedItem
    }
}
if(action.type==="CART_TOTAL_PRICE"){
    let total_price=state.cart.reduce((el,currElem)=>{
let {price,amount}=currElem
el=el+price*amount
return el;
    },0)
    return {
        ...state,
        total_price,
    }
}
// if(action.type==="GET_SORT_VALUE"){
//     let userSortVlaue=document.getElementById("sort");
//     let sort_value=userSortVlaue.options[userSortVlaue.selectedIndex].value
//     console.log(sort_value)
//     return {
//         ...state,
//         sorting_value:sort_value
//     }
   
    
// }
return state
}

export default CartReducer
