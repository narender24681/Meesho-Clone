import { Button, Input, useToast } from '@chakra-ui/react'
import React, { useRef } from 'react'
import {useNavigate} from "react-router-dom"
import style from "../Style/Footer.module.css"
import { useCartConext } from './CartContext'
const Payment = () => {
  let {cart,clearCart,total_item, total_price,shipping_fee}=useCartConext()
  let toast=useToast()
  const myRef = useRef(null)

   const executeScroll = () => myRef.current.scrollIntoView() 
  let navigate=useNavigate()
  let payment=()=>{
    toast({
      title: 'Order Placed Successfully',
      position: 'top',
      status: 'success',
      duration: 4000,
      isClosable: true,
    })
    navigate("/success")
  }
  return (
    <div className={style.xt}>
      <div className={style.Payment} >
      
      
        <div className={style.mx}> 
        <img src="https://i.imgur.com/n5tKQzS.png" alt="" />
        <h1>Contact Details</h1>
        </div>
        <p>Name</p>
        <Input required className={style.xy} style={{width:"500px",border:"none",borderBottom:'1px solid #f43397'}} />
        <p>Phone Number</p>
        <Input style={{width:"500px",border:"none",borderBottom:'1px solid #f43397'}} />
        <div className={style.mx1}>
            <img src="https://i.imgur.com/XZSAQz5.png" alt="" />
            <h1>Address</h1>
        </div>
       
        <Input style={{width:"500px",border:"none",borderBottom:'1px solid #f43397',marginTop:"10px"}} placeholder='House no./Building name'/>
        
        <Input style={{width:"500px",border:"none",borderBottom:'1px solid #f43397',marginTop:"10px"}} placeholder="Road Name/Area/Colony"/>
        <Input style={{width:"500px",border:"none",borderBottom:'1px solid #f43397',marginTop:"10px"}}placeholder="Pincode"/>
        <div >
        <Input  style={{width:"300px",border:"none",borderBottom:'1px solid #f43397',}}placeholder="City"/>
        <Input style={{width:"300px",border:"none",borderBottom:'1px solid #f43397',marginTop:"10px"}} placeholder="State"/>
        </div>
        <Button className={style.btnn} style={{backgroundColor:"#f43397"}} onClick={payment}>Save Address & Continue</Button>
      </div>
      <div className={style.paymentmoney} >
        <h1>Price Details : {total_item}</h1>
        <h2>Total Product Price :{total_price}</h2>
        <hr />
        <p>Shipping fee:-{shipping_fee}</p>
        <p>Order Total:-{ total_price+shipping_fee}</p>
       
       
    </div>
    </div>
  )
}

export default Payment
