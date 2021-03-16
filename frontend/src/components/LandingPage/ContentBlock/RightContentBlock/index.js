import React from "react";
import { Row, Col } from "react-bootstrap";
import { withTranslation } from "react-i18next";
import Slide from "react-reveal";

import SvgIcon from "../../../../common/SvgIcon";
import Button from "../../../../common/Button";

import * as S from "./styles";

const RightBlock = ({ title, content, button, icon, t, id }) => {
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <S.RightBlockContainer>
      <Row type="flex" justify="space-between" align="middle" id={id}>
        <Col xs={6}>
          <Slide left>
            <S.ContentWrapper>
              <h6>{t(title)}</h6>
              <S.Content>{t(content)}</S.Content>
              <S.ButtonWrapper>
                {button &&
                  typeof button === "object" &&
                  button.map((item, id) => {
                    return (
                      <Button
                        key={id}
                        color={item.color}
                        width="true"
                        onClick={() => scrollTo("about")}
                      >
                        {t(item.title)}
                      </Button>
                    );
                  })}
              </S.ButtonWrapper>
            </S.ContentWrapper>
          </Slide>
        </Col>
        <Col xs={6}>
          <Slide right>
            <SvgIcon
              src={icon}
              // className="about-block-image"
              width="300px"
              height="300px"
            />
          </Slide>
        </Col>
      </Row>
    </S.RightBlockContainer>
  );
};

export default withTranslation()(RightBlock);
