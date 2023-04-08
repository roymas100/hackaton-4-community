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
import React, { useEffect, useRef } from "react";
import { UserPlus, Users } from "react-feather";
import Spline from "@splinetool/react-spline";

const depositions = [
  {
    deposition:
      "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ornare viverra nunc, nec dictum massa placerat ut. Nam sed scelerisque risus. Vestibulum quis neque tellus. Vestibulum non auctor diam, in feugiat risus.”",
    name: "Lucas Veloso",
    role: "Product Designer",
    image:
      "https://aniyuki.com/wp-content/uploads/2022/05/aniyuki-anime-avatar-black-and-white-35.jpg",
  },
  {
    deposition:
      "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ornare viverra nunc, nec dictum massa placerat ut. Nam sed scelerisque risus. Vestibulum quis neque tellus. Vestibulum non auctor diam, in feugiat risus.”",
    name: "Lucas Ribeiro",
    role: "Enfermeiro",
    image:
      "https://4maos.com.br/wp-content/uploads/2022/10/e4031b6fdcd96b53c78b2e3a12f6819c.jpg",
  },
  {
    deposition:
      "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ornare viverra nunc, nec dictum massa placerat ut. Nam sed scelerisque risus. Vestibulum quis neque tellus. Vestibulum non auctor diam, in feugiat risus.”",
    name: "Lurdes Sampaio",
    role: "Aposentada",
    image:
      "data:image/jpeg;base64,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",
  },
  {
    deposition:
      "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ornare viverra nunc, nec dictum massa placerat ut. Nam sed scelerisque risus. Vestibulum quis neque tellus. Vestibulum non auctor diam, in feugiat risus.”",
    name: "Letícia Ristghneer",
    role: "Designer de moda",
    image:
      "https://4maos.com.br/wp-content/uploads/2022/10/ba548c605b10559a0e2f3c69931820e7.jpg",
  },
];

const LandingPage: React.FC = () => {
  const canvasRef = useRef<any>(undefined);

  useEffect(() => {
    document.body.addEventListener("mousedown", (event) => {
      if (canvasRef.current.contains(event.target)) {
        canvasRef.current.style.cursor = "grabbing";
      } else {
        canvasRef.current.style.cursor = "grab";
      }
    });

    document.body.addEventListener("mouseup", (event) => {
      if (canvasRef.current.contains(event.target)) {
        canvasRef.current.style.cursor = "grab";
      } else {
        canvasRef.current.style.cursor = "grab";
      }
    });
  }, []);

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
          gap="42px"
        >
          <Header />

          <Flex gap="24px" flexDir="column">
            <Flex
              backgroundImage="url('/bgpurple.svg')"
              width="100%"
              cursor="grab"
              position="relative"
              ref={canvasRef}
            >
              <Spline
                scene="https://prod.spline.design/VIWFqzpSSvDvM8QR/scene.splinecode"
                style={{ height: "516px" }}
              />

              <Flex
                position="absolute"
                bottom="16px"
                right="16px"
                padding="8px 12px"
                borderRadius={12}
                backgroundColor="white"
                fontWeight={700}
                fontSize="24px"
                borderStyle="double"
                borderWidth={6}
                borderColor="#000"
              >
                Visualize o prêmio 3D
              </Flex>
            </Flex>

            <Flex gap="24px">
              <Flex flexDirection="column" gap="24px">
                <Card
                  title="Networking e coworking"
                  description="Entre em contato com milhares de pessoas que também estão aprendendo."
                  backgroundColor="#DAECFF"
                  image="network"
                />
                <Card
                  title="Feedbacks e indicações"
                  description="Receba críticas positivas e indicações para vagas de emprego"
                  backgroundColor="#FFE9CA"
                  image="depoimentos"
                />
              </Flex>

              <Card
                title="Marketplace gamificada"
                description="Conquiste pontos na plataforma e compre cursos, ingressos e muito mais!"
                vertical
                backgroundColor="#FFE5F9"
                image="gameficacao"
              />
            </Flex>
          </Flex>

          <Depoimentos />
        </Flex>
      </Flex>
    </Flex>
  );
};

const Card = ({
  vertical,
  backgroundColor,
  title,
  description,
  image,
}: {
  vertical?: boolean;
  backgroundColor: string;
  title: string;
  description: string;
  image: string;
}) => {
  return (
    <Flex
      backgroundColor={backgroundColor}
      flexDirection={vertical ? "column-reverse" : "row"}
    >
      <Flex
        flexDirection="column"
        gap="12px"
        padding="24px"
        height="100%"
        alignItems="center"
        justifyContent="center"
      >
        <Text fontWeight={600} fontSize={"32px"}>
          {title}
        </Text>
        <Text fontWeight={300} fontSize={"20px"}>
          {description}
        </Text>
      </Flex>
      <Flex alignItems="center" justifyContent="center" minWidth="50%">
        <Image alt="Network" src={`/${image}.svg`} />
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
              height="100%"
              alt="LOGO"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Figma-logo.svg/1667px-Figma-logo.svg.png"
            />
          </Flex>
          <Flex flexDir="column" justifyContent="space-between">
            <Flex flexDir="column" gap="8px" alignItems="flex-start">
              <Text fontWeight={600} fontSize="32px" color="white">
                Comunidade de Figma
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
