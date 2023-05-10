import { Button } from '@chakra-ui/react'
import React from 'react'
import style from "../Style/Footer.module.css"
const CartAmountToggel = ({amount,setincrease,setDecrease}) => {
  return (
    <div className={style.btn}>
        <Button  onClick={()=>setDecrease()}>-</Button>
        <p>{amount}</p>
      <Button onClick={()=>setincrease()}>+</Button>
    </div>
  )
}

export default CartAmountToggel
