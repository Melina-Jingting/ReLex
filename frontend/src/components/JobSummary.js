import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import { Line } from "react-chartjs-2";

const JobSummary = () => {
  return (
    <Card>
      <Card.Body>
        <Card.Title className="text-center">
          Microsoft
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
          <a href = "#">Review Details</a>
        </div>
      </Card.Body>
    </Card>
  );
};

export default JobSummary;
