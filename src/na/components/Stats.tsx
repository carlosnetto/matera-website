import React from 'react';

const stats = [
  { value: '1,100+', label: 'EMPLOYEES' },
  { value: '280+', label: 'CLIENTS' },
  { value: '90+ Million', label: 'DIGITAL ACCOUNTS' },
];

const Stats: React.FC = () => {
  return (
    <section style={{ backgroundColor: 'var(--matera-blue)', color: 'var(--matera-white)', padding: '80px 0' }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '40px',
          textAlign: 'center'
        }}>
          {stats.map((s, i) => (
            <div key={i}>
              <div style={{
                fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                fontWeight: '700',
                color: 'var(--matera-white)',
                marginBottom: '12px',
                letterSpacing: '-1px'
              }}>
                {s.value}
              </div>
              <div style={{
                fontSize: '0.9rem',
                color: 'rgba(255,255,255,0.7)',
                textTransform: 'uppercase',
                letterSpacing: '2px'
              }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
