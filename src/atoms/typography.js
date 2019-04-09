import styled from "styled-components"

const fontSize = {
  S: "10px",
  M: "12px",
  L: "14px",
  H3: "16px",
  H2: "20px",
  H1: "24px",
  XL: "32px",
  XXL: "50px"
}

const getTextColor = ({ color }) => `
  color: ${color || "#2c2b2b"};
  `
const getFontWeight = ({ weight }) => `
  font-weight: ${weight || 300};
  `

export const H3 = styled.h2`
  font-size: ${fontSize.H3};
  ${getTextColor};
  ${getFontWeight};
`

export const H2 = styled.h2`
  font-size: ${fontSize.H2};
  ${getTextColor};
  ${getFontWeight};
  @media (max-width: 1080px) {
    font-size: 16px;
  }
  @media (max-width: 900px) {
    font-size: 15px;
  }
`
export const XXL = styled.h1`
  font-size: ${fontSize.XXL};
  ${getTextColor};
  ${getFontWeight};
  @media (max-width: 1080px) {
    font-size: 40px;
  }
  @media (max-width: 900px) {
    font-size: 35px;
  }
`
