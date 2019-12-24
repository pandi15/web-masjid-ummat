import React from 'react'
import { Switch, HashRouter } from 'react-router-dom'
import Home from 'views/home'
import { PublicRoute } from './middleware'


const router = () => {
  return (
    <HashRouter>
      <Switch>
        <PublicRoute exact path="/" component={Home} title="Home" />
      </Switch>
    </HashRouter>
  )
}

export default router
