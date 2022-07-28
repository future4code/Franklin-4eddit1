import { Flex, Text, Box, Input, Link, Checkbox, Button } from "@chakra-ui/react";
import React from "react";
import Header from "../../components/Header";
import useForm from "../../hooks/useForm";
import axios from "axios";
import { BASE_URL } from "../../constants/urls";
import { goToHome } from "../../Routes/cordinator";
import { useNavigate } from "react-router-dom";

export default function SignupPage() {
    const [form, onChange, clear] = useForm({username: "", email: "", password: ""})
    const navigate = useNavigate()

    const onSubmitForm = (e) => {
        e.preventDefault()

        handleLogin(form, clear, navigate)
    }

    const handleLogin = (body, clear, navigate) => {
        axios.post(`${BASE_URL}/users/signup`, body, {
            headers: {
                ContentType: localStorage.getItem("application/json")
            }
        }).then((response) => {
            localStorage.setItem("token", response.data.token)
            clear()
            goToHome(navigate)
        })
    }
  return (
    <>
      <Header typeButton={'entrar'}/>
      <form onSubmit={onSubmitForm}>
      <Flex flexDirection={'column'} p={"0 32px"} mt={"30px"}>
        <Text fontSize={"4xl"} fontWeight={"700"}>
          Olá, boas vindas ao LabEddit {";)"}
        </Text>
        <Box mt={"90px"} mb={"20px"}>
          <Input value={form.username} 
                name={"username"} 
                onChange={onChange} 
                required
                placeholder="Nome" 
                p={"20px 15px"} 
                mb={"10px"} />

          <Input value={form.email} 
                name={"email"} 
                onChange={onChange} 
                type={"email"}
                required
                placeholder="Email" 
                p={"20px 15px"} 
                mb={"10px"} />

          <Input value={form.password} 
                name={"password"} 
                onChange={onChange}
                type={"password"} 
                pattern={"[a-zA-Z0-9._@%$#!*&]{8,30}"}
                title={"A senha dever ter uma tamanho mínimo de 8 e máximo de 30"}
                required
                placeholder="Senha" 
                p={"20px 15px"} 
                mb={"20px"} />
        </Box>

        <Text fontSize={"12px"} mb={"15px"}>Ao continuar, você concorda com o nosso {' '}
            <Link color={"#4088CB"}>Contrato de usuário</Link> e nossa {' '}
            <Link color={"#4088CB"}>Política de Privacidade</Link>
        </Text>

        <Checkbox required><Text fontSize={"12px"}>Eu concordo em receber emails sobre coisas legais no Labeddit</Text></Checkbox>

        <Button variant={"solid"} type={"submit"}>Cadastrar</Button>
      </Flex>
    </form>
    </>
  );
}
