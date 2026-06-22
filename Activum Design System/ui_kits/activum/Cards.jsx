// Cards.jsx — Activum project/service cards grid
const PROJECT_DATA = [
  { id: 1, eyebrow: 'Residencial', title: 'Torre Lumina', location: 'Madrid', year: '2026', tag: 'Nuevo', accent: true },
  { id: 2, eyebrow: 'Premium', title: 'Palacio de Gracia', location: 'Barcelona', year: '2025', tag: 'Entregado', accent: false },
  { id: 3, eyebrow: 'Comercial', title: 'Estudio Norte', location: 'Bilbao', year: '2026', tag: 'En obra', accent: false },
  { id: 4, eyebrow: 'Residencial', title: 'Ático Valencia', location: 'Valencia', year: '2027', tag: 'Pre-venta', accent: false },
  { id: 5, eyebrow: 'Mixto', title: 'Complejo Serrano', location: 'Madrid', year: '2026', tag: 'En obra', accent: false },
  { id: 6, eyebrow: 'Premium', title: 'Mirador del Mar', location: 'Marbella', year: '2027', tag: 'Nuevo', accent: true },
];

const BG_COLORS = ['#D4C5B2','#1F1D1A','#EBE3DB','#4B4845','#D4C5B2','#1F1D1A'];

const ActivumProjectCards = ({ onSelect }) => {
  const [hovered, setHovered] = React.useState(null);

  const sectionStyles = {
    section: { background: '#F5F3F2', padding: '96px 48px' },
    header: { display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '48px' },
    eyebrow: { fontFamily: "'DM Sans',sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#8E2D44', marginBottom: '12px' },
    h2: { fontFamily: "'Cormorant Garamond',serif", fontSize: '48px', fontWeight: 300, letterSpacing: '-0.02em', color: '#1F1D1A', lineHeight: 1.1 },
    viewAll: { fontFamily: "'DM Sans',sans-serif", fontSize: '11px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#4B4845', cursor: 'pointer', textDecoration: 'underline', textUnderlineOffset: '4px' },
    grid: { display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '20px' },
    card: (i, isHovered) => ({
      background: '#F5F3F2', borderRadius: '16px', overflow: 'hidden',
      cursor: 'pointer', transition: 'transform 300ms cubic-bezier(0.22,1,0.36,1), box-shadow 300ms',
      boxShadow: isHovered ? '0 12px 40px rgba(31,29,26,0.16)' : '0 2px 12px rgba(31,29,26,0.08)',
      transform: isHovered ? 'translateY(-4px)' : 'none',
    }),
    cardImg: (i) => ({ height: '160px', background: BG_COLORS[i], position: 'relative', overflow: 'hidden' }),
    tagStyle: (accent) => ({
      position: 'absolute', top: '12px', right: '12px',
      background: accent ? '#8E2D44' : 'rgba(31,29,26,0.6)',
      color: '#F5F3F2', padding: '3px 10px', borderRadius: '9999px',
      fontFamily: "'DM Sans',sans-serif", fontSize: '9px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase',
    }),
    cardBody: { padding: '16px' },
    cardEyebrow: { fontFamily: "'DM Sans',sans-serif", fontSize: '9px', fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#8E2D44', marginBottom: '5px' },
    cardTitle: { fontFamily: "'Cormorant Garamond',serif", fontSize: '22px', fontWeight: 400, color: '#1F1D1A', lineHeight: 1.2, marginBottom: '8px' },
    cardMeta: { fontFamily: "'DM Sans',sans-serif", fontSize: '10px', color: '#8F8D8C', display: 'flex', gap: '12px' },
  };

  return (
    <section style={sectionStyles.section}>
      <div style={sectionStyles.header}>
        <div>
          <div style={sectionStyles.eyebrow}>Portafolio</div>
          <h2 style={sectionStyles.h2}>Nuestros proyectos</h2>
        </div>
        <span style={sectionStyles.viewAll}>Ver todos →</span>
      </div>
      <div style={sectionStyles.grid}>
        {PROJECT_DATA.map((p, i) => (
          <div key={p.id}
            style={sectionStyles.card(i, hovered === p.id)}
            onMouseEnter={() => setHovered(p.id)}
            onMouseLeave={() => setHovered(null)}
            onClick={() => onSelect && onSelect(p)}>
            <div style={sectionStyles.cardImg(i)}>
              <span style={sectionStyles.tagStyle(p.accent)}>{p.tag}</span>
            </div>
            <div style={sectionStyles.cardBody}>
              <div style={sectionStyles.cardEyebrow}>{p.eyebrow}</div>
              <div style={sectionStyles.cardTitle}>{p.title}</div>
              <div style={sectionStyles.cardMeta}>
                <span>{p.location}</span>
                <span>·</span>
                <span>{p.year}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

Object.assign(window, { ActivumProjectCards });
