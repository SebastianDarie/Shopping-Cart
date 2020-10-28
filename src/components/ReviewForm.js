import React from 'react'
import {
  Alert,
  AlertIcon,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Heading,
  Text,
  Textarea,
  PseudoBox,
} from '@chakra-ui/core'
import { FaRegStar } from 'react-icons/fa'

const ReviewForm = ({ name }) => {
  return (
    <>
      <Flex flexDir='column' mt={5} w={977}>
        <Alert status='info' mb={4}>
          <AlertIcon />
          There are no reviews yet!
        </Alert>
        <Heading as='h4' fontSize={20} mb={2}>
          Be the first to review "{name}"
        </Heading>
        <Text fontSize={16} mb={4}>
          Your email address will not be published. Required fields are marked *
        </Text>
        <Flex flexDir='row' mb={5}>
          <Text>Your rating *</Text>
          <Flex flexDir='row' ml={2}>
            <PseudoBox
              as={FaRegStar}
              fontSize={24}
              _hover={{ color: '#ffb100' }}
            ></PseudoBox>
            <PseudoBox
              as={FaRegStar}
              fontSize={24}
              _hover={{ color: '#ffb100' }}
            ></PseudoBox>
            <PseudoBox
              as={FaRegStar}
              fontSize={24}
              _hover={{ color: '#ffb100' }}
            ></PseudoBox>
            <PseudoBox
              as={FaRegStar}
              fontSize={24}
              _hover={{ color: '#ffb100' }}
            ></PseudoBox>
            <PseudoBox
              as={FaRegStar}
              fontSize={24}
              _hover={{ color: '#ffb100' }}
            ></PseudoBox>
          </Flex>
        </Flex>

        <Flex flexDir='column'>
          <FormControl isRequired mb={10}>
            <FormLabel htmlFor='review'>Your review</FormLabel>
            <Textarea />
          </FormControl>
          <Flex flexDir='row' justify='space-even' mb={5}>
            <FormControl isRequired mr={5}>
              <FormLabel htmlFor='name'>Name</FormLabel>
              <Input id='name' />
            </FormControl>
            <FormControl isRequired>
              <FormLabel htmlFor='email'>Email</FormLabel>
              <Input id='email' />
            </FormControl>
          </Flex>
          <Button
            bg='gray.700'
            color='gray.50'
            letterSpacing='1.4px'
            fontWeight='bold'
            borderRadius={5}
            pt={4}
            pb={4}
            pl={2}
            pr={2}
            maxW={80}
            _hover={{ bg: 'green.300', color: '#D368AA' }}
          >
            Submit
          </Button>
        </Flex>
      </Flex>
    </>
  )
}

export default ReviewForm
