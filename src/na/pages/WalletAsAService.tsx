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
            Powering payment functionality of mobile wallets. Out-of-the-box APIs to add payment methods, load prepaid cards, QR code payments, loyalty and more.
          </p>
        </div>
      </section>

      {/* Value Prop */}
      <section style={{ padding: '80px 0' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 700, color: 'var(--matera-blue)', marginBottom: '24px', lineHeight: 1.3 }}>
            Turn your mobile app into the everyday spend experience customers rely on
          </h2>
          <p style={{ color: '#555', lineHeight: 1.8, marginBottom: '40px' }}>
            Matera's Wallet as a Service provides a complete set of APIs that let financial institutions, fintechs, and retailers embed payment functionality directly into their mobile apps — without building and maintaining the underlying infrastructure. Launch faster, iterate quickly, and focus on your customer experience while Matera handles the payments plumbing.
          </p>
        </div>
      </section>

      {/* Capabilities */}
      <section style={{ padding: '80px 0', backgroundColor: 'var(--matera-gray)' }}>
        <div className="container">
          <h2 style={{ fontSize: 'clamp(1.5rem, 4vw, 2.25rem)', fontWeight: 700, color: 'var(--matera-blue)', marginBottom: '48px', textAlign: 'center' }}>
            What you can build
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}>
            {[
              { title: 'QR Code Payments', text: 'Merchant-present and consumer-present modes, online and offline. Compatible with the X9.150 standard and all major payment rails.' },
              { title: 'Prepaid Card Loading', text: 'Let users load and manage prepaid cards directly from your app. Real-time balance updates and transaction history.' },
              { title: 'P2P Transfers', text: 'Enable instant person-to-person transfers within your ecosystem or across connected networks.' },
              { title: 'Bill Payments', text: 'Allow customers to pay bills, utilities, and invoices from the wallet with one-tap convenience.' },
              { title: 'Loyalty & Rewards', text: 'Track loyalty points, enable redemptions, and integrate reward programs into the payment flow.' },
              { title: 'In-App Promotions', text: 'Deliver targeted offers and promotions at the point of payment to drive engagement and revenue.' },
            ].map((c, i) => (
              <div key={i} style={{ backgroundColor: '#fff', borderRadius: '12px', padding: '32px', borderLeft: '4px solid var(--matera-green)' }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--matera-blue)', marginBottom: '12px' }}>{c.title}</h3>
                <p style={{ color: '#555', lineHeight: 1.7 }}>{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Matera */}
      <section style={{ padding: '80px 0' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 style={{ fontSize: 'clamp(1.5rem, 4vw, 2.25rem)', fontWeight: 700, color: 'var(--matera-blue)', marginBottom: '32px' }}>
            Why build your wallet with Matera
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {[
              { title: 'API-first architecture', text: 'RESTful APIs with comprehensive documentation. Integrate in days, not months.' },
              { title: 'Proven at scale', text: 'The same infrastructure that powers 7.2B+ Pix transactions per year and serves 90M+ accounts.' },
              { title: 'Multi-rail support', text: 'FedNow, RTP, ACH, push-to-card, QR codes — one integration, multiple payment methods.' },
              { title: 'Compliance built in', text: 'KYC, AML, and regulatory reporting handled within the platform, reducing your compliance burden.' },
            ].map((item, i) => (
              <div key={i} style={{ padding: '24px', borderRadius: '12px', backgroundColor: 'var(--matera-gray)' }}>
                <h3 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--matera-blue)', marginBottom: '8px' }}>{item.title}</h3>
                <p style={{ color: '#555', lineHeight: 1.7 }}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section style={{ padding: '80px 0', backgroundColor: 'var(--matera-blue)', color: 'var(--matera-white)' }}>
        <div className="container">
          <h2 style={{ fontSize: 'clamp(1.5rem, 4vw, 2.25rem)', fontWeight: 700, marginBottom: '48px', textAlign: 'center' }}>
            Who it's for
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
            {[
              { title: 'Banks & Credit Unions', text: 'Add modern payment features to your mobile banking app without overhauling your core.' },
              { title: 'Fintechs', text: 'Launch a fully functional wallet faster with proven infrastructure and compliance built in.' },
              { title: 'Retailers & Merchants', text: 'Create branded payment experiences that drive customer loyalty and reduce interchange costs.' },
            ].map((uc, i) => (
              <div key={i} style={{ padding: '32px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.15)' }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--matera-green)', marginBottom: '12px' }}>{uc.title}</h3>
                <p style={{ opacity: 0.8, lineHeight: 1.7 }}>{uc.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
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
            Talk to a Matera expert to see how Wallet as a Service can accelerate your payments strategy.
          </p>
          <Link to="/en/contact-us" className="btn-matera btn-green">Contact us</Link>
        </div>
      </section>
    </>
  );
}
