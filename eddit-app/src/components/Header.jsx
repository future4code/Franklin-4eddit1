import { Button, Flex, Image } from '@chakra-ui/react';
import React from 'react';
import Logo from '../assets/logo-menor.svg';

export default function Header() {
  return (
    <>
      <Flex bg={'#EDEDED'} justify={'space-between'}>
        <Button variant={'link'}>X</Button>
        <Image src={Logo} />
        <Button variant={'link'} color={'#4088CB'}>
          Logout
        </Button>
      </Flex>
    </>
  );
}
