import React from "react";
import { Card } from "react-bootstrap";
import { Line } from "react-chartjs-2";

const LineChart = ({title,labels,data}) => {
  return (
    <Card>
      <Card.Header className="text-center">
        {title}
      </Card.Header>
      <Card.Body>
      <Line
      height={300}
      data={{
        
        labels: labels,
        datasets: [
            {
                label: 'median',
                data: data
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

export default LineChart;
