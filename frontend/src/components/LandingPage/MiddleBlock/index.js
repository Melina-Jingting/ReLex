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

const MiddleBlock = ({ title, content, button, t , linkedin_url}) => {
  const linkedinLogin = () => {
    const url = linkedin_url
    window.open(url, "_blank");
  };

  return (
    <Container>
      <S.MiddleBlock>
        <Row type="flex" justify="center" align="middle">
          {/* <video
            autoPlay
            loop
            muted
            style={{
              position: "absolute",
              width: "100%",
              left: "50%",
              height: "100%",
              objectFit: "cover",
              transform: "translate(-50%, -50%)",
              zIndex: "-1",
            }}
          >
            <source src={NetworkVid} type="video/mp4" />
          </video> */}
          {/* <Fade bottom> */}
          <S.ContentWrapper>
            <Col lg={24} md={24} sm={24} xs={24}>
              <h6>{t(title)}</h6>
              <S.Content>{t(content)}</S.Content>
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
