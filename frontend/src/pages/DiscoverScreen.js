import React, { useState, useEffect, Fragment } from "react";
import Tree from "../components/TreeDiagram/Tree";
import Header from "../components/Header";
import axios from "axios";
import { useTheme, makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
import FilterListIcon from "@material-ui/icons/FilterList";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";

import {
  Form,
  Button,
  Container,
  Dropdown,
  DropdownButton,
  Row,
  Col,
} from "react-bootstrap";
import { Collapse } from "@material-ui/core";

const DiscoverScreen = () => {
  const [size, setSize] = useState([window.innerHeight, window.innerWidth]);
  const [height, width] = size;
  const [isLoading, setLoading] = useState(true);
  const [leftData, setLeftData] = useState([]);
  const [rightData, setRightData] = useState([]);
  const [centralNodeValues, setCentralNodeValues] = useState([]);
  const [validated, setValidated] = useState(false);

  //variables for drawer
  const [open, setOpen] = useState(false);
  const theme = useTheme();

  //variables for formElement
  let filterFormFields = {
    centralNodeExperience: {
      label: "Central Node Experience",
      id: "centralNodeExperience",
      formElements: [
        {
          name: "company_name",
          placeholder: "Company",
        },
        {
          name: "title",
          placeholder: "Title",
        },
      ],
    },
    centralNodeEducation: {
      label: "Central Node Education",
      id: "centralNodeEducation",
      formElements: [
        {
          name: "university",
          placeholder: "School",
        },
        {
          name: "degree",
          placeholder: "Degree",
        },
        {
          name: "field",
          placeholder: "Field",
        },
      ],
    },
    filterExperience: {
      label: "Filter by Experience",
      id: "filterExperience",
      formElements: [
        {
          name: "company_name",
          placeholder: "Company",
        },
        {
          name: "title",
          placeholder: "Title",
        },
      ],
    },
    filterEducation: {
      label: "Filter by Education",
      id: "filterEducation",
      formElements: [
        {
          name: "university",
          placeholder: "School",
        },
        {
          name: "degree",
          placeholder: "Degree",
        },
        {
          name: "field",
          placeholder: "Field",
        },
      ],
    },
  };
  const [formData, setFormData] = useState({
    centralNodeType: String,
    centralNodeExperience: { company_name: "", title: "" },
    centralNodeEducation: { university: "", degree: "", field: "" },
    filterExperience: { company_name: "", title: "" },
    filterEducation: { university: "", degree: "", field: "" },
  });
  const [filters, setFilters] = useState({
    centralNodeType: "experience",
    centralNode: {},
    educationFilters: [],
    experienceFilters: [],
  });
  const [currentFormSection, setCurrentFormSection] = useState(
    "centralNodeExperience"
  );

  // const onNodeClick = (node, event)=>{
  //   console.log(event)
  // }

  useEffect(() => {
    async function fetchTree() {
      console.log(filters);
      const { data } = await axios.post(
        `https://lookup-demo.herokuapp.com/api/tree`,
        filters
      );
      setLeftData(data["left"]);
      setRightData(data["right"]);
      console.log(data);
      setLoading(false);
    }
    fetchTree();
  }, [filters]);

  const dropdownHandleSelect = (event) => {
    setCurrentFormSection(event);
  };

  const checkIfObjectAdded = (object, array) => {
    let added = false;
    const keys = Object.keys(object);
    for (let i = 0; i < array.length; i++) {
      let differentValues = false;
      for (let j = 0; j < keys.length; j++) {
        if (object[keys[j]] != array[i][keys[j]]) {
          differentValues = true;
          break;
        }
      }
      if (differentValues == false) {
        added = true;
        break;
      }
    }
    return added;
  };

  const filterFormHandleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    let newFormInput = formData[currentFormSection];
    if (currentFormSection == "filterEducation") {
      if (checkIfObjectAdded(newFormInput, filters.educationFilters) == false) {
        setFilters({
          ...filters,
          ...{
            educationFilters: [...filters.educationFilters, newFormInput],
          },
        });
      }
    } else if (currentFormSection == "filterExperience") {
      if (
        checkIfObjectAdded(newFormInput, filters.experienceFilters) == false
      ) {
        setFilters({
          ...filters,
          ...{
            experienceFilters: [...filters.experienceFilters, newFormInput],
          },
        });
      }
    } else if (currentFormSection == "centralNodeEducation") {
      setFilters({
        ...filters,
        ...{
          centralNodeType: "education",
          centralNode: newFormInput,
        },
      });
    } else if (currentFormSection == "centralNodeExperience") {
      setFilters({
        ...filters,
        ...{
          centralNodeType: "experience",
          centralNode: newFormInput,
        },
      });
    }
  };

  const filterFormHandleChange = (event) => {
    setFormData({
      ...formData,
      ...{
        [event.target.id]: {
          ...formData[event.target.id],
          ...{ [event.target.name]: event.target.value },
        },
      },
    });
  };

  const filterForm = (formSection) => (
    <Container fixed className="px-3 pt-6 filter-form">
      <Typography class="p-3" variant="h5" noWrap>
        {formSection.label}
      </Typography>
      <Form onSubmit={filterFormHandleSubmit}>
        {formSection.formElements.map((formElement) => (
          <Form.Group>
            <Form.Control
              type="text"
              id={formSection.id}
              name={formElement.name}
              placeholder={formElement.placeholder}
              onChange={filterFormHandleChange}
              value={formData[formSection.id][formElement.name]}
            />
          </Form.Group>
        ))}
        <Button variant="primary" type="submit">
          <AddIcon />
        </Button>
      </Form>
    </Container>
  );

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Fragment>
      <Header />
      <React.Fragment key="top">
        <Drawer variant="persistent" anchor="left" open={open}>
          <Container fixed>
            <Row>
              <Col sm="9">
                <Row className="justify-content-md-center pt-4">
                  <DropdownButton
                    id="dropdown-item-button"
                    title="Customize Map"
                  >
                    <Dropdown.Item
                      as="button"
                      eventKey="centralNodeExperience"
                      onSelect={dropdownHandleSelect}
                    >
                      Change Central Node (Experience)
                    </Dropdown.Item>
                    <Dropdown.Item
                      as="button"
                      eventKey="centralNodeEducation"
                      onSelect={dropdownHandleSelect}
                    >
                      Change Central Node (Education)
                    </Dropdown.Item>
                    <Dropdown.Item
                      as="button"
                      eventKey="filterExperience"
                      onSelect={dropdownHandleSelect}
                    >
                      Add Experience Filter
                    </Dropdown.Item>
                    <Dropdown.Item
                      as="button"
                      eventKey="filterEducation"
                      onSelect={dropdownHandleSelect}
                    >
                      Add Education Filter
                    </Dropdown.Item>
                  </DropdownButton>
                </Row>
              </Col>
              <Col className="py-3">
                <IconButton onClick={handleDrawerClose}>
                  <ChevronLeftIcon />
                </IconButton>
              </Col>
            </Row>
            <Divider />
            {filterForm(filterFormFields[currentFormSection])}
          </Container>
        </Drawer>
      </React.Fragment>

      <div
        id="treeWrapper"
        class="discovery-background"
        style={{
          width: "100%",
          height: "100%",
          background: "linear-gradient(rgba(250,0,0,0.5))",
        }}
      >
        <Container className="py-3">
          <Button
            aria-label="open drawer"
            onClick={handleDrawerOpen}
          >
            <FilterListIcon />
          </Button>
        </Container>
        {!isLoading && (
          <Tree
            leftData={leftData}
            rightData={rightData}
            translate={{ x: width / 2, y: height / 2 }}
            onNodeClick={handleDrawerOpen}
            // pathFunc="straight"
          />
        )}
      </div>
    </Fragment>
  );
};

export default DiscoverScreen;
