import { Button } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCartConext } from './CartContext'

const AddTocart = ({product}) => {
  
    let {addtocart}=useCartConext()
    let {_id,brand,qunatity,description}=product
    let [amount,setAmount]=useState(1)
    let navigate=useNavigate()
    let x=()=>{
        navigate("/cart")
        addtocart(_id,amount,brand,product,description)
    }
  return (
    <div>
      <Button onClick={x}>Add to cart</Button>
    </div>
  )
}

export default AddTocart
