import React, { useState } from 'react';
import PageHero from '../../shared/components/PageHero';
import PageMeta from '../../shared/components/PageMeta';

const offices = [
  { region: 'São Paulo', city: 'Campinas', address: 'Av. Selma Parada, nº 505 - 7º andar, salas 701/703, Jardim Madalena', zip: 'CEP 13091-605', phone: '+55 (19) 3794-7700' },
  { region: 'São Paulo', city: 'São Paulo', address: 'Avenida Rebouças, 2728 - 4º andar, CJ 32 - Pinheiros', zip: 'CEP 05402-500', phone: '+55 (11) 3512-0300' },
  { region: 'Ontario, Canada', city: 'Toronto', address: '18 King St E Suite #1400', zip: 'ON M5C 1C4' },
  { region: 'Pennsylvania, USA', city: 'Philadelphia', address: '1801 Market Street Suite 1700', zip: 'PA 19103' },
];

const inputStyle: React.CSSProperties = {
  width: '100%', padding: '12px 16px', border: '1px solid #ddd', borderRadius: '8px', fontSize: '1rem', outline: 'none',
};

export default function FaleConosco() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <PageMeta title="Fale Conosco" description="Entre em contato com a Matera. Escritórios em Campinas e São Paulo." url="/br/fale-conosco" />
      <PageHero title="Contato" />

      <section style={{ padding: '80px 0' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'start' }}>
          {/* Form */}
          <div>
            <p style={{ color: '#555', lineHeight: 1.7, marginBottom: '32px' }}>
              Quer saber mais sobre nossa empresa, nossos produtos ou como podemos ajudá-lo a impulsionar os seus resultados? Preencha o formulário!
            </p>
            {submitted ? (
              <div style={{ padding: '32px', backgroundColor: 'var(--matera-gray)', borderRadius: '12px', textAlign: 'center' }}>
                <h3 style={{ color: 'var(--matera-blue)', fontWeight: 700, marginBottom: '8px' }}>Obrigado!</h3>
                <p style={{ color: '#555' }}>Recebemos sua mensagem e entraremos em contato em breve.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <input style={inputStyle} placeholder="Nome" required />
                <input style={inputStyle} type="email" placeholder="E-mail Corporativo" required />
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
                <select style={inputStyle} required>
                  <option value="">Segmento da empresa</option>
                  <option>Banco</option>
                  <option>Instituição de Pagamento</option>
                  <option>Agência de Fomento</option>
                  <option>Financeira</option>
                  <option>Sociedade de Crédito Direto</option>
                  <option>Entidade de Previdência</option>
                  <option>Cooperativa</option>
                  <option>Corretora</option>
                  <option>Varejo</option>
                  <option>Outro</option>
                </select>
                <textarea style={{ ...inputStyle, minHeight: '100px', resize: 'vertical' }} placeholder="Mensagem (opcional)" />
                <button type="submit" className="btn-matera" style={{ backgroundColor: 'var(--matera-purple)', color: '#fff', alignSelf: 'flex-start' }}>
                  Enviar
                </button>
              </form>
            )}
          </div>

          {/* Offices */}
          <div>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--matera-blue)', marginBottom: '32px' }}>Nossos escritórios</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {offices.map((o) => (
                <div key={o.city} style={{ padding: '24px', backgroundColor: 'var(--matera-gray)', borderRadius: '12px' }}>
                  <p style={{ fontSize: '0.8rem', color: 'var(--matera-purple)', fontWeight: 700, textTransform: 'uppercase', marginBottom: '4px' }}>{o.region}</p>
                  <h3 style={{ fontWeight: 700, color: 'var(--matera-blue)', marginBottom: '8px' }}>{o.city}</h3>
                  <p style={{ color: '#555', fontSize: '0.9rem', lineHeight: 1.6 }}>{o.address}</p>
                  <p style={{ color: '#555', fontSize: '0.9rem' }}>{o.zip}</p>
                  {o.phone && <p style={{ color: '#555', fontSize: '0.9rem' }}>{o.phone}</p>}
                </div>
              ))}
            </div>
            <div style={{ marginTop: '32px', padding: '24px', backgroundColor: 'var(--matera-gray)', borderRadius: '12px' }}>
              <h3 style={{ fontWeight: 700, color: 'var(--matera-blue)', marginBottom: '8px' }}>Assessoria de Imprensa</h3>
              <a href="mailto:imprensa@matera.com" style={{ color: 'var(--matera-purple)', fontWeight: 600 }}>imprensa@matera.com</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
