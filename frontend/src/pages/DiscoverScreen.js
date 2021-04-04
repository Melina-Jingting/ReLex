import React, { useState, useEffect, Fragment } from "react";
import Tree from "../components/TreeDiagram/Tree";
import Header from "../components/Header";
import axios from "axios";
import { useTheme, makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";
import FilterListIcon from "@material-ui/icons/FilterList";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";

import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";

import {
  Form,
  Button,
  Container,
  Dropdown,
  DropdownButton,
  Row,
  Col,
} from "react-bootstrap";
import { Work } from "@material-ui/icons";

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
      buttonText: "Set Central Node",
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
      buttonText: "Set Central Node",
      formElements: [
        {
          name: "university",
          placeholder: "School",
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
      buttonText: "Add Filter",
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
      buttonText: "Add Filter",
      formElements: [
        {
          name: "university",
          placeholder: "School",
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
    centralNodeEducation: { university: "", field: "" },
    filterExperience: { company_name: "", title: "" },
    filterEducation: { university: "", field: "" },
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
      const baseURL = process.env.BASE_URL;
      const { data } = await axios.post(`${baseURL}api/tree`, filters);
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
    handleDrawerClose();
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
          {formSection.buttonText}
        </Button>
      </Form>
    </Container>
  );

  const filterChips = (filters) => {
    const filterIcons = {
      education: <SchoolIcon />,
      experience: <WorkIcon />,
    };

    // if (filters.centralNodeType === "education"){
    //     <Chip
    //     className="filter-chip"
    //     icon={<WorkIcon />}
    //     color="#A9CCE3"
    //     label="work"
    //     onClick={handleChipClick}
    //     onDelete={handleChipDelete}
    //   />
    if (JSON.stringify(filters.centralNode)!=='{}'){
      return (
        //Central Node
        <Chip
          className="filter-chip"
          icon={filterIcons[filters.centralNodeType]}
          label={JSON.stringify(filters.centralNode)}
          onClick={handleChipClick}
          onDelete={handleChipDelete}
        />
        
      );
    }
    // else {
    //   return 
    // }


  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleChipDelete = () => {
    console.info("You clicked the delete icon.");
  };

  const handleChipClick = () => {
    console.info("You clicked the Chip.");
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
          <Row>
            <Col xs={1}>
              <Button aria-label="open drawer" onClick={handleDrawerOpen}>
                <FilterListIcon />
              </Button>
            </Col>
            <Col className="filter-chips-container">
              {/* <Chip
                className="filter-chip"
                icon={<SchoolIcon />}
                label="school"
                onClick={handleChipClick}
                onDelete={handleChipDelete}
              /> */}
              {filterChips(filters)}
            </Col>
          </Row>
        </Container>
        {!isLoading && (
          <Tree
            leftData={leftData}
            rightData={rightData}
            translate={{ x: width / 2, y: height / 2 }}
            onNodeClick={handleDrawerOpen}
          />
        )}
      </div>
    </Fragment>
  );
};

export default DiscoverScreen;
