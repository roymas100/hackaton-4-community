import { Avatar, Flex } from "@chakra-ui/react";
import React from "react";

export default function SideBar({ communityId }: { communityId?: boolean }) {
  return (
    <Flex
      id="side-bar"
      alignItems="center"
      justifyContent="flex-start"
      flexDir="column"
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
        <svg
          width="67"
          height="67"
          viewBox="0 0 67 67"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <path d="M0 0H67V67H0V0Z" fill="url(#pattern0)" />
          <defs>
            <pattern
              id="pattern0"
              patternContentUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              <use xlinkHref="#image0_29_524" transform="scale(0.0217391)" />
            </pattern>
            <image
              id="image0_29_524"
              width="46"
              height="46"
              xlinkHref="data:image/png;base64,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"
            />
          </defs>
        </svg>

        <Flex
          w={"64px"}
          h="5px"
          bgColor={"rgba(140, 140, 140, 1)"}
          borderRadius="18px"
        />
      </Flex>

      <Flex
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
          name="Dan Abrahmov"
          src="https://bit.ly/dan-abramov"
        />
      </Flex>

      <Flex
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
          name="Dan Abrahmov"
          src="https://bit.ly/dan-abramov"
        />
      </Flex>

      <Flex
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
          name="Dan Abrahmov"
          src="https://bit.ly/dan-abramov"
        />
      </Flex>
    </Flex>
  );
}
