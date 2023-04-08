
import { useCommunity, useDb } from "@/hooks/useDb";
import { Avatar, Flex, useDisclosure } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { Bell, Inbox } from "react-feather";

export default function SideBar({ communityId }: { communityId?: boolean }) {
  const { serverList } = useDb();
  const { setCurrentCommunity } = useCommunity();
  const { push, query } = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure()
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

          <svg
            width="58"
            height="58"
            viewBox="0 0 58 58"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="58" height="58" rx="12" fill="#2D2D2D" />
            <path
              d="M24.8062 18.6446C28.5114 16.2866 30.8694 16.6235 33.2275 18.6446C39.5201 24.0379 32.7953 38.8889 40.9996 40.061C47.6297 41.0081 45.9995 27.7396 45.9995 27.7396M25.8166 18.0502C18.3805 21.7092 26.2042 38.828 17.9999 40C16.113 40.2696 14.8146 39.3926 13.9225 38C11.6802 34.4993 12.4996 27.7396 12.4996 27.7396"
              stroke="white"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M29 39.1354V34"
              stroke="white"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M29 25.0271V24"
              stroke="white"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

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
                  push(`/landing/${item.id}`);
                }}
              >
                <Avatar
                  width={"64px"}
                  height="64px"
                  name={item.name[0]}
                  src={item.imgUrl}
                />
              </Flex>
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
