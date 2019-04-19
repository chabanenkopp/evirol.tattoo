import React, {Component} from "react"
import styled from "styled-components"
import ModalVideo from 'react-modal-video'
import PlaySVG from "../../images/circle_play.svg"
import {withTranslation} from "../../hoc"
import './button-play.scss'

class ButtonPlay extends Component {
    state = {
        isOpen: false
    };
    openModal = () => {
        this.setState({isOpen: true})
    };
    closeModal = () => {
        this.setState({isOpen: false})
    };

    render() {
        const {buttonPlay} = this.props.t.main.upperSection;
        const videoID = 'IhewikUESbk';
        return (
            <div>
                <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId={videoID} onClose={this.closeModal}
                            style={{backgroundColor: 'rgba(0, 0, 0, 0.7)'}}/>
                <Button onClick={this.openModal}>
                    <SpanWrapper>
                        <ImgSpan/>
                        <TextSpan>{buttonPlay}</TextSpan>
                    </SpanWrapper>
                </Button>
            </div>
        )
    }
}

export default withTranslation(ButtonPlay)

const Button = styled.button`
  cursor: pointer;
  background: none;
  border-style: none;
`;

const SpanWrapper = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ImgSpan = styled.span`
  display: block;
  margin-right: 10px;
  width: 70px;
  height: 70px;
  background-image: url(${PlaySVG});
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
  @media (max-width: 700px) {
    width: 50px;
    height: 50px;
  }
  @media (max-width: 350px) {
    width: 35px;
    height: 35px;
  }
`;

const TextSpan = styled.span`
  font-size: 1rem;
  line-height: 1.5;
  text-transform: uppercase;
  font-weight: 300;
  @media (max-width: 350px) {
    font-size: 0.8rem;
  }
`;
