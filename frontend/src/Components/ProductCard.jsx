import { Box, Image, Text, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function ProductCard({item}) {
 
  const isRating = item.rating < 3.5;
  const id=item._id
  return (
    <>
    <Link to={`/product/${id}`} >
    <Box
    key={id}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      maxW="400px"
      mx="auto"
      boxShadow="md"
      bg="white"
      p="4"
      _hover={{ boxShadow: "lg" }}
    >
      <Box display="flex" justifyContent="center" >
        <Image
        display="block"
          src={item.image}
          alt="Product Image"
          maxW="200px"
          maxH="200px"
          mb="4"
        />
      </Box>
      <Text 
       fontSize="l"
       fontWeight="bold"
       color="gray.600"
       mb="2"      
      >
        {item.title.toString().slice(0, 20)}...
      </Text>
      <Text fontSize="lg" fontWeight="bold" color="black" mb="1">
        ₹ {item.price}{" "}
        <Text as="span" fontSize="sm" fontWeight="normal" color="gray.500">
          onwards
        </Text>
      </Text>
      <Text fontSize="sm" mb="2">
        Free Delivery
      </Text>
      <Button
        size="md"
        variant="outline"
        mb="2"
        borderRadius={isRating? "full" : "md"}
        bg={item.rating< 3.5 ? "yellow" : "green"}
      >
       {item.rating}
      </Button>
    </Box></Link></>
  );
}
export default ProductCard