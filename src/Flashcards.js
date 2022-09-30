import styled from "styled-components"
import playIcon from './assets/img/play-outline-icon.svg'
import arrow from './assets/img/setinha.png'

export default function Flashcards({flashcards,setFlashcards}) {

    function closeOthersCards(index) {
        let newFlashcards = flashcards;
        for (let i in newFlashcards) {
            if (i !== index) {
                newFlashcards[i].visibilityId = "front-cover"
            }
        }

        setFlashcards(newFlashcards);
    }

    function flipFlashcard(index) {
        closeOthersCards(index);
        let newFlashcards = [...flashcards];
        newFlashcards[index].visibilityId = "question"
        setFlashcards(newFlashcards)
    }

    function showAnswer(index) {
        let newFlashcards = [...flashcards]
        newFlashcards[index].visibilityId = "answer"
        setFlashcards(newFlashcards)
    }

    function textVisibility(visibilityId, i) {
        switch(visibilityId) {
            case "front-cover": return `Pergunta ${i+1}`;
            case "question": return flashcards[i].question;
            case "answer": return flashcards[i].answer;
            default: return;
        }
    }

    function iconVisibility(visibilityId, i) {
        switch(visibilityId) {
            case "front-cover": return <img src={playIcon} onClick={()=> flipFlashcard(i)}/> 
            case "question": return <img src={arrow} onClick={()=> showAnswer(i)}/>
            case "answer": return;
            default: return;
        }
    }

    return(
        <ContainerFlashcards>
            {flashcards.map(({visibilityId}, i) =>
                <Flashcard display="flex">
                    {textVisibility(visibilityId, i)}
                    {iconVisibility(visibilityId, i)}
                </Flashcard>
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

const Flashcard = styled.div`
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
    /* cursor: pointer; */
    font-family: 'Recursive', cursive;

    img {
        width: 30px;
        cursor: pointer;
    }
`