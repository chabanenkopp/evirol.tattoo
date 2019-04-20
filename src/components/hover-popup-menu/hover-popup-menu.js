import React from 'react'
import {Link} from "react-router-dom"
import styled from 'styled-components'

const HoverPopupMenu = (
    {
        t,
        itemTranslation,
        isWindowScrolled,
        wrapperStyle,
        triangleStyle,
        categories
    }
) => {
    return (
        <ContainerMain>
            <Title>{itemTranslation}</Title>
            <HoverMenuContainer>
                <HoverMenuWrapper style={isWindowScrolled ? wrapperStyle : null}>
                    <Triangle style={isWindowScrolled ? triangleStyle : null}/>
                    <LinksContainer>
                        {
                            categories.map(route => <StyledLinks to={route}
                                                                 key={route}>{t[route.slice(1)]}</StyledLinks>)
                        }
                    </LinksContainer>
                </HoverMenuWrapper>
            </HoverMenuContainer>
        </ContainerMain>
    )
};

export default HoverPopupMenu

const Title = styled.div`
 margin-bottom: 4px;
 &::after {
        content: "";
        position: relative;
        top: 1px;
        left: 10px;
        width: 0;
        height: 0;
        border-right-color: transparent;
        border-bottom-color: transparent;
        border-left-color: transparent;
        border-width: 4px 3.5px 0;
        border-style: solid;
        margin-top: 10px;
        display: inline-block;
        margin-bottom: 5px;
    }
`;

const HoverMenuWrapper = styled.div`
    margin-top: 80px;
    background-color: rgb(255, 255, 255);
    justify-content: center;
    box-shadow: rgba(32, 32, 32, 0.1) 0px 13px 38px 0px;
    display: none;
    border-radius: 6px;
`;

const ContainerMain = styled.div`
    display: flex;
    justify-content: center;
    cursor: pointer;
    &:hover ${HoverMenuWrapper} {
        display: flex;
    }
`;

const HoverMenuContainer = styled.div`
    position: absolute;
    z-index: 2;
`;

const Triangle = styled.div`
    position: absolute;
    top: 70px;
    width: 0;
    height: 0;
    border-top-color: transparent;
    border-right-color: transparent;
    border-bottom-color: rgb(255, 255, 255);
    border-left-color: transparent;
    border-width: 0px 20px 20px;
    border-style: solid;
`;

const LinksContainer = styled.div`
    padding: 1.3rem 2.8rem;
`;

const StyledLinks = styled(Link)`
    display: block;
    text-align: center;
    white-space: nowrap;
    margin: 0;
    padding: 0.4rem 0.2rem;
    text-decoration: none;
    color: #2c2b2b;
    transition: 0.5s;
    &:hover{
     color: #ffa3a5;
    }
`;