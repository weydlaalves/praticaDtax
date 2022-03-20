/* eslint-disable react-hooks/exhaustive-deps */
import { useHistory, Link }from "react-router-dom";
import * as P from "./style"
import { useForm, FormActions } from "../../contexts/FormContext"
import { Commum } from "../../components/Commons"
import { ChangeEvent,useEffect } from "react";


export const FormPage2 = () =>{
    const history = useHistory ();
    const { state, dispatch} = useForm();

    useEffect(() =>{
         dispatch({
            type: FormActions.setCurrentPag,
            payload: 2 
         });
    },[]);
    
    const handleNextStep =()=>{
        if(state.name !== ''){
            history.push('/s3');
        }
        else{
            alert("Digite o nome")
        }
    }
    const handleEnderecoChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setEndereco,
            payload: e.target.value

        })
    }
    return(
        <Commum>
            <P.Container>
                <p>passo 2/3-</p>
                <h1>Dados</h1>
                <hr/>
                <label>
                    seu endereco
                    <input
                        type= "text"
                        autoFocus
                        value={state.endereco}
                        onChange={handleEnderecoChange}                        
                    />                    
                </label>
                <Link to='/s1'className="backButton">Voltar</Link>
                <button onClick={handleNextStep}>Próximo</button>
            </P.Container>
        </Commum>
    );
}
