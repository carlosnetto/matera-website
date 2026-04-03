import React, { useState } from 'react';
import PageHero from '../../shared/components/PageHero';
import PageMeta from '../../shared/components/PageMeta';

const offices = [
  {
    region: 'São Paulo',
    city: 'Campinas',
    address: 'Av. Selma Parada (Bailarina), nº 505 - 7º Andar, Salas 701 e 703 - Jardim Madalena',
    zip: 'CEP 13091-605',
    phone: '(19) 3794-7700',
  },
  {
    region: 'Ontario, Canada',
    city: 'Toronto',
    address: '18 King St E Suite #1400',
    zip: 'ON M5C 1C4, Canada',
  },
  {
    region: 'São Paulo',
    city: 'São Paulo',
    address: 'Avenida Rebouças, 2728 - 4º andar, CJ 32 - Pinheiros',
    zip: 'CEP 05402-500',
    phone: '+55 (11) 3512-0300',
  },
  {
    region: 'Pennsylvania, USA',
    city: 'Philadelphia',
    address: '1801 Market Street Suite 1700',
    zip: 'Pennsylvania, PA 19103',
  },
];

export default function ContactUs() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '12px 16px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    fontSize: '1rem',
    outline: 'none',
    transition: 'border-color 0.2s',
  };

  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontSize: '0.85rem',
    fontWeight: 600,
    marginBottom: '6px',
    color: '#333',
  };

  return (
    <>
      <PageMeta title="Contact Us" description="Get in touch with Matera. Offices in New York and São Paulo. Learn how we can help modernize your banking infrastructure." url="/en/contact-us" />
      <PageHero title="Contact" />

      {/* Contact Form Section */}
      <section style={{ padding: '80px 0' }}>
        <div className="container" style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '60px',
          alignItems: 'start',
        }}>
          {/* Left: Info */}
          <div style={{
            backgroundColor: 'var(--matera-gray)',
            borderRadius: '16px',
            padding: '48px',
          }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '20px', color: 'var(--matera-blue)' }}>
              Let's talk technology.
            </h2>
            <p style={{ color: '#555', marginBottom: '32px', lineHeight: 1.7 }}>
              With over 30 years of experience, Matera is a trusted provider of technology solutions for financial institutions.
            </p>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '16px', color: 'var(--matera-blue)' }}>
              Let us help you:
            </h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px', listStyle: 'disc', paddingLeft: '20px', color: '#555' }}>
              <li>Drive instant payment volumes with our QR Code payments solution</li>
              <li>Provide reliable real-time experiences your customers deserve with Digital Twin</li>
              <li>Confidently merge Core systems by leveraging Digital Twin as a part of your M&A activities</li>
              <li>Get visibility into your fintech partner account balances with Digital Twin (for BaaS providers)</li>
            </ul>
          </div>

          {/* Right: Form */}
          <div>
            {submitted ? (
              <div style={{
                padding: '48px',
                textAlign: 'center',
                backgroundColor: 'var(--matera-gray)',
                borderRadius: '16px',
              }}>
                <p style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--matera-blue)' }}>
                  Thanks for your interest. One of our team members will reach out to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div>
                    <label htmlFor="contact-firstname" style={labelStyle}>First name *</label>
                    <input id="contact-firstname" name="firstname" type="text" required style={inputStyle} />
                  </div>
                  <div>
                    <label htmlFor="contact-lastname" style={labelStyle}>Last name *</label>
                    <input id="contact-lastname" name="lastname" type="text" required style={inputStyle} />
                  </div>
                </div>
                <div>
                  <label htmlFor="contact-email" style={labelStyle}>Business email *</label>
                  <input id="contact-email" name="email" type="email" required style={inputStyle} />
                </div>
                <div>
                  <label htmlFor="contact-company" style={labelStyle}>Company name *</label>
                  <input id="contact-company" name="company" type="text" required style={inputStyle} />
                </div>
                <div>
                  <label htmlFor="contact-jobtitle" style={labelStyle}>Job title *</label>
                  <input id="contact-jobtitle" name="jobtitle" type="text" required style={inputStyle} />
                </div>
                <div>
                  <label htmlFor="contact-message" style={labelStyle}>How can we help?</label>
                  <textarea id="contact-message" name="message" rows={4} style={{ ...inputStyle, resize: 'vertical' }} />
                </div>
                <button type="submit" className="btn-matera btn-green" style={{ alignSelf: 'flex-start' }}>
                  Send
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Trusted By */}
      <section style={{ backgroundColor: 'var(--matera-gray)', padding: '60px 0' }}>
        <div className="container">
          <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '32px', color: 'var(--matera-blue)' }}>
            Trusted by:
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px' }}>
            <div style={{
              backgroundColor: 'var(--matera-purple)',
              borderRadius: '12px',
              padding: '32px',
              color: 'var(--matera-white)',
            }}>
              <div style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--matera-green)', marginBottom: '4px' }}>
                2 of the Top 3
              </div>
              <p style={{ opacity: 0.9 }}>global banks</p>
            </div>
            <div style={{
              backgroundColor: 'var(--matera-purple)',
              borderRadius: '12px',
              padding: '32px',
              color: 'var(--matera-white)',
            }}>
              <div style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--matera-green)', marginBottom: '4px' }}>
                3 of the Top 10
              </div>
              <p style={{ opacity: 0.9 }}>U.S banks</p>
            </div>
          </div>
        </div>
      </section>

      {/* Offices */}
      <section style={{ backgroundColor: 'var(--matera-purple)', color: 'var(--matera-white)', padding: '80px 0' }}>
        <div className="container">
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 700, marginBottom: '48px' }}>
            Office
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '40px',
          }}>
            {offices.map((o) => (
              <div key={o.city}>
                <p style={{ fontSize: '0.8rem', opacity: 0.7, marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  {o.region}
                </p>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--matera-green)', marginBottom: '12px' }}>
                  {o.city}
                </h3>
                <p style={{ fontSize: '0.9rem', opacity: 0.85, lineHeight: 1.6, marginBottom: '8px' }}>
                  {o.address}
                </p>
                <p style={{ fontSize: '0.85rem', opacity: 0.7 }}>{o.zip}</p>
                {o.phone && <p style={{ fontSize: '0.85rem', opacity: 0.7, marginTop: '4px' }}>{o.phone}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
