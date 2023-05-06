import React from "react";
import { Image, Box } from "@chakra-ui/react";
import firstImage from "../Images/1_image.png";
import SecondImage from "../Images/2_Image.png";
import ThirdImage from "../Images/3rd_Image.png";
import FourthImage from "../Images/4th_Image.png";
import FifthImage from "../Images/5th_Image.png";
import SixthImage from "../Images/6TH_iMAGE.png";
import Midimage from "../Images/MidImage.png";
const arr = [
  firstImage,
  Midimage,
  SecondImage,
  ThirdImage,
  FourthImage,
  FifthImage,
  SixthImage,
];

function Generic_Image_Card() {
  return (
    <Box my={5}>
      {arr.map((item) => {
        return (
          <Image
            src={item}
            width={"80%"}
            margin={"auto"}
            py={2}
            cursor={"pointer"}></Image>
        );
      })}
    </Box>
  );
}

export default Generic_Image_Card;
