import { Link } from 'react-router-dom';
import PageMeta from '../../shared/components/PageMeta';

export default function QrCodeSolutions() {
  return (
    <>
      <PageMeta title="QR Code Payment Solutions" description="End-to-end QR code payment solutions for financial institutions. Supports FedNow, RTP, ACH, and push-to-card. Proven at scale." url="/en/solutions/qr-code-solutions" />
      {/* Hero */}
      <section style={{
        backgroundColor: 'var(--matera-purple)',
        color: 'var(--matera-white)',
        paddingTop: '8rem',
        paddingBottom: '80px',
        position: 'relative',
        overflow: 'hidden',
        minHeight: '480px',
      }}>
        <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '700px' }}>
          <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: 700, lineHeight: 1.1, marginBottom: '24px' }}>
            QR Code Solutions
          </h1>
          <p style={{ fontSize: '1.15rem', opacity: 0.9, lineHeight: 1.7 }}>
            Facilitate end-to-end mobile payments. Proven software processing millions of QR code payments per month and built to scale. Powered by <Link to="/en/solutions/digital-twin" style={{ color: 'var(--matera-green)', fontWeight: 600 }}>Matera Digital Twin</Link> for real-time authorization.
          </p>
        </div>
      </section>

      {/* Pioneer Section */}
      <section style={{ padding: '80px 0' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <p style={{ color: 'var(--matera-purple)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '12px', fontSize: '0.85rem' }}>
            QR Code Payments
          </p>
          <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 700, color: 'var(--matera-blue)', marginBottom: '32px' }}>
            A pioneer in QR code payments
          </h2>
          <ul style={{ color: '#555', lineHeight: 1.8, paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <li>Launched QR code payments in 2016</li>
            <li>Static and dynamic offerings</li>
            <li>Merchant and consumer present modes</li>
          </ul>
        </div>
      </section>

      {/* Mobile Experience */}
      <section style={{ backgroundColor: 'var(--matera-gray)', padding: '80px 0' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 700, color: 'var(--matera-blue)', marginBottom: '12px' }}>
            100% mobile payment experience
          </h2>
          <p style={{ color: '#555', marginBottom: '24px' }}>All that's needed is a mobile phone</p>
          <ul style={{ color: '#555', lineHeight: 1.8, paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <li>To pay at POS</li>
            <li>To pay utility bills</li>
            <li>To pay online</li>
          </ul>
        </div>
      </section>

      {/* Advanced Features */}
      <section style={{ padding: '80px 0' }}>
        <div className="container">
          <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 700, color: 'var(--matera-blue)', marginBottom: '48px', textAlign: 'center' }}>
            Matera's QR code payment software is the most advanced on the market
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '32px' }}>
            {[
              'Architected for speed, scale, and batch',
              'Data included in QR code is customizable',
              'Auto-calculates fees and fines',
              'Generates both static and dynamic QR codes',
              'QR Codes for payment due immediately or in the future',
            ].map((f, i) => (
              <div key={i} style={{
                backgroundColor: 'var(--matera-gray)',
                borderRadius: '12px',
                padding: '32px',
                borderLeft: '4px solid var(--matera-green)',
              }}>
                <p style={{ color: 'var(--matera-blue)', fontWeight: 600, lineHeight: 1.6 }}>{f}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why QR Code */}
      <section style={{ backgroundColor: 'var(--matera-gray)', padding: '80px 0' }}>
        <div className="container">
          <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 700, color: 'var(--matera-blue)', marginBottom: '48px', textAlign: 'center' }}>
            Why QR code payments?
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
            {[
              { title: 'Easy reconciliation', text: 'Simplify payment tracking and accounting with automatic reconciliation.' },
              { title: 'Lower processing costs', text: 'Reduce transaction costs compared to traditional card-based payments.' },
              { title: 'Account acquisition', text: 'Drive new customer acquisition through modern, mobile-first payment experiences.' },
            ].map((c, i) => (
              <div key={i} style={{ backgroundColor: '#fff', borderRadius: '12px', padding: '32px', textAlign: 'center' }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--matera-blue)', marginBottom: '12px' }}>{c.title}</h3>
                <p style={{ color: '#555', lineHeight: 1.7 }}>{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section style={{
        backgroundColor: 'var(--matera-purple)',
        color: 'var(--matera-white)',
        padding: '100px 0',
        textAlign: 'center',
      }}>
        <div className="container" style={{ maxWidth: '700px' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 700, marginBottom: '16px' }}>
            Let's build the future together
          </h2>
          <p style={{ opacity: 0.9, marginBottom: '32px', lineHeight: 1.7 }}>
            Talk to a Matera expert to see how Matera can help you thrive in the future. Today.
          </p>
          <Link to="/en/contact-us" className="btn-matera btn-green">Contact us</Link>
        </div>
      </section>
    </>
  );
}
