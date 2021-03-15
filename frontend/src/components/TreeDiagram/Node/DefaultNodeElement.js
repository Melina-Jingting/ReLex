"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var DEFAULT_NODE_CIRCLE_RADIUS = 15;
var textLayout = {
    title: {
        textAnchor: "middle",
        y: 15,
    },
    attribute: {
        y: 25,
        dy: "1.2em",
    },
};
var DefaultNodeElement = function (_a) {
    var nodeDatum = _a.nodeDatum, toggleNode = _a.toggleNode, onNodeClick = _a.onNodeClick, onNodeMouseOver = _a.onNodeMouseOver, onNodeMouseOut = _a.onNodeMouseOut;
    return (<>
      <circle r={DEFAULT_NODE_CIRCLE_RADIUS} onClick={function (evt) {
        toggleNode();
        onNodeClick(evt);
    }} onMouseOver={onNodeMouseOver} onMouseOut={onNodeMouseOut}></circle>
      <g className="rd3t-label">
        <text className="rd3t-label__title" {...textLayout.title}>
          {nodeDatum.name.match(/.{1,20}(\s|$)/g).map(function (word) { return (<tspan dy="1.2em" x={0}>{word}</tspan>); })}
        </text>
        
      </g>
    </>);
};
exports.default = DefaultNodeElement;
