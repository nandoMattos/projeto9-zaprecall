import logo from "./assets/img/logo.png";
import styled from "styled-components";

export default function WelcomeScreen({display, setWelcomeVisibility}) {
    return(
        <ScreenWelcome display={display ? "flex" : "none"}>
            <ContentWelcome>
                <img src={logo} alt="logo"/>
                <h1>ZapRecall</h1>
                <button onClick={()=>setWelcomeVisibility(false)} data-identifier="start-btn">Iniciar Recall!</button>
            </ContentWelcome>
        </ScreenWelcome>
    )
};


const ScreenWelcome = styled.div`
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: ${ ({display})=>display };
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 10;
    position: absolute;
`

const ContentWelcome = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    height: 60%;

    h1{
        font-family: "Righteous", cursive;
        font-size: 36px;
        color: white;
    }

    button {
        width: 246px;
        height: 54px;
        padding: 16px 22px;
        border-radius: 5px;
        color: #D70900;
        border: 1px;
        font-size: 18px;
        font-weight: bold;
        cursor: pointer;
        font-family: 'Recursive', cursive;
        border: 2px solid #D70900;
    }
`