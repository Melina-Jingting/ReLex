import React, { Fragment } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Container } from "../common/Container/styles";

const HomeScreen = () => {
  return (
    <Fragment>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Navbar.Brand href="#home">
          <a>
            <img
              src={require(`../img/svg/logo.svg`)}
              alt="how-it-works.svg"
              width="150"
            />
          </a>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Nav>
            {/* <Nav.Link href="#deets">More deets</Nav.Link> */}
            <Nav.Link href="#memes">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Container>
        <h1>Make informed career decisions</h1>
        <h5>
          Lookup is a data-driven software platform which presents aggregated
          data of real career paths and derives insights to enrich your career
          discovery process. Begin your journey to career fulfillment with us
          today!
        </h5>
      </Container>
    </Fragment>
  );
};

export default HomeScreen;
