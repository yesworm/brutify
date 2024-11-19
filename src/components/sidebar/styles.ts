import styled from "styled-components";

export const ControlsContainer = styled.div`
  display: flex;
  width: 90%;
  flex-direction: column;
  justify-content: start;
  flex-grow: 1;
  margin-top: auto;
  margin-bottom: 1vh;
  `

  export const SelectWrapper = styled.div`
    width: 100%;
    padding: 1rem;
    
    .react-select__control {
        border-radius: 0;
        border: 2px solid black;
        min-height: 50px;
        width: 100%;
        cursor: pointer;
    }

    .react-select__menu {
        border-radius: 0;
        border: 2px solid black;
        margin-top: 0;
    }

    .react-select__option {
        padding: 1rem;
        cursor: pointer;
    }
`