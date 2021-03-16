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
      const { data } = await axios.get("http://127.0.0.1:8000/api/tree");
      console.log(data)
      setLeftTree(data["left"]);
      setLeftTree(data["right"]);
      setLoading(false);
      // setRightTree(data)
    }
    fetchTree();
  }, []);


  return (
    <Fragment>
      <Header />
      {!isLoading && (
        <div id="treeWrapper" style={{ width: "100%", height: "100%" }}>
          <Tree leftData={leftTree} leftData={leftTree}/>
        </div>
      )}
    </Fragment>
  );
};

export default DiscoverScreen;
