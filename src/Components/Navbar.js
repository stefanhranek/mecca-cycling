import React, { Component } from 'react'
import logo from '../Assets/Images/logo.png'

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <img src={logo} alt="site logo" />
      </div>
    )
  }
}
