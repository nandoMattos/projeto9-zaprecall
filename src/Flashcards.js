import { useState } from "react"
import styled from "styled-components"
import playIcon from './assets/img/play-outline-icon.svg'

export default function Flashcards() {
    const defaultFlashcards = [
        {question: 'O que é JSX?', answer: 'Uma extensão de linguagem do JavaScript', visibilityId: "front-cover"},
        {question: 'O React é ____', answer: 'uma biblioteca JavaScript para construção de interfaces', visibilityId: "front-cover"},
        {question: 'Componentes devem iniciar com ____', answer: 'letra maiúscula', visibilityId: "front-cover"},
        {question: 'Podemos colocar ____ dentro do JSX', answer: 'expressões', visibilityId: "front-cover"},
        {question: 'O React DOM nos ajuda ____', answer: 'interagindo com a DOM para colocar os componentes React na mesma', visibilityId: "front-cover"},
        {question: 'Usamos o npm para ____', answer: 'gerenciar os pacotes necessários e suas dependências', visibilityId: "front-cover"},
        {question: 'Usamos props para ____', answer: 'passar diferentes informações para componentes', visibilityId: "front-cover"},
        {question: 'Usamos o estado (state) para ____', answer: 'dizer para o React quais informações quando atualizadas devem renderizar na tela novamente', visibilityId: "front-cover"}
    ]

    const [flashcards, setFlashcards] = useState(defaultFlashcards)

    function closeOthersCards(index) {
        let newFlashcards = flashcards;
        for (let i in newFlashcards) {
            if (i != index) {
                newFlashcards[i].visibilityId = "front-cover"
            }
        }

        setFlashcards(newFlashcards);
    }

    function clickFlashcard(index) {
        closeOthersCards(index);
        
        let newFlashcards = [...flashcards]
        let clickedFlashcard = newFlashcards[index];
        clickedFlashcard.visibilityId === "front-cover" ? clickedFlashcard.visibilityId = "question" : clickedFlashcard.visibilityId = "answer";
        
        setFlashcards(newFlashcards);
    }

    function visibility(visibilityId, i) {
        switch(visibilityId) {
            case "front-cover": return `Pergunta ${i+1}`;
            case "question": return flashcards[i].question;
            case "answer": return flashcards[i].answer;
        }
    }

    return(
        <ContainerFlashcards>
            {flashcards.map(({visibilityId}, i) =>
                <>
                    <FlashcardStyle display="flex" onClick={()=>clickFlashcard(i)}>
                        {visibility(visibilityId, i)}
                    </FlashcardStyle>
                </>            
            )}
        </ContainerFlashcards>
    )
}

const ContainerFlashcards = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const FlashcardStyle = styled.div`
    width: 300px;
    height: 50px;
    display: ${ ({display})=>display };
    justify-content: space-between;
    align-items: center;
    background-color: white;
    color: black;
    border-radius: 5px;
    margin: 10px 0px;
    padding: 10px 10px;
    cursor: pointer;
    font-family: 'Recursive', cursive;
`