import React from 'react';

const Hero: React.FC = () => {
  return (
    <section style={{
      backgroundColor: '#000023',
      color: 'var(--matera-white)',
      position: 'relative',
      overflow: 'hidden',
      borderBottom: '2px solid #151557',
      paddingTop: '60px',
      paddingBottom: '60px',
    }}>
      <div className="container hero-layout" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '4rem',
        paddingTop: '83px',
        paddingBottom: '123px',
      }}>
        {/* Left: Text */}
        <div style={{ flex: 1 }}>
          <h1 className="hero-heading" style={{
            fontWeight: 700,
            marginBottom: '28px',
            color: 'var(--matera-white)',
          }}>
            Modern Banking Meets Digital Currency
          </h1>
          <p style={{
            marginBottom: '44px',
            color: 'rgba(255,255,255,0.8)',
            maxWidth: '480px',
            fontSize: '1.125rem',
            lineHeight: '1.75rem',
          }}>
            Next-gen technology for 24x7 banking - powering stablecoin, faster payments and beyond
          </p>
          <a href="/en/contact-us" className="btn-matera btn-green" style={{ gap: '10px' }}>
            Get Started <span>→</span>
          </a>
        </div>

        {/* Right: Video — hidden on mobile via CSS */}
        <div className="hero-video" style={{
          width: '100%',
          maxWidth: '470px',
          display: 'flex',
          justifyContent: 'flex-end',
          flexShrink: 0,
        }}>
          <video
            autoPlay
            muted
            loop
            playsInline
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
            }}
          >
            <source src="/assets/matera-hero-animation.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
};

export default Hero;
