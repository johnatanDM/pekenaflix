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
    padding-left: ${props => props.type === 'color' ? '56px' : ''};
    &:focus{
      border-bottom-color: var(--primary);      
    }
    &:placeholder{
      color: rgb(229, 229, 229);
    }
` 
const TextArea = styled.textarea`
    color: rgb(245, 245, 245);
    display: block;
    width: 100%;
    height: 130px;
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
    &:focus{
      border-bottom-color: var(--primary);
    }
` 
const TitleBase = styled.h1`
  background: var(--black);
  height: 150px;
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

const Span = styled.span`
  align-items: center;
  color: rgb(229, 229, 229);
  height: 57px;
  position: absolute;
  top: 0px;
  left: 16px;
  display: flex;
  font-size: 18px;
  transform-origin: 0% 0%;
  font-style: normal;
  font-weight: 300;
  transition: all 0.1s ease-in-out 0s;
  ${TextArea}:focus ~ &{
      transform: scale(0.6) translateY(-10px);
  };
  ${Input}:focus ~ &{
      transform: ${props => props.type === 'input' ? 'scale(0.6) translateY(-10px)' : ''
  };
`
export {Input, TextArea, TitleBase, Span}