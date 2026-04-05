import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import PageHero from '../../shared/components/PageHero';
import PageMeta from '../../shared/components/PageMeta';

interface CaseEntry {
  title: string;
  slug: string;
  date: string;
  client: string;
  thumbnail: string;
  excerpt: string;
  file: string;
}

interface CaseChallenge {
  title: string;
  text: string;
}

interface CaseQuote {
  text: string;
  person: string;
  role: string;
  photo?: string;
}

interface CaseSolutionItem {
  title: string;
  text: string;
}

interface CasePost extends CaseEntry {
  headline?: string;
  intro?: string[];
  challenges?: {
    intro: string;
    items: CaseChallenge[];
  };
  quotes?: CaseQuote[];
  solution?: {
    intro: string;
    items: CaseSolutionItem[];
  };
  partnership?: {
    title: string;
    quotes: CaseQuote[];
    closing?: string;
  };
  body?: string;
}

function BrCasesList() {
  const [cases, setCases] = useState<CaseEntry[]>([]);

  useEffect(() => {
    fetch('/data/br/cases/index.json')
      .then(r => r.json())
      .then(setCases);
  }, []);

  return (
    <>
      <PageMeta title="Cases" description="Conheça os cases de sucesso da Matera com instituições financeiras." url="/br/cases" />
      <PageHero title="Cases" />
      <section style={{ padding: '80px 0' }}>
        <div className="container">
          <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 400, color: 'var(--matera-blue)', marginBottom: '48px' }}>
            Excelência que o mercado já conhece
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '32px',
          }}>
            {cases.map((c) => (
              <Link
                key={c.slug}
                to={`/br/cases/${c.slug}`}
                style={{
                  borderRadius: '16px',
                  overflow: 'hidden',
                  backgroundColor: '#1a1a2e',
                  transition: 'transform 0.2s',
                  display: 'block',
                  position: 'relative',
                  aspectRatio: '1',
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'none'; }}
              >
                {/* Logo fills entire card */}
                {c.thumbnail && (
                  <img
                    src={c.thumbnail}
                    alt={c.client || c.title}
                    loading="lazy"
                    style={{
                      position: 'absolute',
                      inset: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      filter: 'grayscale(1)',
                      opacity: 0.4,
                    }}
                  />
                )}
                {/* Gradient overlay for text legibility */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 40%, transparent 70%)',
                }} />
                {/* Content at bottom */}
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: '28px',
                  zIndex: 1,
                }}>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 400, color: '#fff', marginBottom: '8px', lineHeight: 1.2 }}>
                    {c.title}
                  </h3>
                  <p style={{ fontSize: '0.875rem', color: '#fff', lineHeight: 1.5 }}>
                    {c.excerpt}
                  </p>
                </div>
                {/* Arrow button */}
                <div style={{
                  position: 'absolute',
                  top: '16px',
                  right: '16px',
                  width: '36px',
                  height: '36px',
                  borderRadius: '8px',
                  border: '1.5px solid rgba(255,255,255,0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  fontSize: '1.1rem',
                  zIndex: 1,
                }}>
                  →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

/* Alert icon used in challenge cards */
const AlertIcon = () => (
  <svg width="40" height="40" viewBox="0 0 48 48" fill="none">
    <circle cx="24" cy="24" r="22" stroke="var(--matera-green)" strokeWidth="3" fill="none" />
    <text x="24" y="32" textAnchor="middle" fontSize="28" fontWeight="700" fill="var(--matera-green)">!</text>
  </svg>
);

/* Check icon used in solution cards */
const CheckIcon = () => (
  <svg width="40" height="40" viewBox="0 0 48 48" fill="none">
    <circle cx="24" cy="24" r="22" stroke="var(--matera-green)" strokeWidth="3" fill="none" />
    <path d="M15 24l6 6 12-12" stroke="var(--matera-green)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </svg>
);

function BrCaseDetail() {
  const { slug } = useParams<{ slug: string }>();
  const [caseStudy, setCaseStudy] = useState<CasePost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/data/br/cases/index.json')
      .then(r => r.json())
      .then((index: CaseEntry[]) => {
        const entry = index.find(e => e.slug === slug);
        if (entry) {
          return fetch(`/data/br/cases/${encodeURIComponent(entry.file)}`).then(r => r.json());
        }
        return null;
      })
      .then(data => {
        setCaseStudy(data);
        setLoading(false);
      });
  }, [slug]);

  if (loading) return <div style={{ minHeight: '60vh', paddingTop: '8rem' }} />;
  if (!caseStudy) return (
    <div style={{ minHeight: '60vh', paddingTop: '8rem', textAlign: 'center' }}>
      <div className="container">
        <h1 style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--matera-blue)', marginBottom: '16px' }}>Case não encontrado</h1>
        <Link to="/br/cases" style={{ color: 'var(--matera-purple)', fontWeight: 600 }}>Voltar para Cases</Link>
      </div>
    </div>
  );

  return (
    <>
      <PageMeta title={caseStudy.title} description={caseStudy.excerpt || ''} image={caseStudy.thumbnail} url={'/br/cases/' + caseStudy.slug} article={{ date: caseStudy.date }} />

      {/* Hero */}
      <section style={{ backgroundColor: 'var(--matera-blue)', color: 'var(--matera-white)', paddingTop: '8rem', paddingBottom: '40px' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <Link to="/br/cases" style={{ color: 'var(--matera-green)', fontSize: '0.9rem', fontWeight: 600, marginBottom: '24px', display: 'inline-block' }}>
            ← Voltar para todos os cases
          </Link>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 700, marginBottom: '8px' }}>
            {caseStudy.title}
          </h1>
          <p style={{ fontSize: '0.85rem', opacity: 0.6, marginBottom: '16px' }}>
            {new Date(caseStudy.date).toLocaleDateString('pt-BR', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
          <p style={{ fontSize: '1.05rem', opacity: 0.85, lineHeight: 1.7 }}>
            {caseStudy.excerpt}
          </p>
        </div>
      </section>

      {/* Hero image — large logo card */}
      {caseStudy.thumbnail && (
        <div className="container" style={{ maxWidth: '900px' }}>
          <div style={{
            borderRadius: '16px',
            overflow: 'hidden',
            marginTop: '32px',
          }}>
            <img src={caseStudy.thumbnail} alt={caseStudy.title} style={{ width: '100%', display: 'block' }} />
          </div>
        </div>
      )}

      {/* Headline + Intro */}
      {(caseStudy.headline || caseStudy.intro) && (
        <section style={{ padding: '60px 0' }}>
          <div className="container" style={{ maxWidth: '800px' }}>
            {caseStudy.headline && (
              <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 700, color: 'var(--matera-blue)', marginBottom: '32px', lineHeight: 1.3 }}>
                {caseStudy.headline}
              </h2>
            )}
            {caseStudy.intro?.map((p, i) => (
              <p key={i} style={{ color: '#444', lineHeight: 1.8, marginBottom: '16px', fontSize: '1rem' }}>{p}</p>
            ))}
          </div>
        </section>
      )}

      {/* Desafios do cliente */}
      {caseStudy.challenges && (
        <section style={{ padding: '60px 0' }}>
          <div className="container" style={{ maxWidth: '900px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
              <div style={{ width: '12px', height: '12px', backgroundColor: 'var(--matera-purple)', borderRadius: '2px' }} />
              <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--matera-blue)' }}>Desafios do cliente</h3>
            </div>
            {caseStudy.challenges.intro && (
              <p style={{ color: '#444', lineHeight: 1.8, marginBottom: '32px' }}>{caseStudy.challenges.intro}</p>
            )}
            <div style={{ display: 'grid', gridTemplateColumns: `repeat(${Math.min(caseStudy.challenges.items.length, 3)}, 1fr)`, gap: '24px' }}>
              {caseStudy.challenges.items.map((ch, i) => (
                <div key={i} style={{
                  backgroundColor: 'var(--matera-purple)',
                  borderRadius: '12px',
                  padding: '32px',
                  color: '#fff',
                }}>
                  <div style={{ marginBottom: '24px' }}><AlertIcon /></div>
                  <p style={{ lineHeight: 1.7, fontSize: '0.95rem' }}>
                    <strong>{ch.title}</strong> {ch.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* First quote */}
      {caseStudy.quotes && caseStudy.quotes.length > 0 && (
        <section style={{ padding: '40px 0 60px', backgroundColor: 'var(--matera-gray)' }}>
          <div className="container" style={{ maxWidth: '800px', display: 'flex', gap: '32px', alignItems: 'flex-start' }}>
            {caseStudy.quotes[0].photo && (
              <img src={caseStudy.quotes[0].photo} alt={caseStudy.quotes[0].person} style={{ width: '120px', height: '120px', borderRadius: '12px', objectFit: 'cover', flexShrink: 0 }} />
            )}
            <div>
              <blockquote style={{ fontSize: '1.05rem', color: '#333', lineHeight: 1.7, fontStyle: 'italic', margin: 0, marginBottom: '16px' }}>
                "{caseStudy.quotes[0].text}"
              </blockquote>
              <p style={{ fontWeight: 700, color: 'var(--matera-blue)', fontSize: '0.9rem' }}>{caseStudy.quotes[0].person}</p>
              <p style={{ color: '#666', fontSize: '0.85rem' }}>{caseStudy.quotes[0].role}</p>
            </div>
          </div>
        </section>
      )}

      {/* Solução da Matera */}
      {caseStudy.solution && (
        <section style={{ padding: '60px 0' }}>
          <div className="container" style={{ maxWidth: '900px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
              <div style={{ width: '12px', height: '12px', backgroundColor: 'var(--matera-green)', borderRadius: '2px' }} />
              <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--matera-blue)' }}>Solução da Matera</h3>
            </div>
            {caseStudy.solution.intro && (
              <p style={{ color: '#444', lineHeight: 1.8, marginBottom: '32px' }}>{caseStudy.solution.intro}</p>
            )}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {caseStudy.solution.items.map((s, i) => (
                <div key={i} style={{
                  display: 'flex',
                  gap: '20px',
                  alignItems: 'flex-start',
                  padding: '24px',
                  backgroundColor: 'var(--matera-gray)',
                  borderRadius: '12px',
                  borderLeft: '4px solid var(--matera-green)',
                }}>
                  <div style={{ flexShrink: 0, marginTop: '2px' }}><CheckIcon /></div>
                  <div>
                    <h4 style={{ fontWeight: 700, color: 'var(--matera-blue)', marginBottom: '8px' }}>{s.title}</h4>
                    <p style={{ color: '#555', lineHeight: 1.7, fontSize: '0.95rem' }}>{s.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Partnership / closing section */}
      {caseStudy.partnership && (
        <section style={{ backgroundColor: 'var(--matera-blue)', color: '#fff', padding: '60px 0' }}>
          <div className="container" style={{ maxWidth: '800px' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--matera-green)', marginBottom: '32px' }}>
              {caseStudy.partnership.title}
            </h3>
            {caseStudy.partnership.quotes.map((q, i) => (
              <div key={i} style={{ marginBottom: '32px' }}>
                <blockquote style={{ fontSize: '1.05rem', lineHeight: 1.7, fontStyle: 'italic', margin: 0, marginBottom: '12px', opacity: 0.9 }}>
                  "{q.text}"
                </blockquote>
                <p style={{ fontWeight: 700, color: 'var(--matera-green)', fontSize: '0.9rem' }}>{q.person}</p>
                <p style={{ opacity: 0.7, fontSize: '0.85rem' }}>{q.role}</p>
              </div>
            ))}
            {caseStudy.partnership.closing && (
              <p style={{ opacity: 0.85, lineHeight: 1.7, marginTop: '24px' }}>{caseStudy.partnership.closing}</p>
            )}
          </div>
        </section>
      )}

      {/* Additional quotes (2nd onwards) */}
      {caseStudy.quotes && caseStudy.quotes.length > 1 && !caseStudy.partnership && (
        <section style={{ padding: '40px 0 60px', backgroundColor: 'var(--matera-gray)' }}>
          <div className="container" style={{ maxWidth: '800px' }}>
            {caseStudy.quotes.slice(1).map((q, i) => (
              <div key={i} style={{ marginBottom: '32px' }}>
                <blockquote style={{ fontSize: '1.05rem', color: '#333', lineHeight: 1.7, fontStyle: 'italic', margin: 0, marginBottom: '12px' }}>
                  "{q.text}"
                </blockquote>
                <p style={{ fontWeight: 700, color: 'var(--matera-blue)', fontSize: '0.9rem' }}>{q.person}</p>
                <p style={{ color: '#666', fontSize: '0.85rem' }}>{q.role}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* CTA */}
      <section style={{ backgroundColor: 'var(--matera-purple)', color: '#fff', padding: '80px 0', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '600px' }}>
          <h2 style={{ fontSize: 'clamp(1.5rem, 4vw, 2.25rem)', fontWeight: 700, marginBottom: '16px' }}>
            Quer resultados como esses?
          </h2>
          <p style={{ opacity: 0.9, marginBottom: '32px', lineHeight: 1.7 }}>
            Conheça como a Matera pode transformar sua operação.
          </p>
          <Link to="/br/fale-conosco" className="btn-matera btn-green">Fale conosco →</Link>
        </div>
      </section>
    </>
  );
}

export { BrCasesList, BrCaseDetail };
