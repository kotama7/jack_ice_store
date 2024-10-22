import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './component/home/home';
import Admin from './component/admin/admin';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
