import React from 'react';
import { InputGroup, FormControl, Button, Container } from 'react-bootstrap'

const SearchBar = ({keyword,setKeyword, placeholder}) => {
  return (
    <Container className="px-3">
    <InputGroup className="mb-3">
    <FormControl
      placeholder={placeholder}
      aria-label="Search Title or Company"
      aria-describedby="basic-addon2"
    />
    <InputGroup.Append>
      <Button variant="outline-primary">Search</Button>
    </InputGroup.Append>
  </InputGroup>
  </Container>
  );
}

export default SearchBar