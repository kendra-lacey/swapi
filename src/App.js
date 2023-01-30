import './App.css';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import StarshipList from './pages/StarshipList/StarshipList';
import StarshipPage from './pages/StarshipPage/StarshipPage';

function App() {
  return (
  <div className='App'>
    <NavBar/>
      <Routes>
          <Route path='/' element={<StarshipList/>}/>
          <Route path='/starship' element={<StarshipPage/>}/>
      </Routes>
    
  </div>
  );
}

export default App;
