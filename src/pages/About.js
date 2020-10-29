import React from 'react'
import {
  Box,
  Divider,
  Flex,
  Heading,
  Text,
  Image,
  PseudoBox,
} from '@chakra-ui/core'
import {
  SiIntel,
  SiNvidia,
  SiAmd,
  SiWindows,
  SiGogDotCom,
} from 'react-icons/si'
import NavBar from '../components/NavBar'
import TeamCard from '../components/TeamCard'

const About = ({ cartItemCount }) => {
  return (
    <>
      <NavBar num={cartItemCount} />
      <Flex
        bg='gray.600'
        position='relative'
        h={262}
        p={25}
        flexDir='row'
        align='center'
        justify='flex-start'
      >
        <Box
          backgroundImage='url(../src/images/asus-gaming.jpg)'
          backgroundPosition='center center'
          backgroundRepeat='no-repeat'
          backgroundSize='cover'
          opacity={0.25}
          h='100%'
          w='100%'
          top={0}
          left={0}
          position='absolute'
        ></Box>
        <Box maxW={1140} position='relative'>
          <Flex align='center' justify='flex-start' flexDir='row'>
            <Box>
              <Heading as='h1' size='2xl' color='gray.50' fontSize={72} p={15}>
                ABOUT US
              </Heading>
            </Box>
          </Flex>
        </Box>
      </Flex>

      <Flex justify='center' align='center' mb={10} flexDir='row' h={769}>
        <Flex
          flexDir='column'
          align='flex-start'
          justify='center'
          w='50%'
          pl={40}
          ml={20}
          mb={10}
        >
          <Box mt={35}>
            <Heading as='h1' size='2xl'>
              Our Story
            </Heading>
          </Box>
          <Divider borderWidth={5} borderColor='yellow.300' w={50} pt={6} />
          <Box mt={8}>
            <Text>
              Church-key stumptown authentic salvia food truck humblebrag raw
            </Text>
            <Text>
              denim, pork belly. Yr four loko literally copper mug. Lo-fi
              fashion axe next
            </Text>
            <Text>
              level small batch, ugh selfies flannel pok pok polaroid listicle
              synth farm-
            </Text>
            <Text>
              to-table. Small batch poke pitchfork iPhone kinfolk distillery
              crays viral
            </Text>
            <Text>
              vinyl. Mustache flexitarian prism sriracha enamel pin offal meh
              shabby
            </Text>
            <Text>
              chic four loko meggings subway tile portland pickled narwhal
              ennui.
            </Text>
            <Text>
              Truffaut neutra shaman helvetica pitchfork hoodie letterpress twee
              hell
            </Text>
            <Text>of. Cardigan gochujang mixtape edison bulb</Text>
          </Box>
        </Flex>

        <Flex align='flex-end' justify='center' w='50%' ml={0}>
          <Image
            loading='lazy'
            w={460}
            h={569}
            src='../src/images/story.jpg'
          ></Image>
        </Flex>
      </Flex>

      <Flex justify='center' align='center' flexDir='column'>
        <Flex flexDir='column' align='center' maxW={800}>
          <Box mt={35}>
            <Heading as='h1' size='2xl'>
              Our Team
            </Heading>
          </Box>
          <Divider
            borderWidth={5}
            borderColor='yellow.300'
            w={50}
            m='auto'
            pt={6}
          />
        </Flex>
      </Flex>

      <Flex align='center' justify='center' maxW={1100} m='auto'>
        <Flex flexDir='row' mb={10}>
          <TeamCard
            name='Larry George'
            position='Founder'
            img='https://mllj2j8xvfl0.i.optimole.com/tpsISOY--7bMBIOW/w:319/h:398/q:auto/https://s33834.pcdn.co/craft-beer/wp-content/uploads/sites/508/2020/05/ti-neve-craft-beer-16.png'
          />
          <TeamCard
            name='Jason Shaw'
            position='Production Manager'
            img='https://mllj2j8xvfl0.i.optimole.com/tpsISOY-KvwrblE2/w:319/h:398/q:auto/https://s33834.pcdn.co/craft-beer/wp-content/uploads/sites/508/2020/05/ti-neve-craft-beer-18.png'
          />
          <TeamCard
            name='Mike Morgan'
            position='Laptop Expert'
            img='https://mllj2j8xvfl0.i.optimole.com/tpsISOY-qp9YNFB0/w:319/h:398/q:auto/https://s33834.pcdn.co/craft-beer/wp-content/uploads/sites/508/2020/05/ti-neve-craft-beer-17.png'
          />
        </Flex>
      </Flex>

      <Flex bg='gray.900' align='center' justify='center' flexDir='column'>
        <Box mt={10}>
          <Heading as='h1' color='gray.50' fontSize={44} textAlign='center'>
            Partnered Brands
          </Heading>
        </Box>
        <Divider
          borderWidth={5}
          borderColor='yellow.300'
          w={80}
          m='auto'
          pt={6}
        />
        <Box color='gray.50' textAlign='center' fontSize={16} mt={5} mb={15}>
          <Text>
            Authentic tousled food truck next level pitchfork flexitarian,
            quinoa marfa blue bottle chia tilde readymade
          </Text>
          <Text>
            deep v forage palo santo. Whatever church-key waistcoat art party
            letterpress kale chips fashi.
          </Text>
        </Box>
        <Flex flexDir='row' color='gray.900' mt={10} mb={15}>
          <PseudoBox
            as={SiAmd}
            w={16}
            h={16}
            color='gray.50'
            mr={10}
            _hover={{ color: 'black' }}
          ></PseudoBox>
          <PseudoBox
            as={SiNvidia}
            w={16}
            h={16}
            color='gray.50'
            mr={10}
            _hover={{ color: 'green.500' }}
          ></PseudoBox>
          <PseudoBox
            as={SiIntel}
            w={16}
            h={16}
            color='gray.50'
            mr={10}
            _hover={{ color: 'blue.500' }}
          ></PseudoBox>
          <PseudoBox
            as={SiGogDotCom}
            w={16}
            h={16}
            color='gray.50'
            mr={10}
            _hover={{ color: 'purple.600' }}
          ></PseudoBox>
          <PseudoBox
            as={SiWindows}
            w={16}
            h={16}
            color='gray.50'
            mr={10}
            _hover={{ color: 'cyan.400' }}
          ></PseudoBox>
        </Flex>
        <Text color='gray.50' mt={5}>
          Copyright ©2020 Flame Tastic. All rights reserved
        </Text>
      </Flex>
    </>
  )
}

export default About
