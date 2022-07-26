import { Button, Divider, Flex, Textarea } from '@chakra-ui/react';
import React from 'react';
import { Card } from '../../components/Card';
import Header from '../../components/Header';
//import { InputStyled } from "./styled";
import useRequestData from '../../hooks/UseRequestData';

export default function HomePage() {
  const [post, setPosts, isLoading] = useRequestData();

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

        {isLoading && <p>Carregando</p>}
        {!isLoading &&
          post &&
          post.length >= 0 &&
          post.map((post) => {
            return (
              <Card
                Autor={post.username}
                Texto={post.body}
                CountComentarios={post.commentCount}
                Curtidas={post.voteSum}
              />
            );
          })}
      </Flex>
    </>
  );
}
