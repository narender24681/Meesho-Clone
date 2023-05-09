import React, { useState } from "react";
import {
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Input,
  Stack,
  HStack,
  InputGroup,
  InputRightElement,
  Link,
  useToast,
  Text,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { sign_In_Action } from "../Redux/signupReducer/Action";
import { useNavigate } from "react-router-dom";
const obj = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
};

const Signup = () => {
  const [userDetails, setuserDetails] = useState(obj);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const toast = useToast();
  const dispatch = useDispatch();
  const store = useSelector((store) => {
    return store.SignupReducer;
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setuserDetails({ ...userDetails, [name]: value });
  };

  const handleSubmit = (e) => {
    userDetails.isAdmin = "false";
    e.preventDefault();
    dispatch(sign_In_Action(userDetails))
      .then((res) => {
        if (res.payload === "New User Registerd Successfully") {
          setTimeout(() => {
            navigate("/signin", { replaceL: true });
          }, 1000);
          return toast({
            title: `Account Created`,
            status: "success",
            isClosable: true,
          });
        } else {
          return toast({
            title: ` Something Wrong`,
            status: "error",
            isClosable: true,
          });
        }
      })
      .then((err) => console.log(err));
    setuserDetails(obj);
  };
  return (
    <Flex bg={"#fceaf1"} justifyContent={"center"} align={"center"} p={10}>
      <Stack mx={"auto"} maxW={"lg"} bg={"#fff"}>
        <Box rounded={"lg"} boxShadow={"lg"} p={8}>
          <Stack align={"center"} pb={10}>
            <Image
              borderRadius={"10px"}
              src="https://images.meesho.com/images/marketing/1661417516766.webp"
              alt="meesho"
            />
          </Stack>
          <Stack spacing={2}>
            <Heading fontSize={"lg"}>Sign Up to view your profile</Heading>
            <Flex align={"center"} justify={"center"}>
              <Stack spacing={8} mx={"auto"} maxW={"lg"}>
                <Box rounded={"lg"} p={2}>
                  <Stack spacing={2}>
                    <form onSubmit={handleSubmit}>
                      <HStack>
                        <Box>
                          <FormControl id="firstName" isRequired>
                            <FormLabel>First Name</FormLabel>
                            <Input
                              type="text"
                              value={userDetails.firstName}
                              onChange={handleChange}
                              name="firstName"
                            />
                          </FormControl>
                        </Box>
                        <Box>
                          <FormControl id="lastName">
                            <FormLabel>Last Name</FormLabel>
                            <Input
                              type="text"
                              value={userDetails.lastName}
                              onChange={handleChange}
                              name="lastName"
                            />
                          </FormControl>
                        </Box>
                      </HStack>
                      <FormControl id="email" isRequired>
                        <FormLabel>Email address</FormLabel>
                        <Input
                          type="email"
                          value={userDetails.email}
                          onChange={handleChange}
                          name="email"
                        />
                      </FormControl>
                      <FormControl id="password" isRequired>
                        <FormLabel>Password</FormLabel>
                        <InputGroup>
                          <Input
                            type={showPassword ? "text" : "password"}
                            value={userDetails.password}
                            onChange={handleChange}
                            name="password"
                          />
                          <InputRightElement h={"full"}>
                            <Button
                              variant={"ghost"}
                              onClick={() =>
                                setShowPassword((showPassword) => !showPassword)
                              }>
                              {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                            </Button>
                          </InputRightElement>
                        </InputGroup>
                      </FormControl>
                      <Stack spacing={10} pt={2}>
                        <Button
                          type="submit"
                          loadingText="Submitting"
                          size="lg"
                          bg={"pink.400"}
                          colorScheme={"pink"}
                          _hover={{
                            bg: "pink.500",
                          }}>
                          Sign up
                        </Button>
                      </Stack>
                    </form>
                    <Stack>
                      <Text align={"center"}>
                        Already a user?{" "}
                        <Link color={"pink.400"} href="/signin">
                          Login
                        </Link>
                      </Text>
                      <Center>
                        <Text fontSize={"10px"} fontWeight={"semibold"}>
                          By continuing, you agree to Meesho’s <br />{" "}
                          <Text
                            color="pink.400"
                            display={"inline-block"}
                            cursor={"pointer"}>
                            Terms & Conditions
                          </Text>{" "}
                          and
                          <Text
                            color="pink.400"
                            display={"inline-block"}
                            cursor={"pointer"}>
                            Privacy Policy
                          </Text>{" "}
                        </Text>
                      </Center>
                    </Stack>
                  </Stack>
                </Box>
              </Stack>
            </Flex>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

export default Signup;
