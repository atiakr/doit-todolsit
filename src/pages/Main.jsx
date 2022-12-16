import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import Todo from '../components/Todo.jsx';
import AddTodo from '../components/AddTodo';
import useStore from '../store/userState';

const Container = styled.div`
  align-items: center;
  width: 1000px;
`;

const GroupName = styled.div`
  font-size: 1.5rem;
  color: #68926e;
`;


const Main = () => {
  const { currentGroupTitle, currentTodos } = useStore();

  return <>
    <Container>
      <AddTodo />
      <GroupName>{ currentGroupTitle }</GroupName>
      {
        currentTodos
        ? currentTodos.map(el => {
          return <>
            {<Todo key={el.id} text={el.text} />}
          </>
        })
        : null
      }
    </Container>
  </>;
};

export default Main;
