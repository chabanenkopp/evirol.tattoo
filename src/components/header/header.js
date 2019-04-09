import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import circledLogo from "../../images/flower-02.svg"
import { withTranslation } from "../../hoc"
import "./header.scss"
import Toggle from "../toggle"
import hamburger from "../../images/icons8-menu.svg"

const HamContainer = styled.div`
  align-items: center;
  display: none;
  @media (max-width: 900px) {
    display: flex;
  }
`
const ToggleContainer = styled.div`
  align-items: center;
  display: flex;
  @media (max-width: 900px) {
    display: none;
  }
`

const Header = ({ t, onToggle, moveSlider }) => {
  return (
    <nav className="main-nav">
      <div className="logo-container">
        <Link to="/">
          <img src={circledLogo} alt="flower" />
        </Link>
        <div className="logo-text-container">
          Evirol <span>Tattoo</span>
        </div>
      </div>
      <ToggleContainer>
        <Toggle onToggle={onToggle} ItemId="header" />
      </ToggleContainer>
      <HamContainer>
        <img src={hamburger} alt="menu" onClick={moveSlider} />
      </HamContainer>
      <ul>
        <li />
        <li>{t.header.tattoo}</li>
        <li>{t.header.shop}</li>
        <li>{t.header.contacts}</li>
        <li>{t.header.login}</li>
      </ul>
    </nav>
  )
}

export default withTranslation(Header)
