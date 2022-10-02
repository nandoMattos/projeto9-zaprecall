import logo from "./assets/img/logo.png"
import styled from "styled-components";

export default function Header() {
    return(
        <HeaderStyle>
            <img src={logo} alt="logo"></img>
            <h1>ZapRecall</h1>
        </HeaderStyle>
    )
};

const HeaderStyle = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 150px;
    font-family: 'Righteous', cursive;
    font-size: 50px;
    color: white;
    /* background-color: red; */
    img{ 
        margin-right: 20px;
        width: 90px;
    }
`
