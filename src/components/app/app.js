import React, {Component} from "react"
import {BrowserRouter as Router, Route} from "react-router-dom"
import styled from "styled-components"
import MessengerCustomerChat from "react-messenger-customer-chat"
import Header from "../header"
import SubHeader from "../sub-header"
import {TranslationProvider} from "../translation-context"
import {TranslationService} from "../../services"
import UpperSection from "../upper-section"
import Slider from "../slider"
import SliderOverlay from "../slider-overlay"
import Footer from "../footer"
import ContactFormular from "../contact-formular"
import WarningPopup from '../warning-popup'

const subHeaderRoutes = ["/gallery", "/order", "/teaching"];

export default class App extends Component {
    translationService = new TranslationService();
    state = {
        translation: this.translationService.tEnglish(),
        language: true,
        isSliderVisible: false,
        isLoginClicked: false
    };
    changeLanguage = () => {
        const {language} = this.state;
        const {tEnglish, tRussian} = this.translationService;
        const translation = language ? tRussian() : tEnglish();
        this.setState({translation, language: !language});
    };

    moveOutSlider = () => {
        const {isSliderVisible} = this.state;
        this.setState({isSliderVisible: !isSliderVisible});
    };

    clickLogin = () => {
        const {isLoginClicked} = this.state;
        this.setState({isLoginClicked: !isLoginClicked});
        setTimeout(() => this.setState({isLoginClicked: isLoginClicked}), 4000);
    };


    render() {
        const {translation, isSliderVisible, isLoginClicked} = this.state;
        return (
            <MainContainer>
                <div className="messenger-test">
                    <MessengerCustomerChat
                        pageId="2608301482574466"
                        appId="322452035076942"
                    />
                </div>
                <TranslationProvider value={translation}>
                    <Router>
                        <WarningPopup isLoginClicked={isLoginClicked} clickLogin={this.clickLogin}/>
                        <Slider
                            isVisible={isSliderVisible}
                            onToggle={this.changeLanguage}
                            routes={subHeaderRoutes}
                            clickLogin={this.clickLogin}
                            isLoginClicked={isLoginClicked}
                        />
                        <SliderOverlay
                            isVisible={isSliderVisible}
                            moveSlider={this.moveOutSlider}
                        />
                        <Header
                            onToggle={this.changeLanguage}
                            moveSlider={this.moveOutSlider}
                            categories={subHeaderRoutes}
                            clickLogin={this.clickLogin}
                            isLoginClicked={isLoginClicked}
                        />
                        {/*<WarningPopup isLoginClicked={isLoginClicked} clickLogin={this.clickLogin}/>*/}
                        <div className="content" style={{marginTop: "100px"}}>
                            <Route path="/" component={UpperSection} exact/>
                            {subHeaderRoutes.map(section => {
                                return (
                                    <Route
                                        key={section}
                                        path={section}
                                        render={({match}) => {
                                            const {path} = match;
                                            return (
                                                <SubHeader
                                                    currentCategory={path}
                                                    categories={subHeaderRoutes}
                                                />
                                            )
                                        }}
                                    />
                                )
                            })}
                            <Route path="/gallery" render={() => <GalleryTemp/>}/>
                            <Route path="/order" render={() => <OrderTemp/>}/>
                            <Route path="/teaching" render={() => <TeachingTemp/>}/>
                            <ContactFormular/>
                            <Footer/>
                        </div>
                    </Router>
                </TranslationProvider>
            </MainContainer>
        )
    }
}

const GalleryTemp = () => (
    <div
        style={{
            margin: "0 auto",
            display: "table",
            padding: "20px"
        }}
    >
        Gallery Route
    </div>
);
const OrderTemp = () => (
    <div
        style={{
            margin: "0 auto",
            display: "table",
            padding: "20px"
        }}
    >
        Order Route
    </div>
);
const TeachingTemp = () => (
    <div
        style={{
            margin: "0 auto",
            display: "table",
            padding: "20px"
        }}
    >
        Teaching Route
    </div>
);

const MainContainer = styled.div`
  @media (max-width: 350px) {
    width: 105%;
  }
`;
