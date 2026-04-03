import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function DigitalTwin() {
  const [showExplainer, setShowExplainer] = useState(false);
  const [showDemo, setShowDemo] = useState(false);

  return (
    <>
      {/* Hero with background video */}
      <section style={{
        backgroundColor: '#000',
        color: 'var(--matera-white)',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <video
          autoPlay muted loop playsInline
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.4 }}
        >
          <source src="/assets/digital-twin-hero.mp4" type="video/mp4" />
        </video>
        <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '800px', textAlign: 'center', padding: '120px 24px' }}>
          <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: 700, lineHeight: 1.1, marginBottom: '20px' }}>
            Unlock Real-Time Payments. Without Replacing Your Core.
          </h1>
          <p style={{ fontSize: '1.25rem', opacity: 0.85, marginBottom: '40px' }}>
            Power faster payments, including RTP, FedNow, stablecoins, and more.
          </p>
          <button
            onClick={() => setShowExplainer(true)}
            className="btn-matera btn-green"
            style={{ gap: '8px' }}
          >
            Watch a Quick Video Explanation
          </button>
        </div>

        {/* Video modal */}
        {showExplainer && (
          <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.9)', zIndex: 2000, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            onClick={() => setShowExplainer(false)}
          >
            <div style={{ width: '90%', maxWidth: '900px' }} onClick={e => e.stopPropagation()}>
              <video autoPlay controls style={{ width: '100%', borderRadius: '12px' }}>
                <source src="/assets/digital-twin-explainer.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        )}
      </section>

      {/* Trusted By */}
      <section style={{ backgroundColor: '#edeef5', padding: '48px 0' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'center', gap: '60px', flexWrap: 'wrap', alignItems: 'center' }}>
          <span style={{ fontWeight: 600, color: 'var(--matera-blue)' }}>Trusted by:</span>
          <div style={{ textAlign: 'center' }}>
            <span style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--matera-purple)' }}>2/3</span>
            <p style={{ color: '#666', fontSize: '0.9rem' }}>top global banks</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <span style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--matera-purple)' }}>3/10</span>
            <p style={{ color: '#666', fontSize: '0.9rem' }}>top U.S banks</p>
          </div>
        </div>
      </section>

      {/* Digital Twin description */}
      <section style={{ padding: '80px 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <p style={{ color: 'var(--matera-purple)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '12px', fontSize: '0.85rem' }}>
            DIGITAL TWIN
          </p>
          <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 700, color: 'var(--matera-blue)', marginBottom: '24px', lineHeight: 1.3 }}>
            A Real-Time Transaction Ledger for 24x7 Banking — Including Digital Assets
          </h2>
          <p style={{ color: '#555', lineHeight: 1.8, marginBottom: '32px' }}>
            Today's consumers expect instant, always-on banking. But most Core systems still operate on weekday, business-hour cycles. Digital Twin is a lightweight, high-speed ledger that runs alongside your existing Core — authorizing transactions and updating balances in real time, whether the Core is online or not. Combined with our partnership with Circle, banks can now embed USDC stablecoins directly into their mobile banking experience.
          </p>

          {/* Demo video */}
          <div style={{
            position: 'relative', borderRadius: '16px', overflow: 'hidden', cursor: 'pointer', marginBottom: '48px',
          }} onClick={() => setShowDemo(true)}>
            {!showDemo ? (
              <>
                <img src="/assets/play.png" alt="Watch demo" style={{ width: '100%', display: 'block' }} />
                <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0.2)' }}>
                  <div style={{ width: '72px', height: '72px', borderRadius: '50%', backgroundColor: 'var(--matera-green)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg width="24" height="28" viewBox="0 0 24 28" fill="#000"><path d="M0 0L24 14L0 28V0Z" /></svg>
                  </div>
                </div>
              </>
            ) : (
              <video autoPlay controls style={{ width: '100%', display: 'block' }}>
                <source src="/assets/digital-twin-explainer.mp4" type="video/mp4" />
              </video>
            )}
          </div>

          {/* 3 feature icons */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
            {[
              { icon: '/assets/usdc_icon_85321a5880.png', text: 'Bring USDC to your customers without overhauling your Core' },
              { icon: '/assets/icon_2_0b1bf066c1_69636581e0.png', text: 'Create better experiences for your customers' },
              { icon: '/assets/icon_5522aa6188_435d396f64.png', text: 'Save money (NO charge per transaction or API call)' },
            ].map((f, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <img src={f.icon} alt={f.text} style={{ width: '64px', height: '64px', objectFit: 'contain', marginBottom: '16px' }} />
                <p style={{ color: '#444', fontWeight: 600, fontSize: '0.95rem', lineHeight: 1.6 }}>{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section style={{ padding: '80px 0', backgroundImage: 'url(/assets/layer-1-1.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 700, color: 'var(--matera-blue)', marginBottom: '48px', textAlign: 'center' }}>
            Built for today's real-time needs. Ready to power what's next.
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            {[
              { title: 'Instant Payments for 24x7 Banking', text: 'Authorize transactions and update balances in real time without being limited by Core downtimes.' },
              { title: 'USDC for Financial Institutions', text: 'Embed stablecoin into your mobile app to let customers send, receive, and pay with USDC around the world.' },
              { title: 'Resilience During Outages', text: 'Customers continue transacting even when your Core is offline for maintenance or unexpected outages.' },
              { title: 'Banking-as-a-Service (BaaS)', text: 'Host fintech and FBO accounts with real-time balance visibility for easy reconciliation.' },
              { title: 'M&A & Core Upgrades', text: 'Confidently merge from two Cores to one or replace one Core for another. Customers can keep transacting even during cutover weekends.' },
              { title: 'Future-Ready for Innovation', text: 'Support Open Banking and AI applications to fuel ongoing transformation.' },
            ].map((c, i) => (
              <div key={i} style={{ backgroundColor: '#fff', borderRadius: '12px', padding: '32px', borderLeft: '4px solid var(--matera-green)' }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--matera-blue)', marginBottom: '12px' }}>{c.title}</h3>
                <p style={{ color: '#555', lineHeight: 1.7 }}>{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brochure CTA */}
      <section style={{ backgroundColor: 'var(--matera-purple)', color: 'var(--matera-white)', padding: '60px 0', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: 'clamp(1.5rem, 4vw, 2.25rem)', fontWeight: 700, marginBottom: '20px' }}>Get to know Digital Twin</h2>
          <a href="https://insight.matera.com/hubfs/AA%20US%20Collateral/Matera%20DTW%20Solution.pdf" target="_blank" rel="noopener noreferrer" className="btn-matera btn-green">
            Download the Brochure
          </a>
        </div>
      </section>

      {/* Proven Performance */}
      <section style={{ backgroundColor: '#edeef5', padding: '80px 0' }}>
        <div className="container" style={{ maxWidth: '900px', textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 700, color: 'var(--matera-blue)', marginBottom: '8px' }}>Proven Performance</h2>
          <p style={{ color: '#666', marginBottom: '8px' }}>As tested by Microsoft &amp; Avanade</p>
          <a href="https://insight.matera.com/hubfs/AA%20US%20Collateral/Digital%20Twin%20Matera%20and%20Microsoft.pdf" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--matera-purple)', fontWeight: 600, fontSize: '0.9rem' }}>
            Read the case study →
          </a>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', marginTop: '48px' }}>
            <div style={{ backgroundColor: '#fff', borderRadius: '12px', padding: '40px' }}>
              <div style={{ fontSize: '1.1rem', fontWeight: 600, color: '#666', marginBottom: '8px' }}>Large Number of Accounts</div>
              <div style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, color: 'var(--matera-blue)' }}>Over 12,000 tps</div>
              <p style={{ color: '#666' }}>across 145 million accounts</p>
            </div>
            <div style={{ backgroundColor: '#fff', borderRadius: '12px', padding: '40px' }}>
              <div style={{ fontSize: '1.1rem', fontWeight: 600, color: '#666', marginBottom: '8px' }}>High Volume Merchants</div>
              <div style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, color: 'var(--matera-blue)' }}>Over 3,000 tps</div>
              <p style={{ color: '#666' }}>in a single account</p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section style={{ padding: '80px 0' }}>
        <div className="container">
          <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 700, color: 'var(--matera-blue)', marginBottom: '12px' }}>Key Features</h2>
          <p style={{ color: '#555', marginBottom: '48px', maxWidth: '700px' }}>
            Matera's Digital Twin is deployed in the cloud, allowing financial institutions to scale up or down based on demand.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '32px' }}>
            {[
              { icon: '/assets/icon_3_e60c0b7ee9_8205b1d4a5.png', title: 'Hosts many account types', text: '(Stablecoins, DDA, Savings, Credit Card, Loyalty Points, Crypto, etc.)' },
              { icon: '/assets/icon_549dec2b14_8a1bca81d5.png', title: 'Multi-currency, Multi-decimal point, Multi-time zone', text: '' },
              { icon: '/assets/icon_2_cd30bec03c_e8bcdb4822.png', title: 'Every transaction is immutable', text: 'to provide perfect journaling' },
              { icon: '/assets/icon_1_33f99ecec1_d2b9809062.png', title: 'Cloud & database agnostic', text: '' },
            ].map((f, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <img src={f.icon} alt="" style={{ width: '64px', height: '64px', objectFit: 'contain', marginBottom: '16px' }} />
                <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--matera-blue)', marginBottom: '8px' }}>{f.title}</h3>
                {f.text && <p style={{ color: '#666', fontSize: '0.9rem' }}>{f.text}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section style={{ backgroundColor: '#edeef5', padding: '80px 0' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
          <div>
            <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 700, color: 'var(--matera-blue)', marginBottom: '20px' }}>
              How Matera's Digital Twin Works
            </h2>
            <p style={{ color: '#555', lineHeight: 1.8, marginBottom: '20px' }}>
              Digital Twin is deployed in the cloud, adjacent to a bank's Core. Select account balances are replicated to Digital Twin. When account holders want to send or receive money:
            </p>
            <ul style={{ color: '#555', lineHeight: 1.8, paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <li>Digital Twin authorizes transactions in real-time</li>
              <li>Balances updated immediately in digital channels</li>
              <li>Core credits/debits accounts in system of record</li>
            </ul>
          </div>
          <div style={{ borderRadius: '16px', overflow: 'hidden' }}>
            <video autoPlay muted loop playsInline style={{ width: '100%', display: 'block' }}>
              <source src="/assets/digital-twin-animation.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      {/* Real-Time Experiences */}
      <section style={{ padding: '80px 0' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 700, color: 'var(--matera-blue)', marginBottom: '32px' }}>
            Digital Twin Enables Real-Time Digital Experiences
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {[
              'No Core replacement needed',
              "Cloud-based solution that doesn't consume unnecessary resources",
              'Relieves the Core of critical functions',
              'Extremely high throughput and response times while maintaining resiliency',
            ].map((item, i) => (
              <div key={i} style={{
                backgroundColor: 'var(--matera-black)',
                color: 'var(--matera-white)',
                padding: '20px 24px',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
              }}>
                <img src="/assets/check.png" alt="" style={{ width: '24px', height: '24px' }} />
                <span style={{ fontWeight: 600 }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Integration */}
      <section style={{ backgroundColor: 'var(--matera-black)', color: 'var(--matera-white)', padding: '80px 0' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
          <div>
            <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 700, marginBottom: '20px' }}>Core Integration</h2>
            <p style={{ opacity: 0.8, lineHeight: 1.8 }}>
              Integrating Digital Twin with the Core involves just four key connections, delivering eventual consistency without the risk of double spending.
            </p>
          </div>
          <div style={{ borderRadius: '16px', overflow: 'hidden' }}>
            <video autoPlay muted loop playsInline style={{ width: '100%', display: 'block' }}>
              <source src="/assets/core-integration-animation.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      {/* Technical Resources */}
      <section style={{ padding: '80px 0' }}>
        <div className="container">
          <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 700, color: 'var(--matera-blue)', marginBottom: '48px' }}>Technical Resources</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
            {[
              { label: 'Technical Deep Dive', title: 'Event-driven architecture in payments: Lessons from scaling Digital Twin', href: 'https://insight.matera.com/hubfs/US%20Tech%20Resources/matera-architecture-in-payments-digital-twin.pdf' },
              { label: 'Tech & Architecture', title: 'Modern Technology of Digital Twin', href: 'https://insight.matera.com/hubfs/US%20Tech%20Resources/matera-modern-technology-digital-twin.pdf' },
              { label: 'General Concepts', title: 'Using Digital Twin to Complement a Financial Institution\'s Core', href: 'https://insight.matera.com/hubfs/US%20Tech%20Resources/matera-digital-twin-general%20concepts.pdf' },
            ].map((r, i) => (
              <a key={i} href={r.href} target="_blank" rel="noopener noreferrer" style={{
                backgroundColor: 'var(--matera-gray)',
                borderRadius: '12px',
                padding: '32px',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                transition: 'transform 0.2s',
              }}
                onMouseEnter={e => (e.currentTarget.style.transform = 'translateY(-4px)')}
                onMouseLeave={e => (e.currentTarget.style.transform = 'none')}
              >
                <img src="/assets/icon-1.png" alt="" style={{ width: '48px', height: '48px' }} />
                <p style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--matera-purple)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{r.label}</p>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--matera-blue)', lineHeight: 1.4 }}>{r.title}</h3>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{ backgroundColor: 'var(--matera-purple)', color: 'var(--matera-white)', padding: '80px 0', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '700px' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 700, marginBottom: '16px' }}>Get Started with Digital Twin</h2>
          <p style={{ opacity: 0.9, marginBottom: '32px', lineHeight: 1.7 }}>
            Power your financial institution with real-time banking capabilities and unmatched resiliency. Contact us today to learn how Digital Twin can transform your financial institution from legacy to legendary.
          </p>
          <Link to="/en/contact-us" className="btn-matera btn-green">Contact Us</Link>
        </div>
      </section>
    </>
  );
}
