import React from 'react'
import { Button } from '@chakra-ui/core'
import { NavLink } from 'react-router-dom'

const CustomBtn = ({ text, width }) => {
  return (
    <Button
      as={NavLink}
      to='/shop'
      bg='gray.700'
      color='gray.50'
      letterSpacing='1.4px'
      fontWeight='bold'
      borderRadius={5}
      h={54}
      w={width}
      _hover={{ bg: 'yellow.300', color: 'red.500' }}
    >
      {text}
    </Button>
  )
}

export default CustomBtn
