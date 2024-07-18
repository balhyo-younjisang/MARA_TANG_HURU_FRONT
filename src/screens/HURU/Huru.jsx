import "./Huru.css";
import { Flex, Button, Box } from "@chakra-ui/react";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const boxVariants = {
  animationStart: {
    borderRadius: 10,
  },
  animationEnd: {
    borderRadius: 30,
  },
};

const Huru = () => {
  return (
    <Flex
      bgColor="#992C00"
      bgGradient="linear(to-tr,rgba(7,0,153,1) 0%, rgba(0,56,193,1) 39%, rgba(93,12,71,1) 100%)"
      width="100vw"
      height="100vh"
      alignItems="center"
      justifyContent="space-around"
      flexDirection="column"
      position="relative"
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
  );
};

export default Huru;
