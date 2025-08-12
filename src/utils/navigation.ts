import type { NavigateFunction } from 'react-router-dom';

export const scrollToContact = (navigate: NavigateFunction, currentPath: string) => {
  // Si on est déjà sur la page d'accueil, faire juste le scroll
  if (currentPath === '/') {
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  } else {
    // Si on est sur une autre page, naviguer vers l'accueil puis faire le scroll
    navigate('/');
    // Attendre que la navigation soit terminée avant de faire le scroll
    setTimeout(() => {
      const contactElement = document.getElementById('contact');
      if (contactElement) {
        contactElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  }
};

export const scrollToSection = (sectionId: string, navigate?: NavigateFunction, currentPath?: string) => {
  // Si c'est la section contact et qu'on a les outils de navigation
  if (sectionId === 'contact' && navigate && currentPath) {
    scrollToContact(navigate, currentPath);
    return;
  }
  
  // Pour les autres sections, comportement avec offset pour desktop
  const element = document.getElementById(sectionId);
  if (element) {
    // Détecter si on est sur desktop (largeur > 768px)
    const isDesktop = window.innerWidth > 768;
    
    if (isDesktop && sectionId === 'projects') {
      // Pour la section projects sur desktop, utiliser scrollIntoView avec un offset
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      
      // Ajouter un petit délai puis ajuster la position
      setTimeout(() => {
        const currentScrollY = window.scrollY;
        window.scrollTo({
          top: currentScrollY + 100, // Descendre de 100px supplémentaires
          behavior: 'smooth'
        });
      }, 100);
    } else {
      // Comportement normal pour mobile ou autres sections
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
};
