import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface NavbarProps {
  isDarkMode?: boolean;
  isDialogOpen?: boolean;
  onDarkModeToggle?: (isDark: boolean) => void;
}

export function Navbar({ 
  isDarkMode = false, 
  isDialogOpen = false,
  onDarkModeToggle
}: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const location = useLocation();
  
  const navItems = [
    { label: 'Accueil', href: '/', isRouter: true },
    { label: 'Compétences', href: '/skills', isRouter: true },
    { label: 'Projets', href: '#projects', isRouter: false },
    { label: 'À propos', href: '#about', isRouter: false },
    { label: 'Contact', href: '#contact', isRouter: false }
  ];

  const handleNavClick = (item: typeof navItems[0], e: React.MouseEvent) => {
    if (!item.isRouter) {
      e.preventDefault();
      const el = document.querySelector(item.href);
      el?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`navbar-root fixed top-0 left-0 right-0 z-50 ${
        isDarkMode ? 'is-dark' : 'is-light'
      } ${isDialogOpen ? 'navbar-dimmed' : ''}`}
    >
      <div className="navbar-inner">
        {/* Glass nav group */}
        <div className="nav-glass-group mx-auto">
          {navItems.map((item) => {
            if (item.isRouter) {
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`nav-glass-link ${location.pathname === item.href ? 'active' : ''}`}
                >
                  {item.label}
                </Link>
              );
            } else {
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className="nav-glass-link"
                  onClick={(e) => handleNavClick(item, e)}
                >
                  {item.label}
                </a>
              );
            }
          })}
        </div>

        {/* Dark Mode Toggle - Positioned absolutely */}
        <div className="navbar-actions-reflect absolute right-6">
          <button
            onClick={() => onDarkModeToggle?.(!isDarkMode)}
            className={`
              relative flex items-center justify-center
              w-10 h-10 rounded-full
              transition-all duration-300 ease-in-out
              ${isDarkMode 
                ? 'bg-gray-700/50 hover:bg-gray-600/50 text-gray-300' 
                : 'bg-gray-100/50 hover:bg-gray-200/50 text-gray-600'
              }
              hover:scale-105
              focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:ring-opacity-50
              backdrop-blur-sm
            `}
            aria-label={isDarkMode ? 'Passer en mode clair' : 'Passer en mode sombre'}
          >
            {isDarkMode ? (
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform duration-300"
              >
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
              </svg>
            ) : (
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform duration-300"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile trigger */}
        <button
          className="mobile-menu-btn"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className={`hamburger ${isMenuOpen ? 'active' : ''}`}>
            <span />
            <span />
            <span />
          </div>
        </button>
      </div>

      {/* Mobile menu (réutilise l'existant) */}
      <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-content">
          {navItems.map((item, index) => {
            if (item.isRouter) {
              return (
                <Link
                  key={index}
                  to={item.href}
                  className={`mobile-nav-link ${location.pathname === item.href ? 'active' : ''}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              );
            } else {
              return (
                <a
                  key={index}
                  href={item.href}
                  className="mobile-nav-link"
                  onClick={(e) => handleNavClick(item, e)}
                >
                  {item.label}
                </a>
              );
            }
          })}
        </div>
      </div>
    </nav>
  );
}
