import {
  Box,
  Flex,
  Text,
  Fade,
  Textarea,
  Button,
  Divider,
} from '@chakra-ui/react';
import Loading from 'react-loading';
import { ChatIcon } from '@chakra-ui/icons';
import { TbArrowBigTop, TbArrowBigDown } from 'react-icons/tb';
import { useDisclosure } from '@chakra-ui/react';
import axios from 'axios';
import { useState } from 'react';
import { BASE_URL } from '../constants/urls';
import { CardComments } from './CardComments';

export const Card = ({ Texto, Autor, CountComentarios, Curtidas, id }) => {
  const { isOpen, onToggle } = useDisclosure();
  const token = localStorage.getItem('token');
  const [data, setData] = useState();
  const [vote, setVote] = useState(Number(Curtidas))
  const [isVoted, setIsVoted] = useState(false)
  const voteRequest = (direction) => {
    axios.post(`${BASE_URL}/posts/${id}/votes`, {"direction": direction }, {
      headers: {
        Authorization: token,
      },
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
  }

  const removeVoteRequest = (direction) => {

    axios.put(`${BASE_URL}/posts/${id}/votes`, {"direction": direction }, {
      headers: {
        Authorization: token,
      },
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
  }

  const voteFunc = (positive = true) => {
    if(positive){
      if(isVoted){
        setVote(vote - 1)
        setIsVoted(!isVoted)
        removeVoteRequest(-1)
      }else{
        setVote(vote + 1)
        setIsVoted(!isVoted)
        voteRequest(1)
      }
    }else{
      if(isVoted){
        setVote(vote + 1)
        setIsVoted(!isVoted)
        voteRequest(1)
      }else{
        setVote(vote - 1)
        setIsVoted(!isVoted)
        removeVoteRequest(-1)
      }
    }
  }


  const sendComment = () => {
    alert(`Comentário: ${comentario} Autor do post: ${Autor}`); // substituir por uma requisição axios enviando o comentário
    onToggle();
    setComentario('');
  };
  const [comentario, setComentario] = useState('');

  const handleComentario = (event) => {
    setComentario(event.target.value);
  };

  const openComments = (id) => {
    onToggle();
    if (!isOpen) {
      axios
        .get(`${BASE_URL}/posts/${id}/comments`, {
          headers: {
            Authorization: token,
          },
        })
        .then((res) => {
          setData(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };


  return (
    <>
      <Box
        bg={'#FBFBFB'}
        border={'1px solid #E0E0E0'}
        w={'100%'}
        borderRadius={'12px'}
        m={'8px 15px 8px 15px'}
      >
        <Flex
          flexDirection={'column'}
          align={'flex-start'}
          p={'10px 35px 10px 20px'}
        >
          <Text color={'#6F6F6F'}>Enviado por: {Autor}</Text>
          <Text padding={'10px 0px 10px 0px'} wordBreak={'break-word'}>
            {Texto}
          </Text>
          <Flex color={'#6F6F6F'} marginBottom={'3px'}>
            <Flex
              alignItems={'center'}
              border={'1px solid #e6e6e6'}
              borderRadius={'10px'}
              mr={'15px'}
            >
              <div>
                <TbArrowBigTop style={{ margin: '0 10px', fontSize: '20px' }} onClick={voteFunc}/>
              </div>
              <Text>{vote}</Text>
              <TbArrowBigDown style={{ margin: '0 10px', fontSize: '20px' }} onClick={() => voteFunc(false)}/>
            </Flex>

            <Flex
              alignItems={'center'}
              border={'1px solid #e6e6e6'}
              borderRadius={'10px'}
              mr={'15px'}
            >
              <ChatIcon
                m={'5px'}
                cursor={'pointer'}
                onClick={() => openComments(id)}
              />
              <Text mr={'5px'}>{CountComentarios}</Text>
            </Flex>
          </Flex>
        </Flex>
      </Box>
      {isOpen === true ? (
        <Box>
          <Fade in={isOpen}>
            <Flex direction={'column'} align={'flex-start'}>
              {data ? null : <Loading type={'bubbles'} color={'#F79265'} />}
              {data &&
                data.map((post) => {
                  return (
                    <CardComments Autor={post.username} Texto={post.body} />
                  );
                })}
            </Flex>
            <Textarea
              placeholder="Adicionar comentário"
              variant={'filled'}
              marginTop={'8px'}
              height={'100px'}
              width={'100%'}
              style={{ resize: 'none' }}
              value={comentario}
              onChange={handleComentario}
              isRequired
            />
            <Button variant={'solid'} onClick={() => sendComment()}>
              Responder
            </Button>
            <Divider mb={'16px'} />
          </Fade>
        </Box>
      ) : null}
    </>
  );
};
