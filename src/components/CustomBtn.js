import React from 'react'
import { Button } from '@chakra-ui/core'
import { NavLink } from 'react-router-dom'

const CustomBtn = ({ text, width, height }) => {
  return (
    <Button
      as={NavLink}
      to='/shop'
      bg='gray.700'
      color='gray.50'
      letterSpacing='1.4px'
      fontWeight='bold'
      borderRadius={5}
      h={height}
      w={width}
      _hover={{ bg: 'green.300', color: '#D368AA' }}
    >
      {text}
    </Button>
  )
}

export default CustomBtn
