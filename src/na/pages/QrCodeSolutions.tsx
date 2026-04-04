// QR Code Solutions page — rebuilt 2026-04-03 from product brief by
// Sarah Hoisington (GM, Matera North America). This was in her backlog
// for 6+ months. Brief delivered to Carlos Netto on 2026-04-03.
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageMeta from '../../shared/components/PageMeta';

interface TaggedResource {
  title: string;
  slug: string;
  date: string;
  thumbnail: string;
  tags?: string[];
  spotifyUrl?: string;
  applePodcastsUrl?: string;
  contentType: 'Blog' | 'White Paper' | 'Podcast';
}

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

const SpotifyIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="#1DB954"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/></svg>
);

const AppleIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="#A855F7"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
);

export default function QrCodeSolutions() {
  const [resources, setResources] = useState<TaggedResource[]>([]);

  useEffect(() => {
    const prefixes: { path: string; type: TaggedResource['contentType'] }[] = [
      { path: '/data/en/blog/index.json', type: 'Blog' },
      { path: '/data/en/whitepapers/index.json', type: 'White Paper' },
      { path: '/data/en/podcasts/index.json', type: 'Podcast' },
    ];
    Promise.all(prefixes.map(p =>
      fetch(p.path).then(r => r.json()).then((items: any[]) =>
        items
          .filter(item => item.tags?.includes('qr-code'))
          .map(item => ({ ...item, contentType: p.type }))
      )
    )).then(results => {
      const all = results.flat().sort((a, b) => b.date.localeCompare(a.date));
      setResources(all);
    });
  }, []);

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
          <div style={{ display: 'flex', justifyContent: 'center', paddingLeft: '24px' }}>
            <img
              src="/assets/qr-code-hero-illustration.png"
              alt="Isometric illustration of QR code payment ecosystem with phones scanning codes"
              style={{ width: '100%', maxWidth: '520px', borderRadius: '16px', objectFit: 'contain' }}
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
            {resources.map((r, i) => {
              const routePrefix = r.contentType === 'Blog' ? '/en/blog/' : r.contentType === 'White Paper' ? '/en/whitepapers/' : '/en/podcasts/';
              return (
                <div key={i} style={{
                  borderRadius: '12px', overflow: 'hidden', backgroundColor: '#fff',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.08)', transition: 'transform 0.2s',
                  display: 'flex', flexDirection: 'column',
                }}
                  onMouseEnter={e => (e.currentTarget.style.transform = 'translateY(-4px)')}
                  onMouseLeave={e => (e.currentTarget.style.transform = 'none')}
                >
                  <Link to={`${routePrefix}${r.slug}`}>
                    <div style={{ aspectRatio: '16/10', overflow: 'hidden' }}>
                      <img src={r.thumbnail} alt={r.title} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                  </Link>
                  <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <p style={{ fontSize: '0.8rem', color: 'var(--matera-purple)', fontWeight: 600, marginBottom: '8px' }}>{r.contentType}</p>
                    <Link to={`${routePrefix}${r.slug}`} style={{ textDecoration: 'none' }}>
                      <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--matera-blue)', lineHeight: 1.4, marginBottom: r.contentType === 'Podcast' ? '12px' : '0' }}>{r.title}</h3>
                    </Link>
                    {r.contentType === 'Podcast' && (r.spotifyUrl || r.applePodcastsUrl) && (
                      <div style={{ display: 'flex', gap: '8px', marginTop: 'auto', paddingTop: '8px' }}>
                        {r.spotifyUrl && (
                          <a href={r.spotifyUrl} target="_blank" rel="noopener noreferrer"
                            style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', fontSize: '0.75rem', color: '#1DB954', fontWeight: 600 }}>
                            <SpotifyIcon /> Spotify
                          </a>
                        )}
                        {r.applePodcastsUrl && (
                          <a href={r.applePodcastsUrl} target="_blank" rel="noopener noreferrer"
                            style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', fontSize: '0.75rem', color: '#A855F7', fontWeight: 600 }}>
                            <AppleIcon /> Apple
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
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
