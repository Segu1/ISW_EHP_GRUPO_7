import { motion } from "motion/react";
import styled from "styled-components";

const Main = styled.section`
    min-height: 100vh;
    position: relative;
    margin-bottom: 30px;
`

const Wrapper = styled.section`
    max-width: 80em;
    margin: 0 auto;
    width: 100%;
    height: 100%;
`

const Container = styled.div`
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    padding-left: 25px;
    padding-right: 25px;
`

const CoverPhotoMain = styled.section`
    min-height: 15em;
    //border-bottom: 4px solid #6bab90;
    border-bottom: 4px solid #1f363d;
    box-shadow: 0 5px 25px 1px rgba(0, 0, 0, 0.35);
`

const CoverPhotoAbs = styled(motion.div)`
    background-image: url(${props => props.imageURL});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    min-height: 15em;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: -1;
`

export const S = {
    Main,
    CoverPhotoMain,
    CoverPhotoAbs,
    Wrapper,
    Container
}