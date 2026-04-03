import { Link } from 'react-router-dom';
import PageMeta from '../../shared/components/PageMeta';

export default function WalletAsAService() {
  return (
    <>
      <PageMeta title="Wallet as a Service" description="Mobile wallet APIs for payments, prepaid cards, QR codes, loyalty and more. Power your wallet with Matera's proven infrastructure." url="/en/solutions/wallet-as-a-service" />
      {/* Hero */}
      <section style={{
        backgroundColor: 'var(--matera-purple)',
        color: 'var(--matera-white)',
        paddingTop: '8rem',
        paddingBottom: '80px',
      }}>
        <div className="container" style={{ maxWidth: '700px' }}>
          <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: 700, lineHeight: 1.1, marginBottom: '24px' }}>
            Wallet as a Service
          </h1>
          <p style={{ fontSize: '1.15rem', opacity: 0.9, lineHeight: 1.7 }}>
            Powering payment functionality of mobile wallets. Out-of-the box APIs to add payment methods, load pre-paid cards, QR code payments, loyalty and more.
          </p>
        </div>
      </section>

      {/* Features */}
      <section style={{ padding: '80px 0' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 700, color: 'var(--matera-blue)', marginBottom: '32px', lineHeight: 1.3 }}>
            Turn your mobile app into an engaging app consumers rely upon for everyday spend
          </h2>
          <ul style={{ color: '#555', lineHeight: 1.8, paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <li><strong>QR Code Payments</strong> (merchant present and consumer present modes; online &amp; offline)</li>
            <li><strong>Loyalty Point Tracking/Redemption</strong></li>
            <li><strong>Supporting In-App Promotions &amp; Offers</strong></li>
          </ul>
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
