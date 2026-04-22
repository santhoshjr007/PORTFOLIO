import { BrowserRouter } from 'react-router-dom';
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Projects,
} from './components';
import { ThemeProvider, useTheme } from './context/ThemeContext';

const AppContent = () => {
  const { isDark } = useTheme();

  return (
    <BrowserRouter>
      <div className={`relative z-0 transition-colors duration-300 ${isDark ? 'dark' : ''}`}>

        {/* Navbar + Hero */}
        <div className={isDark ? 'bg-night' : ''}>
          <Navbar />
          <Hero />
        </div>

        {/* About */}
        <div className={`bg-cover bg-center bg-no-repeat transition-colors duration-300 ${isDark ? 'bg-night' : 'bg-about'}`}>
          <About />
        </div>

        {/* Tech - already dark, no change */}
        <div className="bg-tech bg-cover bg-center bg-no-repeat pb-10">
          <Tech />
        </div>

        {/* Projects */}
        <div className={`transition-colors duration-300 ${isDark ? 'bg-night' : 'bg-flashWhite'}`}>
          <Projects />
        </div>

        {/* Experience - Hidden since no work experience */}

        {/* Contact */}
        <div className="relative z-0">
          <Contact />
        </div>

      </div>
    </BrowserRouter>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

export default App;
