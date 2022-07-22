import { Button, Divider, Flex, Textarea } from '@chakra-ui/react';
import React from 'react';
import { Card } from '../../components/Card';
import Header from '../../components/Header';
//import { InputStyled } from "./styled";
export default function LoginPage() {
  return (
    <>
      <Header />
      <Flex
        flexDirection={'column'}
        align={'center'}
        p={'20px 35px 10px 35px;'}
      >
        <Textarea
          placeholder="Escreva seu post..."
          variant={'filled'}
          height={'131px'}
          style={{ resize: 'none' }}
        />
        <Button variant={'solid'}>Postar</Button>
        <Divider mb={'16px'} />
        <Card Autor={'José'} Texto={'Blablablablablablablabla'} />
        <Card
          Autor={'Maria'}
          Texto={
            'BlablablablablablablablaBlablablablablablablablaBlablablablablablablablaBlablablablablablablablaBlablablablablablablablaBlablablablablabla'
          }
        />
        <Card Autor={'João'} Texto={'Blablablablablablablabla'} />
        <Card Autor={'Alberto'} Texto={'Blablablablablablablabla'} />
      </Flex>
    </>
  );
}
