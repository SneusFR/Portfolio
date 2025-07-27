import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { StarryBackground } from './components/StarryBackground';
import { Home } from './pages/Home';
import { Skills } from './pages/Skills';
import { Projects } from './pages/Projects';

// Composant pour gérer les classes du body selon la route
function BodyClassManager() {
  const location = useLocation();

  useEffect(() => {
    // Ajouter la classe skills-page seulement sur la page Skills
    if (location.pathname === '/skills') {
      document.body.classList.add('skills-page');
    } else {
      document.body.classList.remove('skills-page');
    }

    // Cleanup au démontage
    return () => {
      document.body.classList.remove('skills-page');
    };
  }, [location.pathname]);

  return null;
}

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Gérer l'application de la classe dark sur le document
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Sauvegarder la préférence dans localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('darkMode');
    if (savedTheme) {
      setIsDarkMode(JSON.parse(savedTheme));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  return (
    <Router>
      <div className={`w-full min-h-screen overflow-x-hidden ${isDarkMode ? 'dark' : ''}`}>
        {/* Gestionnaire des classes du body */}
        <BodyClassManager />
        
        {/* Fond étoilé global */}
        <StarryBackground isDarkMode={isDarkMode} />
        
        {/* Navbar */}
        <Navbar 
          isDarkMode={isDarkMode} 
          isDialogOpen={isDialogOpen}
          onDarkModeToggle={setIsDarkMode}
        />

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home isDarkMode={isDarkMode} />} />
          <Route path="/skills" element={<Skills isDarkMode={isDarkMode} onDialogStateChange={setIsDialogOpen} />} />
          <Route path="/projects" element={<Projects isDarkMode={isDarkMode} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
