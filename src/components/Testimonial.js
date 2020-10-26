import React from 'react'
import { Box, Flex, Image, Text } from '@chakra-ui/core'
import { GiMoebiusStar } from 'react-icons/gi'

const Testimonial = ({ name, location, img, stars }) => {
  let starArr = Array.from(Array(Number(stars)).keys())

  return (
    <Box
      maxW='50%'
      bg='#fff'
      m={10}
      p='40px 20px 40px 20px'
      boxShadow='0px 4px 24px 0px rgba(0, 0, 0, 0.1)'
      borderRadius={6}
    >
      <Box textAlign='center'>
        <Text>Mustache flexitarian prism sriracha enamel pin offal meh</Text>
        <Text>shabby chic four loko meggings subway tile portland</Text>
        <Text>pickled narwhal ennui truffaut neutra shaman.</Text>
      </Box>
      <Flex flexDir='column' align='center'>
        <Box mt={5}>
          <Image borderRadius='50%' src={img}></Image>
        </Box>
        <Box mt={5} mb={5}>
          <Text>{name} </Text>
          <Text textAlign='center' fontSize={12}>
            {location}
          </Text>
        </Box>
        <Flex>
          {starArr.map((star) => (
            <GiMoebiusStar key={star} />
          ))}
        </Flex>
      </Flex>
    </Box>
  )
}

export default Testimonial
