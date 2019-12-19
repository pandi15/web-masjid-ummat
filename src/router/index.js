import React from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'
import Home from 'views/home'
import { PublicRoute } from './middleware'


const router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <PublicRoute exact path="/" component={Home} title="Home" />
      </Switch>
    </BrowserRouter>
  )
}

export default router
