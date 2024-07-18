import { Box, Button, Flex, Text, chakra } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";

const css = {
  box: {
    backgroundColor: "linen",
    width: "100vw",
    height: "100vh",
    position: "relative",
  },
  fly: {
    position: "absolute",
    width: "20px",
    height: "20px",
    margin: "-10px",
    backgroundColor: "red",
    borderRadius: 10,
  },
};

function getRelativeCoordinates(event, referenceElement) {
  const position = {
    x: event.pageX,
    y: event.pageY,
  };

  const offset = {
    left: referenceElement.offsetLeft,
    top: referenceElement.offsetTop,
    width: referenceElement.clientWidth,
    height: referenceElement.clientHeight,
  };

  let reference = referenceElement.offsetParent;

  while (reference) {
    offset.left += reference.offsetLeft;
    offset.top += reference.offsetTop;
    reference = reference.offsetParent;
  }

  return {
    x: position.x - offset.left,
    y: position.y - offset.top,
    width: offset.width,
    height: offset.height,
    centerX: (position.x - offset.left - offset.width / 2) / (offset.width / 2),
    centerY:
      (position.y - offset.top - offset.height / 2) / (offset.height / 2),
  };
}

const Mara = () => {
  const [mousePosition, setMousePosition] = useState({});
  const boxRef = useRef();
  const handleMouseMove = (e) => {
    setMousePosition(getRelativeCoordinates(e, boxRef.current));
  };

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
      ref={boxRef}
      style={{ ...css.box, perspective: 600 }}
      onMouseMove={(e) => handleMouseMove(e)}
      animate={{
        rotateX: mousePosition.centerX * 20,
        rotateY: mousePosition.centerY * 20,
      }}
      width="100vw"
      height="100vh"
      flexDirection="column"
      bgGradient="linear(to-tr, rgba(153,44,0,1) 0%, rgba(193,43,0,1) 39%, rgba(93,12,12,1) 100%)"
    >
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
      <motion.div
        style={css.fly}
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
        }}
      />
      <motion.div
        style={{ ...css.fly, backgroundColor: "gold" }}
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
        }}
        transition={{ type: "spring" }}
      />
      <motion.div
        style={{ ...css.fly, backgroundColor: "orange" }}
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
        }}
        transition={{ type: "tween" }}
      />
    </Flex>
  );
};

export default Mara;
