import { Box, Flex, Icon, Text } from "@chakra-ui/react"
import { ArrowUpIcon, ArrowDownIcon, ChatIcon } from '@chakra-ui/icons'
import { TbArrowBigTop, TbArrowBigDown } from "react-icons/tb";

export const Card = () => {
    return (
        <Box bg={'#E0E0E0'} w={'100%'} borderRadius={'12px'} m={'15px'}>
            <Flex flexDirection={'column'} align={"center"} p={"0 35px"}>
                <h1>enviado por</h1>
                <h1>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                </h1>
                <Flex>
                    <Flex
                        alignItems={'center'}
                        border={'1px solid black'}
                        borderRadius={'10px'}
                        mr={'15px'}>
                        <div>
                            <TbArrowBigTop style={{ margin: '0 10px', fontSize: '20px' }} />
                        </div>
                        <Text>1.2K</Text>
                        <TbArrowBigDown style={{ margin: '0 10px', fontSize: '20px' }} />

                    </Flex>

                    <Flex
                        alignItems={'center'}
                        border={'1px solid black'}
                        borderRadius={'10px'}
                        mr={'15px'}>
                        <ChatIcon m={'5px'} />
                        <Text mr={'5px'}>150</Text>
                    </Flex>
                </Flex>
            </Flex>
        </Box>

    )
}