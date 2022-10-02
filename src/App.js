import GlobalStyle from "./globalStyles";
import Header from "./Header";
import Flashcards from "./Flashcards";
import Footer from "./Footer";
import defaultFlashcards from "./defaultFlashcards";
import { useState } from "react";
import WelcomeScreen from "./WelcomeScreen";
import styled from "styled-components"


export default function App() {
    const [flashcards, setFlashcards] = useState(defaultFlashcards)
    const [welcomeVisibility, setWelcomeVisibility] = useState(true)

    return (
        <><GlobalStyle/>

            <WelcomeScreen display={welcomeVisibility} setWelcomeVisibility={setWelcomeVisibility}/>

            <GameScreen display={welcomeVisibility ? "none" : "initial"}>
                <Header/>
                <Flashcards flashcards={flashcards} setFlashcards={setFlashcards} />
                <Footer flashcards={flashcards} setFlashcards={setFlashcards} />
            </GameScreen>
        </>

    )
}

const GameScreen = styled.div`
    display: ${ ({display})=>display };
`
