import React from "react";
import {
  Box,
  Button,
  Center,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Input,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";

const Signup = () => {
  return (
    <Flex
      bg={"#fceaf1"}
      justifyContent={"center"}
      align={"center"}
      minH={"100vh"}>
      <Stack spacing={8} mx={"auto"} maxW={"lg"} bg={"#fff"}>
        <Box rounded={"lg"} boxShadow={"lg"} p={8}>
          <Stack align={"center"} pb={10}>
            <Image
              borderRadius={"10px"}
              src="https://images.meesho.com/images/marketing/1661417516766.webp"
              alt="meesho"
            />
          </Stack>
          <Stack spacing={10}>
            <Heading fontSize={"lg"}>Sign Up to view your profile</Heading>
            <Flex gap={10}>
              <FormControl id="email" flex={1}>
                <FormLabel>Country</FormLabel>
                <Input
                  type="email"
                  variant={"flushed"}
                  value={"+91"}
                  fontWeight={"bold"}
                />
              </FormControl>
              <FormControl id="email" flex={3}>
                <FormLabel>Phone Number</FormLabel>
                <Input type="email" variant={"flushed"} />
              </FormControl>
            </Flex>
            <Stack spacing={10}>
              <Button
                colorScheme="pink"
                _hover={{
                  bg: "pink.400",
                }}>
                Continue
              </Button>
            </Stack>
          </Stack>
          <Center pt={10}>
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
        </Box>
      </Stack>
    </Flex>
  );
};

export default Signup;
