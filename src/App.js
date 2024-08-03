import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import Landing from './Pages/Landing/Landing';


function App() {
  return (
    <BrowserRouter>
    
      <Routes>
        <Route
        path='/'
        element={<Landing/>}
        >
           
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
