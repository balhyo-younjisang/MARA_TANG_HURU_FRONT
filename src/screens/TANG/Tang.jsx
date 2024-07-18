import { Flex, Text } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Wave from "react-wavify";

const Tang = () => {
  return (
    <>
      <Flex
        bgColor="#992C00"
        bgGradient="linear(to-tr,rgba(51,51,54,1) 0%, rgba(4,4,4,1) 39%, rgba(38,38,38,1) 100%)"
        width="100vw"
        height="100vh"
        alignItems="center"
        justifyContent="space-around"
        // flexDirection="column"
        position="relative"
      >
        <Text
          color="white"
          fontSize="120px"
          fontWeight="bold"
          transition={".3s"}
          _hover={{ color: "skyblue", transform: "scale(1.1)" }}
        >
          TANG
        </Text>
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
      <Wave
        fill="gray"
        paused={false}
        style={{
          display: "flex",
          position: "absolute",
          bottom: 0,
          left: 0,
          zIndex: 1,
        }}
        options={{
          height: 10,
          amplitude: 30,
          speed: 0.15,
          points: 3,
        }}
      />
    </>
  );
};

export default Tang;
