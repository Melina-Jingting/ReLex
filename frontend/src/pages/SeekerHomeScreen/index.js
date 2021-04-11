// import { lazy } from "react";
import React from "react";

import IntroContent from "../../content/IntroContent.json";
import DiscoverContent from "../../content/DiscoverContent.json";
import RoleModelContent from "../../content/RoleModelContent.json";
import CompareContent from "../../content/CompareContent.json";
import ReceiveAdviceContent from "../../content/ReceiveAdviceContent.json";
import GiveAdviceContent from "../../content/GiveAdviceContent.json";

import Container from "../../common/Container";
import ScrollToTop from "../../common/ScrollToTop";
import MiddleBlock from "../../components/LandingPage/MiddleBlock";
import ContentBlock from "../../components/LandingPage/ContentBlock";
import LandingPageHeader from "../../components/LandingPage/LandingPageHeader";
import ProductVid from "../../video/ProductVid.mp4";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

import { BrowserRouter, Route, Switch } from "react-router-dom";

// import { LinkedInPopUp } from 'react-linkedin-login-oauth2';
// import LinkedInPage from '../LinkedInPage';

// const ContactFrom = lazy(() => import("../components/ContactForm"));
// const ContentBlock = lazy(() => import("../components/ContentBlock"));
// const MiddleBlock = lazy(() => import("../components/MiddleBlock"));
// const Container = lazy(() => import("../common/Container"));
// const ScrollToTop = lazy(() => import("../common/ScrollToTop"));

const SeekerHomeScreen = () => {
  return (
    <Container>
      <LandingPageHeader />
      <ScrollToTop />
      <Container>
        <video
          autoPlay
          loop
          muted
          style={{
            position: "absolute",
            // width: "100%",
            // left: "50%",
            // height: "100%",
            objectFit: "fill",
            // transform: "translate(-50%, -50%)",
            zIndex: "-1",
            opacity: "0.3",
          }}
        >
          <source src={ProductVid} type="video/mp4" />
        </video>
        <MiddleBlock
          title={IntroContent.title}
          content={IntroContent.text}
          button={IntroContent.button} // this component is the linkedin button
          linkedin_url={
            "https://www.linkedin.com/oauth/v2/authorization?response_type=code&state=987654321&scope=r_liteprofile%20r_emailaddress&client_id=78ioflr7umfzey&redirect_uri=https%3A%2F%2F6fxspsdl46.execute-api.us-east-2.amazonaws.com%2Fdefault%2Flinkedinsocial"
          }
        />
      </Container>
      {/* <Container>
        <Row className="p-5 landing-page-value-section">
          <Col>
            <Card>
              <Card.Body>
                <h4 className="text-center">Discover possibilities</h4>
                <video
                  autoPlay
                  loop
                  muted
                  style={{
                    // position: "absolute",
                    width: "100%",
                    // left: "50%",
                    // height: "100%",
                    // objectFit: "fill",
                    // transform: "translate(-50%, -50%)",
                    zIndex: "-1",
                    brightne
                    
                  }}
                >
                  <source src={ProductVid} type="video/mp4" />
                </video>

                <h6 className="text-center">
                  Get an overview of career paths available to you based on the
                  paths of those who shared the same education and experiences
                </h6>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <h4 className="text-center">Learn from others' success</h4>
                <h5>
                  Gain insights on what it took for others to land the job
                  you’re aiming for to see if or how you can stand a chance
                </h5>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <h5>
                  Compare the long term benefits of choosing one education or
                  experience over another
                </h5>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container> */}
      <ContentBlock
        type="right"
        first="true"
        title={DiscoverContent.title}
        content={DiscoverContent.text}
        icon="look-in-mirror.svg"
        id="intro"
      />

      <ContentBlock
        type="left"
        title={RoleModelContent.title}
        content={RoleModelContent.text}
        section={RoleModelContent.section}
        icon="visualise-map.svg"
        id="about"
      />
      <ContentBlock
        type="right"
        title={CompareContent.title}
        content={CompareContent.text}
        icon="graphs.svg"
        id="mission"
      />
{/* 
      <ContentBlock
        type="left"
        title={ReceiveAdviceContent.title}
        content={ReceiveAdviceContent.text}
        icon="ask-questions.svg"
        id="product"
      />

      <ContentBlock
        type="right"
        title={GiveAdviceContent.title}
        content={GiveAdviceContent.text}
        icon="answer.svg"
        id="product"
      /> */}
    </Container>
  );
};

export default SeekerHomeScreen;
