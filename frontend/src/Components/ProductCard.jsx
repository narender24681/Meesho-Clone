import { Box, Image, Text, Button } from "@chakra-ui/react";

function ProductCard() {
  return (
    <Box
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
      <Box display="flex" justifyContent="center">
        <Image
          src="https://images.meesho.com/images/products/60069498/45nrl_400.webp"
          alt="Product Image"
          maxW="100%"
          h="auto"
          mb="4"
        />
      </Box>
      <Text 
       fontSize="2xl"
       fontWeight="bold"
       color="gray.600"
       mb="2"
      
      >
        Title
      </Text>
      <Text fontSize="lg" fontWeight="bold" color="black" mb="1">
        ₹ Price{" "}
        <Text as="span" fontWeight="normal" color="gray.500">
          onwards
        </Text>
      </Text>
      <Text fontSize="lg" mb="2">
        Free Delivery
      </Text>
      <Button
        size="md"
        variant="outline"
        mb="2"
        // borderRadius={isRatingLessThanThreePointFive ? "full" : "md"}
        // colorScheme={rating < 3.5 ? "yellow" : "green"}
      >
        Rating
      </Button>
    </Box>
  );
}
export default ProductCard