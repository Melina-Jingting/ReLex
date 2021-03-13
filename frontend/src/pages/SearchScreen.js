import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import BarChart from "../components/BarChart";
import Listing from "../components/Listing";
import ResultAnalysis from "../components/ResultAnalysis";
import SearchBar from "../components/SearchBar";
import Header from "../components/Header";

const SearchScreen = () => {
  return (
    <Container>
      <Header />

      <SearchBar />
      <Row>
        <Col xs={4}>
          <Listing />
        </Col>
        <Col xs={8}>
          <ResultAnalysis />
        </Col>
      </Row>
    </Container>
  );
};

export default SearchScreen;
