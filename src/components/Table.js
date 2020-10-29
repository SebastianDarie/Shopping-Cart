import React from 'react'
import {
  Flex,
  Link,
  Image,
  IconButton,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Heading,
  Text,
  Button,
  Divider,
} from '@chakra-ui/core'
import { NavLink } from 'react-router-dom'
import { MdDeleteForever } from 'react-icons/md'
import { data } from '../data/data'

const Table = ({
  cartItems,
  sumItems,
  sumTotal,
  removeFromCart,
  incrementHandler,
  decrementHandler,
}) => {
  return (
    <Flex w={977} justify='space-between' flexDir='column'>
      <table>
        <thead>
          <tr>
            <th className='product-img'>&nbsp;</th>
            <th className='product-name'>Product</th>
            <th className='product-price'>Price</th>
            <th className='product-quantity'>Quantity</th>
            <th className='product-subtotal'>Subtotal</th>
            <th className='product-delete'>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id}>
              <td className='product-img'>
                <Image w='auto' h='auto' src={item.img} />
              </td>
              <td className='product-name'>
                <Link
                  as={NavLink}
                  to={{
                    pathname: `/shop/${item.id}`,
                    state: { laptop: item, arr: data },
                  }}
                >
                  {item.name}
                </Link>
              </td>

              <td className='product-price'>{item.price}</td>
              <td className='product-quantity'>
                <NumberInput
                  size='sm'
                  defaultValue={item.quantity}
                  min={1}
                  max={9}
                  mr={5}
                >
                  <NumberInputField isReadOnly />
                  <NumberInputStepper>
                    <NumberIncrementStepper
                      onClick={(e) => incrementHandler(e, item)}
                    />
                    <NumberDecrementStepper
                      onClick={(e) => decrementHandler(e, item)}
                    />
                  </NumberInputStepper>
                </NumberInput>
              </td>
              <td className='product-subtotal'>${sumItems(item)}</td>
              <td className='product-delete'>
                <IconButton
                  aria-label='Delete item'
                  icon={MdDeleteForever}
                  onClick={() => removeFromCart(item)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Flex
        align='center'
        flexDir='column'
        justify='center'
        m='auto'
        mt={10}
        p={4}
        w='50%'
        border='1px solid #f0f0f0'
      >
        <Heading as='h2' fontSize={16} mb={4}>
          Cart Total
        </Heading>
        <Flex flexDir='row'>
          <Text mr={10}>Total</Text>
          <Text>${cartItems === [] ? 0 : sumTotal(cartItems)}</Text>
        </Flex>
        <Divider
          borderWidth={2}
          borderColor='yellow.300'
          w='100%'
          m='auto'
          pt={3}
        />
        <Button
          bg='gray.700'
          color='gray.50'
          letterSpacing='1.4px'
          fontWeight='bold'
          borderRadius={5}
          mt={5}
          _hover={{ bg: 'green.300', color: '#D368AA' }}
        >
          Proceed To Checkout
        </Button>
      </Flex>
    </Flex>
  )
}

export default Table
