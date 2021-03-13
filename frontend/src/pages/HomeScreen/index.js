// import { lazy } from "react";
import React from "react";

import IntroContent from "../../content/IntroContent.json";
import SearchContent from "../../content/SearchContent.json";
import RecommendationsContent from "../../content/RecommendationsContent.json";
import PlanContent from "../../content/PlanContent.json";
import ReceiveAdviceContent from "../../content/ReceiveAdviceContent.json";
import GiveAdviceContent from "../../content/GiveAdviceContent.json";
import ContactContent from "../../content/ContactContent.json";

import Container from "../../common/Container";
import ScrollToTop from "../../common/ScrollToTop";
import MiddleBlock from "../../components/MiddleBlock";
import ContactForm from "../../components/ContactForm";
import ContentBlock from "../../components/ContentBlock";
import LandingPageHeader from "../../components/LandingPageHeader";

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
        button={IntroContent.button}
      />
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
      />s

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

      {/* <ContactForm
        title={ContactContent.title}
        content={ContactContent.text}
        id="contact"
      /> */}
    </Container>
  );
};

export default HomeScreen;
