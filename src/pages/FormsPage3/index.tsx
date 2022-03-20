/* eslint-disable react-hooks/exhaustive-deps */
import { Link }from "react-router-dom";
import * as P from "./style"
import { useForm, FormActions } from "../../contexts/FormContext"
import { Commum } from "../../components/Commons"
import { ChangeEvent,useEffect } from "react";
import { collection, addDoc } from "@firebase/firestore";
import { db } from "../../DataAcess/firebase-config"


export const FormPage3 = () =>{
    const { state, dispatch} = useForm();
    const usersCollectionRef = collection(db, "usuarios")

    useEffect(() =>{
         dispatch({
            type: FormActions.setCurrentPag,
            payload: 3
         });
    },[]);
    const handleSubmit = async () => {
        await addDoc(usersCollectionRef,{
            currentPag: state.currentPag,
            email: state.email,
            endereco: state.endereco,
            name: state.name,
            telefone: state.telefone
        })
        alert("Cadastrado com sucesso")       
    }
    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
           type: FormActions.setEmail,
            payload: e.target.value

       })
    }
    const handleTelefoneChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
        type: FormActions.setTelefone,
        payload: e.target.value

       })
    }
    return(
        <Commum>
            <P.Container>
                <p>passo 3/3-</p>
                <h1>Dados</h1>
              
                <label>
                    email
                    <input
                        type="mail"                        
                        value={state.email}
                        onChange={handleEmailChange}                        
                    />                    
                </label>
                <label>
                    telefone
                    <input
                        type= "tel"
                        value={state.telefone}
                        onChange={handleTelefoneChange}                        
                    />                    
                </label>
                <Link to='/s2'className="backButton">Voltar</Link>
                <button onClick={handleSubmit}>Finalizar Cadastro</button>    

            </P.Container>
        </Commum>
    );
}
