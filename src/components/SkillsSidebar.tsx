import { useState } from 'react';
import { 
  Code2,
  Database,
  Globe,
  Music
} from 'lucide-react';
import { moons } from '../data';

interface SkillsSidebarProps {
  isDarkMode?: boolean;
  onSkillClick?: (skillId: string) => void;
  onSkillHover?: (skillId: string | null) => void;
}

interface SkillCategory {
  id: string;
  label: string;
  color: string;
  skills: Array<{
    id: string;
    label: string;
    color: string;
    icon: string;
  }>;
}

export function SkillsSidebar({ isDarkMode = false, onSkillClick, onSkillHover }: SkillsSidebarProps) {
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set(['frontend']));
  const [isCollapsed, setIsCollapsed] = useState(false);

  // Organiser les compétences par catégorie
  const categories: SkillCategory[] = [
    {
      id: 'passion',
      label: 'Passions',
      color: '#8b5cf6',
      skills: moons.filter(moon => moon.ring === 'passion').map(moon => ({
        id: moon.id,
        label: moon.label,
        color: moon.color,
        icon: moon.icon
      }))
    },
    {
      id: 'frontend',
      label: 'Frontend',
      color: '#06b6d4',
      skills: moons.filter(moon => moon.ring === 'frontend').map(moon => ({
        id: moon.id,
        label: moon.label,
        color: moon.color,
        icon: moon.icon
      }))
    },
    {
      id: 'backend',
      label: 'Backend',
      color: '#f59e0b',
      skills: moons.filter(moon => moon.ring === 'backend').map(moon => ({
        id: moon.id,
        label: moon.label,
        color: moon.color,
        icon: moon.icon
      }))
    },
    {
      id: 'database',
      label: 'Databases',
      color: '#ef4444',
      skills: moons.filter(moon => moon.ring === 'database').map(moon => ({
        id: moon.id,
        label: moon.label,
        color: moon.color,
        icon: moon.icon
      }))
    }
  ];

  const toggleCategory = (categoryId: string) => {
    if (isCollapsed) {
      // Si la sidebar est fermée, l'ouvrir et développer cette catégorie
      setIsCollapsed(false);
      setExpandedCategories(new Set([categoryId]));
    } else {
      // Si la sidebar est ouverte, toggle normal
      const newExpanded = new Set(expandedCategories);
      if (newExpanded.has(categoryId)) {
        newExpanded.delete(categoryId);
      } else {
        newExpanded.add(categoryId);
      }
      setExpandedCategories(newExpanded);
    }
  };

  const handleSkillClick = (skillId: string) => {
    onSkillClick?.(skillId);
  };

  const handleCloseClick = () => {
    setIsCollapsed(true);
  };

  return (
    <>
      {/* Backdrop pour mobile */}
      {!isCollapsed && (
        <div 
          className="sidebar-backdrop"
          onClick={() => setIsCollapsed(true)}
        />
      )}

      <div className={`skills-sidebar ${isDarkMode ? 'is-dark' : 'is-light'} ${isCollapsed ? 'collapsed' : ''}`}>
        {/* Header avec bouton fermer */}
        {!isCollapsed && (
          <div className="sidebar-header">
            <button
              className="sidebar-close"
              onClick={handleCloseClick}
              aria-label="Fermer la sidebar"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path 
                  d="M12 4L4 12M4 4L12 12" 
                  stroke="currentColor" 
                  strokeWidth="1.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        )}

        {/* Contenu de la sidebar */}
        <div className="sidebar-content">
          {categories.map((category) => (
            <div key={category.id} className="skill-category">
              {/* Header de catégorie */}
              <button
                className={`category-header ${expandedCategories.has(category.id) ? 'expanded' : ''}`}
                onClick={() => toggleCategory(category.id)}
                style={{ '--category-color': category.color } as React.CSSProperties}
              >
                <div className="category-icon">
                  {category.id === 'passion' && <Music size={16} style={{ color: category.color }} />}
                  {category.id === 'frontend' && <Globe size={16} style={{ color: category.color }} />}
                  {category.id === 'backend' && <Code2 size={16} style={{ color: category.color }} />}
                  {category.id === 'database' && <Database size={16} style={{ color: category.color }} />}
                </div>
                
                {!isCollapsed && (
                  <>
                    <span className="category-label">{category.label}</span>
                    <div className={`expand-arrow ${expandedCategories.has(category.id) ? 'expanded' : ''}`}>
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path 
                          d="M3 4.5L6 7.5L9 4.5" 
                          stroke="currentColor" 
                          strokeWidth="1.5" 
                          strokeLinecap="round" 
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </>
                )}
              </button>

              {/* Liste des compétences */}
              <div className={`skills-list ${expandedCategories.has(category.id) ? 'expanded' : ''}`}>
                <div className="skills-list-inner">
                  {category.skills.map((skill) => (
                    <button
                      key={skill.id}
                      className="skill-item"
                      onClick={() => handleSkillClick(skill.id)}
                      onMouseEnter={() => onSkillHover?.(skill.id)}
                      onMouseLeave={() => onSkillHover?.(null)}
                      style={{ 
                        '--skill-color': skill.color,
                        '--skill-color-rgb': skill.color.replace('#', '').match(/.{2}/g)?.map(hex => parseInt(hex, 16)).join(', ') || '139, 92, 246'
                      } as React.CSSProperties}
                    >
                      <div className="skill-icon">
                        <img src={skill.icon} alt={skill.label} />
                      </div>
                      
                      {!isCollapsed && (
                        <span className="skill-label">{skill.label}</span>
                      )}
                      
                      <div className="skill-glow" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </>
  );
}
