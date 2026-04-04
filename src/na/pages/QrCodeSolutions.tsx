// QR Code Solutions page — rebuilt 2026-04-03 from product brief by
// Sarah Hoisington (GM, Matera North America). This was in her backlog
// for 6+ months. Brief delivered to Carlos Netto on 2026-04-03.
import { Link } from 'react-router-dom';
import PageMeta from '../../shared/components/PageMeta';

const useCases = [
  { title: 'Consumer Bill Pay', text: 'Enable customers to pay utilities, rent, or medical bills instantly, reducing paper and processing costs.' },
  { title: 'E-Commerce Checkout', text: 'Secure online transactions by mitigating fraud threats such as screen scraping and keylogging.' },
  { title: 'In-Store Payments', text: 'Empower merchants to accept mobile payments at the point of sale with minimal infrastructure investment.' },
  { title: 'Bank as Biller', text: 'Convert check-based customers to digital channels while acquiring new deposit account relationships.' },
  { title: 'Events & Venues', text: 'Simplify ticketing and concession payments to create a faster, more engaging customer experience.' },
  { title: 'Cash-Intensive Businesses', text: 'Help businesses transition away from cash handling and streamline their reconciliation processes.' },
  { title: 'Fuel & Gas Stations', text: 'Offer pay-at-the-pump convenience with QR codes on screens or receipts, reducing card skimming risks.' },
  { title: 'Freight & Deliveries', text: 'Facilitate instant, secure payment collection upon delivery.' },
  { title: 'Donations & Fundraising', text: 'Provide a frictionless way for organizations to accept contributions digitally and increase donor conversion.' },
];

const howItWorks = [
  { title: 'API-First QR Generation', text: 'Create dynamic payment QR codes in real time, at scale, with seamless integration into existing platforms.' },
  { title: 'Post-Issue Flexibility', text: 'Update amounts, tips, or metadata after issuance — keeping the same QR image while refreshing the underlying payload.' },
  { title: 'Lifecycle Management', text: 'Activate, pause, or expire codes instantly. Built-in validations and idempotency prevent duplicate or unauthorized payments.' },
  { title: 'Trust by Design', text: 'Each code carries a PKI-backed X.509 digital signature, ensuring tamper-evidence and protecting against spoofing.' },
  { title: 'Secure Data Orchestration', text: 'Exchange only the required data fields, with built-in expiration controls and full auditability — compliance and privacy by default.' },
];

const advancedFeatures = [
  { title: 'Rules-Driven Adjustments', text: 'Automatically apply late fees, discounts, or conditional pricing to final settlement amounts.' },
  { title: 'Split-Payment Engine', text: 'Enable shared bills or multi-rail settlements with a single QR code image.' },
  { title: 'Secure Multi-Scan', text: 'Support repeat scanning with dynamically refreshed payloads for recurring or staged payments.' },
  { title: 'Integrated Tipping', text: 'Offer optional tip prompts with configurable presets and limits — ideal for merchants and service industries.' },
  { title: 'Editable Totals', text: 'Allow authorized users to adjust amounts within predefined parameters, balancing flexibility and security.' },
];

export default function QrCodeSolutions() {
  return (
    <>
      <PageMeta
        title="QR Code Payment Solutions"
        description="Modern QR code payment solutions for banks, billers, and merchants. Supports FedNow, RTP, ACH. Secure, scalable, API-first. Built by Matera."
        url="/en/solutions/qr-code-solutions"
      />

      {/* Hero */}
      <section style={{
        backgroundColor: '#000023',
        color: 'var(--matera-white)',
        paddingTop: '8rem',
        paddingBottom: '80px',
      }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: 700, lineHeight: 1.1, marginBottom: '24px' }}>
            QR Codes: Modern Tech for Faster Payments
          </h1>
          <p style={{ fontSize: '1.25rem', opacity: 0.85, lineHeight: 1.7, marginBottom: '40px' }}>
            Let your billers and merchants accept instant payments with one simple QR Code scan.
          </p>
          <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
            {['Scanned from bank mobile app', 'Push payments', 'One-time use', 'Security is fundamental'].map((item, i) => (
              <div key={i} style={{
                padding: '10px 20px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.2)',
                fontSize: '0.9rem', fontWeight: 600,
              }}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Value Prop */}
      <section style={{ padding: '80px 0' }}>
        <div className="container" style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center',
        }}>
          <div>
            <p style={{ color: 'var(--matera-purple)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '12px', fontSize: '0.85rem' }}>
              Payment QR Codes
            </p>
            <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 700, color: 'var(--matera-blue)', marginBottom: '20px', lineHeight: 1.3 }}>
              Smarter Payments. Stronger Connections.
            </h2>
            <p style={{ color: '#555', lineHeight: 1.8, marginBottom: '24px' }}>
              Banks, billers, and merchants need more than just a way to collect payments — they need a faster, safer, and more flexible channel that meets customers wherever they are. Matera's Payment QR Codes solution delivers exactly that: real-time, API-first, and bank-grade secure.
            </p>
            <ul style={{ color: '#555', lineHeight: 2, paddingLeft: '20px', marginBottom: '32px' }}>
              <li><strong>Digitize payments at scale</strong> and reduce reliance on paper or cash</li>
              <li><strong>Cut fraud exposure</strong> with tamper-evident, PKI-backed security</li>
              <li><strong>Increase customer engagement</strong> with flexible, mobile-first experiences</li>
            </ul>
            <p style={{ color: '#555', fontWeight: 600, marginBottom: '24px' }}>
              Seamless to deploy. Secure by design. Built for the future of payments.
            </p>
            <Link to="/en/contact-us" className="btn-matera btn-green">Let's talk →</Link>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <img
              src="/assets/qr-code-use-cases-1.webp"
              alt="Person scanning a QR code to make an instant payment"
              style={{ width: '100%', borderRadius: '16px' }}
            />
          </div>
        </div>
      </section>

      {/* Why QR Codes — 3 columns */}
      <section style={{ backgroundColor: 'var(--matera-blue)', color: 'var(--matera-white)', padding: '80px 0' }}>
        <div className="container">
          <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 700, marginBottom: '48px', textAlign: 'center' }}>
            Why QR Codes are the Next Growth Driver in Payments
          </h2>
          <p style={{ textAlign: 'center', opacity: 0.8, maxWidth: '700px', margin: '0 auto 48px', lineHeight: 1.7 }}>
            QR code payments create value across the ecosystem. Financial institutions gain new revenue streams, businesses cut costs, and consumers enjoy a seamless mobile-first experience. Win, win, win.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
            {[
              { title: 'For Financial Institutions', items: ['Monetize instant payments by driving FedNow® and RTP adoption', 'Grow payment volume and participation in faster payments', 'Boost retention with differentiated digital payment options'] },
              { title: 'For Businesses & Billers', items: ['Lower acceptance costs compared to cards and checks', 'Simplify reconciliation with automated data-rich settlement', 'Ensure finality through irrevocable transactions'] },
              { title: 'For Consumers', items: ['100% mobile-first — no cards, checks, or cash required', 'Always-on convenience for bills or purchases, anytime', 'Better cash flow control with instant settlement'] },
            ].map((col, i) => (
              <div key={i} style={{ padding: '32px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.15)' }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--matera-green)', marginBottom: '20px' }}>{col.title}</h3>
                <ul style={{ paddingLeft: '18px', display: 'flex', flexDirection: 'column', gap: '12px', opacity: 0.85, lineHeight: 1.6 }}>
                  {col.items.map((item, j) => <li key={j}>{item}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Real-World Applications */}
      <section style={{ padding: '80px 0' }}>
        <div className="container">
          <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 700, color: 'var(--matera-blue)', marginBottom: '16px', textAlign: 'center' }}>
            Real-World Payment QR Code Applications
          </h2>
          <p style={{ color: '#555', textAlign: 'center', maxWidth: '700px', margin: '0 auto 48px', lineHeight: 1.7 }}>
            Banks, billers, and merchants can leverage Payment QR Codes across industries to digitize payments, reduce fraud, and expand customer engagement.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
            {useCases.map((uc, i) => (
              <div key={i} style={{ backgroundColor: 'var(--matera-gray)', borderRadius: '12px', padding: '28px', borderLeft: '4px solid var(--matera-green)' }}>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--matera-blue)', marginBottom: '8px' }}>{uc.title}</h3>
                <p style={{ color: '#555', lineHeight: 1.6, fontSize: '0.95rem' }}>{uc.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Finovate Demo */}
      <section style={{ backgroundColor: 'var(--matera-gray)', padding: '80px 0' }}>
        <div className="container" style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center',
        }}>
          <div>
            <img
              src="/assets/finewte-demo-tn.png"
              alt="Matera and Payfinia QR code demo at Finovate"
              style={{ width: '100%', borderRadius: '16px' }}
            />
          </div>
          <div>
            <p style={{ color: 'var(--matera-purple)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '12px', fontSize: '0.85rem' }}>
              See Payment QR Codes in Action
            </p>
            <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 700, color: 'var(--matera-blue)', marginBottom: '16px' }}>
              Matera at Finovate
            </h2>
            <p style={{ color: '#555', lineHeight: 1.8, marginBottom: '24px' }}>
              See how easy it can be to make a FedNow instant payment by scanning a QR Code. Matera partnered with Payfinia at Finovate to showcase how to pay an invoice instantly by scanning a QR Code.
            </p>
            <Link to="/en/blog/matera-qr-payments-finovate" style={{ color: 'var(--matera-purple)', fontWeight: 600 }}>
              Read more →
            </Link>
          </div>
        </div>
      </section>

      {/* The Matera Solution — How It Works */}
      <section style={{ padding: '80px 0' }}>
        <div className="container">
          <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 700, color: 'var(--matera-blue)', marginBottom: '16px', textAlign: 'center' }}>
            The Matera Solution
          </h2>
          <p style={{ color: '#555', textAlign: 'center', maxWidth: '600px', margin: '0 auto 48px', lineHeight: 1.7 }}>
            Built for scale, compliance, and trust — for banks, billers, and merchants who demand reliability and control.
          </p>

          <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--matera-blue)', marginBottom: '24px' }}>How It Works</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginBottom: '48px' }}>
            {howItWorks.map((f, i) => (
              <div key={i} style={{ backgroundColor: 'var(--matera-gray)', borderRadius: '12px', padding: '28px' }}>
                <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--matera-blue)', marginBottom: '8px' }}>{f.title}</h4>
                <p style={{ color: '#555', lineHeight: 1.6, fontSize: '0.95rem' }}>{f.text}</p>
              </div>
            ))}
          </div>

          <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--matera-blue)', marginBottom: '24px' }}>Advanced Tools to Drive Adoption & Efficiency</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {advancedFeatures.map((f, i) => (
              <div key={i} style={{ backgroundColor: 'var(--matera-gray)', borderRadius: '12px', padding: '28px' }}>
                <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--matera-blue)', marginBottom: '8px' }}>{f.title}</h4>
                <p style={{ color: '#555', lineHeight: 1.6, fontSize: '0.95rem' }}>{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* X9 Standard */}
      <section style={{ backgroundColor: 'var(--matera-blue)', color: 'var(--matera-white)', padding: '80px 0' }}>
        <div className="container" style={{ maxWidth: '800px', textAlign: 'center' }}>
          <img src="/assets/accredited-standards-tn.png" alt="X9 Accredited Standards" style={{ height: '60px', marginBottom: '24px' }} />
          <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 700, marginBottom: '20px' }}>
            X9 QR Code Standard — Coming Soon
          </h2>
          <p style={{ opacity: 0.85, lineHeight: 1.8, marginBottom: '32px' }}>
            The X9 workgroup is developing a standard for payment QR Codes in the U.S. Matera chairs the workgroup. This standard will accelerate the adoption of instant payments across the country.
          </p>
          <Link to="/en/blog/x9-qr-code-webinar" style={{
            display: 'inline-flex', alignItems: 'center', gap: '10px',
            padding: '14px 28px', borderRadius: '8px', backgroundColor: 'var(--matera-green)',
            color: '#000', fontWeight: 600, fontSize: '1rem',
          }}>
            Watch the Webinar →
          </Link>
        </div>
      </section>

      {/* Resources */}
      <section style={{ padding: '80px 0', backgroundColor: 'var(--matera-gray)' }}>
        <div className="container">
          <h2 style={{ fontSize: 'clamp(1.5rem, 4vw, 2.25rem)', fontWeight: 700, color: 'var(--matera-blue)', marginBottom: '48px', textAlign: 'center' }}>
            Relevant Resources
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
            {[
              { title: 'QR Codes: Unlocking Instant Payments', type: 'White Paper', href: '/en/whitepapers/qr-codes-unlocking-instant-payments', image: '/assets/qr-codes-unlocking-instant-payments-resource.png' },
              { title: 'Behind the Scan: How PKI Secures QR Code Payments', type: 'Blog', href: '/en/blog/pki-secures-qr-code-payments', image: '/assets/behind-the-scan-blog.jpg' },
              { title: 'How a QR Code Standard Could Revolutionize How We Pay', type: 'Podcast', href: '/en/podcasts/qr-code-payments-standard-revolutionize', image: '/assets/anytime-anywhere-payments-podcast.png' },
            ].map((r, i) => (
              <Link key={i} to={r.href} style={{
                borderRadius: '12px', overflow: 'hidden', backgroundColor: '#fff',
                boxShadow: '0 2px 12px rgba(0,0,0,0.08)', transition: 'transform 0.2s',
              }}
                onMouseEnter={e => (e.currentTarget.style.transform = 'translateY(-4px)')}
                onMouseLeave={e => (e.currentTarget.style.transform = 'none')}
              >
                <div style={{ aspectRatio: '16/10', overflow: 'hidden' }}>
                  <img src={r.image} alt={r.title} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ padding: '20px' }}>
                  <p style={{ fontSize: '0.8rem', color: 'var(--matera-purple)', fontWeight: 600, marginBottom: '8px' }}>{r.type}</p>
                  <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--matera-blue)', lineHeight: 1.4 }}>{r.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{
        backgroundColor: 'var(--matera-purple)',
        color: 'var(--matera-white)',
        padding: '100px 0',
        textAlign: 'center',
      }}>
        <div className="container" style={{ maxWidth: '700px' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 700, marginBottom: '16px' }}>
            Get Started with Matera's QR Code Payments Solution
          </h2>
          <p style={{ opacity: 0.9, marginBottom: '32px', lineHeight: 1.7 }}>
            Deliver a better payments experience for your billers and merchants. Contact us today to learn how Matera can help you get ahead.
          </p>
          <Link to="/en/contact-us" className="btn-matera btn-green">Contact Us →</Link>
        </div>
      </section>
    </>
  );
}
