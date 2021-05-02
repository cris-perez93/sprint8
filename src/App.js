import React, {useEffect, useState} from 'react';
import axios from "axios";
import styled from '@emotion/styled';
import Image from './background.jpg';
import { FaGrinSquintTears } from "react-icons/fa";
import Tiempo from './components/Tiempo';
import Welcome from './components/Welcome';



const Container = styled.div`
   margin: 0 auto;
   background-image: linear-gradient(to top, rgba(180, 128, 144, 0.7), rgba(112, 128, 144, 0.7)), url(${Image});
   background-position:center;
   background-repeat:no-repeat;
   max-width: 1200px;
   display:flex;
   justify-content:center;
   margin-top:10px;
   height:70vh;


`;

const Ventana = styled.div`

    padding:20px;
    margin-top:20px;
    display:flex;
    align-items:center;
    flex-direction:column;
    
`;

const Titulo = styled.h1`
    font-family: 'Montserrat', sans-serif;
    font-size: 40px;
    color: whitesmoke;
    
`;

const Boton = styled.input`

    display:inline-block;
    padding:10px 20px;
    border:0.1em solid #FFFFFF;
    margin:0 0.3em 0.3em 0;
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
    margin-top:20px;
     

     &:hover{
    color:#000000;
    background-color:#FFFFFF;
     }

  

`;

const Acudit = styled.div`
    padding:20px;
    color:whitesmoke;
    font-family:'Montserrat',sans-serif;
`;

const BotonWelcome = styled.div`
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
    margin-bottom:20px;
    
    
    &:hover{
    color:#000000;
    background-color:#FFFFFF;
     }

`;


function App() {

    const [acudit, setAcudit] = useState(false);
    const [resultado, guardarResultado] = useState ({});
    
    const consultaApi = async () => {
        const result = await axios ('https://icanhazdadjoke.com/', {
            headers: {
                'Accept': 'application/json'
            }
        });

        setAcudit(result.data.joke)
        
}

          

     useEffect(() => {

         const consultarTiempo = async () =>{

         const url ='http://api.openweathermap.org/data/2.5/weather?q=madrid,spain&appid=178804a080ac7d660153ae95c8c69795';

         const respuesta = await fetch(url);
         const resultado = await respuesta.json()

         guardarResultado(resultado);

         };
          consultarTiempo();
      
     }, [])



   const renderAcudit = () => {

    const mostrarWelcome = () =>{

        setAcudit(false)
    }

    return  (
        
     <Container>
         
         
         <Ventana>
             <BotonWelcome
              onClick ={mostrarWelcome}
             >Welcome!!</BotonWelcome>
         <Tiempo
               resultado= {resultado}
             />
        
            
            <Titulo>Preparat per riure? <FaGrinSquintTears/></Titulo>
            <Acudit>
                <p>{acudit}</p>
            </Acudit>
            <Boton
            type="submit"
            value ="Siguiente"
            onClick = {consultaApi}
            />
        </Ventana>
     </Container>
 );
}

  const renderWelcome = () => {

        return(

            <div>

                <Welcome
                   mostrarAcudit = {setAcudit}
                 />
            </div>

        );

        

}

   return (
      
    <div>

        {acudit === false
          ? renderWelcome()
          : renderAcudit()
        }
    </div>

   )


}
  
  export default App;