import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { Dropdown, DropdownButton, NavDropdown } from 'react-bootstrap'
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';

class Header extends Component {

  logout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('_id')
    localStorage.removeItem('userType')
    localStorage.removeItem('firstName')
    window.location.href = '/login'

  }

  render() {

    if (localStorage.getItem('token') && localStorage.getItem('userType') == 'Admin') {
      var menu =
        <>
          <>
            <NavMenu>
              <NavDropdown title="Hotels" id="basic-nav-dropdown">
                <NavDropdown.Item href="/hotels">View Hotels</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/add/hotel">Add Hotels</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Products" id="basic-nav-dropdown">
                <NavDropdown.Item href="/item/all">View Products</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/add/item">Add Products</NavDropdown.Item>
              </NavDropdown>
              <NavLink to='/book' activeStyle>
                Bookings
              </NavLink>
              <NavLink to='/about' activeStyle>
                About Us
              </NavLink>
              <NavBtn>
                <NavBtnLink to='/admin/profile'>{localStorage.getItem('firstName')}</NavBtnLink>
              </NavBtn>
              <NavBtn>
                <NavBtnLink to='/logout' onClick={this.logout}>Logout</NavBtnLink>
              </NavBtn>
            </NavMenu>
          </>
        </>
    }
    else if (localStorage.getItem('token') && localStorage.getItem('userType') == 'Customer') {
      var menu =
        <>
          <NavMenu>
            <NavLink to='/hotels' activeStyle>
              Hotels
            </NavLink>
            <NavLink to='/book' activeStyle>
              Book
            </NavLink>
            <NavLink to='/shop' activeStyle>
              Shop
            </NavLink>
            <NavLink to='/about' activeStyle>
              About Us
            </NavLink>
            <NavBtn>
              <NavBtnLink to='/user/profile'>{localStorage.getItem('firstName')}</NavBtnLink>
            </NavBtn>
            <NavBtn>
              <NavBtnLink to='/logout' onClick={this.logout}>Logout</NavBtnLink>
            </NavBtn>
          </NavMenu>
        </>
    }
    else {
      var menu =
        <>
          <NavMenu>
            <NavLink to='/hotels' activeStyle>
              Hotels
            </NavLink>
            <NavLink to='/book' activeStyle>
              Book
            </NavLink>
            <NavLink to='/shop' activeStyle>
              Shop
            </NavLink>
            <NavLink to='/about' activeStyle>
              About Us
            </NavLink>
            <NavLink to='/register' activeStyle>
              Sign Up
            </NavLink>
            <NavBtn>
              <NavBtnLink to='/login'>Sign In</NavBtnLink>
            </NavBtn>
          </NavMenu>
        </>
    }

    return (

      // <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="header">
      //   <div className="container">
      //     <a className="navbar-brand" href="/">TripPlanner</a>
      //     <div className="collapse navbar-collapse" id="navbarResponsive">
      //       <ul className="navbar-nav ml-auto">
      //         {menu}
      //       </ul>
      //     </div>
      //   </div>
      // </nav>

      <>
        <Nav>
          <NavLink to='/' exact>
            TripPlanner
          </NavLink>
          <Bars />
          {menu}
        </Nav>
      </>

    )
  }
}

export default Header