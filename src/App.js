import GlobalStyle from "./globalStyles";
import Header from "./Header";
import Flashcards from "./Flashcards";
import Footer from "./Footer";
import defaultFlashcards from "./defaultFlashcards";
import { useState } from "react";

export default function App() {
    const [flashcards, setFlashcards] = useState(defaultFlashcards)
    let openedFlashcard = flashcards.filter((e)=> e.visibilityId === "question" || e.visibilityId === "answer")
    
    return (
        <><GlobalStyle/>
            <Header/>

            <main>
                <Flashcards flashcards={flashcards} setFlashcards={setFlashcards} />
            </main>

            
            <Footer openedFlashcard={openedFlashcard}/>
        </>

    )
}
