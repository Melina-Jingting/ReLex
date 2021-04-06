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
import ClipLoader from "react-spinners/ClipLoader";
import AppBar from "@material-ui/core/AppBar";
import Tab from "@material-ui/core/Tab";
import TabContext from "@material-ui/lab/TabContext";
import TabList from "@material-ui/lab/TabList";
import TabPanel from "@material-ui/lab/TabPanel";

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
import { Card } from "@material-ui/core";

const DiscoverScreen = () => {
  const [size, setSize] = useState([window.innerHeight, window.innerWidth]);
  const [height, width] = size;
  const [isLoading, setLoading] = useState(true);
  const [leftData, setLeftData] = useState([]);
  const [rightData, setRightData] = useState([]);
  const [centralNodeValues, setCentralNodeValues] = useState([]);
  const [validated, setValidated] = useState(false);
  const [tabIndex, setTabIndex] = React.useState("1");

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

  useEffect(() => {
    setLoading(true);
    async function fetchTree() {
      try {
        const baseURL = process.env.BASE_URL;
        const { data } = await axios.post(`${baseURL}api/tree`, filters);
        setLeftData(data["left"]);
        setRightData(data["right"]);
        setLoading(false);
      } catch (e) {
        console.log(e);
      }
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

  const objectToString = (object) => {
    var output = "";
    for (var property in object) {
      if (object[property] !== "") {
        if (output !== "") {
          output += "  ,  ";
        }
        output += property + ": " + object[property];
      }
    }
    return output;
  };
  const filterChips = (filters) => {
    const filterIcons = {
      education: <SchoolIcon />,
      experience: <WorkIcon />,
    };
    const additionalFilterChips = (filterSection, filterType) =>
      filterSection.map((filter) => (
        <Chip
          className="filter-chip"
          icon={filterIcons[filterType]}
          label={objectToString(filter)}
          onClick={handleChipClick}
          onDelete={handleChipDelete}
        />
      ));

    if (JSON.stringify(filters.centralNode) !== "{}") {
      return (
        //Central Node
        <Container>
          <Chip
            className="filter-chip"
            icon={filterIcons[filters.centralNodeType]}
            label={objectToString(filters.centralNode)}
            onClick={handleChipClick}
          />
          {/* Education Filters */}
          {additionalFilterChips(filters.educationFilters, "education")}
          {/* Experience Filters */}
          {additionalFilterChips(filters.experienceFilters, "experience")}
        </Container>
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
  const handleChipDelete = (e) => {
    const filterText = e.target.parentElement.parentElement.textContent;
    var educationFilters = [...filters.educationFilters];
    var experienceFilters = [...filters.experienceFilters];
    for (var i = 0; i < filters.educationFilters.length; i++) {
      const filter = filters.educationFilters[i];
      if (objectToString(filter) == filterText) {
        educationFilters.splice(i, 1);
      }
    }
    for (var i = 0; i < filters.experienceFilters.length; i++) {
      const filter = filters.experienceFilters[i];
      if (objectToString(filter) == filterText) {
        experienceFilters.splice(i, 1);
      }
    }
    setFilters({
      ...filters,
      ...{
        educationFilters: educationFilters,
        experienceFilters: experienceFilters,
      },
    });
  };
  const handleChipClick = () => {
    console.info("You clicked the Chip.");
  };
  const handleTabChange = (event, newTabIndex) => {
    setTabIndex(newTabIndex);
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

      <Container className="py-3">
        <Row>
          <Col xs={1}>
            <Button aria-label="open drawer" onClick={handleDrawerOpen}>
              <FilterListIcon />
            </Button>
          </Col>
          <Col className="filter-chips-container">{filterChips(filters)}</Col>
        </Row>
      </Container>
      <Container className="full-height">
        <Card className="full-height" body={true} border="light">
          <TabContext value={tabIndex}>
            <AppBar position="static" color="inherit">
              <TabList
                onChange={handleTabChange}
                aria-label="simple tabs example"
              >
                <Tab label="Career Map" value="1" />
                <Tab label="This role" value="2" />
                <Tab label="Before this Role" value="3" />
                <Tab label="After this Role" value="4" />
              </TabList>
            </AppBar>
            <TabPanel value="1" className="fill-container">
              <ClipLoader className="spinner" loading={isLoading} size={150} />
              {!isLoading && (
                <Tree
                  leftData={leftData}
                  rightData={rightData}
                  translate={{ x: width / 2, y: height / 2 }}
                  onNodeClick={handleDrawerOpen}
                />
              )}
            </TabPanel>
            <TabPanel value="2">
              Company Details, FAQ, Key activities, Whether position available
            </TabPanel>
            <TabPanel value="3">
              Analysis for: Skills, Certifications, Companies, Sector, Titles,
              Key Activities, Education
            </TabPanel>
            <TabPanel value="4">
              Analysis for: Projected compensation, Companies, Sectors, Titles
            </TabPanel>
          </TabContext>
        </Card>
      </Container>

      {/* <ClipLoader className="spinner" loading={isLoading} size={150} />
        {!isLoading && (
          <Tree
            leftData={leftData}
            rightData={rightData}
            translate={{ x: width / 2, y: height / 2 }}
            onNodeClick={handleDrawerOpen}
          />
        )} */}
    </Fragment>
  );
};

export default DiscoverScreen;
