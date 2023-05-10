import React from 'react'
import style from "../Style/Footer.module.css"
import { useNavigate } from 'react-router-dom'
const Success = () => {
    let navigate=useNavigate()
let back=()=>{
    setInterval(()=>{
        navigate("/")
    },3000)
}
  return (
    <div className={style.item}>
      <img onClick={back} src="https://thumbs.gfycat.com/GracefulImpishFlea-size_restricted.gif" alt="" />
    </div>
  )
}

export default Success
