import SideBar from "@/components/sideBar";
import { Button, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { UserPlus } from "react-feather";
import { Application } from "@splinetool/runtime";

const depositions = [
  {
    deposition:
      "“Simplesmente maravilhoso!!! Mudou a minha vida completamente. Hoje, não tenho mais a preocupação de depender da agenda de um cuidador em específico.",
    name: "Lucas Veloso",
    role: "Product Designer",
    image:
      "https://aniyuki.com/wp-content/uploads/2022/05/aniyuki-anime-avatar-black-and-white-35.jpg",
  },
];

const LandingPage: React.FC = () => {
  //   useLayoutEffect(() => {
  //     const canvas = document.getElementById("canvas3d") as HTMLCanvasElement;
  //     if (canvas) {
  //       console.log(canvas);
  //       const app = new Application(canvas);
  //       app.load("https://prod.spline.design/w5kNHPJycV26nkPE/scene.splinecode");
  //     }
  //   }, []);

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
          height="276px"
          position="absolute"
          top={0}
          zIndex={-1}
        />

        <Flex
          width="100%"
          padding="140px"
          paddingLeft="12%"
          paddingRight="12%"
          flexDir="column"
          gap="24px"
        >
          <Flex mb="24px">
            <Flex
              justifyContent="space-between"
              alignItems="flex-end"
              width="100%"
            >
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
                <Text fontWeight={600} fontSize="32px" color="white">
                  Nome da Comunidade
                </Text>
              </Flex>
              <Button
                backgroundColor="white"
                boxShadow="0px 3.47992px 16.5296px rgba(0, 0, 0, 0.25);"
                leftIcon={<UserPlus />}
                size="lg"
              >
                Ingressar na Comunidade
              </Button>
            </Flex>
          </Flex>

          <Flex flexDir="column" gap="24px" alignItems="center">
            <Text
              fontWeight={600}
              fontSize="32px"
              textAlign="center"
              color="#031432"
            >
              Depoimentos dos usuários
            </Text>
            <Text
              color="#6C87AE"
              font-weight={400}
              fontSize="16px"
              maxW="600px"
              textAlign="center"
            >
              Alguns depoimentos de pessoas que usam diariamente a plataforma da
              Cuidadoso, seja ela um cuidador, um usuário assíduo ou um
              professor da Cuidadoso Cursos.
            </Text>

            <Flex gap="72px" flexWrap="wrap" w="100%">
              {depositions.map((deposition) => (
                <Flex
                  key={deposition.deposition}
                  padding="32px"
                  maxW="530px"
                  boxShadow="0px 24px 32px -3px rgba(3, 9, 50, 0.04)"
                  borderRadius={32}
                  flexDir="column"
                  gap="32px"
                >
                  <Text fontStyle="Italic">{deposition.deposition}</Text>
                  <Flex gap="16px">
                    <Image
                      src={deposition.image}
                      alt={deposition.name}
                      borderRadius="100%"
                      width="60px"
                      height="60px"
                    />
                    <Flex flexDir="column" gap="8px">
                      <Text>{deposition.name}</Text>
                      <Text>{deposition.role}</Text>
                    </Flex>
                  </Flex>
                </Flex>
              ))}
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default LandingPage;
