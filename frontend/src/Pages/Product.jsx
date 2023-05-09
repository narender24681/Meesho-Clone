import { Box, Flex, Grid } from '@chakra-ui/react'
import React, { useState } from 'react'
import ProductCard from '../Components/ProductCard'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { GetProduct } from '../Redux/productReducer/action'
import SimpleSidebar from "../Components/SideBar"
import { useSearchParams } from 'react-router-dom'
const Product = () => {
  const dispatch = useDispatch();

  const [searchParams, setSearchParams] = useSearchParams()
  const initialCategory = searchParams.getAll("category")
  const [category, setCategory] = useState(initialCategory || [])
  const initialBrand = searchParams.getAll("brand")
  const [brand, setBrand] = useState(initialBrand || [])
  const initialGender = searchParams.getAll("gender")
  const [gender, setGender] = useState(initialGender || [])
   const initialColor = searchParams.getAll("color")
  const [color, setColor] = useState(initialColor || [])
  const initialMaterial = searchParams.getAll("material")
  const [material, setMaterial] = useState(initialMaterial || [])

  
  
  const { product, isLoading, isError } = useSelector((store) => store.ProductReducer)

  let obj={
    params:{
      category:category,
      brand:brand,
      gender:gender,
      color:color,
      material:material,
      sort:searchParams.get("order")&&"price",
     

    }
  }
  


  useEffect(() => {
    let params={

  }
  params.category&&(params.category=category)
  params.brand&&(params.brand=brand)
  params.gender&&(params.gender=gender)
  params.material&&(params.brand=brand)
  params.color&&(params.color=color)
    setSearchParams(params)
      dispatch(GetProduct(obj))
  }, [category,brand,gender,material,color])
console.log(product)
  return (
    <Flex mt={3} border="1px solid gray" justifyContent={"center"}>
    <Box display={{ base: "none", sm: "none", md: "block", lg: "block" }} width="300px" border="1px solid grey">
      <SimpleSidebar color={color} setColor={setColor} material={material} setMaterial={setMaterial} brand={brand}  setBrand={setBrand} category={category} setCategory={setCategory} gender={gender} setGender={setGender}/>
    </Box>
    <Box width="100%" height="100vh"
          overflowY={"scroll"}
          css={{
            '&::-webkit-scrollbar': {
              width: '4px',
            }
          }} >
    <Grid 
    
    templateColumns={{ sm: 'repeat(2, 1fr)', base: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)', lg: 'repeat(4, 1fr)' }} gap={{ base: 1, sm: 2, md: 5, lg: 5 }}>
        {product.map((item, i) => {
            return (
                <ProductCard key={item.id} item={item}/>
            )
        })}
    </Grid>
</Box>
  </Flex>

   
  )
}

export default Product