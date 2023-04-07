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
import React, { useLayoutEffect, useRef, useState } from "react";

interface Category {
  Icon: Icon;
  title: string;
  color: string;
}

const categories: Category[] = [
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
  const [arrowPosition, setArrowPosition] = useState(0);

  const categoriesRef = useRef<any>([]);
  const headerRef = useRef<any>(undefined);

  useLayoutEffect(() => {
    if (categoriesRef.current?.[0]) {
      console.log(categoriesRef);
      const rect = categoriesRef.current[0].getBoundingClientRect();
      setArrowPosition(
        rect.width / 2 +
          rect.left -
          headerRef.current.getBoundingClientRect().left -
          12
      );
    }
  }, [headerRef, categoriesRef]);

  const changeCurrentCategory = (category: Category, e: any) => {
    if (headerRef.current) {
      const rect = e.target.getBoundingClientRect();
      setArrowPosition(
        rect.width / 2 +
          rect.left -
          headerRef.current.getBoundingClientRect().left -
          12
      );
    }
    setCurrentCategory(category.title);
  };

  return (
    <Flex
      borderRadius={16}
      background="linear-gradient(102.63deg, #DE0FDC 4.55%, #4059E7 63.03%, #00C292 111.82%)"
      padding={42}
      flexDirection="column"
      w={"100%"}
      alignItems="center"
      gap={8}
      position="relative"
      ref={headerRef}
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

      <Flex gap="24px" overflowX={"auto"} width="100%" justifyContent="center">
        {categories.map((category, i) => (
          <Flex
            key={category.title}
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            gap="8px"
            cursor="pointer"
            onClick={(e) => changeCurrentCategory(category, e)}
            ref={(el) => (categoriesRef.current[i] = el)}
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
            <Text color="white" fontWeight="bold" textAlign="center">
              {category.title}
            </Text>
          </Flex>
        ))}
      </Flex>

      <Flex
        width={0}
        height={0}
        borderLeft="12px solid transparent"
        borderRight="12px solid transparent"
        borderBottom="20px solid WHITE"
        position="absolute"
        bottom={0}
        transition="left 1s"
        left={`${arrowPosition}px`}
      />
    </Flex>
  );
};

export default HomeHeader;
