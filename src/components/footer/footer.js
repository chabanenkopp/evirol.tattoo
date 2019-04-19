import React from "react"
import styled from "styled-components"
import Octicon, { MarkGithub } from "@githubprimer/octicons-react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core"
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons"
import { withTranslation } from "../../hoc"
import itua from "../../images/itua_no_text.svg"
library.add(faFacebookF, faTwitter, faInstagram, faLinkedin)

const Footer = ({ t }) => {
  const { slogan } = t.footer
  return (
    <Container>
      <Wrapper>
        <UpperRow>
          <IconContainer>
            <IconAttribute href="# " style={{ marginLeft: "0px" }}>
              <div className="change-icon-size">
                <StyledIcon
                  icon={["fab", "twitter"]}
                  style={{ color: "black" }}
                  size="2x"
                />
              </div>
            </IconAttribute>
            <IconAttribute href="https://www.instagram.com/evirol.tattoo/?hl=en">
              <div className="change-icon-size">
                <StyledIcon
                  icon={["fab", "instagram"]}
                  style={{ color: "black" }}
                  size="2x"
                />
              </div>
            </IconAttribute>
            <IconAttribute href="https://www.facebook.com/evirol.tattoo">
              <div className="change-icon-size">
                <StyledIcon
                  icon={["fab", "facebook-f"]}
                  style={{ color: "black" }}
                  size="2x"
                />
              </div>
            </IconAttribute>
            <IconAttribute href="# ">
              <StyledIcon
                icon={["fab", "linkedin"]}
                style={{ color: "black" }}
                size="2x"
              />
            </IconAttribute>
          </IconContainer>
        </UpperRow>
        <MiddleRow>{slogan}</MiddleRow>
        <SponsorContainer>
          <a
            style={{ color: "black", marginRight: "18px", marginBottom: "3px" }}
            href="https://github.com/chabanenkopp"
          >
            <Octicon icon={MarkGithub} height={40} />
          </a>
          <a href="https://itua.com.ua">
            <img src={itua} alt="itua" style={{ width: "37px" }} />
          </a>
        </SponsorContainer>
      </Wrapper>
    </Container>
  )
}

export default withTranslation(Footer)

const Container = styled.footer`
  background: linear-gradient(245deg, #ff9595, #f7f6f6, #c3ced3e6);
  /* background: linear-gradient(245deg, #ff9595, #f7f6f6, #5ecaec); */
  background-size: 600% 600%;
  animation: Gradient 16s ease infinite;
  -webkit-animation: Gradient 16s ease infinite;
  -moz-animation: Gradient 16s ease infinite;
  min-height: 300px !important;
  /* padding: 5% 30px; */
  /* position: relative; */
  margin-top: 150px;
  @-webkit-keyframes Gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
  @-moz-keyframes Gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
  @keyframes Gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`
const IconContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: poinet;
`

const IconAttribute = styled.a`
  margin: 50px 0 0 60px;
`
const UpperRow = styled.div`
  display: flex;
  align-self: center;
`
const MiddleRow = styled.div`
  text-transform: uppercase;
  padding-top: 20px;
  margin: 40px;
  line-height: 1.5rem;
  text-align: center;
`
const SponsorContainer = styled.div`
  align-self: center;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  margin-bottom: 10px;
`

const StyledIcon = styled(FontAwesomeIcon)`
  height: 26px;
`
