import styled from 'styled-components';
import { BiCube } from 'react-icons/bi';


const Container = styled.li`
  font-size: 1rem;
  list-style: none;
  color: #616161;
  cursor: pointer;
  margin: 10px 0px;

  &:hover{
    color: #80B488;
    transition: all 0.2s;
  }
`;

const Tabicon = styled(BiCube)`
  margin-right: 5px;
  font-size: 1.1rem;
`;


export default function Tab({ id, text }) {
  return (
    <Container >
      <Tabicon />
      <span>
        {text}
      </span>
    </Container>
  )
}