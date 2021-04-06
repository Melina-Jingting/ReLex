import React from "react";
import { Card } from "react-bootstrap";
import { Bar, HorizontalBar } from "react-chartjs-2";

const BarChart = ({title,labels,data}) => {
  return (
    <Card>
      <Card.Header className="text-center">
        {title}
      </Card.Header>
      <Card.Body>
      <HorizontalBar 
      height={300}
      data={{
        
        labels: labels,
        datasets: [
            {
                label: '# of people',
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

export default BarChart;
