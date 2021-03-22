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
        y: 10,
    },
    attribute: {
        y: 25,
        dy: "1.2em",
    },
};
var DefaultNodeElement = function (_a) {
    var nodeDatum = _a.nodeDatum, toggleNode = _a.toggleNode, onNodeClick = _a.onNodeClick, onNodeMouseOver = _a.onNodeMouseOver, onNodeMouseOut = _a.onNodeMouseOut;
    if (nodeDatum.attributes.hasOwnProperty('university')) {
        var institution = nodeDatum.attributes.university;
    }
    else {
        var institution = nodeDatum.attributes.company_name;
    }
    var generateSubtitles = function (institution) {
        console.log("PRINTING INSTITUTION");
        console.log(institution);
        if (institution.match(/.{1,17}(\s|$)/g) != null) {
            return (institution.match(/.{1,17}(\s|$)/g).map(function (word) { return (<tspan className="rd3t-label__attributes" dy="1.2em" x={0}>{word}</tspan>); }));
        }
        else
            return null;
    };
    var generateTitles = function (name) {
        if (name.match(/.{1,17}(\s|$)/g) != null) {
            return (name.match(/.{1,17}(\s|$)/g).map(function (word) { return (<tspan className="rd3t-label__title" dy="1.2em" x={0}>{word}</tspan>); }));
        }
        else
            return null;
    };
    return (<>
      <circle r={DEFAULT_NODE_CIRCLE_RADIUS} onClick={function (evt) {
        toggleNode();
        onNodeClick(evt);
    }} onMouseOver={onNodeMouseOver} onMouseOut={onNodeMouseOut}></circle>
      <g className="rd3t-label">
        <text className="rd3t-label__title" {...textLayout.title}>
          {generateTitles(nodeDatum.name)}
          {generateSubtitles(institution)}
        </text>
        
      </g>
    </>);
};
exports.default = DefaultNodeElement;
