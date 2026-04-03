import PageHero from '../../shared/components/PageHero';

const values = [
  { title: 'Deixa comigo', description: 'Entrega comprometida com responsabilidade definida.' },
  { title: 'Obstinados pelo cliente', description: 'Construímos confiança e agregamos valor ao negócio do cliente.' },
  { title: 'Melhor a cada dia', description: 'Melhoria contínua e resolução de problemas.' },
  { title: 'Somos inconformados', description: 'Inovação como escolha, não como opção.' },
  { title: 'De gente para gente', description: 'Cuidado genuíno com as pessoas, respeitando a diversidade.' },
  { title: 'É junto que se ganha', description: 'Espírito colaborativo e reciprocidade.' },
  { title: 'Ética é inegociável', description: 'Integridade como fundação em todas as operações.' },
];

const benefits = [
  'Plano de saúde', 'Plano odontológico', 'Seguro de vida', 'Vale alimentação/refeição',
  'Vale transporte/mobilidade', 'Estacionamento', 'Auxílio creche', 'Wellhub',
  'Terapia online', 'Day off de aniversário', 'Treinamento e desenvolvimento de carreira',
];

const areas = [
  'Tecnologia', 'Operações', 'TI Corporativa', 'Produtos',
  'Comercial & Marketing', 'Pessoas', 'Administrativo & ESG',
  'Gestão de Riscos', 'Finanças, Jurídico & Compliance',
];

export default function Carreiras() {
  return (
    <>
      <PageHero
        title="Carreiras"
        image="/assets/capa-pagina-carreiras-1.jpg"
      />

      {/* Cultura */}
      <section style={{ padding: '80px 0' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'center' }}>
          <div>
            <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 700, color: 'var(--matera-blue)', marginBottom: '24px' }}>
              Nossa Cultura
            </h2>
            <p style={{ color: '#444', lineHeight: 1.8 }}>
              As pessoas são o que nos conecta e nos move. Valorizamos colaboração, confiança mútua e coragem para inovar. Nossos pilares são respeito, comprometimento, energia criativa e cooperação, em um ambiente plural, ético e vibrante.
            </p>
          </div>
          <img
            src="/assets/cultura-matera-1.jpg"
            alt="Cultura Matera"
            style={{ width: '100%', borderRadius: '12px' }}
          />
        </div>
      </section>

      {/* Valores */}
      <section style={{ padding: '80px 0', backgroundColor: 'var(--matera-gray)' }}>
        <div className="container">
          <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 700, color: 'var(--matera-blue)', marginBottom: '48px' }}>
            Nossos Valores
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {values.map((v) => (
              <div key={v.title} style={{ padding: '24px', backgroundColor: '#fff', borderRadius: '12px', borderLeft: '4px solid var(--matera-green)' }}>
                <h3 style={{ fontWeight: 700, color: 'var(--matera-blue)', marginBottom: '8px' }}>{v.title}</h3>
                <p style={{ color: '#555', lineHeight: 1.6, fontSize: '0.95rem' }}>{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section style={{ padding: '80px 0' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 700, color: 'var(--matera-blue)', marginBottom: '32px' }}>
            Benefícios
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '12px' }}>
            {benefits.map((b) => (
              <div key={b} style={{ padding: '16px', backgroundColor: 'var(--matera-gray)', borderRadius: '8px', color: '#444' }}>
                {b}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Áreas */}
      <section style={{ padding: '80px 0', backgroundColor: 'var(--matera-gray)' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 700, color: 'var(--matera-blue)', marginBottom: '32px' }}>
            Áreas de atuação
          </h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
            {areas.map((a) => (
              <span key={a} style={{ padding: '10px 20px', backgroundColor: '#fff', borderRadius: '24px', color: 'var(--matera-blue)', fontWeight: 600, fontSize: '0.9rem' }}>
                {a}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: 'var(--matera-purple)', padding: '80px 0', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '600px' }}>
          <h2 style={{ fontSize: 'clamp(1.5rem, 4vw, 2.25rem)', fontWeight: 700, color: 'var(--matera-white)', marginBottom: '24px' }}>
            Trabalhe com a gente!
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '24px' }}>Somos uma só Matera!</p>
          <a href="https://matera.inhire.app/vagas" target="_blank" rel="noopener noreferrer" className="btn-matera btn-green">
            Ver vagas abertas
          </a>
        </div>
      </section>
    </>
  );
}
