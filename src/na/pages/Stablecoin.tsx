import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Stablecoin() {
  const [playing, setPlaying] = useState(false);

  return (
    <>
      {/* Hero */}
      <section style={{
        backgroundColor: 'var(--matera-blue)',
        color: 'var(--matera-white)',
        paddingTop: '8rem',
        paddingBottom: '80px',
        position: 'relative',
        overflow: 'hidden',
        minHeight: '500px',
      }}>
        <div className="container" style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '48px',
          alignItems: 'center',
          position: 'relative',
          zIndex: 1,
        }}>
          <div>
            <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 700, lineHeight: 1.15, marginBottom: '20px' }}>
              Connect Stablecoin with Traditional Financial Services
            </h1>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 400, opacity: 0.85, marginBottom: '16px', lineHeight: 1.6 }}>
              Protect deposits and customer relationships by offering stablecoins to your customers.
            </h2>
            <p style={{ opacity: 0.7, marginBottom: '32px', lineHeight: 1.7 }}>
              Learn how Circle and Matera can make it easy to offer stablecoins within your mobile and online banking.
            </p>
            <Link to="/en/contact-us" className="btn-matera btn-green">
              Request a Conversation
            </Link>
          </div>
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <img
              src="https://d2lq74zxbg4jiz.cloudfront.net/HERO_PHOTO_e3f08e4743.webp"
              alt=""
              style={{ width: '100%', maxWidth: '500px', borderRadius: '16px', objectFit: 'cover' }}
            />
          </div>
        </div>
      </section>

      {/* Video Demo */}
      <section style={{ padding: '80px 0', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: 'clamp(1.5rem, 4vw, 2.25rem)', fontWeight: 700, color: 'var(--matera-blue)', marginBottom: '12px' }}>
            Let your customers convert USD to USDC or send USDC from within their mobile banking app
          </h2>
          <p style={{ color: '#666', marginBottom: '32px' }}>Press play to see in action</p>
          <div style={{ position: 'relative', borderRadius: '16px', overflow: 'hidden', cursor: 'pointer' }}
            onClick={() => setPlaying(true)}
          >
            {!playing ? (
              <>
                <img
                  src="https://d2lq74zxbg4jiz.cloudfront.net/Stablecoin_Video_TN_bdfd424dee.png"
                  alt="Video thumbnail"
                  style={{ width: '100%', display: 'block' }}
                />
                <div style={{
                  position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: 'rgba(0,0,0,0.3)',
                }}>
                  <div style={{
                    width: '72px', height: '72px', borderRadius: '50%', backgroundColor: 'var(--matera-green)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <svg width="24" height="28" viewBox="0 0 24 28" fill="#000">
                      <path d="M0 0L24 14L0 28V0Z" />
                    </svg>
                  </div>
                </div>
              </>
            ) : (
              <video
                autoPlay
                controls
                style={{ width: '100%', display: 'block' }}
              >
                <source src="https://d2lq74zxbg4jiz.cloudfront.net/Matera_Stablecoin_Transaction_Process_Updated_dfc6644ea4.mp4" type="video/mp4" />
              </video>
            )}
          </div>
        </div>
      </section>

      {/* Reimagining Section */}
      <section style={{ padding: '80px 0' }}>
        <div className="container" style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '60px',
          alignItems: 'center',
        }}>
          <div>
            <img
              src="https://d2lq74zxbg4jiz.cloudfront.net/matera_circle_dtw_graphic_3a0447417c.png"
              alt="Matera Circle Digital Twin diagram"
              style={{ width: '100%' }}
            />
          </div>
          <div>
            <h2 style={{ fontSize: 'clamp(1.5rem, 4vw, 2.25rem)', fontWeight: 700, color: 'var(--matera-blue)', marginBottom: '20px' }}>
              Reimagining Financial Services—With Embedded USDC
            </h2>
            <p style={{ color: '#555', lineHeight: 1.8 }}>
              The U.S. dollar stablecoin market could surpass $2 trillion by 2028. Consumers expect banks and credit unions to help them safely navigate a growing array of digital assets. With Circle and Matera, financial institutions can offer USDC as a digital asset option in their platforms. By combining the regulated liquidity of Circle with the real-time infrastructure of Digital Twin, banks and credit unions can remain relevant and offer next-generation financial services without overhauling their Core.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section style={{ backgroundColor: '#edeef5', padding: '80px 0' }}>
        <div className="container">
          <h2 style={{ fontSize: 'clamp(1.5rem, 4vw, 2.25rem)', fontWeight: 700, color: 'var(--matera-blue)', marginBottom: '48px', textAlign: 'center' }}>
            Benefits to Financial Institutions:
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
            {[
              { icon: 'https://d2lq74zxbg4jiz.cloudfront.net/icon_c880235e90.webp', text: "Create a path to stablecoin enablement that's fast and secure" },
              { icon: 'https://d2lq74zxbg4jiz.cloudfront.net/icon_1_f7879b469c.webp', text: "Customers never leave the financial institution's ecosystem" },
              { icon: 'https://d2lq74zxbg4jiz.cloudfront.net/icon_2_6ee40ea88b.webp', text: 'Maintain oversight of both traditional and digital assets' },
            ].map((b, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <img src={b.icon} alt="" style={{ width: '80px', height: '80px', objectFit: 'contain', marginBottom: '20px' }} />
                <p style={{ color: '#444', fontWeight: 600, lineHeight: 1.6 }}>{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section style={{ padding: '80px 0' }}>
        <div className="container" style={{ maxWidth: '900px', display: 'flex', gap: '40px', alignItems: 'center' }}>
          <img
            src="https://d2lq74zxbg4jiz.cloudfront.net/carlos_5f23790270.webp"
            alt="Carlos Netto"
            style={{ width: '140px', height: '140px', borderRadius: '50%', objectFit: 'cover', flexShrink: 0 }}
          />
          <div>
            <blockquote style={{
              fontSize: '1.1rem', fontStyle: 'italic', color: '#333', lineHeight: 1.8, marginBottom: '16px',
              borderLeft: '4px solid var(--matera-green)', paddingLeft: '20px',
            }}>
              "We are ushering in a new layer of global banking infrastructure. Interoperability between stablecoins and local currency accounts is no longer a side project—it's now at the heart of the financial system. This is a game-changer for banks and fintechs looking to operate globally with near-instant settlement and low costs."
            </blockquote>
            <p style={{ fontWeight: 600, color: 'var(--matera-blue)' }}>Carlos Netto, CEO, Matera</p>
          </div>
        </div>
      </section>

      {/* Resource Download */}
      <section style={{ backgroundColor: 'var(--matera-blue)', color: 'var(--matera-white)', padding: '80px 0' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
          <div>
            <p style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--matera-green)', marginBottom: '16px', fontWeight: 600 }}>
              Free Resource
            </p>
            <h2 style={{ fontSize: 'clamp(1.5rem, 4vw, 2.25rem)', fontWeight: 700, marginBottom: '12px' }}>
              Protecting Deposits in the Stablecoin Era
            </h2>
            <p style={{ opacity: 0.8, marginBottom: '32px', lineHeight: 1.7 }}>
              A Strategy Playbook for Financial Institutions
            </p>
            <a
              href="https://insight.matera.com/stablecoin-strategy-playbook"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-matera btn-green"
            >
              Get Your Copy
            </a>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <img
              src="https://d2lq74zxbg4jiz.cloudfront.net/Stablecoins_blog_tn_9bb9c98042.webp"
              alt="Stablecoin strategy playbook"
              style={{ maxWidth: '350px', width: '100%', borderRadius: '12px' }}
            />
          </div>
        </div>
      </section>

      {/* Trusted By */}
      <section style={{ backgroundColor: '#edeef5', padding: '60px 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '24px', color: 'var(--matera-blue)' }}>Trusted by:</h3>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', flexWrap: 'wrap' }}>
            <div>
              <span style={{ fontSize: '1.75rem', fontWeight: 700, color: 'var(--matera-purple)' }}>2 of the Top 3</span>
              <p style={{ color: '#666' }}>Global Banks</p>
            </div>
            <div>
              <span style={{ fontSize: '1.75rem', fontWeight: 700, color: 'var(--matera-purple)' }}>3 of the Top 10</span>
              <p style={{ color: '#666' }}>U.S Banks</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Partners */}
      <section style={{ padding: '80px 0' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px' }}>
          <div>
            <img src="https://d2lq74zxbg4jiz.cloudfront.net/matera_logo_1_c5ca02afd0.png" alt="Matera" style={{ height: '40px', marginBottom: '20px' }} />
            <h3 style={{ fontWeight: 700, marginBottom: '12px', color: 'var(--matera-blue)' }}>About Matera</h3>
            <p style={{ color: '#555', lineHeight: 1.7 }}>
              Matera is a pioneer in modern technology powering banks and credit unions with cutting-edge solutions for Core Banking, Instant Payments, and QR Code Payments. Matera is the trusted partner behind some of the world's largest financial institutions.
            </p>
          </div>
          <div>
            <img src="https://d2lq74zxbg4jiz.cloudfront.net/circle_logo_d1a5d8aa71.png" alt="Circle" style={{ height: '40px', marginBottom: '20px' }} />
            <h3 style={{ fontWeight: 700, marginBottom: '12px', color: 'var(--matera-blue)' }}>About Circle</h3>
            <p style={{ color: '#555', lineHeight: 1.7 }}>
              Circle is a global financial technology firm that enables businesses of all sizes to harness the power of digital currencies and public blockchains for payments, commerce, and financial applications worldwide. Circle is building the world's largest, most-widely used, stablecoin network, and issues, through its regulated affiliates, USDC and EURC stablecoins.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: 'var(--matera-purple)', color: 'var(--matera-white)', padding: '80px 0', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '700px' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 700, marginBottom: '20px' }}>
            Get Started with Digital Twin
          </h2>
          <p style={{ opacity: 0.9, marginBottom: '32px', lineHeight: 1.7 }}>
            Power your financial institution with real-time banking capabilities and unmatched resiliency. Contact us today to learn how Digital Twin can transform your financial institution from legacy to legendary.
          </p>
          <Link to="/en/contact-us" className="btn-matera btn-green">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
