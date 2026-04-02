import React from 'react';

interface PageHeroProps {
  title: string;
  image?: string;
}

const PageHero: React.FC<PageHeroProps> = ({ title, image }) => {
  return (
    <section style={{
      backgroundColor: 'var(--matera-purple)',
      color: 'var(--matera-white)',
      paddingTop: '8rem',
      paddingBottom: image ? '0' : '4rem',
      position: 'relative',
      overflow: 'hidden',
      minHeight: image ? '480px' : 'auto',
    }}>
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <h1 style={{
          fontSize: 'clamp(3rem, 8vw, 6rem)',
          fontWeight: 400,
          color: 'var(--matera-green)',
          lineHeight: 1.1,
          marginBottom: '16px',
        }}>
          {title}
        </h1>
        <hr style={{ border: 'none', borderTop: '2px solid rgba(255,255,255,0.3)', width: '100%', marginTop: '24px' }} />
      </div>
      {image && (
        <img
          src={image}
          alt=""
          style={{
            position: 'absolute',
            right: 0,
            bottom: 0,
            height: '100%',
            width: '60%',
            objectFit: 'cover',
            objectPosition: 'center top',
          }}
        />
      )}
    </section>
  );
};

export default PageHero;
