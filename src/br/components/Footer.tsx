import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer style={{ backgroundColor: '#010025', color: 'var(--matera-white)', padding: '80px 0 40px' }}>
      <div className="container">
        {/* Top: Logo + email signup */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '60px',
          marginBottom: '60px',
          alignItems: 'start',
        }}>
          <div>
            <Link to="/br">
              <img src="/matera-logo.svg" alt="Matera" style={{ height: 'clamp(2rem, 5vw, 3rem)', width: 'auto' }} />
            </Link>
          </div>
          <div>
            <p style={{ fontSize: '0.9rem', opacity: 0.7, marginBottom: '12px' }}>Endereço de e-mail</p>
            <div style={{ display: 'flex', gap: '0', borderBottom: '1px solid rgba(255,255,255,0.3)', paddingBottom: '8px' }}>
              <input
                type="email"
                placeholder="email@email.com"
                style={{ background: 'transparent', border: 'none', color: 'var(--matera-white)', fontSize: '1rem', outline: 'none', flex: 1, opacity: 0.6 }}
              />
              <button style={{
                background: 'none', border: 'none', color: 'var(--matera-white)', cursor: 'pointer',
                fontSize: '1rem', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '4px',
              }}>
                Enviar <span aria-hidden="true">→</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom: Link columns */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '40px', marginBottom: '60px' }}>
          <div>
            <h4 style={{ fontSize: '0.9rem', fontWeight: '700', marginBottom: '20px', color: 'var(--matera-white)' }}>Soluções</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px', listStyle: 'none' }}>
              {[
                { label: 'Core Banking', href: '/br/solucoes/core-banking' },
                { label: 'Pagamentos', href: '/br/solucoes/pagamentos' },
                { label: 'Cash Management', href: '/br/solucoes/cash-management' },
                { label: 'Plataforma de Crédito', href: '/br/solucoes/credito' },
                { label: 'RegTech', href: '/br/solucoes/reg-tech' },
                { label: 'Insights', href: '/br/solucoes/insights' },
                { label: 'Digital Twin', href: '/br/solucoes/matera-digital-twin' },
              ].map((item) => (
                <li key={item.label}>
                  <Link to={item.href} style={{ opacity: 0.6, fontSize: '0.85rem', color: 'var(--matera-white)', transition: 'opacity 0.2s' }}
                    onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
                    onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.6')}
                  >{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 style={{ fontSize: '0.9rem', fontWeight: '700', marginBottom: '20px', color: 'var(--matera-white)' }}>Sobre nós</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px', listStyle: 'none' }}>
              {[
                { label: 'Sobre nós', href: '/br/sobre-nos' },
                { label: 'Nossa história', href: '/br/sobre-nos#historia' },
                { label: 'Manifesto', href: '/br/sobre-nos#manifesto' },
                { label: 'Clientes', href: '/br/sobre-nos#clientes' },
              ].map((item) => (
                <li key={item.label}>
                  <Link to={item.href} style={{ opacity: 0.6, fontSize: '0.85rem', color: 'var(--matera-white)', transition: 'opacity 0.2s' }}
                    onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
                    onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.6')}
                  >{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 style={{ fontSize: '0.9rem', fontWeight: '700', marginBottom: '20px', color: 'var(--matera-white)' }}>Carreiras</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px', listStyle: 'none' }}>
              {[
                { label: 'Carreiras', href: '/br/carreiras' },
                { label: 'Cultura e Valores', href: '/br/carreiras#cultura' },
                { label: 'Benefícios', href: '/br/carreiras#beneficios' },
              ].map((item) => (
                <li key={item.label}>
                  <Link to={item.href} style={{ opacity: 0.6, fontSize: '0.85rem', color: 'var(--matera-white)', transition: 'opacity 0.2s' }}
                    onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
                    onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.6')}
                  >{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 style={{ fontSize: '0.9rem', fontWeight: '700', marginBottom: '20px', color: 'var(--matera-white)' }}>ESG</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px', listStyle: 'none' }}>
              {[
                { label: 'ESG', href: '/br/esg' },
                { label: 'Pacto Global da ONU', href: '/br/esg#pacto-onu' },
                { label: 'Relatórios', href: '/br/esg#relatorios' },
              ].map((item) => (
                <li key={item.label}>
                  <Link to={item.href} style={{ opacity: 0.6, fontSize: '0.85rem', color: 'var(--matera-white)', transition: 'opacity 0.2s' }}
                    onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
                    onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.6')}
                  >{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 style={{ fontSize: '0.9rem', fontWeight: '700', marginBottom: '20px', color: 'var(--matera-white)' }}>Informações legais</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px', listStyle: 'none' }}>
              <li>
                <a href="https://d2lq74zxbg4jiz.cloudfront.net/PT_BR_Codigo_de_Etica_e_Conduta_Atualizado_24_10_2024_727d52bfb7.pdf" target="_blank" rel="noopener noreferrer"
                  style={{ opacity: 0.6, fontSize: '0.85rem', color: 'var(--matera-white)', transition: 'opacity 0.2s' }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.6')}
                >Código de Ética e Conduta</a>
              </li>
              <li>
                <Link to="/br/politica-de-privacidade" style={{ opacity: 0.6, fontSize: '0.85rem', color: 'var(--matera-white)', transition: 'opacity 0.2s' }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.6')}
                >Política de Privacidade</Link>
              </li>
              <li>
                <Link to="/br/relatorio-de-transparencia-e-igualdade-salarial" style={{ opacity: 0.6, fontSize: '0.85rem', color: 'var(--matera-white)', transition: 'opacity 0.2s' }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.6')}
                >Relatório de Transparência</Link>
              </li>
              <li>
                <a href="https://canal.ouvidordigital.com.br/matera" target="_blank" rel="noopener noreferrer"
                  style={{ opacity: 0.6, fontSize: '0.85rem', color: 'var(--matera-white)', transition: 'opacity 0.2s' }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.6')}
                >Canal de Denúncia</a>
              </li>
              <li>
                <a href="https://suporte.matera.com" target="_blank" rel="noopener noreferrer"
                  style={{ opacity: 0.6, fontSize: '0.85rem', color: 'var(--matera-white)', transition: 'opacity 0.2s' }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.6')}
                >Suporte</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social */}
        <div style={{ display: 'flex', gap: '20px', marginBottom: '40px' }}>
          {[
            { href: 'https://br.linkedin.com/company/matera', label: 'LinkedIn', svg: <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg> },
            { href: 'https://www.instagram.com/matera.oficial/', label: 'Instagram', svg: <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg> },
            { href: 'https://www.youtube.com/@Materaoficial', label: 'YouTube', svg: <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg> },
          ].map(({ href, label, svg }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer"
              aria-label={label}
              style={{ opacity: 0.6, transition: 'opacity 0.2s' }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.6')}
            >{svg}</a>
          ))}
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '40px', fontSize: '0.8rem', opacity: 0.5, textAlign: 'center' }}>
          ©{new Date().getFullYear()} Matera. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
