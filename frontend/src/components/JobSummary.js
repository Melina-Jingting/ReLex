import React, { Fragment, useState, useEffect } from "react";
import { Card, Row, Col, Button } from "react-bootstrap";
import axios from "axios";
import { Container } from "../common/Container/styles";
import BarChart from "./BarChart";
import Typography from "@material-ui/core/Typography";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { withStyles, makeStyles } from "@material-ui/core/styles";

const JobSummary = ({ centralNodeType, centralNodeIDs }) => {
  const [stats, setStats] = useState({
    descriptions: [],
  });
  const keyActionLabels = [
    "Product improvement",
    "Market validation",
    "Define product strategy",
    "Engaging with customers and partners",
    "Collaborate with technical and design functions",
  ];
  const keyActionData = [25, 20, 17, 16, 10];
  const rows = [
    { id: 10, title: "Hello", description: "World" },
    { id: 2, title: "XGrid", description: "is Awesome" },
    { id: 3, title: "Material-UI", description: "is Amazing" },
  ];

  const columns = [
    { field: "title", headerName: "Title", width: 300 },
    { field: "description", headerName: "Description", width: 800 },
  ];

  const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);

  const StyledTableRow = withStyles((theme) => ({
    root: {
      "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);

  useEffect(() => {
    console.log(centralNodeType);
    const fetchData = async () => {
      try {
        const baseURL = process.env.BASE_URL;
        const result = await axios.post(`${baseURL}api/central-node-stats`, {
          centralNodeType: centralNodeType,
          centralNodeIDs: centralNodeIDs,
        });
        console.log(result.data);
        setStats({
          ...stats,
          ...result.data,
        });
      } catch (err) {
        // Handle Error Here
        console.error(err);
      }
    };

    fetchData();
  }, [centralNodeIDs]);

  return (
    <Fragment>
      <Container className="py-3">
        <Row>
          <Col className="text-center">
            <Typography>
              <h6 className="align-text-bottom">
                Estimated Salary $6000-$8000
              </h6>
            </Typography>
          </Col>
          <Col>
            <Button className="float-right" variant="success">
              Job Available - Apply Now!
            </Button>
          </Col>
        </Row>
      </Container>
      {/* <Container className="py-3">
        <BarChart
          title="Work you can expect on this role"
          labels={keyActionLabels}
          data={keyActionData}
        />
      </Container> */}

      <Container className="py-3">
        <Card>
          <Card.Header className="text-center">
            FAQs answered by mentors from this role at this company
          </Card.Header>
          <Card.Body></Card.Body>
        </Card>
      </Container>
      <Container className="py-3">
        <Card>
          <Card.Header className="text-center">Reviews</Card.Header>
          <Card.Body>
            <Card.Title className="text-center">
              Company Name
              <br></br>
              <small class=" text-muted">Singapore</small>
              <p style={{ padding: "2px" }}>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
              </p>
            </Card.Title>
            <Row>
              <Col>
                <div class="px-2 bg-success text-white text-center">Pros</div>
                <small>
                  <ul>
                    <li>"Lots of guidance and smart people"</li>
                    <li>"Great benefit package"</li>
                  </ul>
                </small>
              </Col>
              <Col>
                <div class="px-2 bg-danger text-white text-center">Cons</div>
                <small>
                  <ul>
                    <li>"Performance review system not too fair"</li>
                    <li>"Usual struggles of working at a large company"</li>
                  </ul>
                </small>
              </Col>
            </Row>

            <div class="text-center">
              <a href="#">Review Details</a>
            </div>
          </Card.Body>
        </Card>
      </Container>
      <Card>
        <Card.Header>What people do at this role</Card.Header>
        <Card.Body>
          <TableContainer component={Paper}>
            <Table aria-label="customized table">
              <TableHead>
                <TableRow>
                  <TableCell>Title</TableCell>
                  <TableCell>Date</TableCell>
                  <TableCell>Description</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {stats.descriptions.map((item) => {
                  return (
                    <StyledTableRow key={item.id}>
                      <StyledTableCell component="th" scope="row">
                        {item.title}
                      </StyledTableCell>
                      <StyledTableCell component="th" scope="row">
                        {item.from_date}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {item.description}
                      </StyledTableCell>
                    </StyledTableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </Card.Body>
      </Card>
    </Fragment>
  );
};

export default JobSummary;
