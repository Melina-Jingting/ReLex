import React from "react";
import { Row, Col } from "react-bootstrap";
import { withTranslation } from "react-i18next";
import Slide from "react-reveal/Slide";

import SvgIcon from "../../../../common/SvgIcon";

import * as S from "./styles";

const LeftContentBlock = ({ icon, title, content, section, t, id }) => {
  return (
    <S.LeftContentBlock>
      <Row type="flex" justify="space-between" align="middle" id={id}>
        <Col xs={6}>
          <Slide left>
            <SvgIcon
              src={icon}
              // className="about-block-image"
              width="300px"
              height="300px"
            />
          </Slide>
        </Col>
        <Col xs={6}>
          <Slide right>
            <S.ContentWrapper>
              <h6>{t(title)}</h6>
              <S.Content>{t(content)}</S.Content>
              <S.ServiceWrapper>
                <Row type="flex" justify="space-between">
                  {section &&
                    typeof section === "object" &&
                    section.map((item, id) => {
                      return (
                        <Col key={id} span={11}>
                          <SvgIcon src={item.icon} width="60px" height="60px" />
                          <S.MinTitle>{t(item.title)}</S.MinTitle>
                          <S.MinPara>{t(item.content)}</S.MinPara>
                        </Col>
                      );
                    })}
                </Row>
              </S.ServiceWrapper>
            </S.ContentWrapper>
          </Slide>
        </Col>
      </Row>
    </S.LeftContentBlock>
  );
};

export default withTranslation()(LeftContentBlock);
