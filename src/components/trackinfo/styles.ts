import styled, { keyframes } from "styled-components";

export const H1 = styled.h1`
    color: black;
    font-weight: bold;
    font-size: 8vh;
    text-align: left;
    padding: auto;
    margin: 0;
    max-width: 70%;

    @media(max-width: 800px) {
        font-size: 6vh;
        width: 100%;
    }
`

export const marqueeScroll = keyframes`
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(-100%);
    }
`

export const TickerWrapper = styled.div`
    background: black;
    color: white;
    padding: 1rem 0;
    width: 100%;
    overflow: hidden;
    position: fixed;
    bottom: 0;
    left: 0;
    border-top: 2px solid black;
    height: 2.5rem;

    @media(max-width: 800px) {
        display: none;
    }
`

export const TickerContent = styled.div`
    display: inline-block;
    white-space: nowrap;
    font-size: 2rem;
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 0.1em;
    animation: ${marqueeScroll} 30s linear infinite;
    padding-right: 50px; 

    &:after {
        content: attr(data-text);
        padding-left: 50px;
    }
`

export const spin = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`

export const TrackDetails = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 2rem;
    min-height: 200px;
    position: relative;
`

export const Container = styled.div`
    position: absolute;
    right: 15%;
    top: 75%;
    transform: translateY(-50%);
    width: 160px;
    height: 160px;
    animation: ${spin} 10s linear infinite;

    @media(max-width: 800px) {
        width: 120px;
        height: 120px;
        right: 2%;
        visibility: hidden;
    }
`

export const Text = styled.span`
    position: absolute;
    left: 50%;
    transform-origin: 0 80px;
    font-size: 1em;
    text-transform: uppercase;
    font-weight: bold;
    color: black;
`

export const Circle = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
`