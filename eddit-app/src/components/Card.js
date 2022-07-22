import {
  Box,
  Flex,
  Text,
  Fade,
  Textarea,
  Button,
  Divider,
} from '@chakra-ui/react';
import { ChatIcon } from '@chakra-ui/icons';
import { TbArrowBigTop, TbArrowBigDown } from 'react-icons/tb';
import { useDisclosure } from '@chakra-ui/react';
export const Card = ({ Texto, Autor }) => {
  const { isOpen, onToggle } = useDisclosure();

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
                <TbArrowBigTop style={{ margin: '0 10px', fontSize: '20px' }} />
              </div>
              <Text>1.2K</Text>
              <TbArrowBigDown style={{ margin: '0 10px', fontSize: '20px' }} />
            </Flex>

            <Flex
              alignItems={'center'}
              border={'1px solid #e6e6e6'}
              borderRadius={'10px'}
              mr={'15px'}
            >
              <ChatIcon m={'5px'} cursor={'pointer'} onClick={onToggle} />
              <Text mr={'5px'}>150</Text>
            </Flex>
          </Flex>
        </Flex>
      </Box>
      {isOpen === true ? (
        <Box>
          <Fade in={isOpen}>
            <Textarea
              placeholder="Adicionar comentário"
              variant={'filled'}
              marginTop={'8px'}
              height={'100px'}
              width={'300px'}
              style={{ resize: 'none' }}
            />
            <Button variant={'solid'}>Responder</Button>
            <Divider mb={'16px'} />
          </Fade>
        </Box>
      ) : null}
    </>
  );
};
