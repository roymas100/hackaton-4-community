import SideBar from "@/components/sideBar";
import {
  Badge,
  Button,
  Flex,
  Image,
  Tag,
  TagLabel,
  TagLeftIcon,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { UserPlus, Users } from "react-feather";
import Spline from "@splinetool/react-spline";

const depositions = [
  {
    deposition:
      "“Simplesmente maravilhoso!!! Mudou a minha vida completamente. Hoje, não tenho mais a preocupação de depender da agenda de um cuidador em específico.",
    name: "Lucas Veloso",
    role: "Product Designer",
    image:
      "https://aniyuki.com/wp-content/uploads/2022/05/aniyuki-anime-avatar-black-and-white-35.jpg",
  },
  {
    deposition:
      "“Antes da Cuidadoso eu tinha dificuldade de encontrar os meus clientes e ser remunerado pelos meus conhecimentos. Agora, ensino e sou remunerado por isso.”",
    name: "Lucas Ribeiro",
    role: "Enfermeiro",
    image:
      "https://aniyuki.com/wp-content/uploads/2022/05/aniyuki-anime-avatar-black-and-white-35.jpg",
  },
  {
    deposition:
      "“Sempre tive o interesse em descobrir uma plataforma como essa. Aprendi horrores com os cursos e amei o professores. Super interessante e divertido!!!",
    name: "Lurdes Sampaio",
    role: "Aposentada",
    image:
      "https://aniyuki.com/wp-content/uploads/2022/05/aniyuki-anime-avatar-black-and-white-35.jpg",
  },
  {
    deposition:
      "“A Cuidadoso salvou a minha vida várias vezes. A minha mãe adorou os cursos e os encontros do Conecdosos. MUITO SATISFEITA!!!” ",
    name: "Letícia Ristghneer",
    role: "Designer de moda",
    image:
      "https://aniyuki.com/wp-content/uploads/2022/05/aniyuki-anime-avatar-black-and-white-35.jpg",
  },
];

const LandingPage: React.FC = () => {
  return (
    <Flex>
      <SideBar />
      <Flex
        flexDirection="column"
        position="relative"
        width="100%"
        alignItems="center"
        gap="24px"
      >
        <Flex
          backgroundColor="black"
          width="100%"
          height="300px"
          position="absolute"
          top={0}
          zIndex={-1}
        />

        <Flex
          width="100%"
          padding="180px"
          paddingLeft="12%"
          paddingRight="12%"
          flexDir="column"
          gap="24px"
        >
          <Header />

          <Flex gap="24px" flexDir="column">
            <Flex backgroundImage="url('/bgpurple.svg')" width="100%">
              <Spline
                scene="https://prod.spline.design/VIWFqzpSSvDvM8QR/scene.splinecode"
                style={{ height: "516px" }}
              />
            </Flex>

            <Flex gap="24px">
              <Flex width="100px" height="100px" backgroundColor="red">
                <Flex></Flex>
                <Flex></Flex>
              </Flex>
              <Flex></Flex>
            </Flex>
          </Flex>

          <Depoimentos />
        </Flex>
      </Flex>
    </Flex>
  );
};

const Header = () => {
  return (
    <Flex mb="24px">
      <Flex justifyContent="space-between" alignItems="flex-end" width="100%">
        <Flex gap="16px">
          <Flex
            width="158px"
            height="158px"
            borderRadius="4px"
            alignItems="center"
            justifyContent="center"
            backgroundColor="white"
            padding="6px"
            boxShadow="0px 0px 10px rgba(0, 0, 0, 0.25)"
          >
            <Image
              alt="LOGO"
              src="https://aniyuki.com/wp-content/uploads/2022/05/aniyuki-anime-avatar-black-and-white-35.jpg"
            />
          </Flex>
          <Flex flexDir="column" justifyContent="space-between">
            <Flex flexDir="column" gap="8px" alignItems="flex-start">
              <Text fontWeight={600} fontSize="32px" color="white">
                Nome da Comunidade
              </Text>

              <Tag>
                <TagLeftIcon boxSize="16px" as={Users} />
                <TagLabel fontSize="14px" lineHeight="15px" fontWeight="600">
                  Pública
                </TagLabel>
              </Tag>
            </Flex>

            <Flex gap="4px">
              <Badge colorScheme="purple">DESIGN</Badge>
            </Flex>
          </Flex>
        </Flex>
        <Button
          marginBottom="16px"
          backgroundColor="white"
          boxShadow="0px 3.47992px 16.5296px rgba(0, 0, 0, 0.25);"
          leftIcon={<UserPlus />}
          size="lg"
        >
          Ingressar na Comunidade
        </Button>
      </Flex>
    </Flex>
  );
};

const Depoimentos = () => {
  return (
    <Flex flexDir="column" gap="24px" alignItems="center">
      <Text fontWeight={600} fontSize="32px" textAlign="center" color="#031432">
        Depoimentos dos usuários
      </Text>
      <Text
        color="#6C87AE"
        fontWeight={400}
        fontSize="16px"
        maxW="600px"
        textAlign="center"
      >
        Alguns depoimentos de pessoas que usam diariamente a plataforma da
        Cuidadoso, seja ela um cuidador, um usuário assíduo ou um professor da
        Cuidadoso Cursos.
      </Text>

      <Flex gap="36px" flexWrap="wrap" w="100%" justifyContent="center">
        {depositions.map((deposition) => (
          <Flex
            key={deposition.deposition}
            padding="32px"
            maxW="500px"
            boxShadow="0px 24px 32px -3px rgba(3, 9, 50, 0.04)"
            borderRadius={32}
            flexDir="column"
            gap="32px"
            justifyContent="space-between"
          >
            <Text
              fontStyle="Italic"
              fontWeight={300}
              fontSize="20px"
              color="#031432"
            >
              {deposition.deposition}
            </Text>
            <Flex gap="16px">
              <Image
                src={deposition.image}
                alt={deposition.name}
                borderRadius="100%"
                width="60px"
                height="60px"
              />
              <Flex flexDir="column" gap="4px">
                <Text color="#3A8EF6" fontSize="20px" fontWeight={500}>
                  {deposition.name}
                </Text>
                <Text color="#6C87AE" fontWeight={400} fontSize="16px">
                  {deposition.role}
                </Text>
              </Flex>
            </Flex>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
};

export default LandingPage;
