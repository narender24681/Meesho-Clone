import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { Box, Button, Center, Input, useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
export default function Pintab({ maxChar, length, setOtp, random }) {
  const toast = useToast();
  const navigate = useNavigate();
  const [InputBoxes, setInputBoxes] = useState(new Array(length).fill(""));
  const [InputBoxesValue, setInputBoxesValue] = useState(
    new Array(length).fill("")
  );
  const { current: InputRef } = useRef([]);

  const style = {
    width: "50px",
    height: "50px",
    margin: "0.3rem",
    fontSize: "25px",
    textAlign: "center",
  };
  const handleChange = (e, index) => {
    InputBoxesValue[index] = e.target.value;
    InputRef[index].value.length == maxChar &&
      index < length - 1 &&
      InputRef[index + 1].focus();
    setOtp(InputBoxesValue.join(""));
  };

  const handleBackSpace = (e, index) => {
    InputBoxesValue[index] = e.target.value;
    InputRef[index].value.length == "" &&
      index >= 1 &&
      InputRef[index - 1].focus();
    setOtp(InputBoxesValue.join(""));
  };

  const handleBothFun = (e, index) => {
    if (e.key === "Backspace") {
      handleBackSpace(e, index);
    } else {
      handleChange(e, index);
    }
  };

  const handlePaste = (e) => {
    let data = e.clipboardData
      .getData("text")
      .split("")
      .filter((item, index) => index < maxChar * length)
      .join("");

    let arr = [];
    for (let j = 0; j < maxChar * length; j += maxChar) {
      arr.push(data.substring(j, maxChar + j));
    }
    arr.forEach((item, index) => {
      InputBoxesValue[index] = item;
      InputRef[index].value = item;
      if (index < length - 1) {
        InputRef[index].focus();
      }
      setOtp(InputBoxesValue.join(""));
    });
  };

  const handleOTP = () => {
    if (+InputBoxesValue.join("") === random) {
      setTimeout(() => {
        navigate("/");
      }, 1000);
      return toast({
        title: "Login Successfull",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
    } else {
      return toast({
        title: "Wrong OTP",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    }
  };

  useEffect(() => {
    InputRef[0].focus();
  }, []);
  return (
    <>
      <Box onPaste={handlePaste} display={"flex"} justifyContent={"center"}>
        {InputBoxes.map((item, index) => {
          return (
            <Input
              key={index}
              style={style}
              ref={(elem) => {
                InputRef[index] = elem;
              }}
              maxLength={maxChar}
              onKeyUp={(e) => {
                handleBothFun(e, index);
              }}
            />
          );
        })}
      </Box>
      <Box>
        <Center py={4}>
          <Button colorScheme="pink" onClick={handleOTP}>
            Submit OTP
          </Button>
        </Center>
      </Box>
    </>
  );
}
Pintab.propTypes = {
  maxChar: PropTypes.number.isRequired,
  length: PropTypes.number.isRequired,
};
