import styled from "styled-components"

export default function Footer() {
   return(
      <FooterStyle>
         <DivButtons>
            <ButtonStyle color="#FF3030">Não lembrei</ButtonStyle>
            <ButtonStyle color="#FF922E" >Quase não lembrei</ButtonStyle>
            <ButtonStyle color="#2FBE34">Zap!</ButtonStyle>
         </DivButtons>

         <DivProgress>
            1/4 Concluídos
         </DivProgress>
      </FooterStyle>
   )
}

const FooterStyle = styled.footer`
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   position: fixed;
   height: 110px;
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
   height: 50px;
   color: white;
   font-family: 'Recursive', sans-serif;
   font-size: 17px;
   font-weight: 700;
   border-radius: 4px;
   cursor: pointer;
   display: flex;
   justify-content: center;
   align-items: center;
   border: none;
   background-color:${ ({color})=> color };
   
   &:hover{
      filter: brightness(0.7);
   }
`

const DivProgress = styled.div`
  font-family: 'Recursive', sans-serif;
  text-align: center;
  margin-bottom: 5px;
`