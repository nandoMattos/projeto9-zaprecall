import GlobalStyle from "./globalStyles";
import Header from "./Header";
import Flashcards from "./Flashcards";
import Footer from "./Footer";
import defaultFlashcards from "./defaultFlashcards";
import { useState } from "react";

export default function App() {
    const [flashcards, setFlashcards] = useState(defaultFlashcards)

    return (
        <><GlobalStyle/>
            <Header/>

            <Flashcards flashcards={flashcards} setFlashcards={setFlashcards} />
            
            <Footer flashcards={flashcards} setFlashcards={setFlashcards}/>
        </>

    )
}
