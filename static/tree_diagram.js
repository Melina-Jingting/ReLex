
// ************** Generate the tree diagram	 *****************
var margin = { top: 25, right: 50, bottom: 25, left: 50 },
  width = 1800 - margin.right - margin.left,
  height = 800 - margin.top - margin.bottom;

var i = 0,
  duration = 750,
  root;

var tree = d3.layout.tree()
  .size([height, width]);

var diagonal = d3.svg.diagonal()
  .projection(function (d) { return [d.y, d.x]; });

var svg = d3.select("#career-map-md").append("svg")
  .attr("width", width + margin.right + margin.left)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// Define the div for the tooltip
var div = d3.select("#career-map-md").append("div")
  .attr("class", "tooltip")
  .style("opacity", 0);
  
root = treeOne[0];
root.x0 = height / 2;
root.y0 = 0;

update(root);

d3.select(self.frameElement).style("height", "1000px");



function update(source) {

  // Compute the new tree layout.
  var nodes = tree.nodes(root).reverse(),
    links = tree.links(nodes);

  // Normalize for fixed-depth.
  nodes.forEach(function (d) { d.y = d.depth * 200; });

  // Update the nodes…
  var node = svg.selectAll("g.node")
    .data(nodes, function (d) { return d.id || (d.id = ++i); });

  // Enter any new nodes at the parent's previous position.
  var nodeEnter = node.enter().append("g")
    .attr("class", "node")
    .attr("transform", function (d) { return "translate(" + source.y0 + "," + source.x0 + ")"; })

  nodeEnter.append("circle")
    .attr("r", 1e-6)
    .style("fill", function (d) { return d._children ? "lightsteelblue" : "#fff"; })
    .on("click", click);

  nodeEnter.append("text")
    .attr("class", "nodeText")
    .attr("x", function (d) { return d.children || d._children ? -13:-13; })
    .attr("dy", ".35em")
    .attr("text-anchor", function (d) { return d.children || d._children ? "end" : "end"; })
    .text(function (d) { return d.title; })
    .style("fill-opacity", 1)
    .on("mouseover", showJobInfo)
    .on("mouseout", hideJobInfo);

  // Transition nodes to their new position.
  var nodeUpdate = node.transition()
    .duration(duration)
    .attr("transform", function (d) { return "translate(" + d.y + "," + d.x + ")"; });

  nodeUpdate.select("circle")
    .attr("r", 10)
    .style("fill", function (d) { return d._children ? "lightsteelblue" : "#fff"; });

  nodeUpdate.select("text")
    .style("fill-opacity", 1);

  // Transition exiting nodes to the parent's new position.
  var nodeExit = node.exit().transition()
    .duration(duration)
    .attr("transform", function (d) { return "translate(" + source.y + "," + source.x + ")"; })
    .remove();

  nodeExit.select("circle")
    .attr("r", 1e-6);

  nodeExit.select("text")
    .style("fill-opacity", 1e-6);

  // Update the links…
  var link = svg.selectAll("path.link")
    .data(links, function (d) { return d.target.id; });

  // Enter any new links at the parent's previous position.
  link.enter().insert("path", "g")
    .attr("class", "link")
    .attr("d", function (d) {
      var o = { x: source.x0, y: source.y0 };
      return diagonal({ source: o, target: o });
    });

  // Transition links to their new position.
  link.transition()
    .duration(duration)
    .attr("d", diagonal);

  // Transition exiting nodes to the parent's new position.
  link.exit().transition()
    .duration(duration)
    .attr("d", function (d) {
      var o = { x: source.x, y: source.y };
      return diagonal({ source: o, target: o });
    })
    .remove();

  // Stash the old positions for transition.
  nodes.forEach(function (d) {
    d.x0 = d.x;
    d.y0 = d.y;
  });
}

// Toggle children on click.
function click(d) {
  if (d.children) {
    d._children = d.children;
    d.children = null;
  } else {
    d.children = d._children;
    d._children = null;
  }
  update(d);
}

function showJobInfo(d) {
  div.transition()
    .duration(500)
    .style("opacity", 1);
  div.html(`<div class="card bg-dark text-white" style="width: 30rem;">
                <div class="card-body alert alert-dismissible  
                fade show">        
                <h4>`
                + d.title + '  ,  ' + d.company +
                `</h4>
                <button type="button" class="btn close" 
                data-dismiss="alert" aria-label="Close"> 
                  
                <span aria-hidden="true">×</span> 
            </button><h6>Salary Range \t: `
                  + d.salary +
                  `</h6>`+
                  `<h6>What people with this role do\t:</h6><p>`
                  + d.description +
                `</p></div>
              </div>`)
    .style("left", (d3.event.pageX) - 10 + "px")
    .style("top", (d3.event.pageY) - 170 + "px");
}

function hideJobInfo(d) {
  div.transition()
    .duration(500)
    .style("opacity", 0);
  div.html("");
}

$('.close-icon').on('click', function () {
  $(this).closest('.card').fadeOut();
})
