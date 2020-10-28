import React from 'react'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Icon,
} from '@chakra-ui/core'
import { Link } from 'react-router-dom'

const BreadCrumbNav = ({ product }) => {
  return (
    <>
      {product ? (
        <Breadcrumb
          spacing='4px'
          separator={<Icon color='gray.300' name='chevron-right' />}
        >
          <BreadcrumbItem>
            <BreadcrumbLink as={Link} to='/'>
              Home
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink as={Link} to='/shop'>
              Shop
            </BreadcrumbLink>
          </BreadcrumbItem>{' '}
          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink>{product}</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      ) : (
        <Breadcrumb
          spacing='4px'
          separator={<Icon color='gray.300' name='chevron-right' />}
        >
          <BreadcrumbItem>
            <BreadcrumbLink as={Link} to='/'>
              Home
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink>Shop</BreadcrumbLink>
          </BreadcrumbItem>{' '}
        </Breadcrumb>
      )}
    </>
  )
}

export default BreadCrumbNav
