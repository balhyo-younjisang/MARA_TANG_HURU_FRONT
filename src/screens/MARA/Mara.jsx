import { Box, Button, Flex, Text, chakra } from "@chakra-ui/react";
import { Canvas } from "@react-three/fiber";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import BoxComponent from "../../components/Box";
import CircleComponent from "../../components/Circle";
import { OrbitControls } from "@react-three/drei";

const Mara = () => {
  const rendering = () => {
    const result = [];
    for (let i = 1; i <= 4; i++) {
      result.push(
        <Text
          key={i}
          as={motion.div}
          variants={topVariants}
          custom={i}
          initial="out"
          animate="in"
          fontSize="120px"
          color="white"
          fontWeight="bold"
          fontStyle={"italic"}
          marginLeft={"100px"}
          whileHover={{ scale: 1.1 }}
        >
          MARA
        </Text>
      );
    }
    return result;
  };

  const topVariants = {
    out: {
      x: -600,
    },
    in: (idx) => ({
      x: 0,
      transition: {
        duration: 0.6 * idx,
        delayChildren: 0.5,
        staggerChildren: 0.5,
      },
    }),
  };

  return (
    <Flex
      as={motion.div}
      position="relative"
      width="100vw"
      height="100vh"
      flexDirection="column"
      bgGradient="linear(to-tr, rgba(153,44,0,1) 0%, rgba(193,43,0,1) 39%, rgba(93,12,12,1) 100%)"
    >
      <Box w="300px" h="300px" position="absolute" right="120px">
        <Canvas
          camera={{
            position: [0, 0, 10],
          }}
        >
          <directionalLight />
          <BoxComponent position={[0, 0, 0]} />
        </Canvas>
      </Box>
      <Box w="300px" h="300px" position="absolute" right="400px" top="250px">
        <Canvas
          camera={{
            position: [0, 0, 10],
          }}
        >
          <directionalLight />
          <ambientLight />
          <CircleComponent position={[0, 0, 0]} />
        </Canvas>
      </Box>
      {rendering()}
      <Link to="">
        <Button
          as={motion.div}
          w="300px"
          h="60px"
          fontSize="30px"
          borderRadius="100px"
          whileHover={{ scale: [null, 1.2, 1] }}
          transition={{ duration: 0.3 }}
          position="absolute"
          right="60px"
          bottom="80px"
        >
          Start now
        </Button>
      </Link>
    </Flex>
  );
};

export default Mara;
