import { Flex, Text } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import React from "react";

// import { Container } from './styles';

const ListaDeSalas = [
  {
    title: "Chat Geral",
  },
];

const CommunityMenu: React.FC = () => {
  return (
    <Flex h="100vh" minW="200px" backgroundColor="white">
      <Flex flexDirection="column">
        {ListaDeSalas.map((item, index) => (
          <Flex key={item.title + index}>
            <HamburgerIcon w={10} h={10} />
            <Text></Text>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
};

export default CommunityMenu;
