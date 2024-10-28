import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home';
import About from './components/about';
function App() {
  return (
    <div className='App'>
      <h1>App </h1>
      <h1>-------------------------------------------------------------</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}
export default App;
