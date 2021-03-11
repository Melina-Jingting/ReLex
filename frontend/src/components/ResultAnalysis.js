import React, { useState, useEffect } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import BarChart from "./BarChart";
import JobSummary from "./JobSummary";
import Tree from "./Tree";
import axios from 'axios'


// const leftTree = {
//   title: "Product Manager",
//   children: [
//     {
//       title: "Product presales",
//       company: "Production",
//       children: [
//         {
//           title: "Business intelligence",
//           company: "Fabrication"
//         },
//       ],
//     },

//     {
//       title: "Program Manager",
//       company: "Production",
//       children: [
//         {
//           title: "Chief Engineer",
//           company: "Fabrication"
//         },
//       ],
//     },
//     {
//       title: "Co-founder",
//       company: "Production",
//       children: [
//         {
//           title: "Researcher",
//           company: "Fabrication"
//         },
//       ],
//     },
//     {
//       title: "Project Intern",
//       company: "Production",
//       children: [
//         {
//           title: "Summer Intern",
//           company: "Fabrication"
//         },
//       ],
//     },
//   ],
// };

// const rightTree = leftTree

const ResultAnalysis = () => {
  const [leftTree, setLeftTree] = useState([])
  const [rightTree, setRightTree] = useState([])

  useEffect(()=>{
    async function fetchTree() {
      const { data } = await axios.get('http://127.0.0.1:8000/api/leftTree');
      setLeftTree(data)
      setRightTree(data)
      console.log("PRINTING OUT DATA")
      console.log(data)
    }
    
    fetchTree()
    
  }, [])

  return (
    <Container>
      <Card style={{ height: "500px" }}>
        <Card.Body>
          <Tree
            leftData={leftTree}
            rightData={rightTree}
            margin={{ top: 25, bottom: 25, left: 0, right: 50 }}
            translate={{ x:25, y:25 }}
            zoom={1}
            scaleExtent={{ min: 0.1, max: 1 }}
          />
        </Card.Body>
      </Card>
      <JobSummary />
      <div class="analysis-section py-5">
      <Row>
        <Col xs={6}>
          <h5>Before this role, people -</h5>
          <BarChart title="Had these skills" />
          <BarChart title="Worked at these companies" />
          <BarChart title="Held these roles" />
        </Col>
        <Col xs={6}>
          <h5>After this role, people -</h5>
          <BarChart title="Earn this much" />
          <BarChart title="Work at these companies" />
          <BarChart title="Hold these roles" />
        </Col>
      </Row>
      </div>
      
    </Container>
  );
};

export default ResultAnalysis;
