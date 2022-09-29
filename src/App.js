import GlobalStyle from "./globalStyles";
import Header from "./Header";
import Flashcards from "./Flashcards";
import Footer from "./Footer";

export default function App() {
    return (
        <><GlobalStyle/>
            <Header/>

            <main>
                <Flashcards/>
            </main>

            
            <Footer/>
        </>

    )
}
