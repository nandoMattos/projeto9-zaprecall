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

    function checkLabelColor(label) {
        switch(label) {
            case "zap": return "#2FBE34";
            case "almost": return "#FF922E"; 
            case "wrong": return "#FF3030";
        }
    }

    function checkLabelIcon(label) {
        switch(label) {
            case "zap": return <img src={checkOk}/>
            case "almost": return <img src={checkQuestionMark}/>
            case "wrong": return <img src={checkError}/>
        }
    }

    return(
        <ContainerFlashcards>
            {flashcards.map(({visibilityId, label}, i) =>
                <Flashcard 
                bgcolor={visibilityId === "front-cover" ? "white" : "#FFFFD4"}
                fontWeight={visibilityId === "front-cover" ? "bold" : "initial"}
                height={visibilityId === "front-cover" ? "70px" : "130px"}
                align={visibilityId === "front-cover" ? "center" : "inital"}
                bottom={visibilityId === "front-cover" ? "20px" : "10px"}
                txtDecoration={label === "none" ? "" : "line-through"}
                txtColor={label === "none"? "black" : ()=> checkLabelColor(label)}
                >
                    <p>{textVisibility(visibilityId, i)}</p>
            
                    {label === "none" ? iconVisibility(visibilityId, i) : checkLabelIcon(label)}
                
                </Flashcard>
            )}
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

const Flashcard = styled.div`
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

    p{
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