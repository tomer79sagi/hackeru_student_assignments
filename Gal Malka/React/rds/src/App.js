
import './App.css';
import Sidebar from './componenets/Sidebar'
import {BrowserRouter as Router, Routes , Route} from 'react-router-dom'
import Home from './pages/Home'
import SinglePlayer from './pages/SinglePlayer'
import MultiPlayer from './pages/MultiPlayer'


function App() {
  return (
    <>
    <Router>
      <Sidebar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/singleplayer' element={<SinglePlayer />} />
        <Route path='/multiplayer' celement={<MultiPlayer />} />
      </Routes>
    </Router>
      
    </>
  );
}

export default App;
