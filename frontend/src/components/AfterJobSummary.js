import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import { Card, Row, Col, Button } from "react-bootstrap";
import { Container } from "../common/Container/styles";
import BarChart from "./BarChart";
import LineChart from "./LineChart";
import Typography from "@material-ui/core/Typography";
import ClipLoader from "react-spinners/ClipLoader";

const AfterJobSummary = ({ centralNodeType, centralNodeIDs }) => {
  const [isLoading, setLoading] = useState(0);
  const [stats, setStats] = useState({companies:{},roles:{}});

  const keyAction = {
    labels: [
      "1 yrs",
      "2 yrs",
      "3 yrs",
      "4 yrs",
      "5 yrs",
    ],
    data: [78000,83000,90000,100000,130000],
  };

  useEffect(() => {
    const fetchData = async (requestType) => {
      try {
        const baseURL = process.env.BASE_URL;
        const result = await axios.post(
          `${baseURL}api/after-central-node-stats`,
          {
            type: requestType,
            centralNodeType: centralNodeType,
            centralNodeIDs: centralNodeIDs,
          }
        );
        setStats({
          ...stats, ...result.data
        });
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, [centralNodeIDs]);

  return (
    <Fragment>
      <ClipLoader className="spinner" loading={isLoading} size={150} />
      <Fragment>
        <Container className="py-3">
          <LineChart
            title="Projected Compentation"
            labels={keyAction.labels}
            data={keyAction.data}
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
          <BarChart
            title="Roles"
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
      </Fragment>
      )
    </Fragment>
  );
};

export default AfterJobSummary;
