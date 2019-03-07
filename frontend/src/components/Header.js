import React, {Component} from 'react'
import { Link } from 'react-router-dom'

class Header extends Component{
  render(){
    return(
      <div className='header'>
        <h1>Readable</h1>
        <div className="header-link">
          <Link to="/redux">Redux</Link>
          <Link to="/">Udacity</Link>
          <Link to="">Other</Link>
        </div>
      </div>
    )
  }
}

export default Header
