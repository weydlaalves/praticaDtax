import { createContext, ReactNode, useContext, useReducer} from 'react';

type State = {

    currentPag: number;
    name: string;
    endereco:string;
    email: string;
    telefone: number
}

type Action = {
    type: FormActions;
    payload: any;
}

type ContextType = {
    state: State,
    dispatch: (action : Action) => void;
}
type FormProviderProps = {
    children: ReactNode

}
const initialData: State= {
    currentPag: 0,
    name: '',
    endereco: '',
    email:'',
    telefone: 0,

}
const FormContext = createContext<ContextType | undefined>(undefined);

export enum FormActions {
    setCurrentPag,
    setName,
    setEndereco,
    setEmail,
    setTelefone
}


const formReducer = (state: State, action: Action)=>{
    
    switch(action.type){
        case FormActions.setCurrentPag:
            return {...state, currentPag: action.payload};
        case FormActions.setName:
            return {...state, name: action.payload};
        case FormActions.setEndereco:
            return {...state, endereco: action.payload};
        case FormActions.setEmail:
            return {...state, email: action.payload};
        case FormActions.setTelefone:
            return {...state, telefone: action.payload};
        default: 
            return state;                        
    }
}

export const FormProvider = ({ children }: FormProviderProps) => {

    const [state, dispatch] = useReducer(formReducer, initialData);
    const value = { state, dispatch };
    return (
        <FormContext.Provider value={value}>
            {children}
        </FormContext.Provider>
    )
}

export const useForm = () => {
    const context = useContext(FormContext)
        if(context === undefined) {
            throw new Error('useForm precisa ser usado dentro do FormProvider');
        }
    return context;
}