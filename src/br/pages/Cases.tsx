import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import PageHero from '../../shared/components/PageHero';
import PageMeta from '../../shared/components/PageMeta';
import { markdownToHtml } from '../../shared/utils/markdown';

interface CaseEntry {
  title: string;
  slug: string;
  date: string;
  client: string;
  thumbnail: string;
  excerpt: string;
  file: string;
}

interface CasePost extends CaseEntry {
  body: string;
  images: string[];
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
                  borderRadius: '12px',
                  overflow: 'hidden',
                  backgroundColor: '#fff',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  display: 'flex',
                  flexDirection: 'column',
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
                {c.thumbnail && (
                  <div style={{ aspectRatio: '16/10', overflow: 'hidden' }}>
                    <img src={c.thumbnail} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                )}
                <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--matera-blue)', marginBottom: '8px', lineHeight: 1.4 }}>
                    {c.title}
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: '#666', lineHeight: 1.6, flex: 1 }}>
                    {c.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

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
      <section style={{
        backgroundColor: 'var(--matera-blue)',
        color: 'var(--matera-white)',
        paddingTop: '8rem',
        paddingBottom: '60px',
      }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <Link to="/br/cases" style={{ color: 'var(--matera-green)', fontSize: '0.9rem', fontWeight: 600, marginBottom: '24px', display: 'inline-block' }}>
            ← Voltar para Cases
          </Link>
          <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 700, lineHeight: 1.25, marginBottom: '16px' }}>
            {caseStudy.title}
          </h1>
          {caseStudy.client && (
            <div style={{ opacity: 0.7, fontSize: '0.9rem' }}>
              <span>{caseStudy.client}</span>
            </div>
          )}
        </div>
      </section>

      {/* Thumbnail */}
      {caseStudy.thumbnail && (
        <div className="container" style={{ maxWidth: '800px', marginTop: '-30px', position: 'relative', zIndex: 1 }}>
          <img src={caseStudy.thumbnail} alt="" style={{ width: '100%', borderRadius: '12px', display: 'block' }} />
        </div>
      )}

      {/* Body */}
      <section style={{ padding: '48px 0 80px' }}>
        <div
          className="container blog-content"
          style={{ maxWidth: '800px' }}
          dangerouslySetInnerHTML={{ __html: markdownToHtml(caseStudy.body) }}
        />
      </section>
    </>
  );
}

export { BrCasesList, BrCaseDetail };
