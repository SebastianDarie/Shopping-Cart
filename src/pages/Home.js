import React from 'react'
import { Box, Divider, Flex, Heading, Text, Image } from '@chakra-ui/core'
import NavBar from '../components/NavBar'
import Card from '../components/Card'
import CustomBtn from '../components/CustomBtn'
import Testimonial from '../components/Testimonial'

const Home = () => {
  return (
    <>
      <NavBar />
      <Flex justify='center' mb={20}>
        <Box w='46%'>
          <Image
            loading='lazy'
            h={600}
            src='../../src/images/rog-keyboard.jpg'
          />
        </Box>
        <Flex w='54%' bg='gray.900' color='gray.50' justify='left'>
          <Flex flexDir='column' justify='center' ml={10}>
            <Heading mb={10} size='2xl' w='55%'>
              Gaming Laptops Services
            </Heading>
            <Text fontSize='md' w='65%' mb={10}>
              Suspendisse potenti. Donec sed mi lorem. Quisque euismod, tortor
              non commodo malesuada, ante nibh posuere mauris, vitae bibendum
              augue ipsum sed tortor. Quisque sit amet est ac turpis malesuada
              fermentum.
            </Text>
            <CustomBtn text='Shop Page' width='170px' />
          </Flex>
        </Flex>
      </Flex>
      <Flex justify='center' align='center' mb={10} flexDir='column'>
        <Flex flexDir='column' align='center' maxW={800} mb={10}>
          <Box mt={35}>
            <Heading as='h1' size='2xl'>
              Our Services
            </Heading>
          </Box>
          <Divider
            borderWidth={5}
            borderColor='yellow.300'
            w={80}
            m='auto'
            pt={6}
          />
          <Box mt={8}>
            <Text>
              Seitan man braid microdosing roof party wolf semiotics lomo lorem
              authentic health goth pickled heirloom irony four dollar toast
              shoreditch. Vice knausgaard echo park microdosing jianbing
              asymmetrical speed test toast noo.
            </Text>
          </Box>
        </Flex>

        <Flex align='center' justify='center' maxW={1100} m='auto'>
          <Flex flexDir='row'>
            <Card title='Laptop Maintenance' icon='repair' />
            <Card title='Breakthrough Tech' icon='tech' />
            <Card title='Aesthetic Design' icon='design' />
          </Flex>
        </Flex>

        <Box mt={8}>
          <CustomBtn text='Show All Services' width='220px' />
        </Box>
      </Flex>

      <Flex bg='gray.900' align='center' justify='center' flexDir='column'>
        <Box mt={10}>
          <Heading as='h1' color='gray.50' fontSize={44} textAlign='center'>
            What Clients Say
          </Heading>
        </Box>
        <Divider
          borderWidth={5}
          borderColor='yellow.300'
          w={80}
          m='auto'
          pt={6}
        />
        <Flex flexDir='row' color='gray.900'>
          <Testimonial
            name='Mark Spencer'
            location='Corolla, NC'
            img='https://mllj2j8xvfl0.i.optimole.com/tpsISOY-VbWzObbg/w:60/h:60/q:auto/https://s33834.pcdn.co/craft-beer/wp-content/uploads/sites/508/2020/05/ti-neve-craft-beer-25.png'
            stars='5'
          />
          <Testimonial
            name='Albert James'
            location='Toronto, CA'
            img='https://mllj2j8xvfl0.i.optimole.com/tpsISOY-Lf6uOITZ/w:60/h:60/q:auto/https://s33834.pcdn.co/craft-beer/wp-content/uploads/sites/508/2020/05/ti-neve-craft-beer-28.png'
            stars='4'
          />
        </Flex>
        <Text color='gray.50'>
          Copyright ©2020 Flame Tastic. All rights reserved
        </Text>
      </Flex>
    </>
  )
}

export default Home
