/* eslint-disable react-hooks/exhaustive-deps */
import * as C from "./style";
import { Link }from "react-router-dom";


export const TelaInicial =()=> { 

    return(    
        <C.Container>
        
            <h2>Usuários</h2>
            <dl>                
                   <dt> <Link to='/s1'className="users">Weydla Alves</Link></dt>
                   <dd>Dicente Desig Digital, 25 anos</dd>
                   <dt> <Link to='/s1'className="users">Marcio Costa</Link></dt>
                   <dd>Dicente Engenharia de Computação, 19 anos</dd>
                   <dt> <Link to='/s1'className="users">Renan Oliveira</Link></dt>
                   <dd>Dicente Redes de Computadores, 21 anos</dd>
                   <dt><Link to='/s1'className="users">Lucia Martins</Link></dt>
                   <dd>Dicente Engenharia de software, 22 anos</dd>
                
            </dl>


        </C.Container>

    
    );
}
