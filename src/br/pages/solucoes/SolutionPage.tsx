import { Link } from 'react-router-dom';

interface Feature {
  icon?: string;
  title: string;
  description: string;
}

interface Stat {
  value: string;
  label: string;
}

interface SolutionSection {
  eyebrow?: string;
  heading: string;
  body?: string;
  items?: string[];
  features?: Feature[];
  bgColor?: string;
}

interface SolutionPageProps {
  hero: {
    title: string;
    subtitle: string;
    image?: string;
  };
  stats?: Stat[];
  sections: SolutionSection[];
}

export default function SolutionPage({ hero, stats, sections }: SolutionPageProps) {
  return (
    <>
      {/* Hero */}
      <section style={{
        backgroundColor: 'var(--matera-purple)',
        color: 'var(--matera-white)',
        paddingTop: '8rem',
        paddingBottom: '80px',
        position: 'relative',
        overflow: 'hidden',
        minHeight: '480px',
        display: 'flex',
        alignItems: 'center',
      }}>
        {hero.image && (
          <img src={hero.image} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.2 }} />
        )}
        <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '700px' }}>
          <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: 700, lineHeight: 1.1, marginBottom: '24px' }}>
            {hero.title}
          </h1>
          <p style={{ fontSize: '1.15rem', opacity: 0.9, lineHeight: 1.7 }}>
            {hero.subtitle}
          </p>
          <Link to="/br/fale-conosco" className="btn-matera btn-green" style={{ marginTop: '32px', display: 'inline-block' }}>
            Fale com a Matera
          </Link>
        </div>
      </section>

      {/* Stats */}
      {stats && stats.length > 0 && (
        <section style={{ backgroundColor: '#edeef5', padding: '48px 0' }}>
          <div className="container" style={{ display: 'flex', justifyContent: 'center', gap: '60px', flexWrap: 'wrap', alignItems: 'center' }}>
            {stats.map((s, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <span style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--matera-purple)' }}>{s.value}</span>
                <p style={{ color: '#666', fontSize: '0.9rem' }}>{s.label}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Sections */}
      {sections.map((section, i) => (
        <section key={i} style={{ padding: '80px 0', backgroundColor: section.bgColor || (i % 2 === 0 ? '#fff' : 'var(--matera-gray)') }}>
          <div className="container" style={{ maxWidth: '900px' }}>
            {section.eyebrow && (
              <p style={{ color: 'var(--matera-purple)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '12px', fontSize: '0.85rem' }}>
                {section.eyebrow}
              </p>
            )}
            <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 700, color: 'var(--matera-blue)', marginBottom: '24px', lineHeight: 1.3 }}>
              {section.heading}
            </h2>
            {section.body && (
              <p style={{ color: '#555', lineHeight: 1.8, marginBottom: '32px' }}>{section.body}</p>
            )}
            {section.items && (
              <ul style={{ color: '#555', lineHeight: 1.8, paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {section.items.map((item, j) => <li key={j}>{item}</li>)}
              </ul>
            )}
            {section.features && (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px' }}>
                {section.features.map((f, j) => (
                  <div key={j} style={{
                    backgroundColor: section.bgColor === 'var(--matera-gray)' ? '#fff' : 'var(--matera-gray)',
                    borderRadius: '12px',
                    padding: '24px',
                    borderLeft: '4px solid var(--matera-green)',
                  }}>
                    {f.icon && <img src={f.icon} alt="" style={{ width: '40px', height: '40px', marginBottom: '12px' }} />}
                    <h3 style={{ fontWeight: 700, color: 'var(--matera-blue)', marginBottom: '8px' }}>{f.title}</h3>
                    <p style={{ color: '#555', lineHeight: 1.6, fontSize: '0.9rem' }}>{f.description}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      ))}

      {/* CTA */}
      <section style={{ backgroundColor: 'var(--matera-purple)', padding: '80px 0', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '600px' }}>
          <h2 style={{ fontSize: 'clamp(1.5rem, 4vw, 2.25rem)', fontWeight: 700, color: 'var(--matera-white)', marginBottom: '24px' }}>
            Quer saber mais?
          </h2>
          <Link to="/br/fale-conosco" className="btn-matera btn-green">
            Fale com a Matera
          </Link>
        </div>
      </section>
    </>
  );
}
