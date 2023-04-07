import { Flex , Image, Text} from '@chakra-ui/react'
import { Star, Users} from 'react-feather'
import React from 'react'

type TipsCardProps = {
  title : string
  color? : string
}

export default function TipsCard(props:TipsCardProps) {

  const {title ,  color,} = props
  return (
    <Flex
      className={"card-Tips"}
      flexDir="column"
      alignItems={"center"}
      justifyContent="center"
      boxShadow='xl'
      w="290px"
      h="200px"
      minW="290px"
      borderRadius="8px"
      color= "#2D2D2D"
      
    >
      <Flex
        w="100%"
        height="105px"
        bgColor={color? color : "#99C5FD"}
        backgroundSize="cover"
        borderTopLeftRadius={"8px"}
        borderTopRightRadius={"8px"}
        position="relative"
        

      />
      

      
      
      <Flex
        w="100%"
        flexDir="column"
        alignItems={"start"}
        justifyContent={"flex-start"}
        padding="13px"
        gap={"8px"}
        color= "#2D2D2D"
        minH="95px"
      >
        <Text
          fontSize="20px"
          lineHeight="30px"
          fontWeight={700}
        >
          {title}
        </Text>

      </Flex>
    </Flex>
  )
}
