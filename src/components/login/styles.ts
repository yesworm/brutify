import styled from "styled-components";
import Hero from '../../assets/brutifylogin.jpg'

export const Container = styled.div`
    display: flex;
    height: 90vh;
    width: 100vw;
    min-height: 86vh;
    background: white;
    background-image: url(${Hero});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    filter: grayscale(1);
    overflow: hidden;
`

export const MobileLoginButton = styled.button`
    display: none;  
    
    @media (max-width: 768px) {
        display: block;  
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        padding: 1rem 2rem;
        background: black;
        color: white;
        border: 2px solid black;
        font-size: 1.2rem;
    }
`

export const Right = styled.div`
    width: 50vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: right;
    color: black;
    margin-right: 2em;
`

export const Left = styled.div`
    width: 50vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: black; 
    margin-left: 2em;  
`

export const P = styled.p`
    margin-top: 1em;
    margin-bottom: 2em;
    margin-left: 2em;
    margin-right: 1em;
    color: white;
`