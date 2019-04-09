import styled from "styled-components"

const getMargin = ({ margin }) => `
margin: ${margin || 0}
`
export const Margin = styled.div`
  ${getMargin};
`
