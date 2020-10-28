import React from 'react'
import { Box, Flex, Heading, Text, Image } from '@chakra-ui/core'

const TeamCard = ({ name, position, img }) => {
  return (
    <Flex flexDir='column' align='center'>
      <Box bg='gray.50' m={10}>
        <Box>
          <Image loading='lazy' src={img}></Image>
        </Box>
        <Box mt={5}>
          <Heading as='h5' size='xl' textAlign='left' ml={5} mb={5}>
            {name}
          </Heading>
        </Box>
        <Box textAlign='left' ml={5} mb={5}>
          <Text>{position}</Text>
        </Box>
      </Box>
    </Flex>
  )
}

export default TeamCard
