import styled from "styled-components";

export const Container = styled.div`
 p{
    font-size: 13px;
    color: #25cd89
 }
 h1{
    margin:0px;
    padding:0px;
    font-size: 26px;
    color: #25cd89
 }
 hr{
     heigth:1px;
     border:0px;
     background-color:#25cd89;
     margin:10px;
}
label{
    font-size:13px;
    
    input{
        display: block;
        margin-top:7px;
        box-sizing: border-box;
        width: 39%;
        padding:20px 10px;
        border: 2px solid #25cd89;
        border-radius: 10px;
        outline:0;
        font-size: 15px;
        color: #25cd89
        
    }

}
button{
    background-color:#25cd89;
    color: #fff;
    font-size: 14px;
    font-weigth: bold;
    padding: 20px 40px;
    border:0;
    border-radius:30px;
    cursor:pointer;
    margin-top:30px;
}
.backButton{
    font-size: 16px;
    text-decoration: none;
    padding: 20px 40px;
    color: #25cd89;     
    cursor:pointer;
}
`
