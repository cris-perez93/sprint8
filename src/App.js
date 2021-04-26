import React, {useEffect, useState} from 'react';
import axios from "axios"


function App() {

    const [acudit, setAcudit] = useState('')

   
     const consultaApi = async () => {
            const result = await axios ('https://icanhazdadjoke.com/', {
                headers: {
                    'Accept': 'application/json'
                }
            });

            setAcudit(result.data.joke)

            

        }
        
        
return (
     <div className="container">
     <h1>Preparat per riure?</h1>
     <div className="acudit">
         <p>{acudit}</p>
     </div>
     <input
       type="submit"
       value ="Siguiente"
       onClick ={consultaApi}
       
    />
     </div>
 );
}
  
  export default App;