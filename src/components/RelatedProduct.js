import React from 'react'
import { Heading, Link, SimpleGrid } from '@chakra-ui/core'
import ProductCard from './ProductCard'
import { NavLink } from 'react-router-dom'

const RelatedProduct = ({ laptops, setAddedToCart, setNumberOfItems }) => {
  let shuffledArr = []

  const shuffleArray = (array) => {
    const newArr = array.slice()
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[newArr[i], newArr[j]] = [newArr[j], newArr[i]]
    }

    return newArr
  }

  shuffledArr = shuffleArray(laptops).slice(0, 4)

  return (
    <>
      <Heading fontSize={42}>Related Products</Heading>
      <SimpleGrid columns={4} spacing={5}>
        {shuffledArr.map((laptop) => (
          <Link
            as={NavLink}
            to={{
              pathname: `/shop/${laptop.id}`,
              state: { laptop: laptop, arr: laptops },
            }}
            key={laptop.id}
            onClick={() => {
              setAddedToCart(false)
              setNumberOfItems(1)
            }}
          >
            <ProductCard
              img={laptop.img}
              name={laptop.name}
              price={laptop.price}
              height='155px'
            />
          </Link>
        ))}
      </SimpleGrid>
    </>
  )
}

export default RelatedProduct
