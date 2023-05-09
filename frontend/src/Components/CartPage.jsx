import React from 'react'
import style from "../Style/Footer.module.css"
import { Button } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
const CartPage = () => {
    let navigte=useNavigate()
    let cart=()=>{
        navigte("/payment")
    }
  return (
    <div className={style.bigdiv}>
    <div className={style.cart}>
      <div>
        <img src="https://images.meesho.com/images/products/274884627/s698t_512.jpg" alt="" />
      </div>
      <div className={style.detail}>
        <h1>Men's Pure Cotton Printed Half Sleeve Round...</h1>
        <div className={style.pbtn}>
        <Button>+</Button>
        <p>Quantity</p>
        <Button>-</Button>
        </div>
       <h3>price</h3>
<Button backgroundColor="#f43397" color="white" marginTop="15px">
    Delete
</Button>
      </div>
    </div>
    <div className={style.section}>
        <h1>Price Details</h1>
        <h2>Total Product Price</h2>
        <hr />
        <p>Order Total</p>
        <img src="https://i.imgur.com/carCkJv.png" alt="" />
        <button onClick={cart}>Continue</button>
        <img src="https://i.imgur.com/i8cxwXr.png" alt="" />
    </div>
    </div>
  )
}

export default CartPage
