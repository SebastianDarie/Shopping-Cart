import React, { useState } from 'react'
import {
  Alert,
  AlertIcon,
  Box,
  Button,
  Flex,
  Heading,
  Text,
  IconButton,
  Image,
  PseudoBox,
  Link,
  List,
  ListItem,
  ListIcon,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from '@chakra-ui/core'
import { withRouter, NavLink } from 'react-router-dom'
import { MdSettings } from 'react-icons/md'
import { FiCpu } from 'react-icons/fi'
import { FaRegHdd } from 'react-icons/fa'
import { IoIosResize } from 'react-icons/io'
import NavBar from '../components/NavBar'
import BreadCrumbNav from '../components/BreadCrumbNav'
import ReviewForm from '../components/ReviewForm'
import RelatedProduct from '../components/RelatedProduct'

const Product = ({
  cartItemCount,
  setCartItemCount,
  itemsInCart,
  setItemsInCart,
  location,
}) => {
  const [addedToCart, setAddedToCart] = useState(false)
  const [numberOfItems, setNumberOfItems] = useState(1)

  const laptop = location.state.laptop
  const laptopArr = location.state.arr

  const addToCart = () => {
    setAddedToCart(true)

    setItemsInCart([
      ...itemsInCart,
      {
        ...laptop,
        quantity: numberOfItems,
      },
    ])

    setCartItemCount(cartItemCount + numberOfItems)
    setNumberOfItems(1)
  }

  const inputHandler = (e) => {
    let num = e.target.value.substring(1)

    num === ''
      ? setNumberOfItems(0)
      : setNumberOfItems(numberOfItems + parseInt(num))
  }

  const clickHandler = (e) => {
    const num = parseInt(
      e.currentTarget.parentNode.parentNode.childNodes[0].value
    )

    setNumberOfItems(num)
  }

  return (
    <>
      <NavBar num={cartItemCount} />

      <Box maxW={1140} ml='auto' mr='auto' mt={5} pl={15} pr={15} h='100vh'>
        <Box maxW='90%' ml='auto' mr='auto' mb={5}>
          <Flex justify='space-between' fontSize={12} mb={5}>
            <BreadCrumbNav product={laptop.name} />
          </Flex>

          <Alert
            status='success'
            mb={5}
            style={{ display: addedToCart ? '' : 'none' }}
          >
            <AlertIcon />"{laptop.name}" has been added to your cart.
            <Link as={NavLink} to='/cart' ml='auto'>
              <Button letterSpacing='1.4px' fontWeight='bold'>
                View Cart
              </Button>
            </Link>
            <IconButton
              aria-label='dismiss-alert'
              icon='small-close'
              bg='#c6f5d5'
              _hover={{ bg: '#c6f5d5' }}
              onClick={() => setAddedToCart(false)}
            />
          </Alert>

          <Box>
            <Flex flexDir='row' justify='flex-start' mb={10}>
              <PseudoBox
                w='48%'
                opacity={1}
                _hover={{
                  transform: 'scale(1.25)',
                  transition: 'all .5s ease-in-out',
                }}
              >
                <Image loading='lazy' src={laptop.img}></Image>
              </PseudoBox>

              <Flex flexDir='column' w='48%' ml={10}>
                <Heading as='h1' size='2xl' mb={4}>
                  {laptop.name}
                </Heading>
                <Text fontSize={20} fontWeight={700} mb={8}>
                  {laptop.price}
                </Text>

                <List spacing={3} mb={5}>
                  <ListItem>
                    <ListIcon icon={FiCpu} color='green.500' />
                    {laptop.cpu}
                  </ListItem>
                  <ListItem>
                    <ListIcon icon={MdSettings} color='green.500' />
                    {laptop.gpu}
                  </ListItem>
                  <ListItem>
                    <ListIcon icon={FaRegHdd} color='green.500' />
                    {laptop.storage}
                  </ListItem>
                  <ListItem>
                    <ListIcon icon={IoIosResize} color='green.500' />
                    {laptop.display}
                  </ListItem>
                </List>

                <Flex flexDir='row'>
                  <NumberInput
                    size='sm'
                    defaultValue={1}
                    min={1}
                    max={9}
                    mr={5}
                  >
                    <NumberInputField onChange={inputHandler} />
                    <NumberInputStepper>
                      <NumberIncrementStepper onClick={clickHandler} />
                      <NumberDecrementStepper onClick={clickHandler} />
                    </NumberInputStepper>
                  </NumberInput>
                  <Button
                    bg='gray.700'
                    color='gray.50'
                    letterSpacing='1.4px'
                    fontWeight='bold'
                    borderRadius={5}
                    h='auto'
                    w={110}
                    _hover={{ bg: 'green.300', color: '#D368AA' }}
                    onClick={addToCart}
                  >
                    Add to Cart
                  </Button>
                </Flex>
              </Flex>
            </Flex>

            <Flex mb={8}>
              <Tabs>
                <TabList>
                  <Tab>Description</Tab>
                  <Tab>Reviews(0)</Tab>
                </TabList>

                <TabPanels maxW='100%'>
                  <TabPanel>
                    <Text>
                      Nam et complectitur verbis, quod vult, et dicit plane,
                      quod intellegam. Quaerimus enim finem bonorum. Illum
                      mallem levares, quo optimum atque humanissimum virum, Cn.
                      Cum sciret confestim esse moriendum eamque mortem
                      ardentiore studio peteret, quam Epicurus voluptatem
                      petendam putat. Inde sermone vario sex illa a Dipylo
                      stadia confecimus. Heri, inquam, ludis commissis ex urbe
                      profectus veni ad vesperum lorem hipsum. Small batch
                      godard post-ironic brunch williamsburg irure commodo synth
                      bespoke blog organic subway tile. Vaporware ugh 90’s in
                      sriracha tempor yr beard iceland sustainable.
                    </Text>
                  </TabPanel>
                  <TabPanel>
                    <ReviewForm name={laptop.name} />
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </Flex>

            <Flex flexDir='column' mb={5}>
              <RelatedProduct
                laptops={laptopArr}
                setAddedToCart={setAddedToCart}
                setNumberOfItems={setNumberOfItems}
              />
            </Flex>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default withRouter(Product)
