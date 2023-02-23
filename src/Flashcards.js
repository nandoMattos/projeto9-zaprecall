import styled from "styled-components"
import playIcon from './assets/img/seta_play.png'
import arrow from './assets/img/seta_virar.png'
import checkOk from './assets/img/icone_certo.png'
import checkQuestionMark from './assets/img/icone_quase.png'
import checkError from './assets/img/icone_erro.png'

export default function Flashcards({flashcards,setFlashcards}) {

    function closeOthersCards(index) {
        let newFlashcards = flashcards;
        for (let i in newFlashcards) {
            if (i !== index) {
                newFlashcards[i].visibilityId = "front-cover"
            }
        }

        // setFlashcards(newFlashcards); 
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
            case "front-cover": return <p data-identifier="flashcard-index-item">Pergunta {i+1}</p>;
            case "question": return <p data-identifier="flashcard-question">{flashcards[i].question}</p>;
            case "answer": return <p data-identifier="flashcard-answer">{flashcards[i].answer}</p>;
            default: return;
        }
    }

    function iconVisibility(visibilityId, i) {
        switch(visibilityId) {
            case "front-cover": return <img src={playIcon} alt="play icon" onClick={()=> flipFlashcard(i)} data-identifier="flashcard-show-btn"/> 
            case "question": return <img src={arrow} alt="arrow icon" onClick={()=> showAnswer(i)} data-identifier="flashcard-turn-btn"/>
            case "answer": return;
            default: return;
        }
    }

    function checkLabelColor(label) {
        switch(label) {
            case "zap": return "#2FBE34";
            case "almost": return "#FF922E"; 
            case "wrong": return "#FF3030";
            default: return;
        }
    }

    function checkLabelIcon(label) {
        switch(label) {
            case "zap": return <img src={checkOk} alt="ok icon" data-identifier="flashcard-status"/>
            case "almost": return <img src={checkQuestionMark} alt="question mark icon" data-identifier="flashcard-status"/>
            case "wrong": return <img src={checkError} alt="error icon" data-identifier="flashcard-status"/>
            default: return;
        }
    }

    return(
        <ContainerFlashcards>
            <ul>
                {flashcards.map(({visibilityId, label}, i) =>
                    <Flashcard 
                        data-identifier="flashcard"
                        bgcolor={visibilityId === "front-cover" ? "white" : "#FFFFD4"}
                        fontWeight={visibilityId === "front-cover" ? "bold" : "initial"}
                        height={visibilityId === "front-cover" ? "70px" : "130px"}
                        align={visibilityId === "front-cover" ? "center" : "inital"}
                        bottom={visibilityId === "front-cover" ? "20px" : "10px"}
                        txtDecoration={label === "none" ? "" : "line-through"}
                        txtColor={label === "none"? "black" : ()=> checkLabelColor(label)}
                        key={i}
                    >
                        <span>{textVisibility(visibilityId, i)}</span>
                
                        {label === "none" ? iconVisibility(visibilityId, i) : checkLabelIcon(label)}
                    
                    </Flashcard>
                )}
            </ul>
        </ContainerFlashcards>
    )
}

const ContainerFlashcards = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 90px;
`

const Flashcard = styled.li`
    width: 300px;
    height: ${ ({height})=>height };
    display: flex;
    justify-content: space-between;
    align-items: ${ ({align})=>align };
    background-color: white;
    color: ${ ({txtColor})=>txtColor };
    border-radius: 5px;
    margin: 10px 0px;
    padding: 10px 10px;
    font-family: 'Recursive', cursive;
    font-size: 20px;
    position: relative;

    background-color: ${ ({bgcolor})=>bgcolor };
    text-decoration: ${ ({txtDecoration})=>txtDecoration };

    span{
        font-weight: ${ ({fontWeight})=>fontWeight }
    }

    img {
        width: 25px;
        cursor: pointer;
        position: absolute;
        right: 10px;
        bottom: ${ ({bottom})=>bottom };
        
    }
`