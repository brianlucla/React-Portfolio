import { Outlet } from 'react-router-dom'
import Nav from './components/Nav'
import TopContainer from './components/TopContainer'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <>
      <TopContainer>
        <Nav />
        <Outlet />
        <Footer />
      </TopContainer>
    </>
  );
}

export default App
