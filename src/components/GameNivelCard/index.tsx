import { Avatar, Flex, Image, Progress, Text } from "@chakra-ui/react";
import React from "react";

const GameInfoCard: React.FC = () => {
  return (
    <Flex
      padding="24px"
      borderRadius="12px"
      gap="22px"
      w="100%"
      height="auto"
      flexDirection="column"
      border="1px solid #9A4DFF"
      background="linear-gradient(0deg, #211D28, #211D28), linear-gradient(90deg, rgba(71, 64, 83, 0.3) 0%, rgba(71, 64, 83, 0) 100%);"
    >
      <Flex gap="16px" alignItems="flex-start">
        <Avatar src="https://i.pinimg.com/originals/4f/c5/be/4fc5be5c56e3b41fb952f094ffb7efd4.jpg" />
        <Flex
          gap="4px"
          alignItems="flex-start"
          justifyContent="center"
          flexDir="column"
        >
          <Text color="#fff" fontWeight={500} fontSize="18px">
            Lucas Santiago
          </Text>
          <Text color="#fff" fontWeight={500} fontSize="12px">
            Embaixador da comunidade
          </Text>
        </Flex>
      </Flex>

      <Flex flexDirection="column" gap="4px">
        <Flex gap="4px" alignItems="baseline">
          <Text fontSize="20px" fontWeight={700} color="white">
            112
          </Text>
          <Text fontSize="12px" fontWeight={400} color="white">
            XP
          </Text>
        </Flex>
        <Flex position="relative" w="100%" paddingTop="6px" paddingBottom="8px">
          <Progress
            height="6px"
            value={45}
            hasStripe
            colorScheme="purple"
            borderRadius="4px"
            w="100%"
          />
          <Flex
            position="absolute"
            top={0}
            left="60px"
            gap="1px"
            flexDir="column"
          >
            <Image
              alt="coin"
              borderRadius={100}
              width="20px"
              height="20px"
              src="/coin.svg"
            />
            <Text fontWeight={700} fontSize="10px" color="white">
              +5
            </Text>
          </Flex>

          <Flex
            position="absolute"
            top={0}
            left="160px"
            gap="1px"
            flexDir="column"
          >
            <Image
              alt="coin"
              borderRadius={100}
              width="20px"
              height="20px"
              src="/coin.svg"
            />
            <Text fontWeight={700} fontSize="10px" color="white">
              +10
            </Text>
          </Flex>

          <Image
            alt="LevelUp"
            src="/levelup.svg"
            position="absolute"
            bottom={0}
            right={-2}
          />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default GameInfoCard;
