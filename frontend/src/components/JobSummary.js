import React, { Fragment } from "react";
import { Card, Row, Col, Button } from "react-bootstrap";
import { Line } from "react-chartjs-2";
import { Container } from "../common/Container/styles";
import BarChart from "./BarChart";
import Typography from "@material-ui/core/Typography";

const JobSummary = (centralNodeType, centralNode) => {
  const keyActionLabels = [
    "Product improvement",
    "Market validation",
    "Define product strategy",
    "Engaging with customers and partners",
    "Collaborate with technical and design functions",
  ];

  const keyActionData = [25, 20, 17, 16, 10];

  return (
    <Fragment>
      <Container className="py-3">
        <Row>
          <Col className="text-center">
            <Typography>
              <h6 className="align-text-bottom">Estimated Salary $6000-$8000</h6>
            </Typography>
          </Col>
          <Col>
            <Button className="float-right" variant="success">
              Job Available - Apply Now!
            </Button>
          </Col>
        </Row>
      </Container>
      <Container className="py-3">
        <BarChart
          title="Work you can expect on this role"
          labels={keyActionLabels}
          data={keyActionData}
        />
      </Container>

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
          <Card.Header className="text-center">
            Reviews
          </Card.Header>
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
    </Fragment>
  );
};

export default JobSummary;
