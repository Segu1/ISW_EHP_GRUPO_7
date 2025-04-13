import styled from "styled-components";

const Main = styled.section`
    min-height: 60vh;
`

const Wrapper = styled.section`
    max-width: 80em;
    margin: 0 auto;
    width: 100%;
    height: 100%;
`

const Container = styled.div`
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    padding-left: 25px;
    padding-right: 25px;
`

export const S = {
    Main,
    Wrapper,
    Container
}