import styled from '@emotion/styled';
import Image from '../backgroundClima.jpg'

const Clima = styled.div`
    background:url(${Image});
    background-position:center;
    background-size:cover;
    opacity: .8;
    border-radius:50%;
    width:150px;
    height:150px;
    overflow:hidden;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    color : whitesmoke;
    font-family :'Montserrat', 'Sans Serif';
    
    

`;

const Texto = styled.h1`
  
    font-size : 16px;
    
`;


const Tiempo = ({resultado}) => {

    const {name,main,} = resultado;

    const kelvin = 273.15;

    

return (
          
        <Clima>
            <Texto>{name}</Texto>
            <p>{ main === undefined ? '' :  parseFloat(main.temp -kelvin, 10).toFixed(2)}<span> &#x2103; </span></p>
        </Clima>

      );
}
 
export default Tiempo;