import React from 'react';

const clients = [
  { name: 'ABN AMRO', logo: '/logos/abn_amro_logo_7e61860c42.png' },
  { name: 'Bank of America', logo: '/logos/Bof_A_logo_cf1ade04c0.png' },
  { name: 'Santander', logo: '/logos/Santander_logo_e1d50ea104.png' },
  { name: 'Mercado Pago', logo: '/logos/MP_RGB_HANDSHAKE_color_horizontal_1235cd146b.png' },
  { name: 'Bradesco', logo: '/logos/bradesco_logo_ab51ea5459.png' },
  { name: 'Cielo', logo: '/logos/cielo_logo_55c671f992.png' },
  { name: 'C6 Bank', logo: '/logos/c6_bank_logo_f724237634.png' },
  { name: 'Fiserv', logo: '/logos/fiserv_logo_b89c50ef26.png' },
  { name: 'Nupay', logo: '/logos/nupay_logo_76b50273ff.png' },
  { name: 'Western Union', logo: '/logos/western_union_logo_a130fe8518.png' },
  { name: 'BNY Mellon', logo: '/logos/BNY_Mellon_34cfb329a2.png' },
  { name: 'Mizuho', logo: '/logos/mizuho_logo_2bbcdc4012.png' },
  { name: 'BNP Paribas', logo: '/logos/bnp_logo_757d642cc6.png' },
  { name: 'JP Morgan', logo: '/logos/jp_morgan_logo_dae2f2767d.png' },
  { name: 'Adyen', logo: '/logos/adyen_logo_4d4a7f31d9.png' },
];

const TrustBanner: React.FC = () => {
  return (
    <section style={{ backgroundColor: 'var(--matera-blue)', color: 'var(--matera-white)', padding: '80px 0' }}>
      <div className="container">
        {/* Stats row — centered inline */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '60px',
          marginBottom: '48px',
          flexWrap: 'wrap',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{
              display: 'inline-block',
              width: '10px',
              height: '10px',
              backgroundColor: 'var(--matera-green)',
              flexShrink: 0
            }} />
            <span style={{ fontSize: '1.1rem', fontWeight: '600' }}>Trusted by</span>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{
              fontSize: 'clamp(2.5rem, 6vw, 4rem)',
              fontWeight: '700',
              lineHeight: '1',
              marginBottom: '4px'
            }}>
              2/3
            </div>
            <p style={{ fontSize: '0.95rem', opacity: 0.7 }}>top global banks</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{
              fontSize: 'clamp(2.5rem, 6vw, 4rem)',
              fontWeight: '700',
              lineHeight: '1',
              marginBottom: '4px'
            }}>
              3/10
            </div>
            <p style={{ fontSize: '0.95rem', opacity: 0.7 }}>top U.S banks</p>
          </div>
        </div>

        {/* Scrolling logo carousel */}
        <div style={{ overflow: 'hidden', position: 'relative' }}>
          {/* Fade edges */}
          <div style={{
            position: 'absolute', top: 0, left: 0, bottom: 0, width: '80px',
            background: 'linear-gradient(to right, var(--matera-blue), transparent)',
            zIndex: 1, pointerEvents: 'none'
          }} />
          <div style={{
            position: 'absolute', top: 0, right: 0, bottom: 0, width: '80px',
            background: 'linear-gradient(to left, var(--matera-blue), transparent)',
            zIndex: 1, pointerEvents: 'none'
          }} />

          <div className="trust-scroll-track">
            {/* Duplicate the list for seamless loop */}
            {[...clients, ...clients].map((client, i) => (
              <div key={i} style={{
                padding: '8px 24px',
                flexShrink: 0,
                display: 'flex',
                alignItems: 'center',
              }}>
                <img
                  src={client.logo}
                  alt={client.name}
                  style={{
                    height: '28px',
                    width: 'auto',
                    objectFit: 'contain',
                    filter: 'brightness(0) invert(1)',
                    opacity: 0.7,
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .trust-scroll-track {
          display: flex;
          align-items: center;
          gap: 16px;
          animation: trustScroll 40s linear infinite;
          width: max-content;
        }
        @keyframes trustScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .trust-scroll-track:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default TrustBanner;
