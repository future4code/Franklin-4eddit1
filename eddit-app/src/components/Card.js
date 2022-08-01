import {
  Box,
  Flex,
  Text,
  Fade,
  Textarea,
  Button,
  Divider,
} from "@chakra-ui/react";
import Loading from "react-loading";
import { ChatIcon } from "@chakra-ui/icons";
import { TbArrowBigTop, TbArrowBigDown } from "react-icons/tb";
import { useDisclosure } from "@chakra-ui/react";
import React, { useState } from "react";
import { CardComments } from "./CardComments";
import { createComment } from "../services/comments/createComment";
import {
  removeVoteRequest,
  voteRequest,
} from "../services/posts/voteRequestPost";
import { openComments } from "../services/comments/openComments";

export const Card = ({ Texto, Autor, CountComentarios, Curtidas, id }) => {
  const { isOpen, onToggle } = useDisclosure();
  const [data, setData] = useState();
  const [vote, setVote] = useState(Number(Curtidas));
  const [comentario, setComentario] = useState("");
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
    removeVoteRequest(-1, id);
    // console.log("Remove Like");
  };
  const deslike = (id) => {
    setIsVotedNegative(!isVotedNegative);
    setVote(vote - 1);
    voteRequest(-1, id);
    // console.log("Deslike");
  };
  const removeDeslike = (id) => {
    setIsVotedNegative(!isVotedNegative);
    setVote(vote + 1);
    removeVoteRequest(1, id);
    // console.log("Remove Deslike");
  };
  const like = (id) => {
    setIsVotedPositive(!isVotedPositive);
    setVote(vote + 1);
    voteRequest(1, id);
    // console.log("Like");
  };

  const sendComment = (id, comentario) => {
    createComment(id, comentario);
    onToggle();
    setComentario("");
  };

  const handleComentario = (event) => {
    setComentario(event.target.value);
  };

  return (
    <>
      <Box
        bg={"#FBFBFB"}
        border={"1px solid #E0E0E0"}
        w={"100%"}
        borderRadius={"12px"}
        m={"8px 15px 8px 15px"}
      >
        <Flex
          flexDirection={"column"}
          align={"flex-start"}
          p={"10px 35px 10px 20px"}
        >
          <Text color={"#6F6F6F"}>Enviado por: {Autor}</Text>
          <Text padding={"10px 0px 10px 0px"} wordBreak={"break-word"}>
            {Texto}
          </Text>
          <Flex color={"#6F6F6F"} marginBottom={"3px"}>
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
              <ChatIcon
                m={"5px"}
                cursor={"pointer"}
                onClick={() => openComments(id, onToggle, isOpen, setData)}
              />
              <Text mr={"5px"}>{CountComentarios}</Text>
            </Flex>
          </Flex>
        </Flex>
      </Box>
      {isOpen === true ? (
        <Box>
          <Fade in={isOpen}>
            <Flex direction={"column"} align={"flex-start"}>
              {data ? null : <Loading type={"bubbles"} color={"#F79265"} />}
              {data &&
                data.map((comment) => {
                  return (
                    <CardComments
                      key={comment.id}
                      Autor={comment.username}
                      Texto={comment.body}
                      CurtidasComentarios={comment.voteSum}
                      id={comment.id}
                    />
                  );
                })}
            </Flex>
            <Textarea
              placeholder="Adicionar comentário"
              variant={"filled"}
              marginTop={"8px"}
              height={"100px"}
              width={"100%"}
              style={{ resize: "none" }}
              value={comentario}
              onChange={handleComentario}
              isRequired
            />
            <Button
              variant={"solid"}
              onClick={() => sendComment(id, comentario)}
            >
              Responder
            </Button>
            <Divider mb={"16px"} />
          </Fade>
        </Box>
      ) : null}
    </>
  );
};
