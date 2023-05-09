import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react'
import axios from 'axios';
import React,{useState} from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';


const SingleProductPage = () => {
const {id}=useParams();
const {product}=useSelector((store=>store.ProductReducer))

const [data]=product.filter((el)=>{
  return el._id==id
})


console.log(data)
 const {
  imagesArr,
  title,
  price,
  rating,
  description,
  size,
  category,
  brand,
  color,
  discount,
  quantity,
  gender,
  name,
  material,
  type,
  pattern,
  countryOfOrigin,
 }=data
  const [mainImage, setMainImage] = useState(imagesArr[0]);

  const handleImageClick = (img) => {
    setMainImage(img);
  };

  const addToCart = () => {
    let obj={
      title,price,discount
    }
    axios.post('http://localhost:8080/cart/addtocart', obj)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }




  return (
    <Flex flexWrap="wrap" justifyContent="center" alignItems="center" key={data._id}>
      <Box width={['100%', '50%']} padding={['1rem', '2rem']}>
      <Flex flexDirection={['column', 'row']}>
      <Box marginBottom={['1rem', 0]} marginRight={['0', '2rem']} w="10%">
        {imagesArr.map((image, index) => (
          <Image key={index} src={image} alt="" onClick={() => handleImageClick(image)} />
        ))}
      </Box>
      <Box>
        <Image src={mainImage} alt="" />
        <Flex justifyContent="center" marginTop="1rem">
          <Button marginRight="1rem" onClick={addToCart}>Add to cart</Button>
          <Button colorScheme="green">Buy Now</Button>
        </Flex>
      </Box>
    </Flex>
      </Box>
      <Box width={['100%', '50%']} padding={['1rem', '2rem']}  >
        <Box marginBottom="1rem" border="1px solid" borderColor="gray.400" p="7">
          <Heading as="h1" size="lg" marginBottom="0.5rem">
           {title}
          </Heading>
          <Text fontSize="lg" fontWeight="bold" color="green.500" marginBottom="0.5rem">
            ₹{price}
          </Text>
          <Flex alignItems="center" marginBottom="0.5rem">
            <Box as="span" marginRight="0.5rem">
              <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="css-i6dzq1">
                <polyline points="9 10 4 15 9 20"></polyline>
                <path d="M20 4v7a4 4 0 0 1-4 4H4"></path>
              </svg>
            </Box>
            <Text fontSize="md" marginRight="0.5rem">
              {rating}
            </Text>
            <Text fontSize="sm" color="gray.500">
              Free Delivery
            </Text>
          </Flex>
        </Box>
        <Box marginBottom="1rem">
          {size.map((el)=>{
            return (
               <Heading as="h2" size="md" marginBottom="0.5rem">
          {el}
          </Heading>
            )
          })}
         
          
        </Box>
        <Box>
          <Heading as="h2" size="md" marginBottom="0.5rem">
            Product Details
          </Heading>
          <Text fontSize="md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vel turpis euismod, aliquam dolor eget, fermentum velit. Praesent a elit eget nunc suscipit efficitur. Pellentesque ac malesuada leo, vel rutrum magna. Fusce malesuada, nibh vel viverra lacinia, est ipsum tincidunt justo, sit amet bibendum quam mi eu urna. Etiam molestie justo ut lorem bibendum, eu facilisis arcu.
          </Text>
        </Box>
        </Box>
    </Flex>
  )
}

export default SingleProductPage