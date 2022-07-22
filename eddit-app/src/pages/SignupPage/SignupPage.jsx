import { Flex, Text, Box, Input, Link, Checkbox, Button } from "@chakra-ui/react";
import React from "react";
import Header from "../../components/Header";

export default function SignupPage() {
  return (
    <>
      <Header />
      <Flex flexDirection={'column'} p={"0 32px"} mt={"30px"}>
        <Text fontSize={"4xl"} fontWeight={"700"}>
          Olá, boas vindas ao LabEddit {";)"}
        </Text>
        <Box mt={"90px"} mb={"20px"}>
          <Input placeholder="Nome" p={"20px 15px"} mb={"10px"} />
          <Input placeholder="Email" p={"20px 15px"} mb={"10px"} />
          <Input placeholder="Senha" p={"20px 15px"} mb={"20px"} />
        </Box>

        <Text fontSize={"12px"} mb={"15px"}>Ao continuar, você concorda com o nosso {' '}
            <Link color={"#4088CB"}>Contrato de usuário</Link> e nossa {' '}
            <Link color={"#4088CB"}>Política de Privacidade</Link>
        </Text>

        <Checkbox><Text fontSize={"12px"}>Eu concordo em receber emails sobre coisas legais no Labeddit</Text></Checkbox>

        <Button variant={"solid"}>Cadastrar</Button>
      </Flex>
    </>
  );
}
