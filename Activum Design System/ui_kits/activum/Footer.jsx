// Footer.jsx — Activum site footer
const ActivumFooter = () => {
  const footerStyles = {
    footer: {
      background: '#1F1D1A',
      backgroundImage: 'url("../../assets/pattern-dark.svg")',
      backgroundSize: 'cover', backgroundPosition: 'center top',
      position: 'relative', overflow: 'hidden',
    },
    overlay: { position: 'absolute', inset: 0, background: 'rgba(31,29,26,0.88)' },
    inner: { position: 'relative', zIndex: 1, padding: '64px 48px 40px' },
    top: { display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '48px', marginBottom: '56px' },
    logo: { height: '40px', marginBottom: '20px' },
    tagline: { fontFamily: "'Cormorant Garamond',serif", fontSize: '18px', fontWeight: 300, fontStyle: 'italic', color: 'rgba(235,227,219,0.65)', lineHeight: 1.5, maxWidth: '260px' },
    colTitle: { fontFamily: "'DM Sans',sans-serif", fontSize: '10px', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(245,243,242,0.4)', marginBottom: '16px' },
    colLink: { fontFamily: "'DM Sans',sans-serif", fontSize: '13px', fontWeight: 300, color: 'rgba(245,243,242,0.65)', display: 'block', marginBottom: '10px', cursor: 'pointer', transition: 'color 200ms' },
    divider: { borderTop: '1px solid rgba(245,243,242,0.1)', paddingTop: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
    legal: { fontFamily: "'DM Sans',sans-serif", fontSize: '11px', color: 'rgba(245,243,242,0.3)', letterSpacing: '0.03em' },
  };

  return (
    <footer style={footerStyles.footer}>
      <div style={footerStyles.overlay}></div>
      <div style={footerStyles.inner}>
        <div style={footerStyles.top}>
          <div>
            <img src="../../assets/logo-negative.svg" style={footerStyles.logo} alt="Activum" />
            <p style={footerStyles.tagline}>"Espacios que inspiran, proyectos que perduran."</p>
          </div>
          <div>
            <div style={footerStyles.colTitle}>Proyectos</div>
            {['Residencial','Comercial','Premium','En obra'].map(l => <span key={l} style={footerStyles.colLink}>{l}</span>)}
          </div>
          <div>
            <div style={footerStyles.colTitle}>Estudio</div>
            {['Nosotros','Equipo','Valores','Prensa'].map(l => <span key={l} style={footerStyles.colLink}>{l}</span>)}
          </div>
          <div>
            <div style={footerStyles.colTitle}>Contacto</div>
            {['Consultar proyecto','Inversión','Oficinas','Legal'].map(l => <span key={l} style={footerStyles.colLink}>{l}</span>)}
          </div>
        </div>
        <div style={footerStyles.divider}>
          <span style={footerStyles.legal}>© 2026 Activum. Todos los derechos reservados.</span>
          <span style={footerStyles.legal}>ES · EN</span>
        </div>
      </div>
    </footer>
  );
};

Object.assign(window, { ActivumFooter });
