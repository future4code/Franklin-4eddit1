import { Button, Divider, Flex, Textarea } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from '../../components/Card';
import Header from '../../components/Header';
//import { InputStyled } from "./styled";
import useRequestData from '../../hooks/UseRequestData';
import { goToLogin } from '../../Routes/cordinator';
import useForm from '../../hooks/useForm';
import { BASE_URL } from '../../constants/urls';
import axios from 'axios';

export default function HomePage() {
  const [form, onChange, clear] = useForm({
    username: '',
    email: '',
    password: '',
  });
  const [post, setPosts, isLoading] = useRequestData();
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  const onSubmitForm = (e) => {
    e.preventDefault();

    handlePost(form, clear, navigate);
  };
  const handlePost = (body, clear, navigate) => {
    axios
      .post(`${BASE_URL}/users/signup`, body, {
        headers: {
          ContentType: localStorage.getItem('application/json'),
        },
      })
      .then((response) => {
        localStorage.setItem('token', response.data.token);
        clear();
      });
  };

  const validation = () => {
    if (!token) {
      goToLogin(navigate);
    }
  };

  useEffect(validation, [token, navigate]);
  console.log(post);
  return (
    <>
      <Header typeButton={'logout'} />
      <Flex
        flexDirection={'column'}
        align={'center'}
        p={'20px 35px 10px 35px;'}
      >
        <form onSubmit={onSubmitForm}>
          <Textarea
            placeholder="Escreva seu post..."
            variant={'filled'}
            height={'131px'}
            style={{ resize: 'none' }}
          />
          <Button variant={'solid'} type={'submit'}>
            Postar
          </Button>
        </form>

        <Divider mb={'16px'} />

        {isLoading && <p>Carregando</p>}
        {!isLoading &&
          post &&
          post.length >= 0 &&
          post.map((post) => {
            console.log('#######################');
            console.log(post);
            console.log('#######################');
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
