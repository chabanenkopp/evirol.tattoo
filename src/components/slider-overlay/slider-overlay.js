import React from "react"
import styled from "styled-components"

const Overlay = styled.div`
  z-index: 1;
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  visibility: ${({ isVisible }) => (isVisible ? "visible" : "hidden")};
  transition: opacity 0.3s ease-out 0s, visibility 0.3s ease-out 0s;
  background-color: rgba(0, 0, 0, 0.3);
`

const SliderOverlay = ({ isVisible, moveSlider }) => (
  <Overlay isVisible={isVisible} onClick={moveSlider} />
)

export default SliderOverlay
