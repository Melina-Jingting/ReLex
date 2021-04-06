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

const HomeScreen = () => {
  return (
    <Container>
      <LandingPageHeader />
      <ScrollToTop />
      <MiddleBlock
        title={IntroContent.title}
        content={IntroContent.text}
        button={IntroContent.button} // this component is the linkedin button
      />
      <Container className="py-5">
      <img src={require(`../../img/svg/how-it-works.svg`)} alt='how-it-works.svg' width={1000}/>
      </Container>
      <ContentBlock
        type="right"
        first="true"
        title={SearchContent.title}
        content={SearchContent.text}
        button={SearchContent.button}
        icon="graphs.svg"
        id="intro"
      />

      <ContentBlock
        type="left"
        title={RecommendationsContent.title}
        content={RecommendationsContent.text}
        section={RecommendationsContent.section}
        icon="look-in-mirror.svg"
        id="about"
      />
      <ContentBlock
        type="right"
        title={PlanContent.title}
        content={PlanContent.text}
        icon="visualise-map.svg"
        id="mission"
      />

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
      />
    </Container>
  );
};

export default HomeScreen;
