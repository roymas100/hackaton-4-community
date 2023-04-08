import { useDb } from "@/hooks/useDb";
import { Avatar, Flex, useDisclosure } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { Bell, Inbox } from "react-feather";

export default function SideBar({ communityId }: { communityId?: boolean }) {
  const { serverList } = useDb()
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
          
        <svg width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="58" height="58" rx="12" fill="#2D2D2D"/>
          <path d="M24.8062 18.6446C28.5114 16.2866 30.8694 16.6235 33.2275 18.6446C39.5201 24.0379 32.7953 38.8889 40.9996 40.061C47.6297 41.0081 45.9995 27.7396 45.9995 27.7396M25.8166 18.0502C18.3805 21.7092 26.2042 38.828 17.9999 40C16.113 40.2696 14.8146 39.3926 13.9225 38C11.6802 34.4993 12.4996 27.7396 12.4996 27.7396" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M29 39.1354V34" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M29 25.0271V24" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>

        </Link >

        <Link href="/">
          <svg width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="58" height="58" rx="12" fill="url(#paint0_linear_82_2023)"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M24.6792 23.6875H33.3208C34.2615 23.6875 35.0732 23.6875 35.7235 23.7753C36.4205 23.8688 37.0877 24.0799 37.6289 24.6211C38.1701 25.1623 38.3812 25.8309 38.4747 26.5265C38.5625 27.1767 38.5625 27.9885 38.5625 28.9306V34.7361C38.5625 35.6782 38.5625 36.4899 38.4747 37.1402C38.3812 37.8372 38.1701 38.5044 37.6289 39.0456C37.0877 39.5867 36.4191 39.7978 35.7235 39.8913C35.0732 39.9792 34.2615 39.9792 33.3208 39.9792H24.6792C23.7385 39.9792 22.9268 39.9792 22.2765 39.8913C21.5809 39.7978 20.9122 39.5867 20.3711 39.0456C19.8299 38.5044 19.6188 37.8357 19.5253 37.1402C19.4375 36.4899 19.4375 35.6782 19.4375 34.7361V28.9306C19.4375 27.9885 19.4375 27.1767 19.5253 26.5265C19.6188 25.8309 19.8299 25.1623 20.3711 24.6211C20.9122 24.0799 21.5809 23.8688 22.2765 23.7753C22.9268 23.6875 23.7385 23.6875 24.6806 23.6875H24.6792ZM22.5612 25.8805C22.1008 25.9428 21.9563 26.0434 21.8756 26.1242C21.7948 26.2049 21.6942 26.3494 21.6319 26.8098C21.5667 27.3014 21.5639 27.9687 21.5639 29V34.6667C21.5639 35.698 21.5667 36.3667 21.6319 36.8568C21.6942 37.3172 21.7948 37.4618 21.8756 37.5425C21.9563 37.6233 22.1008 37.7238 22.5612 37.7862C23.0528 37.8513 23.7201 37.8542 24.7514 37.8542H33.2514C34.2828 37.8542 34.9514 37.8513 35.4416 37.7862C35.902 37.7238 36.0465 37.6233 36.1273 37.5425C36.208 37.4618 36.3086 37.3172 36.3709 36.8568C36.4361 36.3652 36.4389 35.698 36.4389 34.6667V29C36.4389 27.9687 36.4361 27.3 36.3709 26.8098C36.3086 26.3494 36.208 26.2049 36.1273 26.1242C36.0465 26.0434 35.902 25.9428 35.4416 25.8805C34.95 25.8153 34.2828 25.8125 33.2514 25.8125H24.75C23.7187 25.8125 23.0514 25.8153 22.5612 25.8805Z" fill="white"/>
            <path d="M21.916 19.4375C21.6342 19.4375 21.364 19.5494 21.1647 19.7487C20.9655 19.948 20.8535 20.2182 20.8535 20.5C20.8535 20.7818 20.9655 21.052 21.1647 21.2513C21.364 21.4506 21.6342 21.5625 21.916 21.5625H28.9993C29.2811 21.5625 29.5514 21.4506 29.7506 21.2513C29.9499 21.052 30.0618 20.7818 30.0618 20.5C30.0618 20.2182 29.9499 19.948 29.7506 19.7487C29.5514 19.5494 29.2811 19.4375 28.9993 19.4375H21.916Z" fill="white"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M27.504 13.7708H30.496C33.0998 13.7708 35.1625 13.7708 36.7761 13.9875C38.4364 14.2113 39.7808 14.6817 40.8419 15.7413C41.9016 16.8024 42.3719 18.1468 42.5957 19.8072C42.8125 21.4222 42.8125 23.4834 42.8125 26.0873V31.9126C42.8125 34.5164 42.8125 36.5791 42.5957 38.1927C42.3719 39.853 41.9016 41.1974 40.8419 42.2585C39.7808 43.3182 38.4364 43.7885 36.7761 44.0123C35.1611 44.2291 33.0998 44.2291 30.496 44.2291H27.504C24.9002 44.2291 22.8375 44.2291 21.2239 44.0123C19.5636 43.7885 18.2192 43.3182 17.1581 42.2585C16.0984 41.1974 15.6281 39.853 15.4043 38.1927C15.1875 36.5777 15.1875 34.5164 15.1875 31.9126V26.0873C15.1875 23.4834 15.1875 21.4208 15.4043 19.8072C15.6281 18.1468 16.0984 16.8024 17.1581 15.7413C18.2192 14.6817 19.5636 14.2113 21.2239 13.9875C22.8389 13.7708 24.9002 13.7708 27.504 13.7708ZM21.5058 16.0941C20.0807 16.2853 19.259 16.6452 18.6583 17.2444C18.0605 17.8437 17.7007 18.6653 17.5094 20.0905C17.3139 21.5468 17.3111 23.465 17.3111 26.1666V31.8333C17.3111 34.5348 17.3139 36.4544 17.5094 37.9108C17.7007 39.3345 18.0605 40.1562 18.6598 40.7554C19.259 41.3547 20.0807 41.7145 21.5058 41.9058C22.9622 42.1013 24.8803 42.1041 27.5819 42.1041H30.4152C33.1168 42.1041 35.0364 42.1013 36.4927 41.9058C37.9165 41.7145 38.7382 41.3547 39.3374 40.7554C39.9367 40.1562 40.2965 39.3345 40.4877 37.9093C40.6832 36.4544 40.6861 34.5348 40.6861 31.8333V26.1666C40.6861 23.465 40.6832 21.5468 40.4877 20.0891C40.2965 18.6653 39.9367 17.8437 39.3374 17.2444C38.7382 16.6452 37.9165 16.2853 36.4913 16.0941C35.0364 15.8986 33.1168 15.8958 30.4152 15.8958H27.5819C24.8803 15.8958 22.9636 15.8986 21.5058 16.0941Z" fill="white"/>
            <defs>
            <linearGradient id="paint0_linear_82_2023" x1="-13.1406" y1="-4.07813" x2="28.7399" y2="-21.0954" gradientUnits="userSpaceOnUse">
            <stop stop-color="#542592"/>
            <stop offset="1" stop-color="#83087C"/>
            </linearGradient>
            </defs>
          </svg>

        
        
        </Link>
        

        <Flex
          w={"64px"}
          h="5px"
          bgColor={"#2D2D2D"} 
          borderRadius="18px"
        />

<Flex
        id="server-area"
        flexDir="column"
        justifyContent={"flex-start"}
        justifySelf={"flex-start"}
        alignSelf={"center"}
        gap="16px"
      >
        {serverList.map( (item,index)=>{
          return (
            <Flex
            key={index}
            id="logo-area"
            alignItems="center"
            justifyContent="center"
            flexDir="column"
            cursor="pointer"
            filter="saturate(0)"
            _hover={{
              filter: "saturate(1)",
            }}
          >
            <Avatar
              width={"64px"}
              height="64px"
              name={item.name[0]}
              src={item.imgUrl}
            />
          </Flex>
          )
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
        <Bell
          width="32px"
          height="32px"
        />
        <Inbox
          width="32px"
          height="32px"
        />
        <Flex
          position="relative"
        >
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
