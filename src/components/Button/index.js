import styled from "styled-components"

const Button = styled.button`
    border: 1px solid var(--white);
    border-radius: 5px;
    box-sizing: border-box;
    color: var(--white);
    cursor: pointer;
    display: inline-block;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    outline: none;
    padding: 16px 24px;
    text-decoration: none;
    transition: opacity .3s;

    &:hover,
    &:focus {
    opacity: .5;
  }


  @media(max-width: 800px){
    background-color: var(--primary);
    border: 0;
    border-radius: 0;
    bottom: 0;
    color: var(--white)
    left: 0;
    width: 100%;
    right:0;
    position: fixed;
    outline: 0;
    text-align: center;
  }
` 

export default Button