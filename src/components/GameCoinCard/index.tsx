import { Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

const GameCoinCard: React.FC = () => {
  return (
    <Flex
      padding="24px"
      borderRadius="12px"
      border="1px solid #9A4DFF"
      background="linear-gradient(20.07deg, #211D28 67.83%, rgba(33, 29, 40, 0) 179.05%), linear-gradient(90deg, rgba(71, 64, 83, 0.3) 0%, rgba(71, 64, 83, 0) 100%)"
      w="100%"
      position="relative"
      marginTop="auto"
    >
      <Flex flexDir="column">
        <Text fontWeight={700} fontSize="40px" color="white">
          28 FIG
        </Text>
        <Text fontWeight={700} fontSize="12px" color="white" opacity={0.7}>
          Loja da comunidade
        </Text>
      </Flex>
      <Image
        alt="coin"
        src="/coin.svg"
        position="absolute"
        top="-60px"
        right="25px"
        width="120px"
        height="120px"
      />
    </Flex>
  );
};

export default GameCoinCard;
