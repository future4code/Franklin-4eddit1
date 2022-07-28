import { Button, Divider, Flex, Progress, Textarea } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from '../../components/Card';
import Header from '../../components/Header';
import { Loading } from '../../components/Loading';
//import { InputStyled } from "./styled";
import useRequestData from '../../hooks/UseRequestData';
import { goToLogin } from '../../Routes/cordinator';


export default function HomePage() {
  const [post, setPosts, isLoading] = useRequestData();
  const token = localStorage.getItem('token')
  const navigate = useNavigate()
  const validation = () => {
      if(!token){
          goToLogin(navigate)
      }
  }

  useEffect(validation, [token, navigate])
  console.log(post);
  return (
    <>
      <Header typeButton={'logout'}/>
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
        {post?<p></p>: <Loading type={'spinningBubbles'} color={'#F79265'} /> }
    
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
                id={post.id}
              />
            );
          })}
      </Flex>
    </>
  );
}
