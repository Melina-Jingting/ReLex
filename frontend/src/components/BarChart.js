import React from "react";
import { Card } from "react-bootstrap";
import { Bar, HorizontalBar } from "react-chartjs-2";

const BarChart = ({title}) => {
  return (
    <Card>
      <Card.Header>
        {title}
      </Card.Header>
      <Card.Body>
      <HorizontalBar 
      data={{
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
            {
                label: '# of people',
                data: [1,2,3,4,5,3]
            }
        ]

      }} 
      options={{
          maintainAspectRatio: false
      }} />
      </Card.Body>
    </Card>      
  );
};

export default BarChart;
