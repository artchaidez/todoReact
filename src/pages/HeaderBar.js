import React, { useContext } from 'react'
import UserBar from '../user/Userbar'
import Header from '../Header'
import { StateContext } from '../Contexts'
import { Link } from 'react-navi';
import { Navbar, Nav, Container } from 'react-bootstrap'


export default function HeaderBar () {
    
    const {state} = useContext(StateContext)
    const {user} = state;
    
    return (
        <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/"><Header text="My Todo List" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {user && <Nav.Link><Link href="/todo/create">Create New Todo</Link></Nav.Link>}
            </Nav>
            <React.Suspense fallback={"Loading..."}>
              <UserBar />
            </React.Suspense>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  
    )
}
