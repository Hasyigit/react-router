import React from 'react'
import {Navbar,Nav,Form,FormControl,Button, Container} from 'react-bootstrap'
import About from './About'
import Contact from './Contact'
import Home from './Home'
import {
    BrowserRouter as Router,
    Routes,
    Switch,
    Link,
    Route
  } from "react-router-dom";

function header() {
    return (
        <Router>
        <div>
            <Navbar bg="dark" variant={"dark"} expand="lg">
        <Container>
                
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link as={Link} to={"/home"}>Home</Nav.Link>
                <Nav.Link as={Link} to={"/about"}>About</Nav.Link>
                <Nav.Link as={Link} to={"/contact"}>Contact</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
        </div>
        <div>
            <Routes>
                <Route exact path="/about" element={<About/>} >
                    
                </Route>

                <Route exact path="/home" element={<Home/>}>
                    
                </Route>

                <Route exact path="/contact" element={<Contact/>}>
                    
                </Route>

            </Routes>
        </div>
        </Router>
    )
}

export default header
