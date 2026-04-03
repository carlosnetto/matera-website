import { Link } from 'react-router-dom';

const valueProps = [
  {
    icon: 'https://d2lq74zxbg4jiz.cloudfront.net/icon_icon2_b8b47b661a.svg',
    title: 'Alta performance',
    description: 'Nossa plataforma é projetada para suportar altas demandas, oferecendo escalabilidade e segurança para acompanhar o crescimento da sua operação.',
  },
  {
    icon: 'https://d2lq74zxbg4jiz.cloudfront.net/icon_icon2_1_e68dfb365b.svg',
    title: 'Tecnologia no estado da arte',
    description: 'Soluções prontas para a nuvem e que utilizam as melhores tecnologias para cada missão.',
  },
  {
    icon: 'https://d2lq74zxbg4jiz.cloudfront.net/icon_icon2_2_de70261f81.svg',
    title: "Extensibilidade e API's",
    description: "As soluções Matera contam com milhares de API's, permitindo a criação de experiências únicas e personalizadas.",
  },
  {
    icon: 'https://d2lq74zxbg4jiz.cloudfront.net/icon_icon2_3_0bf407c664.svg',
    title: 'Time-to-market acelerado',
    description: 'Com integração nativa entre todos os serviços, oferecemos rapidez e competitividade para lançar suas soluções no mercado.',
  },
  {
    icon: 'https://d2lq74zxbg4jiz.cloudfront.net/icon_icon2_4_b57f9471ad.svg',
    title: 'Plataforma completa e flexível',
    description: 'Atendemos de ponta a ponta os desafios do mercado financeiro.',
  },
  {
    icon: 'https://d2lq74zxbg4jiz.cloudfront.net/icon_icon2_5_90639f0d4b.svg',
    title: 'Conformidade regulatória',
    description: 'Acompanhamento ativo para que você não tenha que se preocupar com as exigências do Banco Central e Receita Federal.',
  },
];

const solutions = [
  {
    icon: 'https://d2lq74zxbg4jiz.cloudfront.net/icon_icon_829de8fecf.svg',
    title: 'Core Banking',
    description: 'Transforme a experiência do seu cliente e impulsione o desenvolvimento do seu banco com uma solução abrangente e flexível que utiliza tecnologia robusta e pronta para a nuvem.',
    href: '/br/solucoes/core-banking',
  },
  {
    icon: 'https://d2lq74zxbg4jiz.cloudfront.net/icon_icon_1_5dcf9bdba3.svg',
    title: 'Pagamentos',
    description: 'Conecte-se aos principais tipos de pagamentos através de uma plataforma moderna e escalável.',
    href: '/br/solucoes/pagamentos',
  },
  {
    icon: 'https://d2lq74zxbg4jiz.cloudfront.net/icon_icon_2_f4af3b614b.svg',
    title: 'Cash Management',
    description: 'Atenda clientes corporativos com soluções de recebíveis e pagamentos, entregando valor e fortalecendo relacionamentos.',
    href: '/br/solucoes/cash-management',
  },
  {
    icon: 'https://d2lq74zxbg4jiz.cloudfront.net/icon_icon_3_23d362b750.svg',
    title: 'Plataforma de Crédito',
    description: 'Tecnologia para conceder crédito com eficiência e agilidade para as jornadas de pessoas físicas e jurídicas.',
    href: '/br/solucoes/credito',
  },
  {
    icon: 'https://d2lq74zxbg4jiz.cloudfront.net/icon_icon_4_e42b70153e.svg',
    title: 'Gestão de Riscos',
    description: 'Mantenha os riscos regulatórios e operacionais sob controle. Para instituições financeiras de todos os portes.',
    href: '/br/solucoes/gestao-de-riscos',
  },
  {
    icon: 'https://d2lq74zxbg4jiz.cloudfront.net/icon_icon_5_c0024899d9.svg',
    title: 'RegTech',
    description: 'Atenda as exigências regulatórias do Banco Central, Receita Federal e Prefeituras com uma solução tecnológica confiável, robusta e segura.',
    href: '/br/solucoes/reg-tech',
  },
  {
    icon: 'https://d2lq74zxbg4jiz.cloudfront.net/icon_icon_6_8889731610.svg',
    title: 'Insights',
    description: 'Impulsione a rentabilidade e a fidelização de clientes e eleve o seu desempenho de crédito com modelos personalizados e scores exclusivos.',
    href: '/br/solucoes/insights',
  },
  {
    icon: 'https://d2lq74zxbg4jiz.cloudfront.net/digital_twin_br_01c9d15309.svg',
    title: 'Digital Twin',
    description: 'Ofereça a experiência de contas globais e multimoedas, assegurando uma operação 24x7 preparada para um futuro financeiro cada vez mais transfronteiriço.',
    href: '/br/solucoes/matera-digital-twin',
  },
  {
    icon: 'https://d2lq74zxbg4jiz.cloudfront.net/tesouraria_avancada_ba8de41966.svg',
    title: 'Tesouraria Avançada',
    description: 'Controle operações de Renda Fixa, SWAP, Termo de moedas, COE, Opções Cetip e BM&F em um único sistema.',
    href: '/br/solucoes/tesouraria-avancada',
  },
];

const featuredCases = [
  {
    title: 'C6 Bank',
    description: 'Um banco completo para pessoas físicas e jurídicas, formado por uma arquitetura aberta e totalmente digital.',
    image: 'https://d2lq74zxbg4jiz.cloudfront.net/hero_c6_146a5aab6a.png',
    href: '/br/cases/c6-bank',
  },
  {
    title: 'Pefisa',
    description: 'A primeira varejista a disponibilizar Pix, além de investir em um processo de concessão de Crédito Pessoal facilitado.',
    image: 'https://d2lq74zxbg4jiz.cloudfront.net/Logo_PEFISA_fdd859861c.webp',
    href: '/br/cases/pefisa',
  },
  {
    title: 'Digio',
    description: 'Banco digital do Bradesco, focado em criar soluções digitais para descomplicar a forma como os brasileiros cuidam do dinheiro.',
    image: 'https://d2lq74zxbg4jiz.cloudfront.net/hero_digio_dafe0ac5f7.png',
    href: '/br/cases/digio',
  },
];

const clientLogos = [
  'https://d2lq74zxbg4jiz.cloudfront.net/logo_alesta_azul_98307ae975.svg',
  'https://d2lq74zxbg4jiz.cloudfront.net/logo_1_614acfb630.svg',
  'https://d2lq74zxbg4jiz.cloudfront.net/logo_2_86eaeae422.svg',
  'https://d2lq74zxbg4jiz.cloudfront.net/logo_3_b28c8ab148.svg',
  'https://d2lq74zxbg4jiz.cloudfront.net/logo_4_7f396b8adb.svg',
  'https://d2lq74zxbg4jiz.cloudfront.net/logo_5_7f8a5773f3.svg',
  'https://d2lq74zxbg4jiz.cloudfront.net/logo_6_bee0d8329a.svg',
  'https://d2lq74zxbg4jiz.cloudfront.net/logo_7_ec7b603de9.svg',
  'https://d2lq74zxbg4jiz.cloudfront.net/logo_8_aae9c60684.svg',
  'https://d2lq74zxbg4jiz.cloudfront.net/logo_9_a62db1b5b0.svg',
  'https://d2lq74zxbg4jiz.cloudfront.net/logo_10_f6308c00d0.svg',
  'https://d2lq74zxbg4jiz.cloudfront.net/logo_11_536b6a3d30.svg',
  'https://d2lq74zxbg4jiz.cloudfront.net/logo_12_2d797d52ab.svg',
  'https://d2lq74zxbg4jiz.cloudfront.net/logo_13_207c470c2a.svg',
  'https://d2lq74zxbg4jiz.cloudfront.net/logo_14_c63e233350.svg',
  'https://d2lq74zxbg4jiz.cloudfront.net/logo_15_56a63ba914.svg',
  'https://d2lq74zxbg4jiz.cloudfront.net/logo_16_ef5f6b8338.svg',
  'https://d2lq74zxbg4jiz.cloudfront.net/logo_17_cc242f75b5.svg',
  'https://d2lq74zxbg4jiz.cloudfront.net/logo_18_9d2ece1f55.svg',
  'https://d2lq74zxbg4jiz.cloudfront.net/logo_19_7e04976cd9.svg',
];

export default function Solucoes() {
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
        minHeight: '400px',
        display: 'flex',
        alignItems: 'center',
      }}>
        <img
          src="https://d2lq74zxbg4jiz.cloudfront.net/hero_solucoes_d7d7181e0e.jpg"
          alt=""
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.3 }}
        />
        <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '700px' }}>
          <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: 700, lineHeight: 1.1, marginBottom: '24px' }}>
            Soluções
          </h1>
          <p style={{ fontSize: '1.25rem', opacity: 0.9, lineHeight: 1.7 }}>
            Solução segura, robusta e inovadora, pronta para os desafios do mercado financeiro.
          </p>
        </div>
      </section>

      {/* O que oferecemos / Por que Matera? */}
      <section style={{ padding: '80px 0' }}>
        <div className="container">
          <p style={{ color: 'var(--matera-purple)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '12px', fontSize: '0.85rem' }}>
            O QUE OFERECEMOS
          </p>
          <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 700, color: 'var(--matera-blue)', marginBottom: '48px' }}>
            Por que Matera?
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '32px',
          }}>
            {valueProps.map((vp, i) => (
              <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <img src={vp.icon} alt="" style={{ width: '48px', height: '48px' }} />
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--matera-blue)' }}>{vp.title}</h3>
                <p style={{ color: '#555', lineHeight: 1.7, fontSize: '0.95rem' }}>{vp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nossas Soluções */}
      <section style={{ padding: '80px 0', backgroundColor: 'var(--matera-gray)' }}>
        <div className="container">
          <p style={{ color: 'var(--matera-purple)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '12px', fontSize: '0.85rem' }}>
            NOSSAS SOLUÇÕES
          </p>
          <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 700, color: 'var(--matera-blue)', marginBottom: '48px' }}>
            Conheça nossas soluções
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '32px',
          }}>
            {solutions.map((s, i) => (
              <Link
                key={i}
                to={s.href}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                  padding: '32px',
                  borderRadius: '12px',
                  backgroundColor: '#fff',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.1)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'none';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <img src={s.icon} alt="" style={{ width: '48px', height: '48px' }} />
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--matera-blue)' }}>{s.title}</h3>
                <p style={{ color: '#555', lineHeight: 1.7, fontSize: '0.95rem' }}>{s.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Nossos Cases */}
      <section style={{ padding: '80px 0' }}>
        <div className="container">
          <p style={{ color: 'var(--matera-purple)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '12px', fontSize: '0.85rem' }}>
            NOSSOS CASES
          </p>
          <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 700, color: 'var(--matera-blue)', marginBottom: '48px' }}>
            Conheça nossos cases
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '32px',
            marginBottom: '32px',
          }}>
            {featuredCases.map((c, i) => (
              <Link
                key={i}
                to={c.href}
                style={{
                  borderRadius: '12px',
                  overflow: 'hidden',
                  backgroundColor: '#fff',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
                  transition: 'transform 0.2s',
                  display: 'flex',
                  flexDirection: 'column',
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'none'; }}
              >
                <div style={{ aspectRatio: '16/10', overflow: 'hidden', backgroundColor: 'var(--matera-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <img src={c.image} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ padding: '24px' }}>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--matera-blue)', marginBottom: '8px' }}>{c.title}</h3>
                  <p style={{ color: '#555', lineHeight: 1.6, fontSize: '0.9rem' }}>{c.description}</p>
                </div>
              </Link>
            ))}
          </div>
          <Link to="/br/cases" style={{ color: 'var(--matera-green)', fontWeight: 700, fontSize: '1rem' }}>
            Veja mais →
          </Link>
        </div>
      </section>

      {/* Quem já está conosco */}
      <section style={{ padding: '80px 0', backgroundColor: 'var(--matera-gray)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 700, color: 'var(--matera-blue)', marginBottom: '48px' }}>
            Quem já está conosco
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            gap: '32px',
            alignItems: 'center',
            justifyItems: 'center',
          }}>
            {clientLogos.map((logo, i) => (
              <img key={i} src={logo} alt="" style={{ height: '40px', opacity: 0.7 }} />
            ))}
          </div>
        </div>
      </section>

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
