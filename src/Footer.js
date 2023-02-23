import styled from "styled-components"

export default function Footer({flashcards, setFlashcards}) {

   let openedFlashcardIndex;
   let concludedCount = 0;
   
   // when flashcards array changes, verify progress 
   for (let i in flashcards) {
      // gets the opened flashcard index  
      if (flashcards[i].visibilityId !== "front-cover") {
         openedFlashcardIndex = i;
      }
      // count concluded cards
      if (flashcards[i].label !== "none"){
         concludedCount++;
      }
   }
   
   console.log(flashcards)

   function Forgot() {
      console.log(flashcards)
      const newFlashcards = [...flashcards]
      newFlashcards[openedFlashcardIndex].label = "wrong";
      newFlashcards[openedFlashcardIndex].visibilityId = "front-cover";
      setFlashcards(newFlashcards)
   }

   function almostForgot() {
      const newFlashcards = [...flashcards]
      newFlashcards[openedFlashcardIndex].label = "almost";
      newFlashcards[openedFlashcardIndex].visibilityId = "front-cover";
      setFlashcards(newFlashcards)
   }

   function zap() {
      const newFlashcards = [...flashcards]
      newFlashcards[openedFlashcardIndex].label = "zap";
      newFlashcards[openedFlashcardIndex].visibilityId = "front-cover";
      setFlashcards(newFlashcards)
   }

   return(
      <FooterStyle>
         <DivButtons>
            <ButtonStyle
               onClick={Forgot}
               disabled={openedFlashcardIndex ? false : true}
               color="#FF3030"
               data-identifier="forgot-btn"
            >
               Não lembrei
            </ButtonStyle>

            <ButtonStyle
               onClick={almostForgot}
               disabled={openedFlashcardIndex ? false : true}
               color="#FF922E"
               data-identifier="almost-forgot-btn"
            >
               Quase não lembrei
            </ButtonStyle>

            <ButtonStyle
               onClick={zap} 
               disabled={openedFlashcardIndex ? false : true} 
               color="#2FBE34"
               data-identifier="zap-btn"
            >
               Zap!
            </ButtonStyle>
         </DivButtons>

         <DivProgress data-identifier="flashcard-counter">
            {concludedCount}/{flashcards.length} Concluídos
         </DivProgress>
      </FooterStyle>
   )
}

const FooterStyle = styled.footer`
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   position: fixed;
   height: 80px;
   bottom: 0;
   left: 0;
   right: 0;
   background-color: white;
   z-index: 1;
   width: 100%;
   min-height: 70px;
   padding: 14px 10px;
`

const DivButtons = styled.div`
   display: flex;
   justify-content: space-around;
   margin: 0 auto;
   width: 85%;
`

const ButtonStyle = styled.button`
   width: 120px;
   height: 38px;
   color: white;
   font-family: 'Recursive', sans-serif;
   font-size: 15px;
   font-weight: 700;
   border-radius: 4px;
   cursor: pointer;
   display: flex;
   justify-content: center;
   align-items: center;
   border: none;
   background-color:${ ({color})=> color };
   
   &:hover{
      /* filter: brightness(0.7); */
   }

   @media (max-width: 460px){
      width: 90px;
   }
`

const DivProgress = styled.div`
  font-family: 'Recursive', sans-serif;
  text-align: center;
  margin-top: 5px;
`