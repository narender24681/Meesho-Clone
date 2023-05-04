import { Box, Grid, Image, Text } from '@chakra-ui/react'
import React from 'react'

const ProductCard = () => {
  return (
    <Grid templateColumns='repeat(5, 1fr)' gap={6}>
       <Box>
        <Image/>
        <Text>Title</Text>
        <Text>₹ onwords</Text>
        <Text>Free Delivery</Text>
        <Button>Rating</Button>
       </Box>
    </Grid>
  )
}

export default ProductCard