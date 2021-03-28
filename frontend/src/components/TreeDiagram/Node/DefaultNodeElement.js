"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var DEFAULT_NODE_CIRCLE_RADIUS = 25;
var textLayout = {
    title: {
        textAnchor: "middle",
        y: 20,
    },
    attribute: {
        y: 25,
        dy: "1.2em",
    },
    amount: {
        textAnchor: "middle",
        y: 6,
    }
};
var DefaultNodeElement = function (_a) {
    var nodeDatum = _a.nodeDatum, toggleNode = _a.toggleNode, onNodeClick = _a.onNodeClick, onNodeMouseOver = _a.onNodeMouseOver, onNodeMouseOut = _a.onNodeMouseOut;
    if (nodeDatum.hasOwnProperty('attributes')) {
        if (nodeDatum.attributes.hasOwnProperty('university')) {
            var institution = nodeDatum.attributes.university;
        }
        else {
            var institution = nodeDatum.attributes.company_name;
        }
    }
    var generateSubtitles = function (subtitle) {
        if (subtitle != null) {
            if (subtitle.match(/.{1,20}(\s|$)/g) != null) {
                return (subtitle.match(/.{1,20}(\s|$)/g).map(function (word) { return (<tspan className="rd3t-label__subtitle" dy="1.2em" x={0}>{word}</tspan>); }));
            }
        }
        else
            return null;
    };
    var generateTitles = function (title) {
        if (title != null) {
            if (title.match(/.{1,20}(\s|$)/g) != null) {
                return (title.match(/.{1,20}(\s|$)/g).map(function (word) { return (<tspan className="rd3t-label__title" dy="1.2em" x={0}>{word}</tspan>); }));
            }
        }
        else
            return null;
    };
    return (<>
      <circle className={"rd3t-circle-" + nodeDatum.type} r={DEFAULT_NODE_CIRCLE_RADIUS} onClick={function (evt) {
        toggleNode();
        onNodeClick(evt);
    }} onMouseOver={onNodeMouseOver} onMouseOut={onNodeMouseOut}></circle>
      <g className="rd3t-label">
        <text className="rd3t-label__percentage" {...textLayout.amount}>
          {nodeDatum.amount}
        </text>
        <text className="rd3t-label__title" {...textLayout.title}>
          {generateTitles(nodeDatum.title)}
          {generateSubtitles(nodeDatum.subtitle)}
        </text>
        
      </g>
    </>);
};
exports.default = DefaultNodeElement;
