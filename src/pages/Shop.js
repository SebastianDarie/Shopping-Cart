import React, { useState } from 'react'
import { Box, Flex, Link, Text, SimpleGrid } from '@chakra-ui/core'
import { NavLink } from 'react-router-dom'
import NavBar from '../components/NavBar'
import BreadCrumbNav from '../components/BreadCrumbNav'
import ProductCard from '../components/ProductCard'
import Pagination from '../components/Pagination'
import { data } from '../data/data'

const Shop = () => {
  const [laptops] = useState(data)
  const [currPage, setCurrPage] = useState(1)
  const [laptopsPerPage] = useState(9)

  const lastIdx = currPage * laptopsPerPage
  const firstIdx = lastIdx - laptopsPerPage
  const currLaptops = laptops.slice(firstIdx, lastIdx)

  const changePage = (pageNum) => setCurrPage(pageNum)

  return (
    <>
      <NavBar />

      <Box maxW={1140} ml='auto' mr='auto' mt={5} pl={15} pr={15} h='100vh'>
        <Box maxW='90%' ml='auto' mr='auto' mb={5}>
          <Flex justify='space-between' fontSize={12} mb={5}>
            <BreadCrumbNav />
            <Text>
              Showing 1-{laptopsPerPage} of {laptops.length}
            </Text>
          </Flex>
          <SimpleGrid columns={3} spacing={8}>
            {currLaptops.map((laptop) => (
              <Link
                as={NavLink}
                to={{
                  pathname: `/shop/${laptop.id}`,
                  state: { laptop: laptop, arr: laptops },
                }}
                key={laptop.id}
              >
                <ProductCard
                  img={laptop.img}
                  name={laptop.name}
                  price={laptop.price}
                  height='220px'
                />
              </Link>
            ))}
          </SimpleGrid>
        </Box>

        <Box mb={5}>
          <Pagination
            laptopsPerPage={laptopsPerPage}
            total={laptops.length}
            changePage={changePage}
          />
        </Box>
      </Box>
    </>
  )
}

export default Shop
