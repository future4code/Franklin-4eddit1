import { Box, Button, Input, Flex, Image, Divider } from "@chakra-ui/react";
import React from "react";
import Logo from "../../assets/logo.svg";
import useForm from "../../hooks/useForm";
import { useNavigate } from "react-router-dom"
import { goToSignup } from "../../Routes/cordinator"
import axios from "axios"
import { BASE_URL } from "../../constants/urls";
import { goToHome } from "../../Routes/cordinator";

export default function HomePage() {
  const navigate = useNavigate()
  const [form, onChange, clear] = useForm({email: "", password: ""})

  const onSubmitForm = (event) => { 
      event.preventDefault()
      login(form, clear, navigate)
  };

  const login = (body, clear, navigate) =>{
    axios.post(`${BASE_URL}/users/login`, body,{
    headers: {
      ContentType: localStorage.getItem("application/json")
    }
    })
    .then((res)=>{
      localStorage.setItem("token", res.data.token)
      clear()
      goToHome(navigate)
    })
    .cath((err)=>alert("Erro no Login"))

  }


  return (
    <>
      <Flex flexDirection={"column"} align={"center"} p={"0 35px"}>
        <Flex m={"90px 0 80px 0"} flexDirection={"column"}>
          <Image src={Logo} h={"142px"} />
          <p>O projeto de rede social da Labenu</p>
        </Flex>
        <form onSubmit={onSubmitForm}>
          <Box>
            <Input name={"email"} value={form.email} onChange={onChange} required type={"email"} placeholder="Nome" p={"20px 15px"} mb={"10px"} />
            <Input name={"password"} value={form.password} onChange={onChange} required type={"password"} placeholder="Senha" p={"20px 15px"} mb={"20px"} />
          </Box>
          <Button type={"submit"} variant={"solid"}>Continuar</Button>
        </form>
        
        <Divider />
        <Button onClick={() =>goToSignup(navigate)} variant={"outline"}>Crie uma conta!</Button>
      </Flex>
    </>
  );
}
