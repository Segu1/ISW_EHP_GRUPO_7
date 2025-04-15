import styled from "styled-components";

const Wrapper = styled.section`
    max-width: 80em;
    margin: 0 auto;
    width: 100%;
    height: 100%;
    margin-top: -40px;
`

const Container = styled.div`
    //background-color: #6bab90;
    background-color: #1f363d;
    border-radius: 10px;
    box-shadow: 0 5px 25px 1px rgba(0, 0, 0, 0.35);
    //border-bottom: 3px solid #3b511187;
    border-bottom: 3px solid #385c67;
    padding: 1em;
    margin-top: 10px;
    margin-bottom: 20px;
    display: flex;
    gap: 10px;
`

export const S = {
    Wrapper,
    Container
}