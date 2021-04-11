import React from "react";
import { lazy } from "react";
import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import Fade from "react-reveal";
import Button from "../../../common/Button";
import NetworkVid from "../../../video/network.mp4";

import * as S from "./styles";
import { Container } from "../../../common/Container/styles";

// const Button = lazy(() => import("../../common/Button"));

const MiddleBlock = ({ title, content, button, t, linkedin_url }) => {
  const linkedinLogin = () => {
    const url = linkedin_url;
    window.open(url, "_blank");
  };

  return (
    <Container>
      <S.MiddleBlock>
        {/* <video
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
          }}
        >
          <source src={NetworkVid} type="video/mp4" />
        </video> */}
        {/* <Fade bottom> */}
        <Row type="flex" justify="center" align="middle">
          <S.ContentWrapper>
            <Col lg={24} md={24} sm={24} xs={24}>
              <h2 style={{color:'black'}}><b>{t(title)}</b></h2>
              <S.Content>
                <h5 style={{color:'black'}}>{t(content)}</h5>
              </S.Content>
              <S.Content>
                <h5 style={{color:'black'}}>
                  {"Begin your journey to career fulfillment with us today!"}
                </h5>
              </S.Content>
              {button ? (
                <Button
                  name="submit"
                  type="submit"
                  onClick={() => linkedinLogin()}
                >
                  {t(button)}
                </Button>
              ) : (
                ""
              )}
            </Col>
          </S.ContentWrapper>
          {/* </Fade> */}
        </Row>
      </S.MiddleBlock>
    </Container>
  );
};

export default withTranslation()(MiddleBlock);
