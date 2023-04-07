import SideBar from "@/components/sideBar";
import { Flex } from "@chakra-ui/react";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

// import { Container } from './styles';

const CommunityPage: React.FC = () => {
  const router = useRouter();
  const { communityId } = router.query;

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Flex>
        <SideBar communityId={!!communityId} />
      </Flex>
    </>
  );
};

export default CommunityPage;
