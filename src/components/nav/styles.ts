import styled from "styled-components";

export const Navbar = styled.header`
    width: 100vw;
    min-height: 10vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #ffffff;
    border-bottom: 2px solid #000000;
    padding: 1em 1em 1em 0;
    box-sizing: border-box;
    overflow: hidden;

    @media (max-width: 768px) {
        padding: 0.5em;
        min-height: 8vh;
    }
`

export const AsciiLogo = styled.pre`
    font-family: monospace;
    font-size: 1em;
    line-height: 1;
    margin: 0;
    padding: 1em;
    white-space: pre;
    color: black;

    @media (max-width: 768px) {
        font-size: 0.6em; 
        padding: 0.25em;
    }
`
interface IProfileProps {
    profile: string;
}

export const Profile = styled.img<IProfileProps>`
    border: 2px solid #000000;
    background-image: ${props => `url(${props.profile})`};
    width: 6em;
    height: 6em;
    background-size: cover;
    filter: grayscale(1);

    @media (max-width: 768px) {
        width: 2em;
        height: 2em;
    }
`
export const Button = styled.button`
    height: 2.5em;
    padding-right: 2em;
    padding-left: 2em;
    border: 0 0 0;
    background: black;
    color: white;
    white-space: nowrap;
    min-width: fit-content;

    @media (max-width: 768px) {
        height: 2em;
        padding: 0 1em;
        font-size: 0.9em;
    }
`