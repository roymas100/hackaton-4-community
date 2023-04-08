import SideBar from "@/components/sideBar";
import {
  Avatar,
  Badge,
  Button,
  Flex,
  Image,
  Tag,
  TagLabel,
  TagLeftIcon,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useMemo, useRef } from "react";
import { DollarSign, Star, UserPlus, Users } from "react-feather";
import Spline from "@splinetool/react-spline";
import { useCommunity, useDb } from "@/hooks/useDb";
import { useRouter } from "next/router";

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
      "https://thypix.com/wp-content/uploads/2021/10/anime-avatar-profile-picture-thypix-m.jpg",
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
  const { currentCommunity } = useCommunity();
  const { query } = useRouter();
  const { serverList } = useDb();

  const community = useMemo(() => {
    if (!currentCommunity) {
      return serverList.find((server) => server.id === query.communityId);
    }
    return currentCommunity;
  }, [currentCommunity, query.communityId, serverList]);

  const canvasRef = useRef<any>(undefined);

  useEffect(() => {
    const mousedownFunction = (event: any) => {
      if (canvasRef.current) {
        if (canvasRef.current.contains(event.target)) {
          canvasRef.current.style.cursor = "grabbing";
        } else {
          canvasRef.current.style.cursor = "grab";
        }
      }
    };

    const mouseupFunction = (event: any) => {
      if (canvasRef.current) {
        if (canvasRef.current.contains(event.target)) {
          canvasRef.current.style.cursor = "grab";
        } else {
          canvasRef.current.style.cursor = "grab";
        }
      }
    };

    document.body.addEventListener("mousedown", mousedownFunction);

    document.body.addEventListener("mouseup", mouseupFunction);

    return () => {
      document.body.removeEventListener("mousedown", mousedownFunction);
      document.body.removeEventListener("mouseup", mouseupFunction);
    };
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
          <Header
            title={community?.name}
            type={community?.type}
            image={community?.imgUrl}
            category={community?.category}
          />

          <Flex gap="24px" flexDir="column">
            {community && (
              <Flex
                backgroundImage={`url('/${community?.canvasBackground}.svg')`}
                width="100%"
                cursor="grab"
                position="relative"
                ref={canvasRef}
              >
                <Spline
                  scene={community?.canvasLink}
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
            )}

            <Flex gap="24px">
              <Flex flexDirection="column" gap="24px">
                <Card
                  title="Networking e coworking"
                  description="Entre em contato com milhares de pessoas que também estão aprendendo."
                  backgroundColor="#DAECFF"
                  image={community?.image1}
                />
                <Card
                  title="Feedbacks e indicações"
                  description="Receba críticas positivas e indicações para vagas de emprego"
                  backgroundColor="#FFE9CA"
                  image={community?.image2}
                />
              </Flex>

              <Card
                title="Marketplace gamificada"
                description="Conquiste pontos na plataforma e compre cursos, ingressos e muito mais!"
                vertical
                backgroundColor="#FFE5F9"
                image={community?.image3}
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
  image?: string;
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

const Header = ({
  title = "Comunidade",
  type = "public",
  image,
  category,
}: {
  title?: string;
  type?: string;
  image?: string;
  category?: string;
}) => {
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
            {image && (
              <Avatar height="100%" width="100%" name={title} src={image} />
            )}
          </Flex>
          <Flex flexDir="column" justifyContent="space-between">
            <Flex flexDir="column" gap="8px" alignItems="flex-start">
              <Text fontWeight={600} fontSize="32px" color="white">
                {title}
              </Text>

              <Tag>
                {type === "public" ? (
                  <>
                    <TagLeftIcon boxSize="16px" as={Users} />
                    <TagLabel
                      fontSize="14px"
                      lineHeight="15px"
                      fontWeight="600"
                    >
                      Pública
                    </TagLabel>
                  </>
                ) : (
                  <>
                    <TagLeftIcon boxSize="16px" fill="#DAA520" as={Star} />
                    <TagLabel
                      fontSize="14px"
                      lineHeight="15px"
                      fontWeight="600"
                      color="#DAA520"
                    >
                      Premium
                    </TagLabel>{" "}
                  </>
                )}
              </Tag>
            </Flex>

            <Flex gap="4px">
              {category && <Badge colorScheme="purple">{category}</Badge>}
            </Flex>
          </Flex>
        </Flex>
        <Button
          marginBottom="16px"
          backgroundColor="white"
          boxShadow="0px 3.47992px 16.5296px rgba(0, 0, 0, 0.25);"
          leftIcon={type === "public" ? <UserPlus /> : <DollarSign />}
          size="lg"
        >
          {type === "public"
            ? "Ingressar na Comunidade"
            : "Inscreva-se para ter acesso"}
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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ornare
        viverra nunc, nec dictum massa placerat ut. Nam sed scelerisque risus.
        Vestibulum quis neque tellus. Vestibulum non auctor diam, in feugiat
        risus.
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
