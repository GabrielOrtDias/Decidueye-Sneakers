import { Content } from "./content";
import { Header } from "./modules/Header";
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Login from "./modules/Login";

function App() {
  return (
    <Router>
      <Main />
    </Router>
  );
}

function Main() {
  const location = useLocation();

  return (
    <div className="h-auto w-screen bg-forest-2">
      {/* Renderiza o Header apenas se não estiver na página de login */}
      {location.pathname !== "/login" && <Header />}
      
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
