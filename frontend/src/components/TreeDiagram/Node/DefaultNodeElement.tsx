import React, { useRef, useEffect } from "react";
import { CustomNodeElementProps, SyntheticEventHandler } from "../types/common";
import { select } from "d3-selection";
import * as d3 from d3;
import ts from "typescript";

const DEFAULT_NODE_CIRCLE_RADIUS = 15;

const textLayout = {
  title: {
    textAnchor: "middle",
    y: 15,
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
          {nodeDatum.name.match(/.{1,20}(\s|$)/g).map((word) => (
            <tspan dy="1.2em" x={0}>{word}</tspan>
          ))}
        </text>
        {/* <text className="rd3t-label__attributes">
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
