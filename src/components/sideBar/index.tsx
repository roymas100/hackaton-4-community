import { useCommunity, useDb } from "@/hooks/useDb";
import { Avatar, Flex, Image, useDisclosure } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { Bell, Inbox } from "react-feather";

export default function SideBar({ communityId }: { communityId?: boolean }) {
  const { serverList } = useDb();
  const { setCurrentCommunity } = useCommunity();
  const { push, query, asPath } = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();
  console.log("asPath", asPath);
  return (
    <Flex
      id="side-bar"
      alignItems="center"
      justifyContent="space-between"
      flexDir="column"
      width={"120px"}
      bgColor={"rgba(245, 245, 245, 1)"}
      padding="36px 16px"
      gap={"30px"}
      height="100vh"
      filter={`saturate(${communityId ? 0 : 1})`}
      position="sticky"
      left="0"
      top="0"
    >
      <Flex
        id="logo-area"
        alignItems="center"
        justifyContent="center"
        flexDir="column"
        gap="30px"
      >
        <Link href="/">
          <Image
            alt="4 community"
            src="/logo.svg"
            filter={`saturate(${asPath === "/" ? 1 : 0})`}
            _hover={{
              filter: `saturate(1)`,
            }}
          />
        </Link>

        <Link href="/feed">
          <Image
            alt="Feed"
            src="/feed.svg"
            filter={`saturate(${asPath.includes("feed") ? 1 : 0})`}
            _hover={{
              filter: `saturate(1)`,
            }}
          />
        </Link>

        <Flex w={"64px"} h="5px" bgColor={"#2D2D2D"} borderRadius="18px" />

        <Flex
          id="server-area"
          flexDir="column"
          justifyContent={"flex-start"}
          justifySelf={"flex-start"}
          alignSelf={"center"}
          gap="16px"
        >
          {serverList.map((item, index) => {
            return (
              <Link key={index} href={`/landing/${item.id}`}>
                <Flex
                  key={index}
                  id="logo-area"
                  alignItems="center"
                  justifyContent="center"
                  flexDir="column"
                  cursor="pointer"
                  filter={`saturate(${query.communityId === item.id ? 1 : 0})`}
                  _hover={{
                    filter: "saturate(1)",
                  }}
                  onClick={() => {
                    setCurrentCommunity(item);
                    push(`/community/${item.id}`);
                  }}
                >
                  <Avatar
                    width={"64px"}
                    height="64px"
                    name={item.name[0]}
                    src={item.imgUrl}
                  />
                </Flex>
              </Link>
            );
          })}
        </Flex>
      </Flex>

      <Flex
        id="user-area"
        flexDir="column"
        alignItems={"center"}
        justifyContent="center"
        justifySelf={"flex-end"}
        alignSelf={"center"}
        gap="24px"
      >
        <Bell width="32px" height="32px" />
        <Inbox width="32px" height="32px" />
        <Flex position="relative">
          <Avatar
            width="64px"
            height="64px"
            name="Ryan Gosling"
            src="https://media.fstatic.com/lhwC16sJLL8yuSeFFX9GCMKhi-k=/full-fit-in/290x478/filters:format(webp)/media/artists/avatar/2016/12/ryan-gosling_a106376_pXORbNR.jpg"
          />
          <Flex
            width="18px"
            height="18px"
            borderRadius="100%"
            bgColor="#38A169"
            position="absolute"
            bottom="0"
            right="0"
          />
        </Flex>
      </Flex>
    </Flex>
  );
}
