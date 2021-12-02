import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Dashboard from './pages/Dashboard';
import Jobs from './pages/Jobs';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path = '/' exact element={<Home/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/jobs' element={<Jobs/>} />
      </Routes>
    </Router>
      
    </>
  );
}

export default App;
