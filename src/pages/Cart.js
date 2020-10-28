import React, { useState, useEffect } from 'react'
import { Box, Heading, Divider } from '@chakra-ui/core'
import Navbar from '../components/NavBar'

const Cart = (props) => {
  const [cartItems, setCartItems] = useState([])

  useEffect(() => {
    if (
      props.location.state === undefined ||
      props.location.state.items === undefined
    ) {
      return
    } else {
      const items = props.location.state.items
      setCartItems([...cartItems, ...items])
    }
    //eslint-disable-next-line
  }, [props.location.state])

  return (
    <>
      <Navbar num={cartItems.length} />
      <Box maxW={1140} ml='auto' mr='auto' mt={5} pl={15} pr={15} h='100vh'>
        <Box maxW='90%' ml='auto' mr='auto' mb={5}>
          <Heading fontSize={64} mb={2}>
            Cart
          </Heading>
          <Divider ml='auto' mr='auto' />
          {cartItems.map((item) => (
            <Box key={item}>
              {item.name}
              {item.price}

              {item.quantity}
            </Box>
          ))}
        </Box>
      </Box>
    </>
  )
}

export default Cart
