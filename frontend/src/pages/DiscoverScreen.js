import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Tree from "react-d3-tree";
import Header from "../components/Header";
import axios from 'axios';



const DiscoverScreen = () => {
    const [leftTree, setLeftTree] = useState([])
    // const [rightTree, setRightTree] = useState([])
  
    useEffect(()=>{
      async function fetchTree() {
        const { data } = await axios.get('http://127.0.0.1:8000/api/leftTree');
        setLeftTree(data)
        // setRightTree(data)
        console.log("PRINTING OUT DATA")
        console.log(data)
      }
      
      fetchTree()
      
    }, [])

  const orgChart = {
    name: "CEO",
    children: [
      {
        name: "Manager",
        attributes: {
          department: "Production",
        },
        children: [
          {
            name: "Foreman",
            attributes: {
              department: "Fabrication",
            },
            children: [
              {
                name: "Worker",
              },
            ],
          },
          {
            name: "Foreman",
            attributes: {
              department: "Assembly",
            },
            children: [
              {
                name: "Worker",
              },
            ],
          },
        ],
      },
    ],
  };

  return (
    <Container>
      <Header />
      <div id="treeWrapper" style={{ width: "100%", height: "3000px" }}>
        <Tree data={orgChart} />
      </div>
    </Container>
  );
};

export default DiscoverScreen;
