import {
  Flex,
  Input,
  InputGroup,
  InputLeftAddon,
  Text,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import {
  Smile,
  Icon,
  Camera,
  Feather,
  Codepen,
  Coffee,
  Book,
} from "react-feather";
import React, { useState } from "react";

// import { Container } from './styles';

const categories: { Icon: Icon; title: string; color: string }[] = [
  {
    Icon: Smile,
    title: "Para você",
    color: "#00C292",
  },
  {
    Icon: Camera,
    title: "Fotografia",
    color: "#7F0B7E",
  },
  {
    Icon: Feather,
    title: "Botânica",
    color: "#43A632",
  },
  {
    Icon: Codepen,
    title: "Cursos",
    color: "#C24CA1",
  },
  {
    Icon: Coffee,
    title: "Trabalhos",
    color: "#C18F44",
  },
  {
    Icon: Book,
    title: "Estudos",
    color: "#5258D9",
  },
];

const HomeHeader: React.FC = () => {
  const [currentCategory, setCurrentCategory] = useState(categories[0].title);

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
      <Text color="white" fontSize={36} fontWeight={700}>
        Descubra comunidades mágicas
      </Text>

      <InputGroup maxW="400px">
        <InputLeftAddon>
          <SearchIcon color="gray.300" />
        </InputLeftAddon>
        <Input backgroundColor="white" placeholder="Busque por comunidades" />
      </InputGroup>

      <Flex gap="24px">
        {categories.map((category) => (
          <Flex
            key={category.title}
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            gap="8px"
            cursor="pointer"
            onClick={() => setCurrentCategory(category.title)}
          >
            <Flex
              borderRadius={100}
              w="60px"
              h={"60px"}
              backgroundColor={
                currentCategory === category.title ? category.color : "white"
              }
              alignItems="center"
              justifyContent="center"
            >
              <category.Icon
                color={
                  currentCategory === category.title ? "white" : category.color
                }
              />
            </Flex>
            <Text color="white" fontWeight="bold">
              {category.title}
            </Text>
          </Flex>
        ))}
      </Flex>

      <Flex
        width={0}
        height={0}
        border-left="5px solid transparent"
        border-right="5px solid transparent"
        border-bottom="5px solid black"
        position="absolute"
      />
    </Flex>
  );
};

export default HomeHeader;
