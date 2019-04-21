import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { withTranslation } from "../../hoc"
import Toggle from "../toggle"
import { Buttons } from "../buttons/button"
import { H3 } from "../../atoms/typography"

const SliderContainer = styled.div`
  z-index: 20;
  position: fixed;
  top: 0;
  bottom: 0;
  transition: transform 0.3s ease-out;
  will-change: transform;
  overflow-y: auto;
  right: 0;
  width: 180px;
  background-color: #f2b8b8;
  transform: ${props =>
    props.isVisible ? "translateX(0%)" : "translateX(100%)"};
`;

const Slider = ({ isVisible, onToggle, routes, isLoginClicked, clickLogin, t }) => {
  const { gallery, order, teaching, login } = t.subHeader;
  const categories = [gallery, order, teaching];
  return (
    <SliderContainer isVisible={isVisible}>
      <ButtonsWrapper>
        <ButtonsContainer>
          <div style={{ padding: "15px" }}>
            <Toggle onToggle={onToggle} ItemId="slider" />
          </div>
          {routes.map((route, i) => {
            return (
              <ButtonPadding key={route}>
                <Link to={route}>
                  <H3>{categories[i]}</H3>
                </Link>
              </ButtonPadding>
            )
          })}
          <div style={{ padding: "15px" }}>
            <Buttons.Login href="# " onClick={!isLoginClicked ? clickLogin : null}>{login}</Buttons.Login>
          </div>
        </ButtonsContainer>
      </ButtonsWrapper>
    </SliderContainer>
  )
};

export default withTranslation(Slider)

const ButtonsWrapper = styled.div`
  padding-left: 0.9rem;
  padding-right: 0.9rem;
  background-color: rgb(255, 255, 255);
  height: 100%;
`;

const ButtonsContainer = styled.div`
  padding-top: 3.5rem;
  display: flex;
  flex-direction: column;
`;
const ButtonPadding = styled.span`
  padding: 20px;
`;
