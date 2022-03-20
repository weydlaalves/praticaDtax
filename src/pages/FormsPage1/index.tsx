/* eslint-disable react-hooks/exhaustive-deps */
import { useHistory }from "react-router-dom";
import * as P from "./style"
import { useForm, FormActions } from "../../contexts/FormContext"
import { Commum } from "../../components/Commons"
import { ChangeEvent,useEffect } from "react";


export const FormPage1 = () =>{
    const history = useHistory ();
    const { state, dispatch} = useForm();

    useEffect(() =>{
         dispatch({
            type: FormActions.setCurrentPag,
            payload: 1 
         });
    },[]);
    
    const handleNextStep =()=>{
        if(state.name !== ''){
            history.push('/s2');
        }
        else{
            alert("Digite o nome")
        }
    }
    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setName,
            payload: e.target.value

        })
    }
    return(
        <Commum>
            <P.Container>
                <p>passo1/3-</p>
                <h1>Dados</h1>
             
                <label>
                    seu nome completo
                    <input
                        type= "text"
                        autoFocus
                        value={state.name}
                        onChange={handleNameChange}
                        
                    />                    
                </label>
                <button onClick={handleNextStep}>Próximo</button>
        

            </P.Container>
        </Commum>
    );
}
