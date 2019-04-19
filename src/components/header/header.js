import React, {Component} from "react"
import {Link} from "react-router-dom"
import styled from "styled-components"
import circledLogo from "../../images/flower-02.svg"
import {withTranslation} from "../../hoc"
import "./header.scss"
import Toggle from "../toggle"
import hamburger from "../../images/icons8-menu.svg"
import HoverPopupMenu from '../hover-popup-menu'

const HamContainer = styled.div`
  align-items: center;
  display: none;
  @media (max-width: 900px) {
    display: flex;
  }
`;
const ToggleContainer = styled.div`
  align-items: center;
  display: flex;
  @media (max-width: 900px) {
    display: none;
  }
`;

class Header extends Component {
    state = {
        isWindowScrolled: false
    };

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll)
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll)
    }

    handleScroll = event => {
        const {isWindowScrolled} = this.state;
        if (window.pageYOffset > 0 && !isWindowScrolled)
            this.setState({isWindowScrolled: !isWindowScrolled});
        if (window.pageYOffset === 0) this.setState({isWindowScrolled: false})
    };

    render() {
        const {t, onToggle, moveSlider, categories} = this.props;
        const {subHeader} = t;
        const {tattoo, shop, contacts, login } = t.header;
        const {isWindowScrolled} = this.state;
        const navStyle = {paddingTop: "3px", paddingBottom: "0px"};
        const logoStyle = {height: "50px"};
        const wrapperStyle = {marginTop: "55px"};
        const triangleStyle = {top: "45px"};
        return (
            <nav className="main-nav" style={isWindowScrolled ? navStyle : null}>
                <div className="logo-container">
                    <Link to="/">
                        <img
                            src={circledLogo}
                            alt="flower"
                            style={isWindowScrolled ? logoStyle : null}
                        />
                    </Link>
                    <div className="logo-text-container">
                        Evirol <span>Tattoo</span>
                    </div>
                </div>
                <ToggleContainer>
                    <Toggle onToggle={onToggle} ItemId="header"/>
                </ToggleContainer>
                <HamContainer>
                    <img src={hamburger} alt="menu" onClick={moveSlider}/>
                </HamContainer>
                <ul>
                    <HoverPopupMenu isWindowScrolled={isWindowScrolled}
                                    wrapperStyle={wrapperStyle}
                                    triangleStyle={triangleStyle}
                                    categories={categories}
                                    t={subHeader}
                                    itemTranslation={tattoo}
                    />
                    <li>{shop}</li>
                    <li>{contacts}</li>
                    <li>{login}</li>
                </ul>
            </nav>
        )
    }
    }

    export
    default

    withTranslation(Header)
