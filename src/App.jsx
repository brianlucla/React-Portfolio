import { Outlet } from 'react-router-dom'
import Nav from './components/Nav'
import TopContainer from './components/TopContainer'
import './App.css'

function App() {
  return (
    <>
      <TopContainer>
        <Nav />
        <Outlet />
      </TopContainer>
    </>
  );
}

export default App
