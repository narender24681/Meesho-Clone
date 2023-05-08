import React from "react";
import {
  Box,
  Image,
  Divider,
  Flex,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faMagnifyingGlass,
  faMobile,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function () {
  return (
    <Box py={3}>
      <Flex justifyContent={"space-around"}>
        <HStack spacing={10}>
          <Box>Logo</Box>
          <Box>
            <InputGroup>
              <InputLeftElement
                color={"gray.300"}
                _hover={{
                  border: "none",
                  outline: "none",
                }}
                _focus={{
                  boxShadow: "none",
                }}
                children={<FontAwesomeIcon icon={faMagnifyingGlass} />}
              />
              <Input
                fontSize={"md"}
                width={"400px"}
                size={"md"}
                borderRadius={"0px"}
                placeholder="Try Saree,Kurti or Search by Product Code"
              />
            </InputGroup>
          </Box>
        </HStack>
        <HStack spacing={7}>
          <Box>
            <HStack>
              <FontAwesomeIcon icon={faMobile} />
              <Text>Downloadd App</Text>
            </HStack>
          </Box>
          <Box>
            <Text fontSize={"25px"}>|</Text>
          </Box>
          <Box>
            <Text>Become a Supplier</Text>
          </Box>
          <Box>
            <Text fontSize={"25px"}>|</Text>
          </Box>
          <Link to="/cart">
          <Box>
            {" "}
            <HStack spacing={5}>
              {" "}
              <VStack spacing={0}>
                <FontAwesomeIcon icon={faUser} />
                <Text>Profile</Text>
              </VStack>
              <VStack spacing={0}>
                <FontAwesomeIcon icon={faCartShopping} />
                <Text>Cart</Text>
              </VStack>
            </HStack>
          </Box>
          </Link>
        </HStack>
      </Flex>
      <Divider py={2} borderColor={"gray.300"} />
    </Box>
  );
}
