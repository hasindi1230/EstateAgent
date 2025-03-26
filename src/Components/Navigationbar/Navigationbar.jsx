import React from 'react'
import {Container, Nav, Navbar} from 'react-bootstrap'
import './Navigationbar.css'


function Navigationbar() {
  return (
    <Navbar className='Navbar' expand='lg' >
      <Container>
        <Navbar.Brand>
          <img src="/housinglogo.png" alt="logo" className='logo' />
          <span className='name'>Estate Agent</span>
        </Navbar.Brand> 

        {/*In bootstrap we use aria-controls attribute in the Navbar.toggle
        to link with the navbar.collapse.*/}
        <Navbar.Toggle aria-controls='collapse-navbar' />

        <Navbar.Collapse className='wholeLinks' id='collapse-navbar' >
          <nav className='links' >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/About">About</Nav.Link>
            <Nav.Link href="/Contact">Contact</Nav.Link>
          </nav>
        </Navbar.Collapse>
      </Container>

    </Navbar>
  )
}

export default Navigationbar