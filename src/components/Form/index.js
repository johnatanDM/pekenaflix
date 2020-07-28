import styled from "styled-components"

const Input = styled.input`
    color: rgb(245, 245, 245);
    display: block;
    width: 100%;
    height: 57px;
    font-size: 18px;
    border-right-style: initial;
    border-left-style: initial;
    border-right-color: initial;
    border-left-color: initial;
    margin-bottom: 45px;
    resize: none;
    background: rgb(83, 88, 93);
    outline: 0px;
    border-width: 4px 0px;
    border-image: initial;
    border-top: 4px solid transparent;
    border-bottom: 4px solid rgb(83, 88, 93);
    padding: 16px;
    border-radius: 4px;
    transition: border-color 0.3s ease 0s;
` 
const TextArea = styled.textarea`
    color: rgb(245, 245, 245);
    display: block;
    width: 100%;
    height: 57px;
    font-size: 18px;
    border-right-style: initial;
    border-left-style: initial;
    border-right-color: initial;
    border-left-color: initial;
    margin-bottom: 45px;
    resize: none;
    background: rgb(83, 88, 93);
    outline: 0px;
    border-width: 4px 0px;
    border-image: initial;
    border-top: 4px solid transparent;
    border-bottom: 4px solid rgb(83, 88, 93);
    padding: 16px;
    border-radius: 4px;
    transition: border-color 0.3s ease 0s;
` 
const TitleBase = styled.h1`
  background: var(--black);
  height: 150px;
  border-top: 2px solid var(--primary);
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 32px;
  padding-bottom: 32px;
  color: var(--white);
  text-align: center;
  @media (max-width: 800px) {
    margin-bottom: 50px;
  }
`;
export {Input, TextArea, TitleBase}