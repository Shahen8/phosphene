import React from "react";
import { Navbar, Container, Nav} from "react-bootstrap";
import { Link } from "react-router-dom";
import "./NavMenu.css";
import styled from "styled-components";
import logo from "../../images/logo2.png";

const StyledLink = styled.div`
  a:hover {
    text-decoration: none;
  }

  a {
    color: #303030;
    font-size: 15px;
    font-weight: 500;
  }

  a:focus {
    color: grey;
  }

  img {
    border-radius: 100px;
    height: 2.8em;
  }

  .link {
    border-right: 1px solid;
    padding: 0.5em;
  }
  .navbar {
    border-bottom: 1px solid;
  }
`;

function NavMenu() {
  return (
    <div>
      <StyledLink>
        <Navbar
          collapseOnSelect
          className="navbar"
          expand="lg"
          bg="white"
          variant="light"
          expand="lg"
        >
          <Navbar.Brand href="/home">
            <img src={logo} alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Container>
              <Nav className="mr-auto">
                
                  {" "}
                  <Link className="link " to="/home">
                    Home
                  </Link>{" "}
                
                  {" "}
                  <Link className="link " to="/aboutus">
                    About Us
                  </Link>{" "}
              </Nav>
             
              <Nav>
                <div className="input-group rounded">
                  <input
                    type="search"
                    className="form-control rounded"
                    placeholder="Search"
                    aria-label="Search"
                    aria-describedby="search-addon"
                  />
                  <span
                    className="input-group-text border-0 ml-2"
                    id="search-addon"
                  >
                    <i className="fa fa-search">
                    </i>
                  </span>
                </div>
              </Nav>
            </Container>
          </Navbar.Collapse>
        </Navbar>
      </StyledLink>
    </div>
  );
}

export default NavMenu;
