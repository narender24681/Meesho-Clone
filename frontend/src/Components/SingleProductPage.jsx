import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react'
import React,{useState} from 'react'

const images = [
  'https://images.meesho.com/images/products/52540086/g2cn7_512.webp',
  'https://images.meesho.com/images/products/60069498/45nrl_400.webp',
  'https://images.meesho.com/images/products/52540086/g2cn7_512.webp',
  'https://images.meesho.com/images/products/52540086/g2cn7_512.webp',
];
const SingleProductPage = () => {
  const [mainImage, setMainImage] = useState(images[0]);

  const handleImageClick = (image) => {
    setMainImage(image);
  };

  return (
    <Flex flexWrap="wrap" justifyContent="center" alignItems="center">
      <Box width={['100%', '50%']} padding={['1rem', '2rem']}>
      <Flex flexDirection={['column', 'row']}>
      <Box marginBottom={['1rem', 0]} marginRight={['0', '2rem']} w="10%">
        {images.map((image, index) => (
          <Image key={index} src={image} alt="" onClick={() => handleImageClick(image)} />
        ))}
      </Box>
      <Box>
        <Image src={mainImage} alt="" />
        <Flex justifyContent="center" marginTop="1rem">
          <Button marginRight="1rem">Add to cart</Button>
          <Button colorScheme="green">Buy Now</Button>
        </Flex>
      </Box>
    </Flex>
      </Box>
      <Box width={['100%', '50%']} padding={['1rem', '2rem']}  >
        <Box marginBottom="1rem" border="1px solid" borderColor="gray.400" p="7">
          <Heading as="h1" size="lg" marginBottom="0.5rem">
            SBC Soft Cotton Polo T-Shirts for Men Combo (Pack of 3)
          </Heading>
          <Text fontSize="lg" fontWeight="bold" color="green.500" marginBottom="0.5rem">
            ₹573
          </Text>
          <Flex alignItems="center" marginBottom="0.5rem">
            <Box as="span" marginRight="0.5rem">
              <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="css-i6dzq1">
                <polyline points="9 10 4 15 9 20"></polyline>
                <path d="M20 4v7a4 4 0 0 1-4 4H4"></path>
              </svg>
            </Box>
            <Text fontSize="md" marginRight="0.5rem">
              3.9
            </Text>
            <Text fontSize="sm" color="gray.500">
              Free Delivery
            </Text>
          </Flex>
        </Box>
        <Box marginBottom="1rem">
          <Heading as="h2" size="md" marginBottom="0.5rem">
            Select Size
          </Heading>
          <Button marginRight="0.5rem" marginBottom="0.5rem">
            M
          </Button>
          <Button marginBottom="0.5rem">L</Button>
        </Box>
        <Box>
          <Heading as="h2" size="md" marginBottom="0.5rem">
            Product
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