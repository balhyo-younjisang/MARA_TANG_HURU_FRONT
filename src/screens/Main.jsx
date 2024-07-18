import { Box, Flex } from "@chakra-ui/react";
import Huru from "./HURU/Huru";
import Mara from "./MARA/Mara";

const Main = () => {
  return (
    <Box overflowY="scroll" height="100vh" overflowX="hidden">
      <Mara />
      <Huru />
    </Box>
  );
};

export default Main;
