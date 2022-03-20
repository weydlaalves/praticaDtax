import { Link } from "react-router-dom"
import *as C from "./style"

export const Header = () => {

    return(

        <C.Container>
            <Link to='/'className="backButton">Incio</Link>
            <h1>Dados adicionais do usuário</h1>            
        </C.Container>
    )
}