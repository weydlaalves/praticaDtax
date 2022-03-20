import { ReactNode } from "react";
import * as C from "./style"
import {Header} from "../Header"


type Props = {
    children: ReactNode

}

export const Commum = ({ children }: Props) => {
    return(
        <C.Container>
            <C.Area>
                <Header/>
                <C.Proximo>
                    <C.Page>
                        {children}
                    </C.Page>
                </C.Proximo>
            </C.Area>
        </C.Container>
    );
}