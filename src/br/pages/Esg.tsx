import PageHero from '../../shared/components/PageHero';

const committees = [
  { title: 'Ambiental', description: 'Ações voltadas ao meio ambiente e conscientização.' },
  { title: 'Diversidade', description: 'Catalisador de inclusão, equidade e valorização individual.' },
  { title: 'Educação', description: 'Aproximação com instituições parceiras para conhecimento compartilhado.' },
  { title: 'Social', description: 'Voluntariado corporativo com foco em impacto comunitário.' },
];

export default function Esg() {
  return (
    <>
      <PageHero
        title="ESG"
        image="/assets/hero-esg.jpg"
      />

      {/* Intro */}
      <section style={{ padding: '80px 0' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 700, color: 'var(--matera-blue)', marginBottom: '24px' }}>
            Responsabilidade Ambiental, Social e de Governança
          </h2>
          <p style={{ color: '#444', lineHeight: 1.8 }}>
            Há mais de 10 anos, na constante construção da transformação, respeito e empatia ao próximo. A Matera mantém uma frente dedicada com foco em desenvolvimento sustentável, alinhado aos Objetivos de Desenvolvimento Sustentável da ONU, buscando construir um mercado de trabalho justo, igualitário e diverso.
          </p>
        </div>
      </section>

      {/* Comitês */}
      <section style={{ padding: '80px 0', backgroundColor: 'var(--matera-gray)' }}>
        <div className="container">
          <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 700, color: 'var(--matera-blue)', marginBottom: '48px' }}>
            Comitês
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px' }}>
            {committees.map((c) => (
              <div key={c.title} style={{ padding: '32px', backgroundColor: '#fff', borderRadius: '12px', borderLeft: '4px solid var(--matera-green)' }}>
                <h3 style={{ fontWeight: 700, color: 'var(--matera-blue)', marginBottom: '12px', fontSize: '1.1rem' }}>{c.title}</h3>
                <p style={{ color: '#555', lineHeight: 1.6 }}>{c.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pacto Global */}
      <section style={{ padding: '80px 0' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'center', maxWidth: '900px' }}>
          <div>
            <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 700, color: 'var(--matera-blue)', marginBottom: '24px' }}>
              Pacto Global da ONU
            </h2>
            <p style={{ color: '#444', lineHeight: 1.8 }}>
              Em 2021, a Matera tornou-se signatária do Pacto Global da ONU, comprometendo-se com dez princípios que contribuem nas áreas de direitos humanos, relações de trabalho, meio ambiente e combate à corrupção.
            </p>
          </div>
          <img
            src="/assets/imagem-pacto-onu.jpg"
            alt="Pacto Global da ONU"
            style={{ width: '100%', borderRadius: '12px' }}
          />
        </div>
      </section>

      {/* Relatórios */}
      <section style={{ padding: '80px 0', backgroundColor: 'var(--matera-gray)' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 700, color: 'var(--matera-blue)', marginBottom: '24px' }}>
            Relatórios ESG
          </h2>
          <p style={{ color: '#444', lineHeight: 1.8 }}>
            Anualmente publicamos relatórios que reúnem dados quantitativos, objetivos, aprendizados e ações realizadas no âmbito de ESG. Os documentos estão disponíveis em português e inglês desde 2015.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: 'var(--matera-purple)', padding: '80px 0', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '600px' }}>
          <h2 style={{ fontSize: 'clamp(1.5rem, 4vw, 2.25rem)', fontWeight: 700, color: 'var(--matera-white)', marginBottom: '24px' }}>
            Trabalhe com a gente!
          </h2>
          <a href="https://matera.inhire.app/vagas" target="_blank" rel="noopener noreferrer" className="btn-matera btn-green">
            Ver vagas
          </a>
        </div>
      </section>
    </>
  );
}
