import React from 'react'
import style from "../Style/Footer.module.css"
const HomePage = () => {
  return (
    <div className={style.homepage}>
        <div className={style.top}>
            <div className={style.top11}>
                <h3>Lowest PricesBest Quality Shopping</h3>
                <img className={style.img} src="https://i.imgur.com/cxANZQn.png" alt="" />
              <button>Downlaod the Meesho App</button>
            </div>
            <div>
                <img src="https://images.meesho.com/images/marketing/1683109829416_512.webp" alt="" />
            </div>
        </div>
      <img src="https://images.meesho.com/images/pow/downloadBannerDesktop_1050.webp" alt="" />
      <h2>Become a Reseller and</h2>
      <h1>Start your Online Business with Zero Investment</h1>
      <div className={style.btn}>
        <img src="https://images.meesho.com/images/pow/playstoreIcon_500.webp" alt="" />
        <img src="https://images.meesho.com/images/pow/appstoreIcon_500.webp" alt="" />
      </div>
    </div>
  )
}

export default HomePage
