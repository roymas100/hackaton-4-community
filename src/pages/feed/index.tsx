import {
  Avatar,
  Badge,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Image,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "react-feather";
import SideBar from "../../components/sideBar";

const Post = () => {
  const [likes, setLikes] = useState(0);

  return (
    <Flex
      backgroundColor="white"
      borderRadius="16px"
      boxShadow="0px 4px 20px rgba(0, 0, 0, 0.25)"
      maxW="900px"
    >
      <Flex
        backgroundColor="#F8F9FA"
        gap="4px"
        flexDirection="column"
        alignItems="center"
        w="92px"
        padding="4px"
      >
        <ChevronUp onClick={() => setLikes((state) => state + 1)} />
        <Text>{likes}</Text>
        <ChevronDown onClick={() => setLikes((state) => state - 1)} />
      </Flex>

      <Card padding="26px" maxW="916px">
        <CardHeader>
          <Flex gap="8px" alignItems="center">
            <Avatar />
            <Text fontSize="15px" fontWeight={500} color="#2D2D2D">
              @infojrufba
            </Text>
            <Text fontSize="15px" fontWeight={500} color="#2D2D2D">
              •
            </Text>
            <Text
              fontSize="14px"
              fontWeight={500}
              color="#2D2D2D"
              opacity={0.6}
            >
              Ícaro Dantas
            </Text>
          </Flex>
        </CardHeader>
        <CardBody>
          <Image
            alt="Imagem"
            src="https://images.ecycle.com.br/wp-content/uploads/2021/05/20195924/o-que-e-paisagem.jpg"
            borderRadius="16px"
            w="100%"
            marginBottom="18px"
          />
          <Flex flexDirection="column" gap="8px">
            <Text fontSize="32px" fontWeight={700} color="#2D2D2D">
              Aprenda a usar Git com a gente!
            </Text>
            <Text fontSize="16px" fontWeight={300} color="#2D2D2D" mb="10px">
              Aprenda a usar Git com a gente de uma vez por todas. Eu estou
              cansado de escrever coisas e poderia simplesmente colocar um Lorem
              ipsum aqui. Os próximos cards vão usar isso. Complertar texto
              rápido completar texto rápido completar texto.
            </Text>

            <Flex gap="16px">
              <Badge
                padding="4px 16px"
                borderRadius={100}
                backgroundColor="#2B6CB0"
                color="#fff"
              >
                Aprender
              </Badge>
              <Badge
                padding="4px 16px"
                borderRadius={100}
                backgroundColor="#2BB070"
                color="#fff"
              >
                Programação
              </Badge>
            </Flex>
          </Flex>
        </CardBody>
      </Card>
    </Flex>
  );
};

const FeedPage: React.FC = () => {
  return (
    <Flex>
      <SideBar />

      <Flex w="100%" justifyContent="center" padding="32px" gap="32px">
        <Flex>
          <Flex flexDir="column" gap="32px">
            {Array.from(Array(3).keys()).map((item) => (
              <Post key={item} />
            ))}
          </Flex>
        </Flex>
        <Flex
          width="446px"
          borderRadius="16px"
          height="646px"
          backgroundColor="white"
          boxShadow="0px 4px 20px rgba(0, 0, 0, 0.25)"
        ></Flex>
      </Flex>
    </Flex>
  );
};

export default FeedPage;
