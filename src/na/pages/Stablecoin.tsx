import { useState } from 'react';
import { Link } from 'react-router-dom';
import PageMeta from '../../shared/components/PageMeta';

export default function Stablecoin() {
  const [playing, setPlaying] = useState(false);

  return (
    <>
      <PageMeta
        title="Digital Twin for Stablecoins"
        description="Connect stablecoins with traditional financial services. Matera and Circle enable USDC within mobile and online banking — no core replacement needed."
        url="/en/stablecoin"
        videos={[
          {
            name: "USDC Stablecoin Transaction Process",
            description: "See how customers can convert USD to USDC and send it directly from their mobile banking app.",
            thumbnailUrl: "/assets/stablecoin-video-tn.png",
            uploadDate: "2024-01-20",
            contentUrl: "/assets/stablecoin-transaction-process.mp4"
          }
        ]}
      />
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
              Learn how Circle and Matera can make it easy to offer stablecoins within your mobile and online banking platforms. Our solution provides a bridge between legacy core systems and the future of digital finance.
            </p>
            <Link to="/en/contact-us" className="btn-matera btn-green">
              Request a Conversation
            </Link>
          </div>
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <img
              src="/assets/hero-photo.webp"
              alt="Matera and Circle partnership for USDC stablecoin integration"
              style={{ width: '100%', maxWidth: '500px', borderRadius: '16px', objectFit: 'cover' }}
            />
          </div>
        </div>
      </section>

      {/* Video Demo */}
      <section style={{ padding: '80px 0', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: 'clamp(1.5rem, 4vw, 2.25rem)', fontWeight: 700, color: 'var(--matera-blue)', marginBottom: '12px' }}>
            Convert USD to USDC or send USDC from within your mobile banking app
          </h2>
          <p style={{ color: '#666', marginBottom: '32px' }}>Press play to see the seamless transaction process in action</p>
          <div style={{ position: 'relative', borderRadius: '16px', overflow: 'hidden', cursor: 'pointer' }}
            onClick={() => setPlaying(true)}
          >
            {!playing ? (
              <>
                <img
                  src="/assets/stablecoin-video-tn.png"
                  alt="Stablecoin transaction demo video thumbnail"
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
                <source src="/assets/stablecoin-transaction-process.mp4" type="video/mp4" />
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
              src="/assets/matera-circle-dtw-graphic.png"
              alt="Architectural diagram of Matera Digital Twin and Circle integration for USDC"
              style={{ width: '100%' }}
            />
          </div>
          <div>
            <h2 style={{ fontSize: 'clamp(1.5rem, 4vw, 2.25rem)', fontWeight: 700, color: 'var(--matera-blue)', marginBottom: '20px' }}>
              Reimagining Financial Services—With Embedded USDC
            </h2>
            <p style={{ color: '#555', lineHeight: 1.8 }}>
              The U.S. dollar stablecoin market is rapidly expanding, with projections suggesting it could surpass $2 trillion by 2028. Consumers expect their trusted financial institutions—banks and credit unions—to help them safely navigate this growing array of digital assets. With Circle and Matera, financial institutions can offer USDC as a digital asset option directly in their existing platforms. By combining the regulated liquidity of Circle with the real-time infrastructure of <Link to="/en/solutions/digital-twin" style={{ color: 'var(--matera-purple)', fontWeight: 600 }}>Matera's Digital Twin</Link>, banks and credit unions can remain relevant and offer next-generation financial services without the need for a costly and risky overhauling of their Core systems.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section style={{ backgroundColor: '#edeef5', padding: '80px 0' }}>
        <div className="container">
          <h2 style={{ fontSize: 'clamp(1.5rem, 4vw, 2.25rem)', fontWeight: 700, color: 'var(--matera-blue)', marginBottom: '48px', textAlign: 'center' }}>
            Benefits to Financial Institutions
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
            {[
              { 
                icon: '/assets/icon_c880235e90.webp', 
                title: "Fast & Secure Enablement",
                text: "Create a path to stablecoin enablement that is both fast and secure, leveraging proven infrastructure used by top global banks." 
              },
              { 
                icon: '/assets/icon_1_f7879b469c.webp', 
                title: "Retention & Ecosystem",
                text: "Keep your customers within your financial institution's ecosystem. Prevent deposit flight to external crypto exchanges by offering native digital asset support." 
              },
              { 
                icon: '/assets/icon_2_6ee40ea88b.webp', 
                title: "Comprehensive Oversight",
                text: "Maintain full oversight of both traditional and digital assets. Our solution ensures regulatory compliance and clear visibility across all account types." 
              },
            ].map((b, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <img src={b.icon} alt={b.title} style={{ width: '80px', height: '80px', objectFit: 'contain', marginBottom: '20px' }} />
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--matera-blue)', marginBottom: '12px' }}>{b.title}</h3>
                <p style={{ color: '#444', lineHeight: 1.6 }}>{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="testimonial-section" style={{ padding: '80px 0' }}>
        <div className="container testimonial-container" style={{ maxWidth: '900px', display: 'flex', gap: '40px', alignItems: 'center' }}>
          <img
            src="/assets/carlos.webp"
            alt="Carlos Netto, CEO of Matera"
            className="testimonial-photo"
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
              A Strategy Playbook for Financial Institutions. Learn how to stay ahead of digital asset trends while maintaining your core deposit base.
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
              src="/assets/stablecoins-blog-tn.webp"
              alt="Download the Stablecoin Strategy Playbook for Financial Institutions"
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
            <img src="/assets/matera-logo-1.png" alt="Matera logo" style={{ height: '40px', marginBottom: '20px' }} />
            <h3 style={{ fontWeight: 700, marginBottom: '12px', color: 'var(--matera-blue)' }}>About Matera</h3>
            <p style={{ color: '#555', lineHeight: 1.7 }}>
              Matera is a pioneer in modern technology powering banks and credit unions with cutting-edge solutions for Core Banking, Instant Payments, and QR Code Payments. Matera is the trusted partner behind some of the world's largest financial institutions.
            </p>
          </div>
          <div>
            <img src="/assets/circle-logo.png" alt="Circle logo" style={{ height: '40px', marginBottom: '20px' }} />
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
