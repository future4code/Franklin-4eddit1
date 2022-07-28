import React from 'react';
import ReactLoading from 'react-loading';
import { Flex } from '@chakra-ui/react';

export const Loading = ({ type, color }) => (
    <Flex direction={'column'} align={'center'} mt={130}>
        <ReactLoading type={type} color={color} height={100} width={100} />
    </Flex>
);

