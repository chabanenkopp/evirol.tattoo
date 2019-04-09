import React from "react"
import styled from "styled-components"
import PlaySVG from "../../images/circle_play.svg"
import { withTranslation } from "../../hoc"

const Button = styled.button`
  cursor: pointer;
  background: none;
  border-style: none;
`

const SpanWrapper = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
`

const ImgSpan = styled.span`
  display: block;
  margin-right: 10px;
  width: 70px;
  height: 70px;
  background-image: url(${PlaySVG});
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
  @media (max-width: 700px) {
    width: 50px;
    height: 50px;
  }
  @media (max-width: 350px) {
    width: 35px;
    height: 35px;
  }
`

const TextSpan = styled.span`
  font-size: 1rem;
  line-height: 1.5;
  text-transform: uppercase;
  font-weight: 300;
  @media (max-width: 350px) {
    font-size: 0.8rem;
  }
`
const ButtonPlay = ({ t }) => {
  const { buttonPlay } = t.main.upperSection
  return (
    <Button onClick={() => {}}>
      <SpanWrapper>
        <ImgSpan />
        <TextSpan>{buttonPlay}</TextSpan>
      </SpanWrapper>
    </Button>
  )
}

export default withTranslation(ButtonPlay)
