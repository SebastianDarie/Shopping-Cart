import React from 'react'
import { Box, Flex, Heading, Text } from '@chakra-ui/core'
import { GiAutoRepair, GiComputerFan } from 'react-icons/gi'
import { CgLaptop } from 'react-icons/cg'

const Card = ({ title, icon }) => {
  return (
    <Flex flexDir='column' align='center'>
      <Box
        bg='#fff'
        m={10}
        p='40px 20px 40px 20px'
        boxShadow='0px 4px 24px 0px rgba(0, 0, 0, 0.1)'
        borderRadius={6}
      >
        <Box
          bg='yellow.300'
          color='red.500'
          borderRadius='50%'
          fontSize='40px'
          padding='4px'
          w={88}
          h={88}
          m='auto'
        >
          <Flex mt={5} align='center' justify='center'>
            {icon === 'repair' ? (
              <GiAutoRepair />
            ) : icon === 'tech' ? (
              <GiComputerFan />
            ) : (
              <CgLaptop />
            )}
          </Flex>
        </Box>
        <Box mt={5}>
          <Heading as='h5' size='lg' textAlign='center' mb={5}>
            {title}
          </Heading>
        </Box>
        <Box textAlign='center'>
          <Text>Narw tbh flannel. Hot lorem gochujangtogen.</Text>
        </Box>
      </Box>
    </Flex>
  )
}

export default Card
