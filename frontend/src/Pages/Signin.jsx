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
  InputGroup,
  InputRightElement,
  Link,
  Text,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

const obj = {
  email: "",
  password: "",
};
const Signin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [userDetails, setuserDetails] = useState(obj);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setuserDetails({ ...userDetails, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userDetails);
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
              <Stack spacing={8} mx={"auto"} maxW={"lg"} width={"100%"}>
                <Box rounded={"lg"} p={2}>
                  <Stack spacing={2} width={"100%"}>
                    <form onSubmit={handleSubmit}>
                      <FormControl id="email" isRequired>
                        <FormLabel>Email address</FormLabel>
                        <Input
                          name="email"
                          value={userDetails.email}
                          onChange={handleChange}
                        />
                      </FormControl>
                      <FormControl id="password" isRequired>
                        <FormLabel>Password</FormLabel>
                        <InputGroup>
                          <Input
                            type={showPassword ? "text" : "password"}
                            value={userDetails.password}
                            name="password"
                            onChange={handleChange}
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
                          Sign in
                        </Button>
                      </Stack>
                    </form>
                    <Stack>
                      <Center>
                        <Link color={"pink.400"} href="/signup">
                          Signup
                        </Link>
                      </Center>
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

export default Signin;
