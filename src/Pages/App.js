import React, { Component } from 'react'
import{Switch,Route,NavLink} from 'react-router-dom'
import Home from './Home'
import Cart from './Cart'
import My from './My'


export default class App extends Component {
  render() {
    return (
      <div className='box'>
        <div className='main'>
          <Switch>
            <Route path='/home' component={Home}/>
            <Route path='/my' component={My}/>
            <Route path='/cart' component={Cart}/>
          </Switch>
        </div>
        <div className='footer'>
          <NavLink to='./home'>首页</NavLink>
          <NavLink to='./my'>我的</NavLink>
          <NavLink to='./cart'>购物车</NavLink>
        </div>
      </div>
    )
  }
}
