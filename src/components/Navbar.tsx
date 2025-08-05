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
    { 
      label: 'Accueil', 
      href: '/', 
      isRouter: true,
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9,22 9,12 15,12 15,22" />
        </svg>
      )
    },
    { 
      label: 'Compétences', 
      href: '/skills', 
      isRouter: true,
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      )
    },
    { 
      label: 'Projets', 
      href: '/projects', 
      isRouter: true,
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      )
    },
    { 
      label: 'À propos', 
      href: '/about', 
      isRouter: true,
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      )
    },
    { 
      label: 'Contact', 
      href: '#contact', 
      isRouter: false,
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      )
    }
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
                  <span className="nav-icon md:hidden">{item.icon}</span>
                  <span className="nav-text hidden md:block">{item.label}</span>
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
                  <span className="nav-icon md:hidden">{item.icon}</span>
                  <span className="nav-text hidden md:block">{item.label}</span>
                </a>
              );
            }
          })}
          
          {/* Dark Mode Toggle - Intégré dans la navbar sur mobile uniquement */}
          <button
            onClick={() => onDarkModeToggle?.(!isDarkMode)}
            className="nav-glass-link dark-mode-toggle md:hidden"
            aria-label={isDarkMode ? 'Passer en mode clair' : 'Passer en mode sombre'}
          >
            <span className="nav-icon">
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
                >
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              )}
            </span>
          </button>
        </div>

        {/* Dark Mode Toggle - Position desktop (md et plus) */}
        <div className="navbar-actions-reflect absolute right-6 md:right-6 hidden md:block">
          <button
            onClick={() => onDarkModeToggle?.(!isDarkMode)}
            className={`
              relative flex items-center justify-center
              w-10 h-10 rounded-full
              transition-all duration-300 ease-in-out
              ${isDarkMode 
                ? 'bg-white/08 hover:bg-white/15 text-white/90 border border-white/10' 
                : 'bg-gray-100/50 hover:bg-gray-200/50 text-gray-600 border border-gray-200/30'
              }
              hover:scale-105
              focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:ring-opacity-50
              backdrop-blur-md
              shadow-sm hover:shadow-md
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
