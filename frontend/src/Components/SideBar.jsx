import React, { ReactNode, useEffect, useState } from "react";
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  Input,
  Checkbox,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  VStack,
  CheckboxGroup,
} from "@chakra-ui/react";
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
} from "react-icons/fi";
import { useSearchParams } from "react-router-dom";


export default function SimpleSidebar({ children ,color,setColor,category,setMaterial,material, setCategory,brand,gender,setGender, setBrand}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box bg={useColorModeValue("gray.100", "gray.900")}>
      <SidebarContent
      color={color} setColor={setColor} material={material} setMaterial={setMaterial}
      brand={brand}  setBrand={setBrand} category={category} setCategory={setCategory} gender={gender} setGender={setGender}
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full">
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav display={{ base: "flex", md: "none" }} onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} >
        {children}
      </Box>
    </Box>
  );
}

const SidebarContent = ({ onClose,category, setCategory,brand, gender,setGender,setBrand,color,setColor,setMaterial,material, ...rest }) => {
  // const [searchParams, setSearchParams] = useSearchParams()
  // const initialCategory = searchParams.getAll("category")
  // const [category, setCategory] = useState(initialCategory || [])
  // const initialBrand = searchParams.getAll("brand")
  // const [brand, setBrand] = useState(initialBrand || [])
  // const initialGender = searchParams.getAll("gender")
  // const [gender, setGender] = useState(initialGender || [])
  const handleMaterial=(e)=>{
    setMaterial(e)
  }
  const handleColor=(e)=>{
    setColor(e)
  }
  const handleCategory=(e)=>{
    setCategory(e)
  }
  // const handleChange = (e) => {

  //   let newCategory = [...category]
  //   const value = e.target.value;
  //   if (newCategory.includes(value)) {
  //     newCategory = newCategory.filter((el) => el !== value)
  //   } else {
  //     newCategory.push(value);
  //   }
  //   setCategory(newCategory)

  // }

 const handleGender=(e)=>{
   setGender(e) 
   console.log("data",e)
 }




  const handleChangeBrand = (e) => {

    // let newBrand = [...brand]
    // const value = e.target.value;
    // if (newBrand.includes(value)) {
    //   newBrand = newBrand.filter((el) => el !== value)
    // } else {
    //   newBrand.push(value);
    // }
    // setBrand(newBrand)
    setBrand(e)
  
  }


  // useEffect(() => {
  //   let params = {
  //     category,
  //     brand,
  //   }

  //   setSearchParams(params)

  // }, [category, brand])
  return (
    <Box
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      
      h="full"
      {...rest}>
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          Filter
        </Text>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      <Accordion allowToggle>
        <AccordionItem>
          <h1>
            <AccordionButton>
              <Box as="span" flex="1" fontSize="20px" textAlign="left">
                Gender
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h1>
          <AccordionPanel pb={4}>
            <VStack>
              <CheckboxGroup
              defaultValue={gender}
              value={gender}
               onChange={handleGender}>
              <Checkbox value="Kid" >Kids</Checkbox>
              <Checkbox value="Male" >Men</Checkbox>
              <Checkbox value="Female">Women</Checkbox>
            </CheckboxGroup></VStack>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
      <Accordion allowToggle>
        <AccordionItem>
          <h1>
            <AccordionButton>
              <Box as="span" flex="1" fontSize="20px" textAlign="left">
                Category
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h1>
          <AccordionPanel pb={4}>
            <VStack>
              <CheckboxGroup
              defaultValue={category}
              value={category}
               onChange={handleCategory}>
              <Checkbox value="tshirt" >T-Shirts</Checkbox>
              <Checkbox value="jeans" >Jeans</Checkbox>
              <Checkbox value="troushers">Troushers</Checkbox>
              <Checkbox value="shirts" >Shirts</Checkbox>
              <Checkbox value="saree" >Saree</Checkbox>
              <Checkbox value="pant">Pant</Checkbox>
            </CheckboxGroup></VStack>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
      <Accordion allowToggle>
        <AccordionItem>
          <h1>
            <AccordionButton>
              <Box as="span" flex="1" fontSize="20px" textAlign="left">
                Color
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h1>
          <AccordionPanel pb={4}>
            <VStack>
              <CheckboxGroup
              defaultValue={color}
              value={color}
               onChange={handleColor}>
              <Checkbox value="black" >Black</Checkbox>
              <Checkbox value="red" >Red</Checkbox>
              <Checkbox value="green">Green</Checkbox>
              <Checkbox value="pink" >Pink</Checkbox>
              <Checkbox value="orange" >Orange</Checkbox>
              <Checkbox value="white">White</Checkbox>
            </CheckboxGroup></VStack>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
      <Accordion allowToggle>
        <AccordionItem>
          <h1>
            <AccordionButton>
              <Box as="span" flex="1" fontSize="20px" textAlign="left">
                Material
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h1>
          <AccordionPanel pb={4}>
            <VStack>
              <CheckboxGroup
              defaultValue={material}
              value={material}
               onChange={handleMaterial}>
              <Checkbox value="cotton" >Cotton</Checkbox>
              <Checkbox value="silk" >Silk</Checkbox>
              <Checkbox value="denim">Denim</Checkbox>
              <Checkbox value="fiber" >Fiber</Checkbox>
              <Checkbox value="fabric" >Fabric</Checkbox>
              <Checkbox value="leather">Leather</Checkbox>
            </CheckboxGroup></VStack>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
};



const MobileNav = ({ onOpen, ...rest }) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 24 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue("white", "gray.900")}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent="flex-start"
      {...rest}>
      <IconButton
        variant="outline"
        onClick={onOpen}
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Text fontSize="2xl" ml="8" fontFamily="monospace" fontWeight="bold">
        Logo
      </Text>
    </Flex>
  );
};
