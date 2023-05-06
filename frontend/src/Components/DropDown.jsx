// import React, { useState } from 'react';
import { Link } from "react-router-dom";
import style from "../Style/Footer.module.css"
// import { Link } from 'react-router-dom';
// const ButtonsWithImages = () => {
//   const [hoveredButton, setHoveredButton] = useState(null);

//   const handleMouseEnter = (buttonIndex) => {
//     setHoveredButton(buttonIndex);
//   };

//   const handleMouseLeave = () => {
//     setHoveredButton(null);
//   };

//   const buttonData = [
//     {
//       image: "https://i.imgur.com/NCTqOaH.png",
//       buttonText: 'Women Ethnic',
//       to:"/women"
//     },
//     {
//       image: 'https://i.imgur.com/S3biSP0.png',
//       buttonText: 'Women Western',
//       to:"/women"
//     },
//     {
//         image: "https://i.imgur.com/WQbgBEW.png",
//         buttonText: "Mens",
//         to:"/men"
//       },
//       {
//         image: 'https://i.imgur.com/u3t8Bbm.png',
//         buttonText: 'Kids',
//         to:"/kids"
//       },
//       {
//         image: "https://i.imgur.com/KixAtjL.png",
//         buttonText: 'Home & Kitchen',
//         to:"/home&kitchen"
//       },
//       {
//         image: 'https://i.imgur.com/yHsTgZE.png',
//         buttonText: 'Beauty & Health',
//         to:"/beauty"
//       },
//       {
//         image: "https://i.imgur.com/oMjIAEQ.png",
//         buttonText: 'Jewellery & Accessories',
//         to:"/jewellery"
//       },
//       {
//         image: 'https://i.imgur.com/G2DYYSF.png',
//         buttonText: 'Bags & Footwear',
//         to:"/footwear"
//       },
//       {
//         image: 'https://i.imgur.com/uRlw7xx.png',
//         buttonText: 'Electronics',
//         to:"/electronics"
//       },
//     // Add more button data objects here
//   ];

//   return (
//     <div id={style.drop}>
//       {buttonData.map((button, index) => (
//         <div
        
//           key={index}
//           onMouseEnter={() => handleMouseEnter(index)}
//           onMouseLeave={handleMouseLeave}
//           style={{ display:"inline-block"}}
//         >
//           <button style={{ padding: '10px 20px',fontWeight:"400",marginLeft:"10px",marginTop:"-10px" }} className={style.hover}>{button.buttonText}</button>
//           {hoveredButton === index && (
//             <Link to={button.to}>
//             <img
//               src={button.image}
//               alt={`Image ${index + 1}`}
//               style={{
//                 position: 'absolute',
//                 top: '100%',
//                 left: '70%',
//                 marginTop:"10px",
//                 transform: 'translate(-50%, -10px)',
//             marginLeft:"-250px",
           
//               }}
//             />
//             </Link>
//           )}
         
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ButtonsWithImages;
import React, { useState } from 'react';

const Navbar = ({ handleHover ,handleMouseLeave}) => {
  return (
    <div className={style.navbar2} >
      <Link to="/women"><button style={{marginLeft:"40px"}}onMouseLeave={handleMouseLeave} onMouseEnter={() => handleHover(1)}>Women Ethnic</button></Link>
      <Link to="/women"><button style={{marginLeft:"30px"}} onMouseLeave={handleMouseLeave} onMouseEnter={() => handleHover(2)}>Women Western</button></Link>
      <Link to="/men"><button  style={{marginLeft:"50px"}} onMouseLeave={handleMouseLeave}onMouseEnter={() => handleHover(3)}>Mens</button></Link>
      <Link to="/kids"><button style={{marginLeft:"60px"}} onMouseLeave={handleMouseLeave}onMouseEnter={() => handleHover(4)}>Kids</button></Link>
      <Link to="/kitchen"><button style={{marginLeft:"50px"}} onMouseLeave={handleMouseLeave}onMouseEnter={() => handleHover(5)}>Home & Kitchen</button></Link>
      <Link to="/jwellery"><button style={{marginLeft:"70px"}} onMouseLeave={handleMouseLeave}onMouseEnter={() => handleHover(6)}>Jewellery & Accessories</button></Link>
      <Link to="/beauty"><button style={{marginLeft:"60px"}} onMouseLeave={handleMouseLeave}onMouseEnter={() => handleHover(7)}>Beauty & Health</button></Link>
      <Link to="/footwear"><button style={{marginLeft:"60px"}} onMouseLeave={handleMouseLeave} onMouseEnter={() => handleHover(8)}>Bags & Footwear</button></Link>
      <Link to="/electronics"><button onMouseLeave={handleMouseLeave} style={{marginLeft:"70px"}} onMouseEnter={() => handleHover(9)}>Electronics</button></Link>
    </div>
  );
};

const ImagePopup = ({ image }) => {
  return (
    <div className="image-popup">
      <img src={image} alt="Big Image" style={{position:"absolute"}} />
    </div>
  );
};

const Navbar2 = () => {
  const [hoveredButton, setHoveredButton] = useState(null);

  const handleHover = (buttonNumber) => {
    setHoveredButton(buttonNumber);
  };
  const handleMouseLeave = () => {
         setHoveredButton(null);
       };
    
  const getBigImage = () => {
    switch (hoveredButton) {
      case 1:
        return 'https://i.imgur.com/NCTqOaH.png';
      case 2:
        return 'https://i.imgur.com/S3biSP0.png';
      case 3:
        return 'https://i.imgur.com/WQbgBEW.png';
      case 4:
        return 'https://i.imgur.com/u3t8Bbm.png';
      case 5:
        return 'https://i.imgur.com/KixAtjL.png';
      case 6:
        return 'https://i.imgur.com/yHsTgZE.png';
      case 7:
        return 'https://i.imgur.com/oMjIAEQ.png';
      case 8:
        return 'https://i.imgur.com/G2DYYSF.png';
      case 9:
        return 'https://i.imgur.com/uRlw7xx.png';
      default:
        return null;
    }
  };

  return (
    <div>
      <Navbar handleHover={handleHover} handleMouseLeave={handleMouseLeave} />
      {hoveredButton && <ImagePopup image={getBigImage()}/>}
    </div>
  );
};

export default Navbar2;

