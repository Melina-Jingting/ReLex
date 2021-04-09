import React, { useRef, useEffect } from "react";
import { CustomNodeElementProps, SyntheticEventHandler } from "../types/common";
import { select } from "d3-selection";
import * as d3 from d3;
import ts from "typescript";
import { node } from "webpack";

const DEFAULT_NODE_CIRCLE_RADIUS = 25;

const textLayout = {
  title: {
    textAnchor: "middle",
    y: 20,
  },
  attribute: {
    y: 25,
    dy: "1.2em",
  },
  amount:{
    textAnchor: "middle",
    y:6,
  },
  date: {
    textAnchor: "middle",
    y: -20,
  },
  duration: {
    textAnchor: "middle",
    y: 0,
    x: +30,
  }
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

  if nodeDatum.hasOwnProperty('attributes'){
    if nodeDatum.attributes.hasOwnProperty('university'){
      const institution = nodeDatum.attributes.university;
    } else{
      const institution = nodeDatum.attributes.company_name;
    }
}

  const generateSubtitles = (subtitle) => {
    if(subtitle != null){
      if (subtitle.match(/.{1,20}(\s|$)/g) != null){
      return(subtitle.match(/.{1,20}(\s|$)/g).map((word) => (
        <tspan className="rd3t-label__subtitle" dy="1.2em" x={0}>{word}</tspan>
      )))}
    } else return null;
  };

  const generateTitles = (title) => {
    if(title != null){
      if (title.match(/.{1,20}(\s|$)/g) != null){
      return(title.match(/.{1,20}(\s|$)/g).map((word) => (
        <tspan className="rd3t-label__title" dy="1.2em" x={0}>{word}</tspan>
      )))}
    } else return null;
  }
  return (
    <>
      <circle
      className=`rd3t-circle-${nodeDatum.type}`
        r={DEFAULT_NODE_CIRCLE_RADIUS}
        onClick={(evt) => {
          toggleNode();
          onNodeClick(evt);
        }}
        onMouseOver={onNodeMouseOver}
        onMouseOut={onNodeMouseOut}
      ></circle>
      <g className="rd3t-label">
        <text className="rd3t-label__percentage" {...textLayout.amount}>
          {nodeDatum.amount}
        </text>
        <text {...textLayout.title}>
          {generateTitles(nodeDatum.title)}
          {generateSubtitles(nodeDatum.subtitle)}
          {(typeof nodeDatum.from_date !== 'undefined') &&
          (
          <tspan className="rd3t-label__subtitle"  dy="1.2em" x={0}>{nodeDatum.from_date} - {nodeDatum.to_date}</tspan>
          // <tspan className="rd3t-label__date"  dy="1.2em" x={0}>{nodeDatum.duration_year}y {nodeDatum.duration_month}m </tspan>
          )
          }
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
