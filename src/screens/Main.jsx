import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import "./Main.css";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <Box overflow="scroll" height="100vh" width="100vw">
      <Flex
        bgColor="#992C00"
        bgGradient="linear(to-tr, rgba(153,44,0,1) 0%, rgba(193,43,0,1) 39%, rgba(93,12,12,1) 100%)"
        width="100vw"
        height="100vh"
        alignItems="center"
        justifyContent="space-around"
        flexDirection="column"
      >
        <Typewriter
          options={{
            strings: ["HURU"],
            autoStart: true,
            loop: true,
          }}
        />
        <Typewriter
          options={{
            strings: [
              "I write novel using by your unread email",
              "저는 당신의 이메일을 통해 글을 써요",
            ],
            autoStart: true,
            loop: true,
            wrapperClassName: "subtitle",
          }}
        />
        <Link to="">
          <Button
            as={motion.div}
            w="300px"
            h="60px"
            fontSize="30px"
            borderRadius="100px"
            whileHover={{ scale: [null, 1.2, 1] }}
            transition={{ duration: 0.3 }}
          >
            Start now
          </Button>
        </Link>
      </Flex>
      <Flex
        width="100vw"
        height="100vh"
        alignItems="center"
        justifyContent="space-around"
        flexDirection="column"
      ></Flex>
    </Box>
  );
};

export default Main;
