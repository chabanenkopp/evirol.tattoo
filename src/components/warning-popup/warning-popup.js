import React from 'react'
import styled from 'styled-components'
import {withTranslation} from '../../hoc/'

const WarningPopup = ({isLoginClicked, t}) => {
    const {loginWarning} = t;
    return (
        <WarningContainer>
            <Warning style={isLoginClicked ? {opacity: "1", visibility: "visible"} : null}>
                {loginWarning}
            </Warning>
        </WarningContainer>
    )
};

export default withTranslation(WarningPopup)

const Warning = styled.div`
height: 30px;
position: fixed;
border-radius: 16px;
display: flex;
justify-content: center;
align-items: center;
color: white;
font-weight: 500;
width: 92%;
background-color: #e81750;
opacity: 0;
visibility: hidden;
transition: all .5s ease-in-out;
box-shadow: rgba(155, 155, 155, 0.45) 0px 0.7rem 2rem 0px;
`;

const WarningContainer = styled.div`
 width: 100%;
 display: flex;
 justify-content: center;
 margin-top: 0px;
 position: fixed;
 z-index: 21;
`;
