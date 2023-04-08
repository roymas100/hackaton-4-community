import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import {
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import SideBar from "@/components/sideBar";
import HomeHeader from "@/components/HomeHeader";
import CommunityCard from "@/components/CommunityCard";
import { useDb } from "@/hooks/useDb";
import { useEffect, useRef, useState } from "react";
import TipsCard from "@/components/TipsCards/TipsCards";
import Link from "next/link";
import { User } from "react-feather";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { communitiesList, newsList } = useDb();
  const [sizeWidth, setSizeWidth] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  useEffect(() => {
    if (window) {
      const size = window.innerWidth;
      setSizeWidth(size.toString() + "px");
    }
  }, []);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Flex w="100%" flexDir={"row"}>
        <SideBar />

        <Flex
          padding={12}
          flexDirection="column"
          w="calc(100% - 120px)"
          alignItems="center"
        >
          <HomeHeader />
          <Flex
            fontWeight="700"
            fontSize="32px"
            padding="32px 0"
            width="90%"
            maxW="1920px"
            justify={"flex-start"}
          >
            <h1>Você pode experimentar...</h1>
          </Flex>

          <Flex
            id="community-grid"
            gap={"32px"}
            overflow="auto"
            width={"100%"}
            w={"90%"}
            maxWidth="1920px"
            wrap="nowrap"
            css={{
              "&::-webkit-scrollbar": {
                height: "10px",
              },
              "&::-webkit-scrollbar-track": {
                height: "10px",
              },
              "&::-webkit-scrollbar-thumb": {
                background: "gray",
                borderRadius: "24px",
              },
            }}
          >
            {communitiesList.map((item, index) => {
              return (
                <Link
                  key={index}
                  href={item.disabled ? "#" : `landing/${item.id}`}
                >
                  <CommunityCard
                    key={index}
                    title={item.title}
                    description={item.description}
                    imgUrl={item.imgUrl}
                    type={item.type}
                    color={item.color}
                    icon={item.icon}
                  />
                </Link>
              );
            })}
          </Flex>

          <Flex
            fontWeight="700"
            fontSize="32px"
            padding="32px 0"
            width="90%"
            maxW="1920px"
            justify={"flex-start"}
          >
            <Text>Abra presentes para descobrir novos recursos 🎉</Text>
          </Flex>

          <Flex
            id="tips-grid"
            gap={"32px"}
            overflow="auto"
            width={"100%"}
            w={"90%"}
            maxWidth="1920px"
            wrap="nowrap"
            css={{
              "&::-webkit-scrollbar": {
                width: "4px !important",
                height: "10px",
              },
              "&::-webkit-scrollbar-track": {
                width: "4px !important",
                height: "10px",
              },
              "&::-webkit-scrollbar-thumb": {
                background: "gray",
                borderRadius: "24px",
                width: "10px",
                height: "10px",
              },
            }}
          >
            {newsList.map((item, index) => {
              return (
                <>
                  <Flex onClick={onOpen}>
                    <TipsCard
                      key={index}
                      title="Explore os módulos da comunidade >"
                      color={item.color}
                    />
                  </Flex>

                  <Modal isOpen={isOpen} onClose={onClose} size="xl">
                    <ModalContent maxW="1280px">
                      <Flex>
                        <ModalCloseButton />
                        <Flex
                          w="60%"
                          h="760px"
                          flexDir="column"
                          padding={"52px 84px"}
                          gap="60px"
                        >
                          <Text
                            fontSize="40px"
                            fontWeight="600"
                            lineHeight="72px"
                          >
                            {item.title}
                          </Text>
                          {item.news.map((item2, index2) => (
                            <Flex key={index2}>
                              <Flex flexDir="column" gap="8px">
                                <Flex
                                  alignItems="center"
                                  justifyContent="flex-start"
                                  gap="24px"
                                  fontSize="32px"
                                  fontWeight="600"
                                >
                                  <User width="32px" height="32px" />
                                  <Text>{item2.subtitle}</Text>
                                </Flex>

                                <Text fontSize="18px">{item2.text}</Text>
                              </Flex>
                            </Flex>
                          ))}
                        </Flex>

                        <Flex
                          background={`url(https://i.imgur.com/WqQNVlq.png)`}
                          bgColor={"#fff"}
                          backgroundSize="cover"
                          w="40%"
                          h="760px"
                        ></Flex>
                      </Flex>
                    </ModalContent>
                  </Modal>
                </>
              );
            })}
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
