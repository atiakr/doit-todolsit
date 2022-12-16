import styled from 'styled-components';
import Tab from './Tab';
import useStore from '../store/userState';


const Container = styled.ul`
  width: 250px;
`;

const Menuheader = styled.div`
  color: rgba(255, 255, 255, 80%);
  background-color: #80B488;
  border-radius: 8px;
  padding: 10px 10px;
`


const Sidebar = () => {
  const { groupList } = useStore();
  
  return <>
    <Container>
      <Menuheader> Menu Group </Menuheader>
      {
        groupList
          ? groupList.map(el => {
            return (<Tab key={el.id} text={el.name} />)
          })
          : null
      }
    </Container>
  </>;
};

export default Sidebar;
