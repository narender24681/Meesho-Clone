import React from 'react'
import { useCartConext } from './CartContext'

import style from "../Style/Footer.module.css"
import { useNavigate } from 'react-router-dom'
import CartItem from './Cartitem'
const CartPage = () => {
    let {cart,clearCart,total_item, total_price,shipping_fee}=useCartConext()
    console.log(cart)
    let navigate=useNavigate()
    let check=()=>{
navigate("/payment")
    }
    if(cart.length===0){
        return <div className={style.item} >
           
            <img src="https://bakestudio.in/assets/images/cart/empty-cart.gif"  />
        </div>
    }
  return (
    <div>
      <div className={style.nb} >
     {cart.map((el,index)=>{
        return <div 
         key={index} >
           
            <CartItem {...el}/>
        </div>
     })}
     
    </div>
    <div className={style.section}>
        <h1>Price Details :       {total_item}</h1>
        <h2>Total Product Price :{total_price}</h2>
        <hr />
        <p>Shipping fee:-{shipping_fee}</p>
        <p>Order Total:-{ total_price+shipping_fee}</p>
        <img src="https://i.imgur.com/carCkJv.png" alt="" />
        <button onClick={check}>Continue Payment</button>

  <button style={{marginTop:"20px"}} onClick={clearCart}>Clear Cart</button>
        <img src="https://i.imgur.com/i8cxwXr.png" alt="" />
    </div>
    </div>
  )
}

export default CartPage
