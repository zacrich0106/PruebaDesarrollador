import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LibroList from "./pages/LibroList";
import LibroForm from "./pages/LibroForm.tsx";
import UsuariosList from "./pages/UsuariosList.tsx";
import UsuarioForm from "./pages/UsuarioForm.tsx";
import PrestamosList from "./pages/PrestamoList";
import PrestamoForm from "./pages/PrestamoForm";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LibroList />} />
        <Route path="/libro/nuevo" element={<LibroForm />} />
        <Route path="/libro/editar/:id" element={<LibroForm />} />
        <Route path="/usuarios" element={<UsuariosList />} />
        <Route path="/usuarios/create" element={<UsuarioForm />} />
        <Route path="/usuarios/edit/:id" element={<UsuarioForm />} />
        <Route path="/prestamos" element={<PrestamosList />} />
        <Route path="/prestamos/nuevo" element={<PrestamoForm />} />
      </Routes>
    </Router>
  );
}

export default App;