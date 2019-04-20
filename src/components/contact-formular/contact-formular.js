import React, {Component} from "react"
import styled from "styled-components"
import {withTranslation} from "../../hoc"
import {XL, H3} from "../../atoms/typography"
import {Buttons} from "../buttons/button"

class ContactFormular extends Component {
    render() {
        const {
            contactUs,
            title,
            subTitle,
            paragraph,
            submit,
            placeholder
        } = this.props.t.contactForm;
        return (
            <FormContainer>
                <StyledH3>{contactUs}</StyledH3>
                <XLWrapper>
                    <XL>{title}</XL>
                    <StyledXL>{subTitle}</StyledXL>
                </XLWrapper>
                <ParagraphH3>{paragraph}</ParagraphH3>
                <form>
                    <InputsWrapper>
                        {inputData.map((input, i) => {
                            const {name, type, required} = input;
                            return (
                                <FormInput
                                    key={name}
                                    margin={
                                        name !== "emailSubject" && name !== "email" ? "15px" : "0px"
                                    }
                                    name={name}
                                    type={type}
                                    placeholder={placeholder[i]}
                                    required={required}
                                />
                            )
                        })}
                        <TextAreaContainer>
                            <TextArea placeholder={placeholder[6]} required/>
                        </TextAreaContainer>
                    </InputsWrapper>
                    <StyledButton type="submit">{submit}</StyledButton>
                </form>
            </FormContainer>
        )
    }
}

export default withTranslation(ContactFormular)

const inputData = [
    {
        name: "firstName",
        type: "text",
        required: true
    },
    {
        name: "lastName",
        type: "text",
        required: true
    },
    {
        name: "email",
        type: "email",
        required: true
    },
    {
        name: "companyName",
        type: "text",
        required: false
    },
    {
        name: "phoneNumber",
        type: "text",
        required: false
    },
    {
        name: "emailSubject",
        type: "text",
        required: true
    }
];

const setMarginRight = ({margin}) => `
  margin-right: ${margin};
  `;

const FormContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 0 40px;
  margin-top: 150px;
`;
const XLWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;
const InputsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  @media (max-width: 1000px) {
    flex-direction: column;
    flex-wrap: nowrap;
  }
`;
const FormInput = styled.input`
  display: block;
  width: 100%;
  height: 100%;
  color: #7c7a7a;
  font-size: 0.9rem;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 20px 25px 5px;
  padding: 25px 35px;
  border-style: none;
  background: white;
  border-radius: 10px;
  box-sizing: border-box;
  outline: none;
  margin-bottom: 20px;
  flex: 0 0 30%;
  ${setMarginRight};
  @media (max-width: 1000px) {
    flex: 0 0 100%;
    margin-right: 0px;
  }
`;
const TextArea = styled.textarea`
  display: block;
  width: 100%;
  height: 100%;
  color: #7c7a7a;
  font-size: 0.9rem;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 20px 25px 5px;
  padding: 25px 35px;
  border-style: none;
  background: white;
  border-radius: 10px;
  box-sizing: border-box;
  margin-bottom: 20px;
  resize: vertical;
`;

const StyledH3 = styled(H3)`
  color: #9f9f9f;
  font-weight: 500;
  text-align: center;
  margin-bottom: 20px;
  letter-spacing: 0.1em;
`;
const ParagraphH3 = styled(H3)`
  text-align: center;
  margin-bottom: 35px;
  margin-left: 45px;
  margin-right: 45px;
  @media (max-width: 1000px) {
    margin-left: 0px;
    margin-right: 0px;
  }
`;
const StyledXL = styled(XL)`
  color: #ffa3a5;
  margin-left: 10px;
  font-weight: 600;
`;
const StyledButton = styled(Buttons.FormSend)`
  margin-top: 20px;
`;
const TextAreaContainer = styled.div`
  width: 100%;
  padding: 28px;
  padding-top: 5px;
  @media (max-width: 1000px) {
    padding: 0px;
  }
`;
