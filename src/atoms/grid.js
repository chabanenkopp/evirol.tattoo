import styled from "styled-components"

const setGridGap = ({ gap }) => `
grid-column-gap: ${typeof gap === "string" ? gap : gap ? "60px" : 0};
`
const Fr3Fr4 = styled.div`
  display: grid;
  grid-template-columns: 3fr 4fr;
  ${setGridGap}
  @media (max-width: 1200px) {
    grid-column-gap: 0;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`
const Fr1Fr1 = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`

export const Grid = { Fr3Fr4, Fr1Fr1 }
