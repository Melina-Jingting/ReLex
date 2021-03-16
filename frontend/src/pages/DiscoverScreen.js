import React, { useState, useEffect, Fragment } from "react";
import clsx from "clsx";
import Tree from "../components/TreeDiagram/Tree";
import Header from "../components/Header";
import axios from "axios";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";
import FilterListIcon from "@material-ui/icons/FilterList";
import SearchBar from "../components/SearchBar";
import List from "@material-ui/core/List";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import { Form, Button, Container } from "react-bootstrap";

const DiscoverScreen = () => {
  const [size, setSize] = useState([window.innerHeight, window.innerWidth]);
  const [height, width] = size;
  const [isLoading, setLoading] = useState(true);
  const [leftData, setLeftData] = useState([]);
  const [rightData, setRightData] = useState([]);

  useEffect(() => {
    async function fetchTree() {
      const { data } = await axios.get("http://127.0.0.1:8000/api/tree");
      console.log(data);
      setLeftData(data["left"]);
      setRightData(data["right"]);
      setLoading(false);
    }
    fetchTree();
  }, []);

  const useStyles = makeStyles({
    list: {
      width: 250,
    },
    fullList: {
      width: "auto",
    },
  });

  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
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
        <Grid container justify="flex-end">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <FilterListIcon />
          </IconButton>
        </Grid>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="right"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "ltr" ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon />
              )}
            </IconButton>
          </div>
          <Divider />
          <List>
            <Typography class="p-3" variant="h6" noWrap>
              Current role and company
            </Typography>
            <Container class="px-3">
            <Form>
              <Form.Group controlId="formBasicCompany">
                <Form.Control type="company" placeholder="Company" />
              </Form.Group>
              <Form.Group controlId="formBasicRole">
                <Form.Control type="role" placeholder="Role" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Add Filter
              </Button>
            </Form>
            </Container>
          </List>
          <Divider />
          <List>
            <Typography class="p-3" variant="h6" noWrap>
              Past role and company
            </Typography>
            <Container class="px-3">
            <Form>
              <Form.Group controlId="formBasicCompany">
                <Form.Control type="company" placeholder="Company" />
              </Form.Group>
              <Form.Group controlId="formBasicRole">
                <Form.Control type="role" placeholder="Role" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Add Filter
              </Button>
            </Form>
            </Container>
          </List>
          <Divider />
          <List>
            <Typography class="p-3" variant="h6" noWrap>
              Education
            </Typography>
            <Container class="px-3">
            <Form>
              <Form.Group controlId="formBasicSchool">
                <Form.Control type="school" placeholder="School" />
              </Form.Group>
              <Form.Group controlId="formBasicDegree">
                <Form.Control type="degree" placeholder="Degree" />
              </Form.Group>
              <Form.Group controlId="formBasicField">
                <Form.Control type="field" placeholder="Field" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Add Filter
              </Button>
            </Form>
            </Container>
          </List>
        </Drawer>
      </React.Fragment>

      {!isLoading && (
        <div id="treeWrapper" style={{ width: "100%", height: "100%" }}>
          <Tree
            leftData={leftData}
            rightData={rightData}
            translate={{ x: width / 2, y: height / 2 }}
          />
        </div>
      )}
    </Fragment>
  );
};

export default DiscoverScreen;
