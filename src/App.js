import React, { useState } from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'
import { CSSReset, ThemeProvider, theme } from '@chakra-ui/core'

import Home from './pages/Home'
import Shop from './pages/Shop'
import About from './pages/About'
import Product from './pages/Product'
import Cart from './pages/Cart'

import './App.css'

const breakpoints = ['360px', '768px', '1024px', '1440px']
breakpoints.sm = breakpoints[0]
breakpoints.md = breakpoints[1]
breakpoints.lg = breakpoints[2]
breakpoints.xl = breakpoints[3]

const newTheme = {
  ...theme,
  breakpoints,
}

const App = () => {
  const [itemsInCart, setItemsInCart] = useState([])
  const [cartItemCount, setCartItemCount] = useState(0)

  return (
    <ThemeProvider theme={newTheme}>
      <CSSReset />
      <HashRouter>
        <Switch>
          <Route
            exact
            path='/'
            render={() => <Home cartItemCount={cartItemCount} />}
          />
          <Route
            exact
            path='/shop'
            render={() => <Shop cartItemCount={cartItemCount} />}
          />
          <Route
            exact
            path='/shop/:productId'
            render={(props) => (
              <Product
                {...props}
                itemsInCart={itemsInCart}
                cartItemCount={cartItemCount}
                setItemsInCart={setItemsInCart}
                setCartItemCount={setCartItemCount}
              />
            )}
          />
          <Route
            exact
            path='/cart'
            render={(props) => (
              <Cart
                itemsInCart={itemsInCart}
                cartItemCount={cartItemCount}
                setItemsInCart={setItemsInCart}
                setCartItemCount={setCartItemCount}
              />
            )}
          />
          <Route
            exact
            path='/about'
            render={() => <About cartItemCount={cartItemCount} />}
          />
        </Switch>
      </HashRouter>
    </ThemeProvider>
  )
}

export default App
