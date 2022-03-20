import {BrowserRouter, Route} from 'react-router-dom'
import { TelaInicial } from '../pages/PagInicial'
import {FormPage1} from '../pages/FormsPage1'
import {FormPage2} from '../pages/FormsPage2'
import {FormPage3} from '../pages/FormsPage3'

export const Router = () => {

    return(
        <BrowserRouter>
            <Route path="/" exact component={TelaInicial}/>
            <Route path="/s1" component={FormPage1}/>
            <Route path="/s2" component={FormPage2}/>
            <Route path="/s3" component={FormPage3}/>
        </BrowserRouter>  
    );
}