import { Button, Divider, Flex, Textarea } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from '../../components/Card';
import Header from '../../components/Header';
import { Loading } from '../../components/Loading';
import useRequestData from '../../hooks/UseRequestData';
import { goToLogin } from '../../Routes/coordinator';
import useForm from '../../hooks/useForm';
import { sendPost } from '../../services/posts/sendPost';

export default function HomePage() {
  const [post, setPosts] = useRequestData();

  const [form, onChange] = useForm({
    title: 'Oi',
    body: '',
  });

  const onSubmitPost = (e) => {
    e.preventDefault();
    sendPost(form);
  };
  
  useEffect(() => {}, [post]);

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
                key={post.id}
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
