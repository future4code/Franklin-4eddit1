import { Box, Flex, Text } from "@chakra-ui/react";
import { useState } from "react";
import { TbArrowBigTop, TbArrowBigDown } from "react-icons/tb";
import {
  removeVoteRequestComments,
  voteRequestComments,
} from "../services/voteRequestComment";

export const CardComments = ({ Texto, Autor, CurtidasComentarios, id }) => {
  const [vote, setVote] = useState(Number(CurtidasComentarios));
  const [isVotedPositive, setIsVotedPositive] = useState(false);
  const [isVotedNegative, setIsVotedNegative] = useState(false);

  const voteDeslike = (positive = true, id) => {
    if (positive) {
      if (isVotedNegative) {
        removeDeslike(id);
      } else {
        isVotedPositive ? removeLike(id) : deslike(id);
      }
    }
  };
  const voteLike = (positive = true, id) => {
    if (positive) {
      if (isVotedPositive) {
        removeLike(id);
      } else {
        isVotedNegative ? removeDeslike(id) : like(id);
      }
    }
  };
  const removeLike = (id) => {
    setIsVotedPositive(!isVotedPositive);
    setVote(vote - 1);
    removeVoteRequestComments(-1, id);
    // console.log("Remove Like");
  };
  const deslike = (id) => {
    setIsVotedNegative(!isVotedNegative);
    setVote(vote - 1);
    voteRequestComments(-1, id);
    // console.log("Deslike");
  };
  const removeDeslike = (id) => {
    setIsVotedNegative(!isVotedNegative);
    setVote(vote + 1);
    removeVoteRequestComments(1, id);
    // console.log("Remove Deslike");
  };
  const like = (id) => {
    setIsVotedPositive(!isVotedPositive);
    setVote(vote + 1);
    voteRequestComments(1, id);
    // console.log("Like");
  };

  return (
    <>
      <Box
        bg={"#FBFBFB"}
        border={"1px solid #E0E0E0"}
        w={"80%"}
        borderRadius={"12px"}
        m={"8px 15px 8px 0"}
      >
        <Flex
          flexDirection={"column"}
          align={"flex-start"}
          p={"10px 35px 10px 20px"}
        >
          <Text color={"#F79265"}>{Autor}</Text>
          <Text padding={"10px 0px 10px 0px"} wordBreak={"break-word"}>
            {Texto}
          </Text>
          <Flex
            alignItems={"center"}
            border={"1px solid #e6e6e6"}
            borderRadius={"10px"}
            mr={"15px"}
          >
            <div>
              <TbArrowBigTop
                style={{ margin: "0 10px", fontSize: "20px" }}
                onClick={() => voteLike(true, id)}
              />
            </div>
            <Text>{vote}</Text>
            <TbArrowBigDown
              style={{ margin: "0 10px", fontSize: "20px" }}
              onClick={() => voteDeslike(true, id)}
            />
          </Flex>

          <Flex
            alignItems={"center"}
            border={"1px solid #e6e6e6"}
            borderRadius={"10px"}
            mr={"15px"}
          >
            {/* <Text mr={"5px"}>{CountComentarios}</Text> */}
          </Flex>
        </Flex>
      </Box>
    </>
  );
};
