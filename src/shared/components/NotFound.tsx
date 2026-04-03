import { Link } from 'react-router-dom';
import PageMeta from './PageMeta';

export default function NotFound() {
  return (
    <>
      <PageMeta title="Page Not Found" description="The page you're looking for doesn't exist." />
      <div style={{
        minHeight: '80vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000023',
        color: 'var(--matera-white)',
        textAlign: 'center',
        padding: '2rem',
      }}>
        <h1 style={{ fontSize: 'clamp(4rem, 10vw, 8rem)', fontWeight: 700, color: 'var(--matera-green)', marginBottom: '16px' }}>
          404
        </h1>
        <p style={{ fontSize: '1.25rem', opacity: 0.7, marginBottom: '32px' }}>
          The page you're looking for doesn't exist.
        </p>
        <div style={{ display: 'flex', gap: '16px' }}>
          <Link to="/en" className="btn-matera btn-green">Go to English site</Link>
          <Link to="/br" className="btn-matera" style={{ border: '1px solid rgba(255,255,255,0.3)', color: 'var(--matera-white)' }}>
            Ir para site BR
          </Link>
        </div>
      </div>
    </>
  );
}
