import React, { useState, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface Territory {
  flag: string;
  code: string;
  href: string;
  label: string;
}

const territories: Territory[] = [
  { flag: '🇺🇸', code: 'US', href: '/en', label: 'US English' },
  { flag: '🇨🇦', code: 'CA', href: '/en', label: 'Canada English' },
  { flag: '🇧🇷', code: 'BR', href: '/br', label: 'Brasil Português' },
];

function getCountryCookie(): string {
  const match = document.cookie.match(/(?:^|;\s*)cf-country=(\w+)/);
  return match ? match[1] : '';
}

function getCurrentFlag(pathname: string): string {
  if (pathname.startsWith('/br')) return '🇧🇷';
  const country = getCountryCookie();
  if (country === 'CA') return '🇨🇦';
  return '🇺🇸';
}

const TerritorySelector: React.FC = () => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const location = useLocation();

  const currentFlag = getCurrentFlag(location.pathname);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  return (
    <div ref={ref} style={{ position: 'relative' }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          background: 'none',
          border: '1px solid rgba(255,255,255,0.3)',
          borderRadius: '6px',
          cursor: 'pointer',
          padding: '4px 8px',
          fontSize: '1.1rem',
          lineHeight: 1,
          display: 'flex',
          alignItems: 'center',
          transition: 'border-color 0.2s',
        }}
        aria-label="Select territory"
      >
        {currentFlag}
      </button>

      {open && (
        <div style={{
          position: 'absolute',
          top: 'calc(100% + 6px)',
          right: 0,
          background: '#010025',
          border: '1px solid rgba(255,255,255,0.15)',
          borderRadius: '8px',
          padding: '4px',
          display: 'flex',
          flexDirection: 'column',
          gap: '2px',
          boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
          zIndex: 1001,
        }}>
          {territories.map((t) => (
            <a
              key={t.code}
              href={t.href}
              title={t.label}
              onClick={() => setOpen(false)}
              style={{
                display: 'block',
                textDecoration: 'none',
                fontSize: '1.1rem',
                padding: '6px 10px',
                borderRadius: '6px',
                lineHeight: 1,
                textAlign: 'center',
                transition: 'background 0.15s',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'none'; }}
            >
              {t.flag}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default TerritorySelector;
