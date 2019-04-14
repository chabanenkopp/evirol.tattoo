import styled from "styled-components"

const Pink = styled.a`
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 7rem;
  background-color: rgb(255, 255, 255);
  font-weight: 600;
  color: rgb(255, 255, 255);
  background-image: linear-gradient(90deg, #ff9494, rgb(252, 200, 190));
  box-shadow: rgb(255, 163, 165) 0px 0.777778rem 1.11111rem -0.666667rem;
  padding-left: 3.5rem;
  padding-right: 3.5rem;
  height: 3.5rem;
  border-radius: 999px;
  text-transform: uppercase;
  @media (max-width: 1080px) {
    padding-left: 2.5rem;
    padding-right: 2.5rem;
    height: 3rem;
  }
  @media (max-width: 700px) {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    height: 2.5rem;
  }
  @media (max-width: 350px) {
    adding-left: 1rem;
    padding-right: 1rem;
    height: 2.5rem;
    font-size: 12px;
  }
`

const Login = styled.a`
  font-size: 0.8rem;
  display: inline-block;
  text-align: center;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 35px 10px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  color: #2c333d;
  padding: 1em 2em;
  border-radius: 10px;
`
const FormSend = styled.button`
  cursor: pointer;
  display: block;
  align-items: center;
  justify-content: center;
  min-width: 7rem;
  background-color: rgb(255, 255, 255);
  font-weight: 600;
  color: rgb(255, 255, 255);
  /* background-image: linear-gradient(
    90deg,
    rgb(70, 152, 216),
    rgb(102, 219, 243)
  );
  box-shadow: rgb(70, 152, 216) 0px 0.8rem 1.1rem -0.7rem; */
  background-image: linear-gradient(90deg, #ff9494, rgb(252, 200, 190));
  box-shadow: #ffa3a5 0px 0.8rem 1.1rem -0.7rem;
  padding-left: 3.5rem;
  padding-right: 3.5rem;
  height: 3.5rem;
  border-style: none;
  border-radius: 999px;
  margin: 0 auto;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  font-size: 15px;
  @media (max-width: 450px) {
    padding-left: 2.5rem;
    padding-right: 2.5rem;
    height: 3rem;
  }
`

export const Button = { Pink, Login, FormSend }
