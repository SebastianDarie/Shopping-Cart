import React from 'react'
import { Box, Flex, Link, Image, Text } from '@chakra-ui/core'
import { FaShoppingCart } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <Flex
      as='nav'
      align='center'
      justify='space-between'
      bg='green.300'
      color='#D368AA'
    >
      <Flex align='center' ml={5} mr={5} mt={-5} mb={-4}>
        <Box>
          <Image
            size='120px'
            src='../../src/images/logo_transparent.png'
            alt='logo'
          />
        </Box>
      </Flex>

      <Flex justify='center' align='center' mr={5}>
        <Link as={NavLink} to='/' fontSize={20} fontWeight='bold' mr={5}>
          Home
        </Link>
        <Link as={NavLink} to='/shop' fontSize={20} fontWeight='bold' mr={5}>
          Shop
        </Link>
        <Link as={NavLink} to='/about' fontSize={20} fontWeight='bold' mr={5}>
          About
        </Link>
        <Link as={NavLink} to='/cart' fontWeight='bold'>
          <Flex align='center' justify='center' mt={1} ml={-2}>
            <FaShoppingCart />
            <Text>0</Text>
          </Flex>
        </Link>
      </Flex>
    </Flex>
  )
}

export default NavBar
