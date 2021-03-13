import React, { useRef, useEffect, useState } from "react";
import { Button, Card, Container } from "react-bootstrap";
import { FixedSizeList as List } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";

const ratingChanged = (newRating) => {
  console.log(newRating);
};

const Column = ({ index, style }) => (
  <AutoSizer>
    {({ width }) => (
      <div style={style} className="py-2">
        <Card style={{ width: width }}>
          <Card.Body>
            <div>
              <a href={`/discover/${index}`} class="stretched-link">
                <Card.Title>Title {index}</Card.Title>
              </a>
            </div>

            <Card.Subtitle className="mb-2">
              <p style={{ display: "inline" }}>Company</p>
              <p style={{ display: "inline", padding: "10px" }}>
                5.0 <i class="fas fa-star"></i>
              </p>
              <p class="text-muted">Singapore</p>
            </Card.Subtitle>
            <Card.Text>
              <b>$6000-$8000 a month</b>
              <br></br>
              <b class="text-success">78% Match</b>
              <small>
                <ul>
                  <li>Engage deeply with business</li>
                  <li>Drive programmatic changes</li>
                  <li>Establish learning pipeline</li>
                </ul>
              </small>
            </Card.Text>
            <Button
              href="hello"
              variant="success"
              size="sm"
              class="float-left"
              z-index="2"
              position="relative"
            >
              Make it your goal!
            </Button>
          </Card.Body>
        </Card>
      </div>
    )}
  </AutoSizer>
);

const Listing = () => {
  return (
    <AutoSizer>
      {({ height, width }) => (
        <List
          className="List"
          height={height}
          width={width}
          itemCount={1000}
          itemSize={280}
          layout="vertical"
        >
          {Column}
        </List>
      )}
    </AutoSizer>
  );
};

export default Listing;
