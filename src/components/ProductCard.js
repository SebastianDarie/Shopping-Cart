import React from 'react'
import { Box, Flex, Heading, Text, Image } from '@chakra-ui/core'

const ProductCard = ({ img, name, price, height }) => {
  return (
    <>
      <Flex flexDir='column' align='center' mt={10}>
        <Box maxH={300} maxW={300} mb={4}>
          <Image loading='lazy' h={height} w='auto' src={img} />
        </Box>
        <Heading as='h5' size='md' mb={2}>
          {name}
        </Heading>
        <Text>{price}</Text>
      </Flex>
    </>
  )
}

export default ProductCard
