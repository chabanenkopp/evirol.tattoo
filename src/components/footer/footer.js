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
import "./footer.scss"
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
                <FontAwesomeIcon
                  icon={["fab", "twitter"]}
                  style={{ color: "black" }}
                  size="2x"
                />
              </div>
            </IconAttribute>
            <IconAttribute href="https://www.instagram.com/evirol.tattoo/?hl=en">
              <div className="change-icon-size">
                <FontAwesomeIcon
                  icon={["fab", "instagram"]}
                  style={{ color: "black" }}
                  size="2x"
                />
              </div>
            </IconAttribute>
            <IconAttribute href="https://www.facebook.com/evirol.tattoo">
              <div className="change-icon-size">
                <FontAwesomeIcon
                  icon={["fab", "facebook-f"]}
                  style={{ color: "black" }}
                  size="2x"
                />
              </div>
            </IconAttribute>
            <IconAttribute href="# ">
              <div className="change-icon-size">
                <FontAwesomeIcon
                  icon={["fab", "linkedin"]}
                  style={{ color: "black" }}
                  size="2x"
                />
              </div>
            </IconAttribute>
          </IconContainer>
        </UpperRow>
        <MiddleRow>{slogan}</MiddleRow>
        <BottomRow>
          <a style={{ color: "black" }} href="https://github.com/chabanenkopp">
            <Octicon icon={MarkGithub} height={40} />
          </a>
        </BottomRow>
      </Wrapper>
    </Container>
  )
}

export default withTranslation(Footer)

const Container = styled.footer`
  background: linear-gradient(245deg, #ff9494, #e9e8e85c, #c3e8f3);
  background-size: 600% 600%;
  animation: Gradient 16s ease infinite;
  min-height: 400px !important;
  max-height: 400px !important;
  /* padding: 5% 30px; */
  /* position: relative; */
  margin-top: 200px;
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
  padding-top: 50px;
  margin: 40px;
  line-height: 1.5rem;
  text-align: center;
`
const BottomRow = styled.div`
  padding-top: 90px;
  align-self: center;
  @media (max-width: 450px) {
    padding-top: 60px;
  }
  @media (max-width: 350px) {
    padding-top: 40px;
  }
`
