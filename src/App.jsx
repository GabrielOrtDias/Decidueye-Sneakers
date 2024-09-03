import { Content } from "./content";
import { Header } from "./modules/Header";
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Login from "./modules/Login";
import { useState } from "react";

function App() {
  return (
    <Router>
      <Main />
    </Router>
  );
}

function Main() {
  const location = useLocation();
  const [red, setRed] = useState(false)

  return (
    <div className="h-auto w-screen bg-forest-2 overflow-x-hidden">
      {/* Renderiza o Header apenas se não estiver na página de login */}
      {location.pathname !== "/login" && <Header red={red}/>}
      
      <Routes>
        <Route path="/" element={<Content setRed={setRed} red={red}/>} />
        <Route path="/login" element={<Login red={red}/>} />
      </Routes>
    </div>
  );
}

export default App;
