import { Button, Flex, Image, propNames } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../assets/logo-menor.svg';
import { goToLogin } from '../Routes/coordinator';

export default function Header(props) {
    const navigate = useNavigate()
    const logout = () => {
        localStorage.clear('token')
        goToLogin(navigate)
    }
  return (
    <>
      <Flex bg={'#EDEDED'} justify={'space-between'}>
        <Button variant={'link'}>X</Button>
        <Image src={Logo} />
        <Button variant={'link'} color={'#4088CB'} onClick={logout}>
          {props.typeButton}
        </Button>
      </Flex>
    </>
  );
}
