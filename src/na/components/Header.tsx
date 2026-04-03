import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';
import TerritorySelector from '../../shared/components/TerritorySelector';

interface MenuItem {
  label: string;
  href: string;
}

interface NavDropdown {
  label: string;
  sectionTitle: string;
  items: MenuItem[];
  image: string;
}

const dropdowns: NavDropdown[] = [
  {
    label: 'Solutions',
    sectionTitle: 'Get to know our solutions',
    image: '/header-menu-image.jpg',
    items: [
      { label: 'Digital Twin for Stablecoins', href: '/en/stablecoin' },
      { label: 'Digital Twin for Real-Time Payments', href: '/en/solutions/digital-twin' },
      { label: 'QR Code Payments', href: '/en/solutions/qr-code-solutions' },
      { label: 'Wallet as a Service', href: '/en/solutions/wallet-as-a-service' },
    ],
  },
  {
    label: 'News',
    sectionTitle: 'News & Insights',
    image: '/news-menu-image.jpg',
    items: [
      { label: 'Blog', href: '/en/blog' },
      { label: 'Press', href: '/en/press' },
      { label: 'Whitepaper', href: '/en/whitepapers' },
      { label: 'Podcasts', href: '/en/podcasts' },
    ],
  },
  {
    label: 'Company',
    sectionTitle: 'About us',
    image: '/header-menu-image.jpg',
    items: [
      { label: 'About us', href: '/en/about-us' },
      { label: 'Timeline', href: '/en/about-us#timeline' },
    ],
  },
];

const Header: React.FC = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const headerBg = scrolled || mobileOpen
    ? 'rgba(1, 0, 37, 0.97)'
    : 'transparent';

  const navLinkStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    color: 'var(--matera-white)',
    fontWeight: '500',
    fontSize: '0.95rem',
    padding: '8px 12px',
    transition: 'color 0.2s',
    cursor: 'pointer',
  };

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      backgroundColor: headerBg,
      zIndex: 1000,
      height: '4rem',
      display: 'flex',
      alignItems: 'center',
      transition: 'background-color 0.3s ease',
      borderBottom: scrolled ? '1px solid rgba(255,255,255,0.08)' : 'none',
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%'
      }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
          <img src="/matera-logo.svg" alt="Matera" className="header-logo" style={{ height: '1.75rem', width: 'auto' }} />
        </Link>

        {/* Desktop Nav */}
        <nav className="desktop-nav" style={{ display: 'flex', alignItems: 'center' }}>
          <ul style={{
            display: 'flex',
            gap: '4px',
            listStyle: 'none',
            alignItems: 'center',
            marginRight: '24px'
          }}>
            {dropdowns.map((dd) => (
              <li
                key={dd.label}
                onMouseEnter={() => setActiveDropdown(dd.label)}
                onMouseLeave={() => setActiveDropdown(null)}
                style={{ position: 'relative' }}
              >
                <span style={navLinkStyle}>
                  {dd.label} <ChevronDown size={14} style={{
                    transition: 'transform 0.2s',
                    transform: activeDropdown === dd.label ? 'rotate(180deg)' : 'none',
                  }} />
                </span>

                {/* Invisible bridge from nav item to dropdown */}
                {activeDropdown === dd.label && (
                  <div style={{
                    position: 'absolute',
                    top: '100%',
                    left: '-50vw',
                    right: '-50vw',
                    height: '4rem',
                  }} />
                )}

                {/* Mega menu dropdown */}
                <div style={{
                  position: 'fixed',
                  top: '4rem',
                  left: 0,
                  right: 0,
                  backgroundColor: '#010025',
                  borderTop: '1px solid rgba(255,255,255,0.08)',
                  boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
                  transform: activeDropdown === dd.label ? 'translateY(0)' : 'translateY(-130%)',
                  opacity: activeDropdown === dd.label ? 1 : 0,
                  transition: 'transform 0.3s ease, opacity 0.3s ease',
                  pointerEvents: activeDropdown === dd.label ? 'auto' : 'none',
                  zIndex: 999,
                }}>
                  <div className="container" style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '40px',
                    padding: '40px 0',
                    maxWidth: '1200px',
                    margin: '0 auto',
                  }}>
                    <div style={{ borderRadius: '12px', overflow: 'hidden', maxHeight: '280px' }}>
                      <img src={dd.image} alt="" loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <div>
                      <p style={{
                        fontSize: '0.85rem', fontWeight: '600', color: 'rgba(255,255,255,0.5)',
                        marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '0.05em',
                      }}>
                        {dd.sectionTitle}
                      </p>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                        {dd.items.map((item) => (
                          <Link
                            key={item.label}
                            to={item.href}
                            onClick={() => setActiveDropdown(null)}
                            style={{
                              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                              padding: '12px 16px', color: 'var(--matera-white)', fontSize: '1rem',
                              fontWeight: '500', borderRadius: '8px', transition: 'background 0.2s, color 0.2s',
                            }}
                            onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.color = 'var(--matera-green)'; }}
                            onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--matera-white)'; }}
                          >
                            <span>{item.label}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
            <li>
              <Link to="/en/contact-us" style={navLinkStyle}>Contact us</Link>
            </li>
          </ul>
          <TerritorySelector />
        </nav>

        {/* Mobile: flag + hamburger */}
        <div className="mobile-menu-btn" style={{ display: 'none', alignItems: 'center', gap: '12px' }}>
          <TerritorySelector />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--matera-white)', padding: '4px' }}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div style={{
          position: 'fixed',
          top: '4rem',
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: '#010025',
          overflowY: 'auto',
          zIndex: 999,
          padding: '24px',
        }}>
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            {dropdowns.map((dd) => (
              <div key={dd.label}>
                <button
                  onClick={() => setMobileExpanded(mobileExpanded === dd.label ? null : dd.label)}
                  style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    width: '100%', padding: '14px 0', background: 'none', border: 'none',
                    color: 'var(--matera-white)', fontSize: '1.1rem', fontWeight: 600, cursor: 'pointer',
                    borderBottom: '1px solid rgba(255,255,255,0.08)',
                  }}
                >
                  {dd.label}
                  <ChevronDown size={16} style={{
                    transition: 'transform 0.2s',
                    transform: mobileExpanded === dd.label ? 'rotate(180deg)' : 'none',
                  }} />
                </button>
                {mobileExpanded === dd.label && (
                  <div style={{ paddingLeft: '16px', paddingBottom: '8px' }}>
                    {dd.items.map((item) => (
                      <Link
                        key={item.label}
                        to={item.href}
                        onClick={() => setMobileOpen(false)}
                        style={{
                          display: 'block', padding: '12px 0', color: 'rgba(255,255,255,0.7)',
                          fontSize: '1rem', borderBottom: '1px solid rgba(255,255,255,0.04)',
                        }}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              to="/en/contact-us"
              onClick={() => setMobileOpen(false)}
              style={{
                display: 'block', padding: '14px 0', color: 'var(--matera-white)',
                fontSize: '1.1rem', fontWeight: 600, borderBottom: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              Contact us
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
