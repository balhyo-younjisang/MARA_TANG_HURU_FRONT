import { Box, Flex } from "@chakra-ui/react";
import Huru from "./HURU/Huru";
import Mara from "./MARA/Mara";
import Tang from "./TANG/Tang";
import { useEffect, useState } from "react";

const Main = () => {
  return (
    <Box height="100vh" className="slider" overflow="scroll" overflowX="hidden">
      <Box w="100vw" h="100vh" overflow="hidden">
        <Mara />
      </Box>
      <Box w="100vw" h="100vh" overflow="hidden">
        <Huru />
      </Box>
      <Box w="100vw" h="100vh" overflow="hidden">
        <Tang />
      </Box>
    </Box>
  );
};

export default Main;
