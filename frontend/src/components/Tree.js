import React, { useRef, useEffect } from "react";
import { hierarchy, tree, linkHorizontal } from "d3";
import useResizeObserver from "./UseResizeObserver";
import { zoom as d3zoom, zoomIdentity } from "d3-zoom";
import { select, event } from "d3-selection";

// import PropTypes from "prop-types";

export const usePrevious = (value) => {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};

const treeTest = ({ leftData, rightData, margin, translate, zoom, scaleExtent }) => {
  console.log(leftData);
  console.log(rightData);
  const gRef = useRef();
  const svgRef = useRef();
  const wrapperRef = useRef();
  const dimensions = useResizeObserver(wrapperRef);

  // we save data to see if it changed
  const previouslyRenderedLeftData = usePrevious(leftData);
  const previouslyRenderedRightData = usePrevious(rightData);

  const treeNodeColor = "#8A2BE2";
  const treeBranchColor = "#8A2BE2";

  // will be called initially and on every data change
  useEffect(() => {
    const svg = select(svgRef.current);
    const g = select(gRef.current);
    // use dimensions from useResizeObserver,
    // but use getBoundingClientRect on initial render
    // (dimensions are null for the first render)
    const { width, height } =
      dimensions || wrapperRef.current.getBoundingClientRect();

    // transform hierarchical data
    const leftRoot = hierarchy(leftData);
    const rightRoot = hierarchy(rightData);

    const treeLayout = tree().size([
      height - margin.top - margin.bottom,
      width / 2 - margin.left - margin.right,
    ]);

    const rightLinkGenerator = linkHorizontal()
      .x((link) => link.y + width / 2 + margin.left)
      .y((link) => link.x);
    const leftLinkGenerator = linkHorizontal()
      .x((link) => width / 2 - link.y + margin.left)
      .y((link) => link.x);

    // enrich hierarchical data with coordinates
    treeLayout(leftRoot);
    treeLayout(rightRoot);
    var leftLinks = leftRoot.links();
    var rightLinks = rightRoot.links();

    console.warn("descendants", leftRoot.descendants());
    console.warn("links", leftLinks);
    console.warn("descendants", rightRoot.descendants());
    console.warn("links", rightLinks);

    svg.call(
      d3zoom().transform,
      zoomIdentity.translate(translate.x, translate.y).scale(zoom)
    );
    svg.call(
      d3zoom()
        .scaleExtent([scaleExtent.min, scaleExtent.max])
        // TODO: break this out into a separate zoom handler fn, rather than inlining it.
        .on("zoom", () => {
          g.attr("transform", event.transform);
          if (typeof onUpdate === "function") {
            // This callback is magically called not only on "zoom", but on "drag", as well,
            // even though event.type == "zoom".
            // Taking advantage of this and not writing a "drag" handler.
            onUpdate({
              node: null,
              zoom: event.transform.k,
              translate: { x: event.transform.x, y: event.transform.y },
            });
            // TODO: remove this? Shouldn't be mutating state keys directly.
            this.state.d3.scale = event.transform.k;
            this.state.d3.translate = {
              x: event.transform.x,
              y: event.transform.y,
            };
          }
        })
    );

    // nodes
    svg
      .selectAll(".leftNode")
      .data(leftRoot.descendants())
      .join(
        (enter) =>
          enter
            .append("circle")
            .attr("opacity", 0)
            .attr("r", (d) => d * 20)
        // .style("fill", "#FF7F50")
      )
      .attr("class", "leftNode node")
      .attr("cx", (node) => width / 2 - node.y + margin.left)
      .attr("cy", (node) => node.x)
      .attr("r", 4)
      .transition()
      .duration(500)
      .delay((node) => node.depth * 300)
      .attr("opacity", 1);

    // nodes
    svg
      .selectAll(".rightNode")
      .data(rightRoot.descendants())
      .join((enter) => enter.append("circle").attr("opacity", 0))
      .attr("class", "rightNode node")
      .attr("cx", (node) => node.y + width / 2 + margin.left)
      .attr("cy", (node) => node.x)
      .attr("r", 4)
      .transition()
      .duration(500)
      .delay((node) => node.depth * 300)
      .attr("opacity", 1);

    // links
    const enteringAndUpdatingLeftLinks = svg
      .selectAll(".leftLink")
      .data(leftLinks)
      .join("path")
      .attr("class", "leftLink")
      .attr("d", leftLinkGenerator)
      .attr("stroke-dasharray", function () {
        const length = this.getTotalLength();
        return `${length} ${length}`;
      })
      .attr("stroke", "black")
      .attr("fill", "none")
      .attr("opacity", 1);

    if (leftData !== previouslyRenderedLeftData) {
      enteringAndUpdatingLeftLinks
        .attr("stroke-dashoffset", function () {
          return this.getTotalLength();
        })
        .transition()
        .duration(500)
        .delay((link) => link.source.depth * 500)
        .attr("stroke-dashoffset", 0);
    }

    // links
    const enteringAndUpdatingRightLinks = svg
      .selectAll(".rightLink")
      .data(rightLinks)
      .join("path")
      .attr("class", "rightLink")
      .attr("d", rightLinkGenerator)
      .attr("stroke-dasharray", function () {
        const length = this.getTotalLength();
        return `${length} ${length}`;
      })
      .attr("stroke", "black")
      .attr("fill", "none")
      .attr("opacity", 1);

    if (rightData !== previouslyRenderedRightData) {
      enteringAndUpdatingRightLinks
        .attr("stroke-dashoffset", function () {
          return this.getTotalLength();
        })
        .transition()
        .duration(500)
        .delay((link) => link.source.depth * 500)
        .attr("stroke-dashoffset", 0);
    }

    svg
      .selectAll(".leftLabel")
      .data(leftRoot.descendants())
      .join((enter) => enter.append("text").attr("opacity", 0))
      .attr("class", "leftLabel")
      .attr("x", (node) => width / 2 - node.y + margin.left)
      .attr("y", (node) => node.x - 12)
      .attr("text-anchor", "middle")
      .attr("font-size", 12)
      .text((node) => node.data.name)
      .transition()
      .duration(500)
      .delay((node) => node.depth * 300)
      .attr("opacity", 1);

    svg
      .selectAll(".rightLabel")
      .data(rightRoot.descendants())
      .join((enter) => enter.append("text").attr("opacity", 0))
      .attr("class", "rightLabel")
      .attr("x", (node) => width / 2 + node.y + margin.left)
      .attr("y", (node) => node.x - 12)
      .attr("text-anchor", "middle")
      .attr("font-size", 12)
      .attr("clip-path", "circle() fill-box")
      .text((node) => node.data.name)
      .transition()
      .duration(500)
      .delay((node) => node.depth * 300)
      .attr("opacity", 1);

    return () => {
      svg.innerHTML = "";
      console.log("cleanup ran");
    };
  }, [
    leftData,
    rightData,
    dimensions,
    previouslyRenderedLeftData,
    previouslyRenderedRightData,
  ]);

  return (
    <div
      className="rd3t-tree-container rd3t-grabbable"
      ref={wrapperRef}
      style={{ height: "100%", width: "100%" }}
    >
      <svg
        ref={svgRef}s
        viewBox="100 0s 400 400"
        style={{ height: "100%", width: "100%", overflow: "visible" }}
        class="zoom"
      >
        <g ref={gRef} transform={`translate(${margin.top},${margin.left})`}></g>
      </svg>
    </div>
  );
};

export default treeTest;
