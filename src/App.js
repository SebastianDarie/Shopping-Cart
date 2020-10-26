import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { CSSReset, ThemeProvider, theme } from '@chakra-ui/core'

import Home from './pages/Home'
import Shop from './pages/Shop'
import About from './pages/About'

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
  return (
    <ThemeProvider theme={newTheme}>
      <CSSReset />
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/shop' component={Shop} />
          <Route exact path='/about' component={About} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
