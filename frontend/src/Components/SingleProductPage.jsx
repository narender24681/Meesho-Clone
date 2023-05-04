import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'

const SingleProductPage = () => {
  return (
    <Flex>
        <Box>
            <Flex>
                <Box><Image src="https://images.meesho.com/images/products/52540086/g2cn7_512.webp" alt=""/></Box>
                <Box><Image src="https://images.meesho.com/images/products/52540086/g2cn7_512.webp" alt=""/>
                      <Button>Add to cart</Button>  <Button>Buy Now</Button>
                </Box>
            </Flex>
        </Box>
        <Box>
             <Box>
                <Heading>SBC Soft Cotton Polo T-Shirts for Men Combo (Pack of 3)</Heading>
                <Heading>₹573</Heading>
                <Heading>3.9</Heading>
                <Text>Free Delivery</Text>
             </Box>
             <Box>
                <Heading>select Size</Heading>
                <Button>M</Button><Button>L</Button>
             </Box>
             <Box>
                <Heading>Product</Heading>
             </Box>
        </Box>
    </Flex>
  )
}

export default SingleProductPage