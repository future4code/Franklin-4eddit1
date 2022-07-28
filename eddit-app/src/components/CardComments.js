import {
  Box,
  Flex,
  Text,
} from "@chakra-ui/react";

export const CardComments = ({ Texto, Autor }) => {
  return (
    <>
      <Box
        bg={"#FBFBFB"}
        border={"1px solid #E0E0E0"}
        w={"80%"}
        borderRadius={"12px"}
        m={"8px 15px 8px 0"}
      >
        <Flex
          flexDirection={"column"}
          align={"flex-start"}
          p={"10px 35px 10px 20px"}
        >
          <Text color={"#6F6F6F"}>Enviado por: {Autor}</Text>
          <Text padding={"10px 0px 10px 0px"} wordBreak={"break-word"}>
            {Texto}
          </Text>
        </Flex>
      </Box>
    </>
  );
};
