import { Flex } from '@chakra-ui/react'
import React from 'react'

export default function CommunityCard() {
  return (
    <Flex
      flexDir="column"
      alignItems={"center"}
      justifyContent="center"
    >
      <Flex>
        img
      </Flex>
      <Flex>
        Descrição
      </Flex>
    </Flex>
  )
}
