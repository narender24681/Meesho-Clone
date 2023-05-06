import React from "react";
import {
  Box,
  Button,
  ButtonGroup,
  Center,
  Divider,
  Flex,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
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

export default function () {
  const initialFocusRef = React.useRef();
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
          <Box>
            {" "}
            <HStack spacing={5}>
              {" "}
              <Popover
                // initialFocusRef={initialFocusRef}
                placement="bottom"
                closeOnBlur={false}>
                <PopoverTrigger>
                  <VStack
                    spacing={0}
                    _hover={{ cursor: "pointer", color: "pink.500" }}>
                    <FontAwesomeIcon icon={faUser} />
                    <Text>Profile</Text>
                  </VStack>
                </PopoverTrigger>
                <PopoverContent>
                  <PopoverHeader pt={4} fontWeight="semibold" border="0">
                    Hello Users
                    <Text>To access Your Meesho Account</Text>
                  </PopoverHeader>
                  <PopoverCloseButton />
                  <PopoverFooter
                    border="0"
                    alignItems="center"
                    justifyContent="space-between"
                    pb={4}>
                    <Center>
                      <Link href="/signup">
                        <Button colorScheme="pink">Signup</Button>
                      </Link>
                      <Divider />
                    </Center>
                  </PopoverFooter>
                </PopoverContent>
              </Popover>
              <VStack spacing={0}>
                <FontAwesomeIcon icon={faCartShopping} />
                <Text>Cart</Text>
              </VStack>
            </HStack>
          </Box>
        </HStack>
      </Flex>
      <Divider mb={-3} py={2} borderColor={"gray.300"} />
    </Box>
  );
}
