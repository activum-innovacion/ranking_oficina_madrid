// Hero.jsx — Activum hero section with pattern background
// Fonts: Roboto Serif (headings) + Roboto (body)
const ActivumHero = ({ onNavigate }) => {
  const heroStyles = {
    section: {
      minHeight: '100vh', display: 'flex', alignItems: 'center',
      background: '#1F1D1A',
      backgroundImage: 'url("../../assets/pattern-dark.svg")',
      backgroundSize: 'cover', backgroundPosition: 'center',
      position: 'relative', overflow: 'hidden',
    },
    overlay: {
      position: 'absolute', inset: 0,
      background: 'linear-gradient(135deg, rgba(31,29,26,0.85) 0%, rgba(31,29,26,0.6) 100%)',
    },
    content: {
      position: 'relative', zIndex: 1,
      maxWidth: '720px', padding: '0 48px',
    },
    eyebrow: {
      fontFamily: "'DM Sans', sans-serif", fontSize: '11px',
      fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase',
      color: '#C06078', marginBottom: '24px', display: 'block',
    },
    h1: {
      fontFamily: "'Cormorant Garamond', serif",
      fontSize: 'clamp(48px, 7vw, 88px)', fontWeight: 300,
      letterSpacing: '-0.02em', lineHeight: 1.05,
      color: '#F5F3F2', marginBottom: '28px',
    },
    sub: {
      fontFamily: "'DM Sans', sans-serif", fontSize: '16px',
      fontWeight: 300, lineHeight: 1.7, color: 'rgba(235,227,219,0.75)',
      marginBottom: '44px', maxWidth: '460px',
    },
    btnRow: { display: 'flex', gap: '16px', alignItems: 'center' },
    btnPrimary: {
      fontFamily: "'DM Sans', sans-serif", fontSize: '11px',
      fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase',
      background: '#8E2D44', color: '#F5F3F2',
      padding: '13px 28px', borderRadius: '4px', border: 'none',
      cursor: 'pointer', transition: 'background 200ms',
    },
    btnSecondary: {
      fontFamily: "'DM Sans', sans-serif", fontSize: '11px',
      fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase',
      background: 'transparent', color: 'rgba(245,243,242,0.7)',
      padding: '12px 28px', borderRadius: '4px',
      border: '1px solid rgba(245,243,242,0.25)',
      cursor: 'pointer', transition: 'all 200ms',
    },
    stats: {
      position: 'absolute', bottom: '48px', left: '48px', right: '48px',
      zIndex: 1, display: 'flex', gap: '48px',
      borderTop: '1px solid rgba(245,243,242,0.1)', paddingTop: '32px',
    },
    statNum: {
      fontFamily: "'Cormorant Garamond', serif", fontSize: '36px',
      fontWeight: 300, color: '#F5F3F2', lineHeight: 1,
    },
    statLabel: {
      fontFamily: "'DM Sans', sans-serif", fontSize: '10px',
      letterSpacing: '0.12em', textTransform: 'uppercase',
      color: 'rgba(235,227,219,0.5)', marginTop: '6px',
    },
  };

  return (
    <section style={heroStyles.section}>
      <div style={heroStyles.overlay}></div>
      <div style={heroStyles.content}>
        <span style={heroStyles.eyebrow}>Colección 2026</span>
        <h1 style={heroStyles.h1}>Espacios que<br/>inspiran</h1>
        <p style={heroStyles.sub}>
          Desarrollamos proyectos residenciales y comerciales de alta gama con una visión de permanencia, belleza y excelencia constructiva.
        </p>
        <div style={heroStyles.btnRow}>
          <button style={heroStyles.btnPrimary}
            onMouseEnter={e=>e.target.style.background='#6B1F32'}
            onMouseLeave={e=>e.target.style.background='#8E2D44'}
            onClick={() => onNavigate('proyectos')}>
            Ver proyectos
          </button>
          <button style={heroStyles.btnSecondary}
            onMouseEnter={e=>{e.target.style.borderColor='rgba(245,243,242,0.5)';e.target.style.color='#F5F3F2'}}
            onMouseLeave={e=>{e.target.style.borderColor='rgba(245,243,242,0.25)';e.target.style.color='rgba(245,243,242,0.7)'}}>
            Conocer el estudio
          </button>
        </div>
      </div>
      <div style={heroStyles.stats}>
        {[['18+','Años de experiencia'],['240','Proyectos entregados'],['12','Ciudades'],['98%','Satisfacción']].map(([n,l]) => (
          <div key={l}>
            <div style={heroStyles.statNum}>{n}</div>
            <div style={heroStyles.statLabel}>{l}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

Object.assign(window, { ActivumHero });
