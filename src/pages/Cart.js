import React from 'react'
import { Box, Heading, Divider, useToast } from '@chakra-ui/core'
import Navbar from '../components/NavBar'
import Table from '../components/Table'

const Cart = ({
  cartItemCount,
  setCartItemCount,
  itemsInCart,
  setItemsInCart,
}) => {
  const toast = useToast()

  const sumItems = (item) => {
    let price = parseInt(item.price.replace(/\W+/g, ''))

    let sum = price * item.quantity

    return sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }

  const sumTotal = (items) => {
    let total = 0
    items.forEach((item) => {
      let price = parseInt(item.price.replace(/\W+/g, ''))

      total += price * item.quantity
    })

    return total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }

  const removeFromCart = (item) => {
    setItemsInCart([...itemsInCart.filter((el) => el.id !== item.id)])
    setCartItemCount(cartItemCount - item.quantity)
  }

  const incrementHandler = (e, item) => {
    let num = parseInt(
      e.currentTarget.parentNode.parentNode.childNodes[0].value
    )

    const updatedItem = { ...item, quantity: num }

    setItemsInCart([
      ...itemsInCart.map((el) => (el.id !== item.id ? el : updatedItem)),
    ])

    num !== 9 || item.quantity !== 9
      ? setCartItemCount(cartItemCount + 1)
      : toast({
          title: 'Error.',
          description: "You can't buy more than 9 units.",
          status: 'error',
          duration: 3000,
          isClosable: true,
        })
  }

  const decrementHandler = (e, item) => {
    let num = parseInt(
      e.currentTarget.parentNode.parentNode.childNodes[0].value
    )

    const updatedItem = { ...item, quantity: num }

    setItemsInCart([
      ...itemsInCart.map((el) => (el.id !== item.id ? el : updatedItem)),
    ])

    num !== 1 || item.quantity !== 1
      ? setCartItemCount(cartItemCount - 1)
      : toast({
          title: 'Error.',
          description: 'You must buy at least one unit.',
          status: 'error',
          duration: 3000,
          isClosable: true,
        })
  }

  return (
    <>
      <Navbar num={cartItemCount} />
      <Box maxW={1140} ml='auto' mr='auto' mt={5} pl={15} pr={15} h='100vh'>
        <Box maxW='90%' ml='auto' mr='auto' mb={5}>
          <Heading fontSize={64} mb={2}>
            Cart
          </Heading>
          <Divider ml='auto' mr='auto' />
          <Table
            cartItems={itemsInCart}
            sumItems={sumItems}
            sumTotal={sumTotal}
            removeFromCart={removeFromCart}
            incrementHandler={incrementHandler}
            decrementHandler={decrementHandler}
          />
        </Box>
      </Box>
    </>
  )
}

export default Cart
