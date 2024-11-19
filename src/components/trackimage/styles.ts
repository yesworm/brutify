import styled from "styled-components";


export const Box = styled.div`
    width: 80%;
    aspect-ratio: 1;
    margin: 2rem 0;
    display: flex;
    justify-content: center;
    border: 2px solid black;
    position: sticky;
    top: 18rem;
    right: 2rem;
    overflow: hidden;
    background: black;

    @media (max-width: 800px) {
        display: none;
    }
`

export const Side = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 30vw;
    position: relative;
    border-left: 2px solid #000;
    padding: 0px 10px;
    background: white;
    height: 100%;
    
    @media (max-width: 800px) {
        font-size: 2vh;
        min-width: 95vw;
        height: 30vh;
        padding: 2vw 2vw;
        border-left: 0px;
    }
`

export interface IImageProps {
    $image: string;
}

export const Image = styled.div<IImageProps>`
    width: 100%;
    height: 100%;
    filter: grayscale(1);
    background-image: ${props => `url(${props.$image})`};
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
`