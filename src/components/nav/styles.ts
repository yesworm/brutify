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
`
export const H1 = styled.h1`
    color: #000000;
    margin-top: 0.5em;
    margin-bottom: 0.5em;
    margin-left: 0.5em;
`
interface IProfileProps {
    profile: string;
}

export const Profile = styled.img<IProfileProps>`
    border: 2px solid #000000;
    background-image: ${props => `url(${props.profile})`};
    width: 3em;
    height: 3em;
    background-size: cover;
    filter: grayscale(1);
`
export const Button = styled.button`
    height: 2.5em;
    padding-right: 2em;
    padding-left: 2em;
    border: 0 0 0;
    background: black;
    color: white;
`