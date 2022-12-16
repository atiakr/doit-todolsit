import { useRef } from 'react';
import styled from "styled-components";

const Container = styled.div`
    text-align: center;
`;

const Input = styled.input`
    width: 100%;
    height: 40px;
    border-radius: 10px;
    border-color: #80B488;
    margin-bottom: 25px;
    font-size: 1.25rem;
    padding-left: 10px;
    &:focus {
        border-color: #adf0b7;
    }
`;

const AddTodo = () => {

    const pressKeyHandler = (e) => {
        if(e.key === 'Enter') {

        }
    }

    return <>
    <Container>
        <Input onKeyPress={pressKeyHandler}/>
    </Container>
    </>
}

export default AddTodo;