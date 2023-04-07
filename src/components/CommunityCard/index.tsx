import { Flex , Image, Text} from '@chakra-ui/react'
import { Star, Users} from 'react-feather'
import React from 'react'

type CommunityCardProps = {
  title : string
  description : string
  imgUrl?: string
  type: string
  color? : string
}

export default function CommunityCard(props:CommunityCardProps) {

  const {title , description , imgUrl, color, type} = props
  return (
    <Flex
      className={"card-community"}
      flexDir="column"
      alignItems={"center"}
      justifyContent="center"
      boxShadow='xl'
      w="470px"
      h="317px"
      minW="470px"
      borderRadius="8px"
      color= "#2D2D2D"
      
    >
      <Flex
        w="100%"
        height="156px"
        background={imgUrl? `url(${imgUrl})` : ""}
        bgColor={color}
        backgroundSize="cover"
        borderTopLeftRadius={"8px"}
        borderTopRightRadius={"8px"}
        position="relative"
        

      >
        <Flex
        position="absolute"
        bottom="10px"
        right="24px"
        bgColor="#fff"
        padding="4px 8px"
        borderRadius="8px"
        gap={1}
        alignItems="center"
        justifyContent="center"
        
      > 
      {type === "public"? (

      <>
          <Users
          width={16}
          height={16}

          />
        <Text
          fontSize="14px"
          lineHeight="15px"
          fontWeight="600"
        >
          
          Pública
        
        </Text>
      </>

      ) : (

        <>
          <Star
          width={16}
          height={16}
          fill="#DAA520"

          />
        <Text
          fontSize="14px"
          lineHeight="15px"
          fontWeight="600"
          color="#DAA520"

        >
          
          Premium
        
        </Text>
      </>

      )}
        
        
      </Flex>
      </Flex>

      
      
      <Flex
        w="100%"
        flexDir="column"
        alignItems={"start"}
        justifyContent={"flex-start"}
        padding="24px"
        gap={"8px"}
        color= "#2D2D2D"
        minH="160px"
      >
        <Text
          fontSize="20px"
          lineHeight="30px"
          fontWeight={700}
        >
          {title}
        </Text>
        <Text
          fontSize="16px"
          lineHeight="24px"
          fontWeight={400}
        >
          {description}
        </Text>
      </Flex>
    </Flex>
  )
}
