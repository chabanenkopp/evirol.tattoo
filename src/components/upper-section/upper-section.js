import React from "react"
import styled from "styled-components"
import { withTranslation } from "../../hoc"
import { Grid } from "../../atoms/grid"
import { XXL, H2 } from "../../atoms/typography"
import { Buttons } from "../buttons/button"
import ButtonPlay from "../button-play"
import background from "../../background-images/iren2.png"

const UpperSection = ({ t }) => {
  const { buttonPink, title, SubTitle, paragraph } = t.main.upperSection;
  return (
      <GridContainer>
        <Grid.Fr3Fr4 gap>
          <div className="upper-left">
            <LeftBlockWrapper>
              <XXL weight="300">{title}</XXL>
              <XXL weight="500" color="#ffa3a5">
                {SubTitle}
              </XXL>
              <ParagraphWrapper>
                <H2 weight="300">{paragraph}</H2>
              </ParagraphWrapper>
              <ButtonsContainer>
                <WrapperLeft>
                  <Buttons.Pink href="https://www.instagram.com/evirol.tattoo/?hl=en">
                    {buttonPink}
                  </Buttons.Pink>
                </WrapperLeft>
                <WrapperRight>
                  <ButtonPlay />
                </WrapperRight>
              </ButtonsContainer>
            </LeftBlockWrapper>
          </div>
          <div className="upper-right">
            <ImageBorder>
              <RightImage />
            </ImageBorder>
          </div>
        </Grid.Fr3Fr4>
      </GridContainer>
  )
};
export default withTranslation(UpperSection)

const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 50px;
  @media (max-width: 1080px) {
    margin-top: 35px;
  }
`;
const WrapperLeft = styled.div`
  flex: 0 0 auto;
`;

const WrapperRight = styled.div`
  flex: 0 0 auto;
  margin-left: 20px;
`;

const ImageBorder = styled.div`
  background-color: rgb(255, 255, 255);
  box-shadow: rgba(155, 155, 155, 0.45) 0px 0.72rem 2.1rem 0px;
  padding: 0.9rem;
  border-radius: 0.5rem;
  margin-left: 25px;
  margin-top: 120px;
  width: 80%;
  @media (max-width: 900px) {
    margin-top: 40px;
    margin-left: 0px;
    width: 90%;
  }
`;

const RightImage = styled.div`
  padding-bottom: 62.5%;
  background: url(${background}) center center / cover no-repeat;
`;

const ParagraphWrapper = styled.div`
  margin: 50px 100px 0 0px;
  @media (max-width: 1080px) {
    margin: 20px 60px 0px 0px;
  }
  @media (max-width: 900px) {
    margin: 30px 46px 0px 0px;
  }
`;
const LeftBlockWrapper = styled.div`
  margin-top: 120px;
  @media (max-width: 900px) {
    margin-top: 27px;
  }
`;
const GridContainer = styled.div`
  margin-left: 100px;
  @media (max-width: 1200px) {
    margin-left: 10px;
  }
`;
