import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Tree from "react-d3-tree";
import Header from "../components/Header";
import axios from "axios";
import treeTest from "../components/Tree";

const DiscoverScreen = () => {
  const [isLoading, setLoading] = useState(true);
  const [leftTree, setLeftTree] = useState([]);
  // const [rightTree, setRightTree] = useState([])

  useEffect(() => {
    async function fetchTree() {
      const { data } = await axios.get("http://127.0.0.1:8000/api/leftTree");
      console.log("data now");
      console.log(data);
      setLeftTree(data);
      setLoading(false);
      // setRightTree(data)
    }
    fetchTree();
  }, []);

  console.log("PRINTING OUT DATA in outeer loops");
  console.log(leftTree);

  return (
    <Container style={{ width: "100%", height: "100%" }}>
      <Header />
      {!isLoading && (
        <div id="treeWrapper" style={{ width: "100%", height: "100%" }}>
          <Tree data={leftTree} />
        </div>
      )}
    </Container>
  );
};

export default DiscoverScreen;
