import React from 'react';
import {Nav,Navbar,NavDropdown,Form,FormControl,Row,Container } from 'react-bootstrap'
import FormDialog from './Modals'
import Button from '@material-ui/core/Button';


class TopNavbar extends React.Component{
    render() {
        
return(
  
<Navbar  bg="light" expand="lg" fixed="top">
  <Container>
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#link">Link</Nav.Link>
      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Form inline>
      {/* <FormControl type="text" placeholder="Search" className="mr-sm-2" /> */}
      {/* <Button variant="outline-success" className="mr-sm-2">Search</Button> */}
      <Button variant="outlined" color="primary" className="mr-sm-2">Register</Button>
      <FormDialog/>
    </Form>
  </Navbar.Collapse>
  </Container>
</Navbar>

        )
    }
}

export default TopNavbar;