import { Button, Divider, Flex, Textarea } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from '../../components/Card';
import Header from '../../components/Header';
import { Loading } from '../../components/Loading';
import useRequestData from '../../hooks/UseRequestData';
import { goToLogin } from '../../Routes/cordinator';
import useForm from '../../hooks/useForm';
import axios from 'axios';
import { BASE_URL } from '../../constants/urls';

export default function HomePage() {
  const [post, setPosts] = useRequestData();

  const [form, onChange] = useForm({
    title: 'Oi',
    body: '',
  });

  const onSubmitPost = (e) => {
    e.preventDefault();
    sendPost(form);
    console.log(form);
  };
  useEffect(() => {}, [post]);

  const sendPost = (body) => {
    const token = localStorage.getItem('token');
    axios
      .post(`${BASE_URL}/posts`, body, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: token,
        },
      })
      .then((r) => {
        window.location.reload(true);
        //setPosts([...post, r.data]);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const token = localStorage.getItem('token');
  const navigate = useNavigate();
  const validation = () => {
    if (!token) {
      goToLogin(navigate);
    }
  };

  useEffect(validation, [token, navigate]);
  return (
    <>
      <Header typeButton={'logout'} />
      <Flex
        flexDirection={'column'}
        align={'center'}
        p={'20px 35px 10px 35px;'}
      >
        <form onSubmit={onSubmitPost}>
          <Textarea
            placeholder="Escreva seu post..."
            variant={'filled'}
            name={'body'}
            type={'body'}
            height={'131px'}
            value={form.body}
            style={{ resize: 'none' }}
            onChange={onChange}
          />
          <Button variant={'solid'} type={'submit'}>
            Postar
          </Button>
        </form>
        <Divider mb={'16px'} />
        {post ? null : <Loading type={'spinningBubbles'} color={'#F79265'} />}

        {post &&
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
