import styled from "styled-components"

export const Box = styled.div`
    width: 90%;
    background: black;
    min-height: 40vh;
    margin-bottom: 2vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
`

interface IImageProps {
    $image: string;
}

export const Image = styled.div<IImageProps> `
    height: 100%;
    width: 100%;
    filter: grayscale(1);
    background-image: ${props => `url(${props.$image})`};
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
`