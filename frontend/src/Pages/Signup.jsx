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
  Text,
} from "@chakra-ui/react";
import Pintab from "./PinTab";

const Signup = () => {
  const [number, setnumber] = useState("");
  const [random, setrandom] = useState("");
  const [flag, setflag] = useState(false);
  const [Otp, setOtp] = useState("");

  const handleSubmit = () => {
    if (number.length === 10) {
      setflag(true);
      setnumber("");
      const randomOtp = Math.ceil(Math.random() * 999999);
      alert(`OTP-${randomOtp}`);
      setrandom(randomOtp);
    } else {
      alert("Invalid Number");
    }
  };

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
          {!flag ? (
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
                  <Input
                    type="number"
                    value={number}
                    onChange={(e) => {
                      setnumber(e.target.value);
                    }}
                    variant={"flushed"}
                  />
                </FormControl>
              </Flex>
              <Stack spacing={10}>
                <Button
                  onClick={handleSubmit}
                  colorScheme="pink"
                  _hover={{
                    bg: "pink.400",
                  }}>
                  Continue
                </Button>
              </Stack>
            </Stack>
          ) : (
            <Pintab maxChar={1} length={6} setOtp={setOtp} random={random} />
          )}
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
