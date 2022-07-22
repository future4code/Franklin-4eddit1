import { Box, Button, Input, Flex, Image, Divider } from "@chakra-ui/react";
import React from "react";
import Logo from "../../assets/logo.svg";

export default function HomePage() {
  return (
    <>
      <Flex flexDirection={'column'} align={"center"}  p={"0 35px"}>
          <Flex m={"90px 0 80px 0"} flexDirection={'column'}>
            <Image src={Logo} h={"142px"}/>
            <p>O projeto de rede social da Labenu</p>
          </Flex>
        <Box>
          <Input placeholder="Nome" p={"20px 15px"} mb={"10px"}/>
          <Input placeholder="Senha" p={"20px 15px"} mb={"20px"}/>
        </Box>
        <Button variant={"solid"}>Clique aqui</Button>
        <Divider />
        <Button variant={"outline"}>Clique aqui</Button>
      </Flex>
    </>
  );
}
