import styled from '@emotion/styled';
import Png from '../smile.png'



const ContainerBackground = styled.div`
    height:900px;
    background-image: linear-gradient(120deg, #a6c0fe 0%, #f68084 100%);
`;

const Button = styled.div`
  
    display:flex;
    justify-content:center;
    align-items:center;
    cursor:pointer;
    padding:10px 20px;
    border:0.1em solid #FFFFFF;
    border-radius:0.12em;
    box-sizing: border-box;
    text-decoration:none;
    font-family:'Montserrat',sans-serif;
    font-weight:bold;
    color:#FFFFFF;
    text-align:center;
    transition: all 0.6s;
    background:transparent;
    font-size:16px;
    
    &:hover{
    color:#000000;
    background-color:#FFFFFF;
     }

`;

const Icon = styled.img`
    height:40px;
    margin-left:5px;
    
`;


const Welcome = (props) => {

    const mostrarAcudit = () =>{

        props.mostrarAcudit(true)
    }

    return (


        <ContainerBackground>
         
          <Button
          
           onClick ={mostrarAcudit} 
          >Dame Click!<Icon src ={Png}/></Button>
        
        </ContainerBackground>


      );
}
 
export default Welcome;