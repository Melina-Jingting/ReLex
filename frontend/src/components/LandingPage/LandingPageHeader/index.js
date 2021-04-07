import React from "react";
import { useState, Fragment, lazy } from "react";
import { Row, Col } from "react-bootstrap";
import { Drawer } from "antd";
import { CSSTransition } from "react-transition-group";
import { withTranslation } from "react-i18next";
import Button from "../../../common/Button";
import { Link } from "react-router-dom";

import * as S from "./styles";
import { Container } from "../../../common/Container/styles";

// const SvgIcon = lazy(() => import("../../common/SvgIcon"));
// const Button = lazy(() => import("../../common/Button"));

const Header = ({ t }) => {
  const [isNavVisible] = useState(false);
  const [isSmallScreen] = useState(false);
  const [visible, setVisibility] = useState(false);

  const showDrawer = () => {
    setVisibility(!visible);
  };

  const onClose = () => {
    setVisibility(!visible);
  };

  const MenuItem = () => {
    return (
      <Fragment>
        {/* <S.CustomNavLinkSmall onClick={() => scrollTo("about")}>
          <S.Span>{t("About")}</S.Span>
        </S.CustomNavLinkSmall> */}
        {/* <S.CustomNavLinkSmall onClick={() => scrollTo("mission")}>
          <S.Span>{t("Seeker")}</S.Span>
        </S.CustomNavLinkSmall>
        <S.CustomNavLinkSmall onClick={() => scrollTo("product")}>
          <S.Span>{t("Mentors")}</S.Span>
        </S.CustomNavLinkSmall> */}
        <Row>
          <Col>
            <Link
              to="/"
              style={{ width: "180px" }}
              // onClick={() => linkedinLogin("contact")}
            >
              <h5>{t("seeker")}</h5>
            </Link>
          </Col>
          <Col>
            <Link
              to="/mentor"
              style={{ width: "180px" }}
              // onClick={() => linkedinLogin("contact")}
            >
              <h5>{t("mentor")}</h5>
            </Link>
          </Col>
        </Row>
      </Fragment>
    );
  };

  return (
    <S.Header>
      <S.Container>
        <Row type="flex" justify="space-between" gutter={20}>
          {/* <img src="../../img/svg/placeholder_company_logo.png" /> */}

          {/* <S.LogoContainer to="/" aria-label="homepage">
          </S.LogoContainer> */}
          <Col>
            <h1>LookUp</h1>
          </Col>
          <Col>
            <div className="float-right">
              <S.NotHidden>
                <MenuItem />
              </S.NotHidden>
              <S.Burger onClick={showDrawer}>
                <S.Outline />
              </S.Burger>
            </div>
          </Col>
        </Row>
        <CSSTransition
          in={!isSmallScreen || isNavVisible}
          timeout={350}
          classNames="NavAnimation"
          unmountOnExit
        >
          <Drawer closable={false} visible={visible} onClose={onClose}>
            <Col style={{ marginBottom: "2.5rem" }}>
              <S.Label onClick={onClose}>
                <Col span={12}>
                  <S.Menu>Menu</S.Menu>
                </Col>
                <Col span={12}>
                  <S.Outline padding="true" />
                </Col>
              </S.Label>
            </Col>
            <MenuItem />
          </Drawer>
        </CSSTransition>
      </S.Container>
    </S.Header>
  );
};

export default withTranslation()(Header);
