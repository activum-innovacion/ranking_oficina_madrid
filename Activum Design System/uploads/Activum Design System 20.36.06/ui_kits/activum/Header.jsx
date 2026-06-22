// Header.jsx — Activum navigation header
const ActivumHeader = ({ currentPage, onNavigate }) => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const navLinks = ['Proyectos', 'Servicios', 'Estudio', 'Contacto'];

  const headerStyles = {
    header: {
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      background: 'rgba(245,243,242,0.92)', backdropFilter: 'blur(12px)',
      borderBottom: '1px solid rgba(31,29,26,0.08)',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '0 48px', height: '64px',
    },
    logo: { height: '32px', width: 'auto', cursor: 'pointer' },
    nav: { display: 'flex', alignItems: 'center', gap: '36px' },
    link: {
      fontFamily: "'DM Sans', sans-serif", fontSize: '11px',
      fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase',
      color: '#4B4845', cursor: 'pointer', textDecoration: 'none',
      transition: 'color 200ms',
    },
    linkActive: { color: '#1F1D1A' },
    cta: {
      fontFamily: "'DM Sans', sans-serif", fontSize: '11px',
      fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase',
      background: '#1F1D1A', color: '#F5F3F2',
      padding: '9px 20px', borderRadius: '4px', border: 'none',
      cursor: 'pointer', transition: 'background 200ms',
    },
  };

  return (
    <header style={headerStyles.header}>
      <img src="../../assets/logo-positive.svg" style={headerStyles.logo}
        onClick={() => onNavigate('home')} alt="Activum" />
      <nav style={headerStyles.nav}>
        {navLinks.map(link => (
          <span key={link}
            style={{...headerStyles.link, ...(currentPage === link.toLowerCase() ? headerStyles.linkActive : {})}}
            onClick={() => onNavigate(link.toLowerCase())}
            onMouseEnter={e => e.target.style.color = '#1F1D1A'}
            onMouseLeave={e => e.target.style.color = currentPage === link.toLowerCase() ? '#1F1D1A' : '#4B4845'}>
            {link}
          </span>
        ))}
      </nav>
      <button style={headerStyles.cta}
        onMouseEnter={e => e.target.style.background='#4B4845'}
        onMouseLeave={e => e.target.style.background='#1F1D1A'}>
        Consultar
      </button>
    </header>
  );
};

Object.assign(window, { ActivumHeader });
