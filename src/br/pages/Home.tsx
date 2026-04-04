import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PageMeta from '../../shared/components/PageMeta';

// Solutions data from matera.com/br
const solutions = [
  {
    slug: 'core-banking',
    title: 'Core Banking',
    text: 'Transforme a experiência do seu cliente e impulsione o desenvolvimento do seu banco com uma solução abrangente e flexível que utiliza tecnologia robusta e pronta para a nuvem.',
    href: '/br/solucoes/core-banking',
    icon: '🏦',
  },
  {
    slug: 'pagamentos',
    title: 'Pagamentos',
    text: 'Conecte-se aos principais tipos de pagamentos através de uma plataforma moderna e escalável.',
    href: '/br/solucoes/pagamentos',
    icon: '📱',
  },
  {
    slug: 'cash-management',
    title: 'Cash Management',
    text: 'Atenda clientes corporativos com soluções de recebíveis e pagamentos, entregando valor e fortalecendo relacionamentos.',
    href: '/br/solucoes/cash-management',
    icon: '💰',
  },
  {
    slug: 'credito',
    title: 'Plataforma de Crédito',
    text: 'Tecnologia para conceder crédito com eficiência e agilidade para as jornadas de pessoas físicas e jurídicas.',
    href: '/br/solucoes/credito',
    icon: '📊',
  },
  {
    slug: 'gestao-de-riscos',
    title: 'Gestão de Riscos',
    text: 'Mantenha os riscos regulatórios e operacionais sob controle. Para instituições financeiras de todos os portes.',
    href: '/br/solucoes/gestao-de-riscos',
    icon: '🛡️',
  },
  {
    slug: 'reg-tech',
    title: 'RegTech',
    text: 'Atenda às exigências regulatórias do Banco Central, Receita Federal e Prefeituras com uma solução tecnológica confiável, robusta e segura.',
    href: '/br/solucoes/reg-tech',
    icon: '⚖️',
  },
  {
    slug: 'insights',
    title: 'Insights',
    text: 'Impulsione a rentabilidade e a fidelização de clientes e eleve o seu desempenho de crédito com modelos personalizados e scores exclusivos.',
    href: '/br/solucoes/insights',
    icon: '🔍',
  },
  {
    slug: 'digital-twin',
    title: 'Digital Twin',
    text: 'Ledger de alta velocidade para pagamentos em tempo real e stablecoins. Operação 24x7 com resiliência e performance.',
    href: '/br/solucoes/matera-digital-twin',
    icon: '📒',
  },
  {
    slug: 'tesouraria-avancada',
    title: 'Tesouraria Avançada',
    text: 'Soluções completas para gestão de tesouraria, com visibilidade em tempo real e controle total sobre posição financeira.',
    href: '/br/solucoes/tesouraria-avancada',
    icon: '📈',
  },
];

const featuredCases = [
  {
    slug: 'c6-bank',
    name: 'C6 Bank',
    description: 'Um banco completo para pessoas físicas e jurídicas, formado por uma arquitetura aberta e totalmente digital, com agilidade e capacidade de oferecer produtos e serviços inovadores.',
    href: '/br/cases/c6-bank',
  },
  {
    slug: 'digio',
    name: 'Digio',
    description: 'Com foco em criar soluções digitais para descomplicar a forma como os brasileiros cuidam do dinheiro, o Digio, banco digital do Bradesco, nasceu em 2016.',
    href: '/br/cases/digio',
  },
  {
    slug: 'pefisa',
    name: 'Pefisa',
    description: 'A Pernambucanas, uma das maiores varejistas do país, com a Pefisa, sua fintech, saiu na frente da concorrência e se destacou como a primeira varejista a disponibilizar Pix.',
    href: '/br/cases/pefisa',
  },
];

const stats = [
  { value: '7,2BI+', label: 'transações Pix por ano' },
  { value: '+90MM', label: 'contas digitais ativas' },
  { value: '+280', label: 'clientes' },
];

// Fetch recent blog posts for preview
interface BlogEntry {
  title: string;
  slug: string;
  date: string;
  thumbnail: string;
  excerpt: string;
}

export default function Home() {
  const [recentPosts, setRecentPosts] = useState<BlogEntry[]>([]);
  const [activeSolution, setActiveSolution] = useState(0);

  useEffect(() => {
    fetch('/data/br/blog/index.json')
      .then(r => r.json())
      .then((posts: BlogEntry[]) => setRecentPosts(posts.slice(0, 3)))
      .catch(() => {}); // content not yet loaded, fail silently
  }, []);

  return (
    <>
      <PageMeta title="Tecnologia para Instituições Financeiras" description="Matera — tecnologia de ponta para bancos, fintechs e instituições financeiras. Core banking, pagamentos, crédito, Pix e mais." url="/br" />
      {/* Hero */}
      <section style={{
        backgroundColor: '#000023',
        color: 'var(--matera-white)',
        paddingTop: '7rem',
        paddingBottom: '5rem',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div className="container" style={{
          display: 'flex',
          alignItems: 'center',
          gap: '4rem',
          paddingTop: '40px',
          paddingBottom: '40px',
        }}>
          {/* Left: Text */}
          <div style={{ flex: 1 }}>
            <h1 style={{
              fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
              fontWeight: 700,
              lineHeight: 1.1,
              marginBottom: '32px',
            }}>
              Opere Ativos Virtuais em Conformidade com o Bacen
            </h1>
            <p style={{
              fontSize: '1.125rem',
              color: 'rgba(255,255,255,0.75)',
              maxWidth: '520px',
              lineHeight: 1.7,
              marginBottom: '40px',
            }}>
              Foque na sua operação enquanto cuidamos da complexidade regulatória.
            </p>
            <Link to="/br/solucoes" className="btn-matera btn-green">
              Saiba mais →
            </Link>
          </div>

          {/* Right: Purple card with video */}
          <div className="hero-video" style={{
            width: '100%',
            maxWidth: '480px',
            flexShrink: 0,
            borderRadius: '24px',
            overflow: 'hidden',
            backgroundColor: 'var(--matera-purple)',
          }}>
            <div style={{ height: '60px' }} />
            <video
              autoPlay
              muted
              loop
              playsInline
              style={{ width: '100%', display: 'block', objectFit: 'cover', height: '340px' }}
            >
              <source src="/assets/br-hero-video.mp4" type="video/mp4" />
            </video>
            <div style={{ height: '60px' }} />
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-20" style={{ backgroundColor: 'var(--matera-gray)' }}>
        <div className="container">
          <div style={{ maxWidth: '650px', marginBottom: '56px' }}>
            <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 700, color: 'var(--matera-blue)', marginBottom: '16px' }}>
              Soluções completas para o mercado financeiro
            </h2>
            <p style={{ color: '#555', lineHeight: 1.7 }}>
              Uma plataforma robusta e escalável, pronta para os desafios do mercado financeiro.
            </p>
          </div>

          {/* Solution tabs */}
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '40px' }}>
            {solutions.map((s, i) => (
              <button
                key={s.slug}
                onClick={() => setActiveSolution(i)}
                style={{
                  padding: '8px 20px',
                  borderRadius: '100px',
                  border: '1px solid',
                  borderColor: activeSolution === i ? 'var(--matera-blue)' : 'rgba(0,0,0,0.15)',
                  backgroundColor: activeSolution === i ? 'var(--matera-blue)' : 'transparent',
                  color: activeSolution === i ? 'var(--matera-white)' : 'var(--matera-blue)',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                }}
              >
                {s.title}
              </button>
            ))}
          </div>

          {/* Active solution detail */}
          <div style={{
            backgroundColor: 'var(--matera-blue)',
            borderRadius: '16px',
            padding: 'clamp(32px, 5vw, 64px)',
            display: 'grid',
            gridTemplateColumns: '1fr auto',
            gap: '40px',
            alignItems: 'center',
          }}>
            <div>
              <p style={{ fontSize: '3rem', marginBottom: '16px' }}>{solutions[activeSolution].icon}</p>
              <h3 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 700, color: 'var(--matera-white)', marginBottom: '16px' }}>
                {solutions[activeSolution].title}
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.75)', lineHeight: 1.7, fontSize: '1.05rem', marginBottom: '32px', maxWidth: '540px' }}>
                {solutions[activeSolution].text}
              </p>
              <Link to={solutions[activeSolution].href} style={{
                color: 'var(--matera-green)', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '1rem',
              }}>
                Saiba mais →
              </Link>
            </div>
          </div>

          {/* All solutions grid (below) */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
            marginTop: '40px',
          }}>
            {solutions.map((s, i) => (
              <Link
                key={s.slug}
                to={s.href}
                onClick={() => setActiveSolution(i)}
                style={{
                  backgroundColor: '#fff',
                  borderRadius: '12px',
                  padding: '28px',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.1)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'none';
                  e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.06)';
                }}
              >
                <span style={{ fontSize: '2rem' }}>{s.icon}</span>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--matera-blue)' }}>{s.title}</h3>
                <p style={{ fontSize: '0.875rem', color: '#666', lineHeight: 1.6, flex: 1 }}>{s.text}</p>
                <span style={{ color: 'var(--matera-purple)', fontWeight: 600, fontSize: '0.875rem' }}>Saiba mais →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Cases */}
      <section className="py-20" style={{ backgroundColor: 'var(--matera-blue)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '56px', flexWrap: 'wrap', gap: '16px' }}>
            <div>
              <p style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--matera-green)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>
                NOSSOS CASES
              </p>
              <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 700, color: 'var(--matera-white)' }}>
                Excelência que o mercado já conhece.
              </h2>
            </div>
            <Link to="/br/cases" style={{
              color: 'var(--matera-green)', fontWeight: 700, fontSize: '0.95rem', display: 'flex', alignItems: 'center', gap: '6px',
            }}>
              Veja mais →
            </Link>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {featuredCases.map((c) => (
              <Link
                key={c.slug}
                to={c.href}
                style={{
                  backgroundColor: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '16px',
                  padding: '32px',
                  transition: 'background 0.2s, border-color 0.2s',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                }}
              >
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--matera-green)' }}>{c.name}</h3>
                <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, flex: 1 }}>{c.description}</p>
                <span style={{ color: 'var(--matera-white)', fontWeight: 600, fontSize: '0.875rem' }}>Leia o case →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20" style={{ backgroundColor: '#000023' }}>
        <div className="container">
          <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 700, color: 'var(--matera-white)', textAlign: 'center', marginBottom: '56px' }}>
            Matera em números
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '40px', textAlign: 'center' }}>
            {stats.map((s) => (
              <div key={s.label}>
                <p style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 700, color: 'var(--matera-green)', lineHeight: 1 }}>
                  {s.value}
                </p>
                <p style={{ color: 'rgba(255,255,255,0.6)', marginTop: '8px', fontSize: '1rem' }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog preview (Fique por dentro) */}
      {recentPosts.length > 0 && (
        <section className="py-20">
          <div className="container">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '48px', flexWrap: 'wrap', gap: '16px' }}>
              <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 700, color: 'var(--matera-blue)' }}>
                Fique por dentro
              </h2>
              <Link to="/br/blog" style={{ color: 'var(--matera-purple)', fontWeight: 700 }}>Ver todos os posts →</Link>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}>
              {recentPosts.map((post) => (
                <Link
                  key={post.slug}
                  to={`/br/blog/${post.slug}`}
                  style={{
                    borderRadius: '12px', overflow: 'hidden', backgroundColor: '#fff',
                    boxShadow: '0 2px 12px rgba(0,0,0,0.08)', transition: 'transform 0.2s, box-shadow 0.2s',
                    display: 'flex', flexDirection: 'column',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.12)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = 'none';
                    e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.08)';
                  }}
                >
                  {post.thumbnail && (
                    <div style={{ aspectRatio: '16/10', overflow: 'hidden' }}>
                      <img src={post.thumbnail} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                  )}
                  <div style={{ padding: '24px', flex: 1 }}>
                    <p style={{ fontSize: '0.8rem', color: '#999', marginBottom: '8px' }}>
                      {new Date(post.date).toLocaleDateString('pt-BR', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </p>
                    <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--matera-blue)', lineHeight: 1.4 }}>
                      {post.title}
                    </h3>
                    <p style={{ fontSize: '0.875rem', color: '#666', lineHeight: 1.6, marginTop: '8px' }}>{post.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* About snippet */}
      <section className="py-20" style={{ backgroundColor: 'var(--matera-gray)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
            <div>
              <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 700, color: 'var(--matera-blue)', marginBottom: '24px' }}>
                Sobre nós
              </h2>
              <p style={{ color: '#444', lineHeight: 1.8, marginBottom: '16px' }}>
                A Matera é uma empresa de tecnologia com foco em soluções e produtos financeiros. Com mais de 30 anos de experiência no mercado, desenvolve e conecta produtos e soluções seguras, robustas e inovadoras.
              </p>
              <p style={{ color: '#444', lineHeight: 1.8, marginBottom: '32px' }}>
                Atendemos bancos tradicionais e digitais, fintechs, varejo, consumo, telecom, entre outros. Nosso time conta com mais de 1.000 profissionais presentes no Brasil, Estados Unidos e Canadá.
              </p>
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <Link to="/br/sobre-nos" className="btn-matera btn-green">Conheça a Matera</Link>
                <a href="https://matera.inhire.app/vagas" target="_blank" rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex', alignItems: 'center', padding: '12px 28px', borderRadius: '8px',
                    border: '2px solid var(--matera-blue)', color: 'var(--matera-blue)', fontWeight: 700, fontSize: '1rem', transition: 'all 0.2s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.backgroundColor = 'var(--matera-blue)'; e.currentTarget.style.color = 'white'; }}
                  onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = 'var(--matera-blue)'; }}
                >
                  Trabalhe conosco
                </a>
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              {[
                { label: '+30 anos', sublabel: 'de experiência no mercado' },
                { label: '+1.000', sublabel: 'profissionais no Brasil, EUA e Canadá' },
                { label: '+280', sublabel: 'clientes ativos' },
                { label: '7,2BI+', sublabel: 'transações Pix por ano' },
              ].map((item) => (
                <div key={item.label} style={{
                  backgroundColor: 'var(--matera-blue)', borderRadius: '12px', padding: '24px',
                }}>
                  <p style={{ fontSize: '1.75rem', fontWeight: 700, color: 'var(--matera-green)', marginBottom: '6px' }}>{item.label}</p>
                  <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.4 }}>{item.sublabel}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{
            backgroundColor: '#461CDC',
            color: 'var(--matera-white)',
            borderRadius: '8px',
            padding: 'clamp(40px, 5vw, 64px)',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '60px',
            alignItems: 'center',
          }}>
            <div>
              <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 700, lineHeight: 1.1 }}>
                Fale com a Matera
              </h2>
            </div>
            <div>
              <p style={{ fontSize: '1.1rem', opacity: 0.9, marginBottom: '32px', lineHeight: 1.7 }}>
                Quer saber mais sobre nossa empresa, nossos produtos ou como podemos ajudá-lo a impulsionar os seus resultados? Entre em contato.
              </p>
              <Link to="/br/fale-conosco" className="btn-matera btn-green" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                Fale com a gente →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
