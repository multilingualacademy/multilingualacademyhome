import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import LanguageDetails from "./components/LanguageDetails";

function App() {
  useEffect(() => {
    // Bloquear clic derecho
    document.addEventListener("contextmenu", (event) => event.preventDefault());

    // Bloquear teclas específicas
    const blockKeys = (event) => {
      if (
        event.key === "F12" ||
        event.key === "Meta" ||
        event.key === "VK_WIN" ||
        event.key === "windows" ||
        (event.key === "s" && (event.ctrlKey || event.metaKey || event.altKey || event.shiftKey)) ||
        (event.ctrlKey && event.shiftKey && ["I", "J", "C"].includes(event.key)) ||
        (event.ctrlKey && event.key === "U")
      ) {
        event.preventDefault();
      }
    };

    // Bloquear selección de texto y copiar
    const blockSelection = (event) => event.preventDefault();

    document.addEventListener("keydown", blockKeys);
    document.addEventListener("selectstart", blockSelection);
    document.addEventListener("copy", blockSelection);

    // Agregar overlay para evitar screenshots con herramientas web
    const overlay = document.createElement("div");
    overlay.classList.add("protection-overlay");
    document.body.appendChild(overlay);

    return () => {
      document.removeEventListener("keydown", blockKeys);
      document.removeEventListener("selectstart", blockSelection);
      document.removeEventListener("copy", blockSelection);
      document.body.removeChild(overlay);
    };
  }, []);

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/idioma/:language" element={<LanguageDetails />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
