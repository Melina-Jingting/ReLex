import React from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap'

const SearchBar = ({keyword,setKeyword}) => {
  return (
    <InputGroup className="mb-3">
    <FormControl
      placeholder="Search Title or Company"
      aria-label="Search Title or Company"
      aria-describedby="basic-addon2"
    />
    <InputGroup.Append>
      <Button variant="outline-primary">Search</Button>
    </InputGroup.Append>
  </InputGroup>
  );
}

export default SearchBar