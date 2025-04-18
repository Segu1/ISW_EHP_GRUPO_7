import styled from "styled-components";

const Box = styled.div`
    background-color: #e8e8e8;
    border-bottom: 4px solid #b7b7b7;
    border-radius: 10px;
    padding: 20px 40px;
    transition: scale 0.1s linear;
    cursor: pointer;
    box-shadow: 0px 0px 6px 1px rgba(0, 0, 0, 0.15);

    &:hover {
        scale: 1.05;
    }
`

const TitleActivity = styled.div`
    width: 100%;
    display: flex;
    justify-items: center;
    align-items: center;
    flex-direction: column;
    & > h1 {
        font-size: x-large;
        text-transform: uppercase;
        background-color: rgba(88, 255, 85, 0.25);
        color: #1b7919;
        padding: 0 10px;
        border-radius: 10px;
        //border: 1px solid rgba(255, 85, 85, 1);

    }
`

const InfoActivity = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
`

export const S = {
    Box,
    TitleActivity,
    InfoActivity
}