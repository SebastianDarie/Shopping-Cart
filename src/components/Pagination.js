import React from 'react'
import { Button, Flex, Text } from '@chakra-ui/core'

const Pagination = ({ laptopsPerPage, total, changePage }) => {
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(total / laptopsPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <Flex align='center' justify='center'>
      {pageNumbers.map((number) => (
        <Button
          key={number}
          p={2}
          mt={10}
          ml={2}
          mr={2}
          onClick={() => changePage(number)}
        >
          <Text textAlign='center' fontSize='24px' fontWeight='bold'>
            {number}
          </Text>
        </Button>
      ))}
    </Flex>
  )
}

export default Pagination
