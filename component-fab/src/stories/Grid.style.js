import styled from 'styled-components';
import { colors } from '../theme';

export const Div = styled.div`
    display: flex;
    justify-content: center;
    height: 31.25rem;
    `;

export const Img = styled.img`
        width: 25.875rem;
        height: 100%;
        padding: 5px;
        transition: 1s all ease;

    &:hover{
        cursor: pointer;
        opacity: 1;
    }`;

export const Logo = styled.img`
        width: 3rem;
        height: 3rem;
        margin: 53px 10px 0 0;


`;

export const Video = styled.video`
        width: 25.875rem;
        height: 100%;
        margin-bottom: 2px;
        margin-right: 7px;
        padding: 0;
        transition: 1s all ease;

        &:hover{
        cursor: pointer;
        opacity: 1;
    }`;

export const Button = styled.button`
        margin: 2% 44%;
        cursor: pointer;
        background-color: #51585c;
        font-weight: bold;
        border: 1px transparent;
        border-radius: 5px;
        color: #FFF;
        font-size: 0.75rem;
        font-weight: bold;
        width: 13.75rem;
        height: 2.5rem;
        transition: 1s all ease;
        
        &:hover{
            background-color: #757f84;
        }

`;

export const H2 = styled.h2`
    display: flex;
    justify-content: center;
    font-family: "Lato",sans-serif;
    font-size: 28px;
    font-weight: 100;
    line-height: 1.5;
    color: #212529;
    text-align: left;
`;

