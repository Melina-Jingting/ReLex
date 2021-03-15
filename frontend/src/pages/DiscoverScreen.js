import React, { useState, useEffect, Fragment } from "react";
import { Container } from "react-bootstrap";
import Tree from "../components/TreeDiagram/Tree";
import Header from "../components/Header";
import axios from "axios";
import treeTest from "../components/DoubleTree";

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
    <Fragment>
      <Header />
      {!isLoading && (
        <div id="treeWrapper" style={{ width: "100%", height: "100%" }}>
          <Tree data={leftTree} />
        </div>
      )}
    </Fragment>
  );
};

export default DiscoverScreen;
