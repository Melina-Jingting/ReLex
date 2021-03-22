import React from "react";
import { Form } from "react-bootstrap";

const FilterForm = (formFields) => {
  return formFields.map((formSection) => {
    <Form>
      {formSection.map((formElement) => {
        <Form.Group>
            <Form.Control type="text" name={formElement.name} placeholder={formElement.placeholder} />
        </Form.Group>;
      })}
      <Button variant="primary" type="submit">
        Add Filter
      </Button>
    </Form>;
  });
};

export default FilterForm;
