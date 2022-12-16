import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Sidebar from "./components/Sidebar";
import styled from "styled-components";
import useStore from "./store/userState";

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  & > * {
    margin: 20px;
  }
`;

const LeftSidebar = styled(Sidebar)`
  background-color: #000;
`;

const PageRouter = styled(BrowserRouter)`
  background: white;
`;

function App() {
  const { getGroupList, getTodoBox, setCurrentTodos } = useStore();

  // 앱 화면 처음진입시 groups 에서 현재 디비에 존재하는 그룹들 불러옴
  useEffect(() => {
    getGroupList()
      .then(() => getTodoBox())
      .then(() => setCurrentTodos());
  }, []);

  return (
    <Container>
      <LeftSidebar />
      <PageRouter>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </PageRouter>
    </Container>
  );
}

export default App;
