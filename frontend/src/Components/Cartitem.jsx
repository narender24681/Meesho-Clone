import React from 'react'

import { useCartConext } from './CartContext'
import style from "../Style/Footer.module.css"
import { NavLink, useNavigate } from 'react-router-dom'
import { Button } from '@chakra-ui/react'
import { MdCategory } from 'react-icons/md'
import CartAmountToggel from './cartAmount'
const CartItem = ({id,brand ,price,name,image,category,amount,description}) => {
    
let {remove,setDecrease,setincreement,total_item,total_price,shipping_fee,clearCart}=useCartConext()
let navigate=useNavigate()
let check=()=>{
    navigate("/payment")
}
  //    let setdecrease=()=>{
    
  //        amount>1?setAmount(amount-1):setAmount(1)
  //  }
    // let setincrease=()=>{
        // amount<qunatity?setAmount(amount+1):setAmount(qunatity)
    
  return (
    <div className={style.bigdiv}>
    <div className={style.cart}>
      <div>
        <img src={image} alt="" />
      </div>
      <div className={style.detail}>
        <h1>{brand}</h1>
        <p>{category}</p>
        <div className={style.pbtn}>
        <CartAmountToggel amount={amount} setDecrease={()=>setDecrease(id)} setincrease={()=>setincreement(id)}/>
        </div>
       <h3>Rs:- {price}</h3>
<Button onClick={()=>remove(id)} backgroundColor="#f43397" color="white" marginTop="15px">
    Delete
</Button>
      </div>
    </div>
   
    </div>
    
  )
}

export default CartItem
