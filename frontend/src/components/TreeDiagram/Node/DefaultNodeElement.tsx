import React, { useRef, useEffect } from "react";
import { CustomNodeElementProps, SyntheticEventHandler } from "../types/common";
import { select } from "d3-selection";
import * as d3 from d3;
import ts from "typescript";

const DEFAULT_NODE_CIRCLE_RADIUS = 15;

const textLayout = {
  title: {
    textAnchor: "middle",
    y: 10,
  },
  attribute: {
    y: 25,
    dy: "1.2em",
  },
};

export interface DefaultNodeElementProps extends CustomNodeElementProps {
  onNodeClick: SyntheticEventHandler;
  onNodeMouseOver: SyntheticEventHandler;
  onNodeMouseOut: SyntheticEventHandler;
}

const DefaultNodeElement: React.FunctionComponent<DefaultNodeElementProps> = ({
  nodeDatum,
  toggleNode,
  onNodeClick,
  onNodeMouseOver,
  onNodeMouseOut,
}) => {

  if nodeDatum.attributes.hasOwnProperty('university'){
    const institution = nodeDatum.attributes.university;
  } else{
    const institution = nodeDatum.attributes.company_name;
  }

  const generateSubtitles = (institution) => {
    console.log("PRINTING INSTITUTION");
    console.log(institution);
    if(institution.match(/.{1,17}(\s|$)/g) != null){
      return(institution.match(/.{1,17}(\s|$)/g).map((word) => (
        <tspan className="rd3t-label__attributes" dy="1.2em" x={0}>{word}</tspan>
      )))
    } else return null;
  };

  const generateTitles = (name) => {
    if(name.match(/.{1,17}(\s|$)/g) != null){
      return(name.match(/.{1,17}(\s|$)/g).map((word) => (
        <tspan className="rd3t-label__title" dy="1.2em" x={0}>{word}</tspan>
      )))
    } else return null;
    
  }
  

  
  return (
    <>
      <circle
        r={DEFAULT_NODE_CIRCLE_RADIUS}
        onClick={(evt) => {
          toggleNode();
          onNodeClick(evt);
        }}
        onMouseOver={onNodeMouseOver}
        onMouseOut={onNodeMouseOut}
      ></circle>
      <g className="rd3t-label">
        <text className="rd3t-label__title" {...textLayout.title}>
          {generateTitles(nodeDatum.name)}
          {generateSubtitles(institution)}
        </text>
        {/* <text className="rd3t-label__attributes">
        {institution.match(/.{1,17}(\s|$)/g).map((word) => (
            <tspan dy="1.2em" x={0}>{word}</tspan>
          ))}
        {nodeDatum.attributes &&
          Object.entries(nodeDatum.attributes).map(([labelKey, labelValue], i) => (
            <tspan key={`${labelKey}-${i}`} {...textLayout.attribute}>
              {labelKey}: {labelValue}
            </tspan>
          ))}
      </text> */}
      </g>
    </>
  );
};
export default DefaultNodeElement;
