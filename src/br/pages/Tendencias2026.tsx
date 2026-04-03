import React, { useState } from 'react';
import PageHero from '../../shared/components/PageHero';
import PageMeta from '../../shared/components/PageMeta';

const forces = [
  {
    title: 'A Força do Regulador',
    body: 'O Banco Central prioriza disciplina de mercado e segurança. Aumento nas exigências de capital, complexidade crescente em regulamentações (reforma do risco de mercado para 2027), e novas normas para Banking as a Service (BaaS) e Sociedade Prestadora de Serviços de Ativos Virtuais (SPSAV).',
  },
  {
    title: 'A Força do Mercado',
    body: 'Stablecoins se consolidam como o "WhatsApp do dinheiro". Crédito consignado ultrapassa R$50 bilhões com 5,6 milhões de trabalhadores. Pix se torna canal de crédito — alternativa ao cartão para pessoa física e às duplicatas para PJ.',
  },
  {
    title: 'A Força da Tecnologia',
    body: 'Agentes de IA em operações críticas (Customer Success, análise de risco, segurança). Evolução do dinheiro programável com alternativas privadas. Investimentos em Core Banking de última geração.',
  },
  {
    title: 'A Força do Comportamento',
    body: 'Consumidor digital exigindo experiências fluidas. Adoção veloz de novas funcionalidades (Pix Parcelado, Pix Automático). Erosão da lealdade bancária tradicional.',
  },
];

const inputStyle: React.CSSProperties = {
  width: '100%', padding: '12px 16px', border: '1px solid #ddd', borderRadius: '8px', fontSize: '1rem', outline: 'none',
};

export default function Tendencias2026() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <PageMeta title="Tendências 2026" description="Tendências do mercado financeiro para 2026. Análises e perspectivas da Matera." url="/br/tendencias-mercado-financeiro-2026" />
      <PageHero title="Tendências do Mercado Financeiro em 2026" />

      {/* Intro */}
      <section style={{ padding: '80px 0' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 700, color: 'var(--matera-blue)', marginBottom: '24px' }}>
            Inovação, Tecnologia e Regulação
          </h2>
          <p style={{ color: '#444', lineHeight: 1.8 }}>
            Uma análise estruturada sobre o futuro do mercado financeiro brasileiro, organizada em torno de quatro forças fundamentais que estão moldando o setor.
          </p>
        </div>
      </section>

      {/* Forces */}
      <section style={{ padding: '0 0 80px' }}>
        <div className="container" style={{ maxWidth: '900px', display: 'flex', flexDirection: 'column', gap: '32px' }}>
          {forces.map((f, i) => (
            <div key={f.title} style={{
              padding: '32px',
              backgroundColor: i % 2 === 0 ? 'var(--matera-gray)' : '#fff',
              borderRadius: '12px',
              borderLeft: '4px solid var(--matera-purple)',
            }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--matera-blue)', marginBottom: '12px' }}>
                {f.title}
              </h3>
              <p style={{ color: '#555', lineHeight: 1.8 }}>{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Form */}
      <section style={{ padding: '80px 0', backgroundColor: 'var(--matera-gray)' }}>
        <div className="container" style={{ maxWidth: '600px' }}>
          <h2 style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)', fontWeight: 700, color: 'var(--matera-blue)', marginBottom: '16px', textAlign: 'center' }}>
            Quer saber mais?
          </h2>
          <p style={{ color: '#555', textAlign: 'center', marginBottom: '32px' }}>
            Preencha o formulário e receba o conteúdo completo.
          </p>
          {submitted ? (
            <div style={{ padding: '32px', backgroundColor: '#fff', borderRadius: '12px', textAlign: 'center' }}>
              <h3 style={{ color: 'var(--matera-blue)', fontWeight: 700 }}>Obrigado!</h3>
              <p style={{ color: '#555' }}>Entraremos em contato em breve.</p>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <input style={inputStyle} placeholder="Nome" required />
              <input style={inputStyle} type="email" placeholder="E-mail corporativo" required />
              <input style={inputStyle} placeholder="Telefone" />
              <input style={inputStyle} placeholder="Empresa" required />
              <select style={inputStyle} required>
                <option value="">Cargo</option>
                <option>C-Level / Diretor</option>
                <option>Superintendente</option>
                <option>Head</option>
                <option>Gerente</option>
                <option>Consultor</option>
                <option>Coordenador</option>
                <option>Especialista</option>
                <option>Analista</option>
                <option>Outro</option>
              </select>
              <textarea style={{ ...inputStyle, minHeight: '80px', resize: 'vertical' }} placeholder="Mensagem (opcional)" />
              <button type="submit" className="btn-matera" style={{ backgroundColor: 'var(--matera-purple)', color: '#fff', alignSelf: 'center' }}>
                Enviar
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
