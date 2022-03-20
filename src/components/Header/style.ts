import styled from "styled-components";

export const Container = styled.div`
    padding: 25px 35px;
    border-bottom: 1px solid #1bbc7e; 
    display:flex;
    flex-direction: column; 
    font-size: 15px;

    h1 {
        margin: 0;
        padding: 0;
        color: #25cd89
    }
    p {
        font-size:14px
        color: #25cd89
    }
    .backButton{
        margin-top: -15px;
        font-size: 12px;
        text-decoration: none;
       
        color: #25cd89;     
        cursor:pointer;
    }
`;
