import { Box, Flex, Icon, Text } from '@chakra-ui/react';
import { ArrowUpIcon, ArrowDownIcon, ChatIcon } from '@chakra-ui/icons';
import { TbArrowBigTop, TbArrowBigDown } from 'react-icons/tb';

export const Card = () => {
  return (
    <Box
      bg={'#FBFBFB'}
      border={'1px solid #E0E0E0'}
      w={'100%'}
      borderRadius={'12px'}
      m={'15px'}
    >
      <Flex
        flexDirection={'column'}
        align={'flex-start'}
        p={'10px 35px 10px 20px'}
      >
        <Text color={'#6F6F6F'}>Enviado por</Text>
        <Text padding={'10px 0px 10px 0px'}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,
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
            <ChatIcon m={'5px'} />
            <Text mr={'5px'}>150</Text>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};
