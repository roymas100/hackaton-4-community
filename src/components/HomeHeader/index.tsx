import {
  Flex,
  Input,
  InputGroup,
  InputLeftAddon,
  Text,
} from "@chakra-ui/react";
import { PhoneIcon } from "@chakra-ui/icons";
import React from "react";

// import { Container } from './styles';

const HomeHeader: React.FC = () => {
  return (
    <Flex
      borderRadius={16}
      background="linear-gradient(102.63deg, #DE0FDC 4.55%, #4059E7 63.03%, #00C292 111.82%)"
      padding={42}
      flexDirection="column"
      w={"100%"}
      alignItems="center"
      gap={8}
    >
      <Text color="white" fontSize={24}>
        Descubra comunidades mágicas
      </Text>

      <InputGroup maxW="400px">
        <InputLeftAddon>
          <PhoneIcon color="gray.300" />
        </InputLeftAddon>
        <Input backgroundColor="white" placeholder="Busque por comunidades" />
      </InputGroup>

      <Flex gap="24px">
        <Flex
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Flex
            borderRadius={100}
            w="60px"
            h={"60px"}
            backgroundColor="white"
            alignItems="center"
            justifyContent="center"
          >
            <PhoneIcon />
          </Flex>
          <Text color="white" fontWeight="bold">
            Para você
          </Text>
        </Flex>

        <Flex
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Flex
            borderRadius={100}
            w="60px"
            h={"60px"}
            backgroundColor="white"
            alignItems="center"
            justifyContent="center"
          >
            <PhoneIcon />
          </Flex>
          <Text color="white" fontWeight="bold">
            Para você
          </Text>
        </Flex>

        <Flex
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Flex
            borderRadius={100}
            w="60px"
            h={"60px"}
            backgroundColor="white"
            alignItems="center"
            justifyContent="center"
          >
            <PhoneIcon />
          </Flex>
          <Text color="white" fontWeight="bold">
            Para você
          </Text>
        </Flex>

        <Flex
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Flex
            borderRadius={100}
            w="60px"
            h={"60px"}
            backgroundColor="white"
            alignItems="center"
            justifyContent="center"
          >
            <PhoneIcon />
          </Flex>
          <Text color="white" fontWeight="bold">
            Para você
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default HomeHeader;
