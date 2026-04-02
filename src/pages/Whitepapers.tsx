import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import PageHero from '../components/PageHero';

const HUBSPOT_PORTAL_ID = '20392958';

interface WhitepaperEntry {
  title: string;
  slug: string;
  date: string;
  description: string;
  thumbnail: string;
  hubspotFormId: string;
  pdfUrl: string;
  file: string;
}

function WhitepaperList() {
  const [items, setItems] = useState<WhitepaperEntry[]>([]);

  useEffect(() => {
    fetch('/data/whitepapers/index.json')
      .then(r => r.json())
      .then(setItems);
  }, []);

  return (
    <>
      <PageHero title="White Papers" />
      <section style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '32px',
          }}>
            {items.map((wp) => (
              <Link
                key={wp.slug}
                to={`/en/whitepapers/${wp.slug}`}
                style={{
                  borderRadius: '12px',
                  overflow: 'hidden',
                  backgroundColor: '#fff',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  display: 'flex',
                  flexDirection: 'column',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.12)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'none';
                  e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.08)';
                }}
              >
                <div style={{ aspectRatio: '16/10', overflow: 'hidden' }}>
                  <img src={wp.thumbnail} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <p style={{ fontSize: '0.8rem', color: '#999', marginBottom: '8px' }}>
                    {new Date(wp.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </p>
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--matera-blue)', marginBottom: '8px', lineHeight: 1.4 }}>
                    {wp.title}
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: '#666', lineHeight: 1.6, flex: 1 }}>{wp.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function WhitepaperDetail() {
  const { slug } = useParams<{ slug: string }>();
  const [wp, setWp] = useState<WhitepaperEntry | null>(null);
  const [loading, setLoading] = useState(true);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [form, setForm] = useState({
    firstname: '',
    lastname: '',
    email: '',
    company: '',
    jobtitle: '',
  });

  useEffect(() => {
    fetch('/data/whitepapers/index.json')
      .then(r => r.json())
      .then((index: WhitepaperEntry[]) => {
        setWp(index.find(e => e.slug === slug) || null);
        setLoading(false);
      });
  }, [slug]);

  if (loading) return <div style={{ minHeight: '60vh', paddingTop: '8rem' }} />;
  if (!wp) return (
    <div style={{ minHeight: '60vh', paddingTop: '8rem', textAlign: 'center' }}>
      <div className="container">
        <h1 style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--matera-blue)', marginBottom: '16px' }}>Not found</h1>
        <Link to="/en/whitepapers" style={{ color: 'var(--matera-purple)', fontWeight: 600 }}>Back to White Papers</Link>
      </div>
    </div>
  );

  // No form if landing page was 404 (no hubspotFormId) — link directly to external
  const hasForm = wp.hubspotFormId && wp.pdfUrl;

  const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};
    if (!form.firstname.trim()) newErrors.firstname = 'First name is required';
    if (!form.lastname.trim()) newErrors.lastname = 'Last name is required';
    if (!form.email.trim()) newErrors.email = 'Email is required';
    else if (!validateEmail(form.email)) newErrors.email = 'Please enter a valid email address';
    if (!form.company.trim()) newErrors.company = 'Company is required';
    if (!form.jobtitle.trim()) newErrors.jobtitle = 'Job title is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    try {
      await fetch(
        `https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${wp.hubspotFormId}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            fields: [
              { name: 'firstname', value: form.firstname },
              { name: 'lastname', value: form.lastname },
              { name: 'email', value: form.email },
              { name: 'company', value: form.company },
              { name: 'jobtitle', value: form.jobtitle },
            ],
            context: {
              pageUri: window.location.href,
              pageName: wp.title,
            },
          }),
        }
      );
      setSubmitted(true);
    } catch {
      // Submit succeeded even if CORS blocks the response
      setSubmitted(true);
    }
    setSubmitting(false);
  };

  const updateField = (field: string, value: string) => {
    setForm(prev => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors(prev => { const n = { ...prev }; delete n[field]; return n; });
  };

  const inputStyle = (field: string): React.CSSProperties => ({
    width: '100%',
    padding: '12px 16px',
    border: errors[field] ? '2px solid #ef4444' : '1px solid #ddd',
    borderRadius: '8px',
    fontSize: '1rem',
    outline: 'none',
    transition: 'border-color 0.2s',
  });

  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontSize: '0.85rem',
    fontWeight: 600,
    marginBottom: '6px',
    color: '#333',
  };

  return (
    <>
      {/* Hero */}
      <section style={{
        backgroundColor: 'var(--matera-purple)',
        color: 'var(--matera-white)',
        paddingTop: '8rem',
        paddingBottom: '60px',
      }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <Link to="/en/whitepapers" style={{ color: 'var(--matera-green)', fontSize: '0.9rem', fontWeight: 600, marginBottom: '24px', display: 'inline-block' }}>
            ← Back to White Papers
          </Link>
          <p style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--matera-green)', marginBottom: '12px', fontWeight: 600 }}>
            Free Resource
          </p>
          <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 700, lineHeight: 1.25, marginBottom: '16px' }}>
            {wp.title}
          </h1>
          <p style={{ opacity: 0.8, lineHeight: 1.7 }}>{wp.description}</p>
        </div>
      </section>

      {/* Content */}
      <section style={{ padding: '60px 0 80px' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: hasForm ? '1fr 1fr' : '1fr',
            gap: '60px',
            alignItems: 'start',
          }}>
            {/* Thumbnail */}
            <div>
              <img src={wp.thumbnail} alt="" style={{ width: '100%', borderRadius: '12px', marginBottom: '24px' }} />
            </div>

            {/* Form or direct link */}
            {hasForm ? (
              <div>
                {submitted ? (
                  <div style={{
                    backgroundColor: '#f0fdf4',
                    borderRadius: '12px',
                    padding: '40px',
                    textAlign: 'center',
                  }}>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--matera-blue)', marginBottom: '16px' }}>
                      Thank you!
                    </h3>
                    <p style={{ color: '#555', marginBottom: '24px' }}>Your whitepaper is ready for download.</p>
                    <a
                      href={wp.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-matera btn-green"
                    >
                      Download PDF
                    </a>
                  </div>
                ) : (
                  <div>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--matera-blue)', marginBottom: '8px' }}>
                      Get your free copy
                    </h3>
                    <p style={{ color: '#666', marginBottom: '24px', fontSize: '0.9rem' }}>
                      Fill out the form below to download the whitepaper.
                    </p>
                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                      <div>
                        <label style={labelStyle}>First name *</label>
                        <input type="text" value={form.firstname} onChange={e => updateField('firstname', e.target.value)} style={inputStyle('firstname')} />
                        {errors.firstname && <p style={{ color: '#ef4444', fontSize: '0.8rem', marginTop: '4px' }}>{errors.firstname}</p>}
                      </div>
                      <div>
                        <label style={labelStyle}>Last name *</label>
                        <input type="text" value={form.lastname} onChange={e => updateField('lastname', e.target.value)} style={inputStyle('lastname')} />
                        {errors.lastname && <p style={{ color: '#ef4444', fontSize: '0.8rem', marginTop: '4px' }}>{errors.lastname}</p>}
                      </div>
                      <div>
                        <label style={labelStyle}>Business email *</label>
                        <input type="email" value={form.email} onChange={e => updateField('email', e.target.value)} style={inputStyle('email')} />
                        {errors.email && <p style={{ color: '#ef4444', fontSize: '0.8rem', marginTop: '4px' }}>{errors.email}</p>}
                      </div>
                      <div>
                        <label style={labelStyle}>Company *</label>
                        <input type="text" value={form.company} onChange={e => updateField('company', e.target.value)} style={inputStyle('company')} />
                        {errors.company && <p style={{ color: '#ef4444', fontSize: '0.8rem', marginTop: '4px' }}>{errors.company}</p>}
                      </div>
                      <div>
                        <label style={labelStyle}>Job title *</label>
                        <input type="text" value={form.jobtitle} onChange={e => updateField('jobtitle', e.target.value)} style={inputStyle('jobtitle')} />
                        {errors.jobtitle && <p style={{ color: '#ef4444', fontSize: '0.8rem', marginTop: '4px' }}>{errors.jobtitle}</p>}
                      </div>
                      {/* Consent checkbox */}
                      <label style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', cursor: 'pointer' }}>
                        <input type="checkbox" style={{ marginTop: '3px', width: '16px', height: '16px', flexShrink: 0 }} />
                        <span style={{ fontSize: '0.8rem', color: '#333' }}>
                          I agree to receive other communications from Matera.
                        </span>
                      </label>

                      {/* Privacy notice */}
                      <div style={{ color: 'var(--matera-purple)', lineHeight: 1.35 }}>
                        <p style={{ fontSize: '0.65rem', lineHeight: 1.35, marginBottom: '6px' }}>
                          You may unsubscribe from these communications at any time.
                          For more information on how to unsubscribe, our privacy practices, and how we are committed to protecting and respecting your privacy, please review our{' '}
                          <Link to="/en/privacy-policy" style={{ color: 'var(--matera-blue)', fontWeight: 600 }}>Privacy Policy</Link>.
                        </p>
                        <p style={{ fontSize: '0.65rem', lineHeight: 1.35 }}>
                          By clicking "submit" below, you consent to allow Matera to store and process the personal information submitted above to provide you the content requested.
                        </p>
                      </div>

                      <button
                        type="submit"
                        disabled={submitting}
                        className="btn-matera btn-green"
                        style={{ alignSelf: 'flex-start', opacity: submitting ? 0.6 : 1 }}
                      >
                        {submitting ? 'Submitting...' : 'Download Whitepaper'}
                      </button>
                    </form>
                  </div>
                )}
              </div>
            ) : (
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <p style={{ color: '#666', textAlign: 'center' }}>
                  This whitepaper is currently unavailable for download. <a href={`https://insight.matera.com/${wp.slug}`} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--matera-purple)', fontWeight: 600 }}>Try the original page</a>.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export { WhitepaperList, WhitepaperDetail };
