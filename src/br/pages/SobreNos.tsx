import { Link } from 'react-router-dom';
import PageHero from '../../shared/components/PageHero';
import PageMeta from '../../shared/components/PageMeta';

const timeline = [
  { year: '1987', text: 'Início como Software Design, fundada na Unicamp por cinco entusiastas de tecnologia' },
  { year: '1990', text: 'Lançamento de produtos para o mercado financeiro' },
  { year: '2001', text: 'Solução para o recém-criado SPB (Sistema de Pagamentos Brasileiro)' },
  { year: '2004', text: 'Rebranding como Matera Systems' },
  { year: '2007', text: 'Migração para solução web, à frente dos concorrentes' },
  { year: '2008', text: 'Primeira aparição no ranking GPTW (Great Place to Work)' },
  { year: '2016', text: 'Primeiro pagamento com QR Code do mercado' },
  { year: '2019', text: 'Expansão para Waterloo, Canadá' },
  { year: '2020', text: 'Investimento da Kinea Private Equity; lançamento de Pagamentos Instantâneos' },
  { year: '2021', text: 'Mais de 800 colaboradores' },
  { year: '2022', text: 'Expansão internacional via M&A' },
  { year: '2023', text: 'Aquisição da Cinnecta' },
  { year: '2024', text: 'Aquisição da Infotreasury' },
];

const stats = [
  { value: '7,2 BI+', label: 'transações Pix por ano' },
  { value: '+90 MM', label: 'contas digitais ativas' },
  { value: '+280', label: 'clientes' },
];

const clientLogos = [
  '/assets/logo_alesta_azul_98307ae975.svg',
  '/assets/logo_1_614acfb630.svg',
  '/assets/logo_2_86eaeae422.svg',
  '/assets/logo_3_b28c8ab148.svg',
  '/assets/logo_4_7f396b8adb.svg',
  '/assets/logo_5_7f8a5773f3.svg',
  '/assets/logo_6_bee0d8329a.svg',
  '/assets/logo_7_ec7b603de9.svg',
  '/assets/logo_8_aae9c60684.svg',
  '/assets/logo_9_a62db1b5b0.svg',
  '/assets/logo_10_f6308c00d0.svg',
  '/assets/logo_11_536b6a3d30.svg',
  '/assets/logo_12_2d797d52ab.svg',
  '/assets/logo_13_207c470c2a.svg',
  '/assets/logo_14_c63e233350.svg',
];

export default function SobreNos() {
  return (
    <>
      <PageMeta title="Sobre Nós" description="Matera — líder em tecnologia bancária. 1.100+ colaboradores, 280+ clientes, 90M+ contas digitais." url="/br/sobre-nos" />
      <PageHero
        title="Sobre nós"
        image="/assets/hero-about-us.jpg"
      />

      {/* Manifesto */}
      <section style={{ padding: '80px 0' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 700, color: 'var(--matera-blue)', marginBottom: '24px' }}>
            Manifesto
          </h2>
          <p style={{ color: '#444', lineHeight: 1.8 }}>
            Somos uma empresa de tecnologia com foco em soluções e produtos financeiros. As pessoas são o que nos conecta e nos move. Nossos valores — respeito, comprometimento, energia criativa, cooperação e coragem para ousar e encarar mudanças — são o alicerce de tudo que fazemos. Criamos soluções tecnológicas que transformam os negócios dos nossos clientes e democratizam os serviços financeiros.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section style={{ backgroundColor: 'var(--matera-blue)', color: 'var(--matera-white)', padding: '80px 0' }}>
        <div className="container">
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 700, marginBottom: '48px' }}>
            Nossos números
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px' }}>
            {stats.map((s) => (
              <div key={s.label}>
                <span style={{ fontSize: '3rem', fontWeight: 700, color: 'var(--matera-green)' }}>{s.value}</span>
                <p style={{ marginTop: '8px', opacity: 0.8 }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nossa história */}
      <section style={{ padding: '80px 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 700, color: 'var(--matera-blue)', marginBottom: '16px' }}>
            Nossa história
          </h2>
          <p style={{ color: '#444', lineHeight: 1.8, marginBottom: '48px' }}>
            Fundada na Unicamp em 1987 por cinco entusiastas de tecnologia, a Matera tem como missão transformar as operações dos seus clientes e ampliar o acesso a serviços financeiros.
          </p>
          <img
            src="/assets/historia.jpg"
            alt="História da Matera"
            style={{ width: '100%', borderRadius: '12px', marginBottom: '48px' }}
          />
          <div style={{ position: 'relative', paddingLeft: '40px' }}>
            {/* Vertical line */}
            <div style={{
              position: 'absolute',
              left: '7px',
              top: '8px',
              bottom: '8px',
              width: '2px',
              backgroundColor: '#e0e0e0',
            }} />

            {timeline.map((t, i) => (
              <div key={t.year} style={{
                position: 'relative',
                paddingBottom: i < timeline.length - 1 ? '40px' : '0',
              }}>
                {/* Bullet */}
                <div style={{
                  position: 'absolute',
                  left: '-40px',
                  top: '4px',
                  width: '16px',
                  height: '16px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--matera-purple)',
                  border: '3px solid #fff',
                  boxShadow: '0 0 0 2px var(--matera-purple)',
                  zIndex: 1,
                }} />

                {/* Year */}
                <div style={{
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  color: 'var(--matera-purple)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  marginBottom: '6px',
                }}>
                  {t.year}
                </div>

                {/* Text */}
                <p style={{
                  color: '#444',
                  lineHeight: 1.7,
                  fontSize: '1rem',
                }}>
                  {t.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ESG */}
      <section style={{ padding: '80px 0', backgroundColor: 'var(--matera-gray)' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 700, color: 'var(--matera-blue)', marginBottom: '24px' }}>
            ESG
          </h2>
          <p style={{ color: '#444', lineHeight: 1.8 }}>
            Há mais de 10 anos, a Matera foca na transformação, respeito e empatia ao próximo. Alinhada aos Objetivos de Desenvolvimento Sustentável da ONU, promovemos práticas de trabalho justas e igualitárias e iniciativas que beneficiam o ecossistema.
          </p>
          <Link to="/br/esg" style={{ color: 'var(--matera-purple)', fontWeight: 700, marginTop: '16px', display: 'inline-block' }}>
            Saiba mais sobre ESG →
          </Link>
        </div>
      </section>

      {/* Clientes */}
      <section style={{ padding: '80px 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <p style={{ color: 'var(--matera-purple)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '12px', fontSize: '0.85rem' }}>
            ALGUNS DOS NOSSOS CLIENTES
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            gap: '32px',
            alignItems: 'center',
            justifyItems: 'center',
            marginTop: '32px',
          }}>
            {clientLogos.map((logo, i) => (
              <img key={i} src={logo} alt="" style={{ height: '40px', opacity: 0.7 }} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Carreiras */}
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
