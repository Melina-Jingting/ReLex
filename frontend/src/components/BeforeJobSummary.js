import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import { Container } from "../common/Container/styles";
import BarChart from "./BarChart";

const BeforeJobSummary = ({centralNodeType, centralNodeIDs}) => {
  const [isLoading, setLoading] = useState(0);
  const [stats, setStats] = useState({
    skills: {},
    certifications: {},
    companies: {},
    roles: {},
    sector: {},
    education: {},
  });

  const keyAction = {
    labels: [
      "Product improvement",
      "Market validation",
      "Define product strategy",
      "Engaging with customers and partners",
      "Collaborate with technical and design functions",
    ],
    data: [25, 20, 17, 16, 10],
  };

  useEffect(() => {
    console.log(centralNodeType)
    const fetchData = async () => {
      try {
        const baseURL = process.env.BASE_URL;
        const result = await axios.post(
          `${baseURL}api/before-central-node-stats`,
          {
            centralNodeType: centralNodeType,
            centralNodeIDs: centralNodeIDs,
          }
        );
        console.log(result.data)
        setStats({
          ...stats, ...result.data
        });
      } catch (err) {
        // Handle Error Here
        console.error(err);
      }
    };

    fetchData();
  }, [centralNodeIDs]);

  return (
    <Fragment>
      <Container className="py-3">
        <BarChart
          title="Skills"
          labels={stats.skills.labels}
          data={stats.skills.data}
        />
      </Container>
      <Container className="py-3">
        <BarChart
          title="Certifications"
          labels={stats.certifications.labels}
          data={stats.certifications.data}
        />
      </Container>
      <Container className="py-3">
        <BarChart
          title="Companies"
          labels={stats.companies.labels}
          data={stats.companies.data}
        />
      </Container>
      <Container className="py-3">
        <BarChart title="Roles" 
          labels={stats.roles.labels}
          data={stats.roles.data}
        />
      </Container>
      {/* <Container className="py-3">
        <BarChart
          title="Sector"
          labels={keyAction.labels}
          data={keyAction.data}
        />
      </Container> */}
      <Container className="py-3">
        <BarChart
          title="Education"
          labels={stats.education.labels}
          data={stats.education.data}
        />
      </Container>
      <Container className="py-3">
        <BarChart
          title="Key activities done"
          labels={keyAction.labels}
          data={keyAction.data}
        />
      </Container>
    </Fragment>
  );
};

export default BeforeJobSummary;
