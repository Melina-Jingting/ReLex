// import { lazy } from "react";
import React from "react";

import IntroContent from "../../content/IntroContent.json";
import SearchContent from "../../content/SearchContent.json";
import RecommendationsContent from "../../content/RecommendationsContent.json";
import PlanContent from "../../content/PlanContent.json";
import ReceiveAdviceContent from "../../content/ReceiveAdviceContent.json";
import GiveAdviceContent from "../../content/GiveAdviceContent.json";

import Container from "../../common/Container";
import ScrollToTop from "../../common/ScrollToTop";
import MiddleBlock from "../../components/LandingPage/MiddleBlock";
import ContentBlock from "../../components/LandingPage/ContentBlock";
import LandingPageHeader from "../../components/LandingPage/LandingPageHeader";

import { BrowserRouter, Route, Switch } from "react-router-dom";

// import { LinkedInPopUp } from 'react-linkedin-login-oauth2';
// import LinkedInPage from '../LinkedInPage';

// const ContactFrom = lazy(() => import("../components/ContactForm"));
// const ContentBlock = lazy(() => import("../components/ContentBlock"));
// const MiddleBlock = lazy(() => import("../components/MiddleBlock"));
// const Container = lazy(() => import("../common/Container"));
// const ScrollToTop = lazy(() => import("../common/ScrollToTop"));

const MentorHomeScreen = () => {

  return (

    <Container>
      <LandingPageHeader />
      <ScrollToTop />
      <MiddleBlock
        title={"Want to become a mentor?"}
        content={"Join industry experts on our platform enthusiastic in sharing their knowledge and helping others grow"}
        button={IntroContent.button} // this component is the linkedin button
        linkedin_url={"https://www.linkedin.com/oauth/v2/authorization?response_type=code&state=987654321&scope=r_liteprofile%20r_emailaddress&client_id=78ioflr7umfzey&redirect_uri=https%3A%2F%2F5sx1wjvswf.execute-api.us-east-2.amazonaws.com%2Fdefault%2Flinkedinsocial-mentor"}
      />
    </Container>
  );
};

export default MentorHomeScreen;
