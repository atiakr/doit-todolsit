import styled from 'styled-components';
import { BiSquare, BiTrash } from 'react-icons/bi';

const Container = styled.div`
  font-size: 1.15rem;
  color: #555;
  padding: 10px;
  border-bottom: 1px solid #eee;
  
  &:hover {
    background-color: #c7e7cc45;
    border-radius: 10px;
  }
`;

const Styledtext = styled.span`
    margin-left: 15px;
`;

const Etcicons = styled.div`
    float: right;
`;

const Todo = ({ text }) => {
    return <>
        <Container>
            <BiSquare size="32"/> 
            <Styledtext> { text }</Styledtext>
            <Etcicons>
                <BiTrash size="24" color="#999"/>
            </Etcicons>
        </Container>
    </>
}


export default Todo;