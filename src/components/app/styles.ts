import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    background-color: white;

    @media (max-width: 800px){
    flex-direction:column;
    max-height: 100vh;
  }
`

export const TrackViewer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: white;
    width: 70%;
    height: 100%;
`

export const Side = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 30%;
    position: relative;
    border-left: 2px solid #000;
    padding: 0px 10px;
    background: white;
    
    o@media (max-width: 800px) {
    font-size: 2vh;
    min-width: 95vw;
    height: 30vh;
    padding: 2vw 2vw;
    border-left: 0px;
  }
`