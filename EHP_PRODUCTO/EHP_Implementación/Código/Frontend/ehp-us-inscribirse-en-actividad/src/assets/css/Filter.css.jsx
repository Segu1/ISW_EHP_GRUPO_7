import styled from "styled-components";

const Wrapper = styled.section`
    max-width: 80em;
    margin: 0 auto;
    width: 100%;
    height: 100%;
`

const Container = styled.div`
    background-color: #e1f0c4;
    border-radius: 4px;
    //box-shadow: 0 2px 4px 1px rgba(0, 0, 0, 0.27);
    border-bottom: 3px solid #3b511187;
    padding: 1em;
    margin-top: 10px;
    margin-bottom: 20px;
    display: flex;
    gap: 10px;
`

export {
    Wrapper,
    Container
}