/* @ds-bundle: {"format":3,"namespace":"ActivumDesignSystem_019e21","components":[],"sourceHashes":{"ui_kits/activum/Cards.jsx":"389fca67815b","ui_kits/activum/Footer.jsx":"7af4fe3c9417","ui_kits/activum/Header.jsx":"5eec375a78b5","ui_kits/activum/Hero.jsx":"4c1c7c5c94a9","uploads/Activum Design System 20.36.06/ui_kits/activum/Cards.jsx":"389fca67815b","uploads/Activum Design System 20.36.06/ui_kits/activum/Footer.jsx":"7af4fe3c9417","uploads/Activum Design System 20.36.06/ui_kits/activum/Header.jsx":"5eec375a78b5","uploads/Activum Design System 20.36.06/ui_kits/activum/Hero.jsx":"4c1c7c5c94a9"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.ActivumDesignSystem_019e21 = window.ActivumDesignSystem_019e21 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// ui_kits/activum/Cards.jsx
try { (() => {
// Cards.jsx — Activum project/service cards grid
const PROJECT_DATA = [{
  id: 1,
  eyebrow: 'Residencial',
  title: 'Torre Lumina',
  location: 'Madrid',
  year: '2026',
  tag: 'Nuevo',
  accent: true
}, {
  id: 2,
  eyebrow: 'Premium',
  title: 'Palacio de Gracia',
  location: 'Barcelona',
  year: '2025',
  tag: 'Entregado',
  accent: false
}, {
  id: 3,
  eyebrow: 'Comercial',
  title: 'Estudio Norte',
  location: 'Bilbao',
  year: '2026',
  tag: 'En obra',
  accent: false
}, {
  id: 4,
  eyebrow: 'Residencial',
  title: 'Ático Valencia',
  location: 'Valencia',
  year: '2027',
  tag: 'Pre-venta',
  accent: false
}, {
  id: 5,
  eyebrow: 'Mixto',
  title: 'Complejo Serrano',
  location: 'Madrid',
  year: '2026',
  tag: 'En obra',
  accent: false
}, {
  id: 6,
  eyebrow: 'Premium',
  title: 'Mirador del Mar',
  location: 'Marbella',
  year: '2027',
  tag: 'Nuevo',
  accent: true
}];
const BG_COLORS = ['#D4C5B2', '#1F1D1A', '#EBE3DB', '#4B4845', '#D4C5B2', '#1F1D1A'];
const ActivumProjectCards = ({
  onSelect
}) => {
  const [hovered, setHovered] = React.useState(null);
  const sectionStyles = {
    section: {
      background: '#F5F3F2',
      padding: '96px 48px'
    },
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      marginBottom: '48px'
    },
    eyebrow: {
      fontFamily: "'DM Sans',sans-serif",
      fontSize: '11px',
      fontWeight: 500,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: '#8E2D44',
      marginBottom: '12px'
    },
    h2: {
      fontFamily: "'Cormorant Garamond',serif",
      fontSize: '48px',
      fontWeight: 300,
      letterSpacing: '-0.02em',
      color: '#1F1D1A',
      lineHeight: 1.1
    },
    viewAll: {
      fontFamily: "'DM Sans',sans-serif",
      fontSize: '11px',
      fontWeight: 500,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: '#4B4845',
      cursor: 'pointer',
      textDecoration: 'underline',
      textUnderlineOffset: '4px'
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: '20px'
    },
    card: (i, isHovered) => ({
      background: '#F5F3F2',
      borderRadius: '16px',
      overflow: 'hidden',
      cursor: 'pointer',
      transition: 'transform 300ms cubic-bezier(0.22,1,0.36,1), box-shadow 300ms',
      boxShadow: isHovered ? '0 12px 40px rgba(31,29,26,0.16)' : '0 2px 12px rgba(31,29,26,0.08)',
      transform: isHovered ? 'translateY(-4px)' : 'none'
    }),
    cardImg: i => ({
      height: '160px',
      background: BG_COLORS[i],
      position: 'relative',
      overflow: 'hidden'
    }),
    tagStyle: accent => ({
      position: 'absolute',
      top: '12px',
      right: '12px',
      background: accent ? '#8E2D44' : 'rgba(31,29,26,0.6)',
      color: '#F5F3F2',
      padding: '3px 10px',
      borderRadius: '9999px',
      fontFamily: "'DM Sans',sans-serif",
      fontSize: '9px',
      fontWeight: 500,
      letterSpacing: '0.1em',
      textTransform: 'uppercase'
    }),
    cardBody: {
      padding: '16px'
    },
    cardEyebrow: {
      fontFamily: "'DM Sans',sans-serif",
      fontSize: '9px',
      fontWeight: 500,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: '#8E2D44',
      marginBottom: '5px'
    },
    cardTitle: {
      fontFamily: "'Cormorant Garamond',serif",
      fontSize: '22px',
      fontWeight: 400,
      color: '#1F1D1A',
      lineHeight: 1.2,
      marginBottom: '8px'
    },
    cardMeta: {
      fontFamily: "'DM Sans',sans-serif",
      fontSize: '10px',
      color: '#8F8D8C',
      display: 'flex',
      gap: '12px'
    }
  };
  return /*#__PURE__*/React.createElement("section", {
    style: sectionStyles.section
  }, /*#__PURE__*/React.createElement("div", {
    style: sectionStyles.header
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: sectionStyles.eyebrow
  }, "Portafolio"), /*#__PURE__*/React.createElement("h2", {
    style: sectionStyles.h2
  }, "Nuestros proyectos")), /*#__PURE__*/React.createElement("span", {
    style: sectionStyles.viewAll
  }, "Ver todos \u2192")), /*#__PURE__*/React.createElement("div", {
    style: sectionStyles.grid
  }, PROJECT_DATA.map((p, i) => /*#__PURE__*/React.createElement("div", {
    key: p.id,
    style: sectionStyles.card(i, hovered === p.id),
    onMouseEnter: () => setHovered(p.id),
    onMouseLeave: () => setHovered(null),
    onClick: () => onSelect && onSelect(p)
  }, /*#__PURE__*/React.createElement("div", {
    style: sectionStyles.cardImg(i)
  }, /*#__PURE__*/React.createElement("span", {
    style: sectionStyles.tagStyle(p.accent)
  }, p.tag)), /*#__PURE__*/React.createElement("div", {
    style: sectionStyles.cardBody
  }, /*#__PURE__*/React.createElement("div", {
    style: sectionStyles.cardEyebrow
  }, p.eyebrow), /*#__PURE__*/React.createElement("div", {
    style: sectionStyles.cardTitle
  }, p.title), /*#__PURE__*/React.createElement("div", {
    style: sectionStyles.cardMeta
  }, /*#__PURE__*/React.createElement("span", null, p.location), /*#__PURE__*/React.createElement("span", null, "\xB7"), /*#__PURE__*/React.createElement("span", null, p.year)))))));
};
Object.assign(window, {
  ActivumProjectCards
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/activum/Cards.jsx", error: String((e && e.message) || e) }); }

// ui_kits/activum/Footer.jsx
try { (() => {
// Footer.jsx — Activum site footer
const ActivumFooter = () => {
  const footerStyles = {
    footer: {
      background: '#1F1D1A',
      backgroundImage: 'url("../../assets/pattern-dark.svg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center top',
      position: 'relative',
      overflow: 'hidden'
    },
    overlay: {
      position: 'absolute',
      inset: 0,
      background: 'rgba(31,29,26,0.88)'
    },
    inner: {
      position: 'relative',
      zIndex: 1,
      padding: '64px 48px 40px'
    },
    top: {
      display: 'grid',
      gridTemplateColumns: '2fr 1fr 1fr 1fr',
      gap: '48px',
      marginBottom: '56px'
    },
    logo: {
      height: '40px',
      marginBottom: '20px'
    },
    tagline: {
      fontFamily: "'Cormorant Garamond',serif",
      fontSize: '18px',
      fontWeight: 300,
      fontStyle: 'italic',
      color: 'rgba(235,227,219,0.65)',
      lineHeight: 1.5,
      maxWidth: '260px'
    },
    colTitle: {
      fontFamily: "'DM Sans',sans-serif",
      fontSize: '10px',
      fontWeight: 500,
      letterSpacing: '0.15em',
      textTransform: 'uppercase',
      color: 'rgba(245,243,242,0.4)',
      marginBottom: '16px'
    },
    colLink: {
      fontFamily: "'DM Sans',sans-serif",
      fontSize: '13px',
      fontWeight: 300,
      color: 'rgba(245,243,242,0.65)',
      display: 'block',
      marginBottom: '10px',
      cursor: 'pointer',
      transition: 'color 200ms'
    },
    divider: {
      borderTop: '1px solid rgba(245,243,242,0.1)',
      paddingTop: '24px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    legal: {
      fontFamily: "'DM Sans',sans-serif",
      fontSize: '11px',
      color: 'rgba(245,243,242,0.3)',
      letterSpacing: '0.03em'
    }
  };
  return /*#__PURE__*/React.createElement("footer", {
    style: footerStyles.footer
  }, /*#__PURE__*/React.createElement("div", {
    style: footerStyles.overlay
  }), /*#__PURE__*/React.createElement("div", {
    style: footerStyles.inner
  }, /*#__PURE__*/React.createElement("div", {
    style: footerStyles.top
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-negative.svg",
    style: footerStyles.logo,
    alt: "Activum"
  }), /*#__PURE__*/React.createElement("p", {
    style: footerStyles.tagline
  }, "\"Espacios que inspiran, proyectos que perduran.\"")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: footerStyles.colTitle
  }, "Proyectos"), ['Residencial', 'Comercial', 'Premium', 'En obra'].map(l => /*#__PURE__*/React.createElement("span", {
    key: l,
    style: footerStyles.colLink
  }, l))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: footerStyles.colTitle
  }, "Estudio"), ['Nosotros', 'Equipo', 'Valores', 'Prensa'].map(l => /*#__PURE__*/React.createElement("span", {
    key: l,
    style: footerStyles.colLink
  }, l))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: footerStyles.colTitle
  }, "Contacto"), ['Consultar proyecto', 'Inversión', 'Oficinas', 'Legal'].map(l => /*#__PURE__*/React.createElement("span", {
    key: l,
    style: footerStyles.colLink
  }, l)))), /*#__PURE__*/React.createElement("div", {
    style: footerStyles.divider
  }, /*#__PURE__*/React.createElement("span", {
    style: footerStyles.legal
  }, "\xA9 2026 Activum. Todos los derechos reservados."), /*#__PURE__*/React.createElement("span", {
    style: footerStyles.legal
  }, "ES \xB7 EN"))));
};
Object.assign(window, {
  ActivumFooter
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/activum/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/activum/Header.jsx
try { (() => {
// Header.jsx — Activum navigation header
const ActivumHeader = ({
  currentPage,
  onNavigate
}) => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const navLinks = ['Proyectos', 'Servicios', 'Estudio', 'Contacto'];
  const headerStyles = {
    header: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      background: 'rgba(245,243,242,0.92)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid rgba(31,29,26,0.08)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 48px',
      height: '64px'
    },
    logo: {
      height: '32px',
      width: 'auto',
      cursor: 'pointer'
    },
    nav: {
      display: 'flex',
      alignItems: 'center',
      gap: '36px'
    },
    link: {
      fontFamily: "'DM Sans', sans-serif",
      fontSize: '11px',
      fontWeight: 500,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: '#4B4845',
      cursor: 'pointer',
      textDecoration: 'none',
      transition: 'color 200ms'
    },
    linkActive: {
      color: '#1F1D1A'
    },
    cta: {
      fontFamily: "'DM Sans', sans-serif",
      fontSize: '11px',
      fontWeight: 500,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      background: '#1F1D1A',
      color: '#F5F3F2',
      padding: '9px 20px',
      borderRadius: '4px',
      border: 'none',
      cursor: 'pointer',
      transition: 'background 200ms'
    }
  };
  return /*#__PURE__*/React.createElement("header", {
    style: headerStyles.header
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-positive.svg",
    style: headerStyles.logo,
    onClick: () => onNavigate('home'),
    alt: "Activum"
  }), /*#__PURE__*/React.createElement("nav", {
    style: headerStyles.nav
  }, navLinks.map(link => /*#__PURE__*/React.createElement("span", {
    key: link,
    style: {
      ...headerStyles.link,
      ...(currentPage === link.toLowerCase() ? headerStyles.linkActive : {})
    },
    onClick: () => onNavigate(link.toLowerCase()),
    onMouseEnter: e => e.target.style.color = '#1F1D1A',
    onMouseLeave: e => e.target.style.color = currentPage === link.toLowerCase() ? '#1F1D1A' : '#4B4845'
  }, link))), /*#__PURE__*/React.createElement("button", {
    style: headerStyles.cta,
    onMouseEnter: e => e.target.style.background = '#4B4845',
    onMouseLeave: e => e.target.style.background = '#1F1D1A'
  }, "Consultar"));
};
Object.assign(window, {
  ActivumHeader
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/activum/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/activum/Hero.jsx
try { (() => {
// Hero.jsx — Activum hero section with pattern background
// Fonts: Roboto Serif (headings) + Roboto (body)
const ActivumHero = ({
  onNavigate
}) => {
  const heroStyles = {
    section: {
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      background: '#1F1D1A',
      backgroundImage: 'url("../../assets/pattern-dark.svg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      position: 'relative',
      overflow: 'hidden'
    },
    overlay: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(135deg, rgba(31,29,26,0.85) 0%, rgba(31,29,26,0.6) 100%)'
    },
    content: {
      position: 'relative',
      zIndex: 1,
      maxWidth: '720px',
      padding: '0 48px'
    },
    eyebrow: {
      fontFamily: "'DM Sans', sans-serif",
      fontSize: '11px',
      fontWeight: 500,
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      color: '#C06078',
      marginBottom: '24px',
      display: 'block'
    },
    h1: {
      fontFamily: "'Cormorant Garamond', serif",
      fontSize: 'clamp(48px, 7vw, 88px)',
      fontWeight: 300,
      letterSpacing: '-0.02em',
      lineHeight: 1.05,
      color: '#F5F3F2',
      marginBottom: '28px'
    },
    sub: {
      fontFamily: "'DM Sans', sans-serif",
      fontSize: '16px',
      fontWeight: 300,
      lineHeight: 1.7,
      color: 'rgba(235,227,219,0.75)',
      marginBottom: '44px',
      maxWidth: '460px'
    },
    btnRow: {
      display: 'flex',
      gap: '16px',
      alignItems: 'center'
    },
    btnPrimary: {
      fontFamily: "'DM Sans', sans-serif",
      fontSize: '11px',
      fontWeight: 500,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      background: '#8E2D44',
      color: '#F5F3F2',
      padding: '13px 28px',
      borderRadius: '4px',
      border: 'none',
      cursor: 'pointer',
      transition: 'background 200ms'
    },
    btnSecondary: {
      fontFamily: "'DM Sans', sans-serif",
      fontSize: '11px',
      fontWeight: 500,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      background: 'transparent',
      color: 'rgba(245,243,242,0.7)',
      padding: '12px 28px',
      borderRadius: '4px',
      border: '1px solid rgba(245,243,242,0.25)',
      cursor: 'pointer',
      transition: 'all 200ms'
    },
    stats: {
      position: 'absolute',
      bottom: '48px',
      left: '48px',
      right: '48px',
      zIndex: 1,
      display: 'flex',
      gap: '48px',
      borderTop: '1px solid rgba(245,243,242,0.1)',
      paddingTop: '32px'
    },
    statNum: {
      fontFamily: "'Cormorant Garamond', serif",
      fontSize: '36px',
      fontWeight: 300,
      color: '#F5F3F2',
      lineHeight: 1
    },
    statLabel: {
      fontFamily: "'DM Sans', sans-serif",
      fontSize: '10px',
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'rgba(235,227,219,0.5)',
      marginTop: '6px'
    }
  };
  return /*#__PURE__*/React.createElement("section", {
    style: heroStyles.section
  }, /*#__PURE__*/React.createElement("div", {
    style: heroStyles.overlay
  }), /*#__PURE__*/React.createElement("div", {
    style: heroStyles.content
  }, /*#__PURE__*/React.createElement("span", {
    style: heroStyles.eyebrow
  }, "Colecci\xF3n 2026"), /*#__PURE__*/React.createElement("h1", {
    style: heroStyles.h1
  }, "Espacios que", /*#__PURE__*/React.createElement("br", null), "inspiran"), /*#__PURE__*/React.createElement("p", {
    style: heroStyles.sub
  }, "Desarrollamos proyectos residenciales y comerciales de alta gama con una visi\xF3n de permanencia, belleza y excelencia constructiva."), /*#__PURE__*/React.createElement("div", {
    style: heroStyles.btnRow
  }, /*#__PURE__*/React.createElement("button", {
    style: heroStyles.btnPrimary,
    onMouseEnter: e => e.target.style.background = '#6B1F32',
    onMouseLeave: e => e.target.style.background = '#8E2D44',
    onClick: () => onNavigate('proyectos')
  }, "Ver proyectos"), /*#__PURE__*/React.createElement("button", {
    style: heroStyles.btnSecondary,
    onMouseEnter: e => {
      e.target.style.borderColor = 'rgba(245,243,242,0.5)';
      e.target.style.color = '#F5F3F2';
    },
    onMouseLeave: e => {
      e.target.style.borderColor = 'rgba(245,243,242,0.25)';
      e.target.style.color = 'rgba(245,243,242,0.7)';
    }
  }, "Conocer el estudio"))), /*#__PURE__*/React.createElement("div", {
    style: heroStyles.stats
  }, [['18+', 'Años de experiencia'], ['240', 'Proyectos entregados'], ['12', 'Ciudades'], ['98%', 'Satisfacción']].map(([n, l]) => /*#__PURE__*/React.createElement("div", {
    key: l
  }, /*#__PURE__*/React.createElement("div", {
    style: heroStyles.statNum
  }, n), /*#__PURE__*/React.createElement("div", {
    style: heroStyles.statLabel
  }, l)))));
};
Object.assign(window, {
  ActivumHero
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/activum/Hero.jsx", error: String((e && e.message) || e) }); }

// uploads/Activum Design System 20.36.06/ui_kits/activum/Cards.jsx
try { (() => {
// Cards.jsx — Activum project/service cards grid
const PROJECT_DATA = [{
  id: 1,
  eyebrow: 'Residencial',
  title: 'Torre Lumina',
  location: 'Madrid',
  year: '2026',
  tag: 'Nuevo',
  accent: true
}, {
  id: 2,
  eyebrow: 'Premium',
  title: 'Palacio de Gracia',
  location: 'Barcelona',
  year: '2025',
  tag: 'Entregado',
  accent: false
}, {
  id: 3,
  eyebrow: 'Comercial',
  title: 'Estudio Norte',
  location: 'Bilbao',
  year: '2026',
  tag: 'En obra',
  accent: false
}, {
  id: 4,
  eyebrow: 'Residencial',
  title: 'Ático Valencia',
  location: 'Valencia',
  year: '2027',
  tag: 'Pre-venta',
  accent: false
}, {
  id: 5,
  eyebrow: 'Mixto',
  title: 'Complejo Serrano',
  location: 'Madrid',
  year: '2026',
  tag: 'En obra',
  accent: false
}, {
  id: 6,
  eyebrow: 'Premium',
  title: 'Mirador del Mar',
  location: 'Marbella',
  year: '2027',
  tag: 'Nuevo',
  accent: true
}];
const BG_COLORS = ['#D4C5B2', '#1F1D1A', '#EBE3DB', '#4B4845', '#D4C5B2', '#1F1D1A'];
const ActivumProjectCards = ({
  onSelect
}) => {
  const [hovered, setHovered] = React.useState(null);
  const sectionStyles = {
    section: {
      background: '#F5F3F2',
      padding: '96px 48px'
    },
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      marginBottom: '48px'
    },
    eyebrow: {
      fontFamily: "'DM Sans',sans-serif",
      fontSize: '11px',
      fontWeight: 500,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: '#8E2D44',
      marginBottom: '12px'
    },
    h2: {
      fontFamily: "'Cormorant Garamond',serif",
      fontSize: '48px',
      fontWeight: 300,
      letterSpacing: '-0.02em',
      color: '#1F1D1A',
      lineHeight: 1.1
    },
    viewAll: {
      fontFamily: "'DM Sans',sans-serif",
      fontSize: '11px',
      fontWeight: 500,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: '#4B4845',
      cursor: 'pointer',
      textDecoration: 'underline',
      textUnderlineOffset: '4px'
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: '20px'
    },
    card: (i, isHovered) => ({
      background: '#F5F3F2',
      borderRadius: '16px',
      overflow: 'hidden',
      cursor: 'pointer',
      transition: 'transform 300ms cubic-bezier(0.22,1,0.36,1), box-shadow 300ms',
      boxShadow: isHovered ? '0 12px 40px rgba(31,29,26,0.16)' : '0 2px 12px rgba(31,29,26,0.08)',
      transform: isHovered ? 'translateY(-4px)' : 'none'
    }),
    cardImg: i => ({
      height: '160px',
      background: BG_COLORS[i],
      position: 'relative',
      overflow: 'hidden'
    }),
    tagStyle: accent => ({
      position: 'absolute',
      top: '12px',
      right: '12px',
      background: accent ? '#8E2D44' : 'rgba(31,29,26,0.6)',
      color: '#F5F3F2',
      padding: '3px 10px',
      borderRadius: '9999px',
      fontFamily: "'DM Sans',sans-serif",
      fontSize: '9px',
      fontWeight: 500,
      letterSpacing: '0.1em',
      textTransform: 'uppercase'
    }),
    cardBody: {
      padding: '16px'
    },
    cardEyebrow: {
      fontFamily: "'DM Sans',sans-serif",
      fontSize: '9px',
      fontWeight: 500,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: '#8E2D44',
      marginBottom: '5px'
    },
    cardTitle: {
      fontFamily: "'Cormorant Garamond',serif",
      fontSize: '22px',
      fontWeight: 400,
      color: '#1F1D1A',
      lineHeight: 1.2,
      marginBottom: '8px'
    },
    cardMeta: {
      fontFamily: "'DM Sans',sans-serif",
      fontSize: '10px',
      color: '#8F8D8C',
      display: 'flex',
      gap: '12px'
    }
  };
  return /*#__PURE__*/React.createElement("section", {
    style: sectionStyles.section
  }, /*#__PURE__*/React.createElement("div", {
    style: sectionStyles.header
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: sectionStyles.eyebrow
  }, "Portafolio"), /*#__PURE__*/React.createElement("h2", {
    style: sectionStyles.h2
  }, "Nuestros proyectos")), /*#__PURE__*/React.createElement("span", {
    style: sectionStyles.viewAll
  }, "Ver todos \u2192")), /*#__PURE__*/React.createElement("div", {
    style: sectionStyles.grid
  }, PROJECT_DATA.map((p, i) => /*#__PURE__*/React.createElement("div", {
    key: p.id,
    style: sectionStyles.card(i, hovered === p.id),
    onMouseEnter: () => setHovered(p.id),
    onMouseLeave: () => setHovered(null),
    onClick: () => onSelect && onSelect(p)
  }, /*#__PURE__*/React.createElement("div", {
    style: sectionStyles.cardImg(i)
  }, /*#__PURE__*/React.createElement("span", {
    style: sectionStyles.tagStyle(p.accent)
  }, p.tag)), /*#__PURE__*/React.createElement("div", {
    style: sectionStyles.cardBody
  }, /*#__PURE__*/React.createElement("div", {
    style: sectionStyles.cardEyebrow
  }, p.eyebrow), /*#__PURE__*/React.createElement("div", {
    style: sectionStyles.cardTitle
  }, p.title), /*#__PURE__*/React.createElement("div", {
    style: sectionStyles.cardMeta
  }, /*#__PURE__*/React.createElement("span", null, p.location), /*#__PURE__*/React.createElement("span", null, "\xB7"), /*#__PURE__*/React.createElement("span", null, p.year)))))));
};
Object.assign(window, {
  ActivumProjectCards
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "uploads/Activum Design System 20.36.06/ui_kits/activum/Cards.jsx", error: String((e && e.message) || e) }); }

// uploads/Activum Design System 20.36.06/ui_kits/activum/Footer.jsx
try { (() => {
// Footer.jsx — Activum site footer
const ActivumFooter = () => {
  const footerStyles = {
    footer: {
      background: '#1F1D1A',
      backgroundImage: 'url("../../assets/pattern-dark.svg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center top',
      position: 'relative',
      overflow: 'hidden'
    },
    overlay: {
      position: 'absolute',
      inset: 0,
      background: 'rgba(31,29,26,0.88)'
    },
    inner: {
      position: 'relative',
      zIndex: 1,
      padding: '64px 48px 40px'
    },
    top: {
      display: 'grid',
      gridTemplateColumns: '2fr 1fr 1fr 1fr',
      gap: '48px',
      marginBottom: '56px'
    },
    logo: {
      height: '40px',
      marginBottom: '20px'
    },
    tagline: {
      fontFamily: "'Cormorant Garamond',serif",
      fontSize: '18px',
      fontWeight: 300,
      fontStyle: 'italic',
      color: 'rgba(235,227,219,0.65)',
      lineHeight: 1.5,
      maxWidth: '260px'
    },
    colTitle: {
      fontFamily: "'DM Sans',sans-serif",
      fontSize: '10px',
      fontWeight: 500,
      letterSpacing: '0.15em',
      textTransform: 'uppercase',
      color: 'rgba(245,243,242,0.4)',
      marginBottom: '16px'
    },
    colLink: {
      fontFamily: "'DM Sans',sans-serif",
      fontSize: '13px',
      fontWeight: 300,
      color: 'rgba(245,243,242,0.65)',
      display: 'block',
      marginBottom: '10px',
      cursor: 'pointer',
      transition: 'color 200ms'
    },
    divider: {
      borderTop: '1px solid rgba(245,243,242,0.1)',
      paddingTop: '24px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    legal: {
      fontFamily: "'DM Sans',sans-serif",
      fontSize: '11px',
      color: 'rgba(245,243,242,0.3)',
      letterSpacing: '0.03em'
    }
  };
  return /*#__PURE__*/React.createElement("footer", {
    style: footerStyles.footer
  }, /*#__PURE__*/React.createElement("div", {
    style: footerStyles.overlay
  }), /*#__PURE__*/React.createElement("div", {
    style: footerStyles.inner
  }, /*#__PURE__*/React.createElement("div", {
    style: footerStyles.top
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-negative.svg",
    style: footerStyles.logo,
    alt: "Activum"
  }), /*#__PURE__*/React.createElement("p", {
    style: footerStyles.tagline
  }, "\"Espacios que inspiran, proyectos que perduran.\"")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: footerStyles.colTitle
  }, "Proyectos"), ['Residencial', 'Comercial', 'Premium', 'En obra'].map(l => /*#__PURE__*/React.createElement("span", {
    key: l,
    style: footerStyles.colLink
  }, l))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: footerStyles.colTitle
  }, "Estudio"), ['Nosotros', 'Equipo', 'Valores', 'Prensa'].map(l => /*#__PURE__*/React.createElement("span", {
    key: l,
    style: footerStyles.colLink
  }, l))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: footerStyles.colTitle
  }, "Contacto"), ['Consultar proyecto', 'Inversión', 'Oficinas', 'Legal'].map(l => /*#__PURE__*/React.createElement("span", {
    key: l,
    style: footerStyles.colLink
  }, l)))), /*#__PURE__*/React.createElement("div", {
    style: footerStyles.divider
  }, /*#__PURE__*/React.createElement("span", {
    style: footerStyles.legal
  }, "\xA9 2026 Activum. Todos los derechos reservados."), /*#__PURE__*/React.createElement("span", {
    style: footerStyles.legal
  }, "ES \xB7 EN"))));
};
Object.assign(window, {
  ActivumFooter
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "uploads/Activum Design System 20.36.06/ui_kits/activum/Footer.jsx", error: String((e && e.message) || e) }); }

// uploads/Activum Design System 20.36.06/ui_kits/activum/Header.jsx
try { (() => {
// Header.jsx — Activum navigation header
const ActivumHeader = ({
  currentPage,
  onNavigate
}) => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const navLinks = ['Proyectos', 'Servicios', 'Estudio', 'Contacto'];
  const headerStyles = {
    header: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      background: 'rgba(245,243,242,0.92)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid rgba(31,29,26,0.08)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 48px',
      height: '64px'
    },
    logo: {
      height: '32px',
      width: 'auto',
      cursor: 'pointer'
    },
    nav: {
      display: 'flex',
      alignItems: 'center',
      gap: '36px'
    },
    link: {
      fontFamily: "'DM Sans', sans-serif",
      fontSize: '11px',
      fontWeight: 500,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: '#4B4845',
      cursor: 'pointer',
      textDecoration: 'none',
      transition: 'color 200ms'
    },
    linkActive: {
      color: '#1F1D1A'
    },
    cta: {
      fontFamily: "'DM Sans', sans-serif",
      fontSize: '11px',
      fontWeight: 500,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      background: '#1F1D1A',
      color: '#F5F3F2',
      padding: '9px 20px',
      borderRadius: '4px',
      border: 'none',
      cursor: 'pointer',
      transition: 'background 200ms'
    }
  };
  return /*#__PURE__*/React.createElement("header", {
    style: headerStyles.header
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-positive.svg",
    style: headerStyles.logo,
    onClick: () => onNavigate('home'),
    alt: "Activum"
  }), /*#__PURE__*/React.createElement("nav", {
    style: headerStyles.nav
  }, navLinks.map(link => /*#__PURE__*/React.createElement("span", {
    key: link,
    style: {
      ...headerStyles.link,
      ...(currentPage === link.toLowerCase() ? headerStyles.linkActive : {})
    },
    onClick: () => onNavigate(link.toLowerCase()),
    onMouseEnter: e => e.target.style.color = '#1F1D1A',
    onMouseLeave: e => e.target.style.color = currentPage === link.toLowerCase() ? '#1F1D1A' : '#4B4845'
  }, link))), /*#__PURE__*/React.createElement("button", {
    style: headerStyles.cta,
    onMouseEnter: e => e.target.style.background = '#4B4845',
    onMouseLeave: e => e.target.style.background = '#1F1D1A'
  }, "Consultar"));
};
Object.assign(window, {
  ActivumHeader
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "uploads/Activum Design System 20.36.06/ui_kits/activum/Header.jsx", error: String((e && e.message) || e) }); }

// uploads/Activum Design System 20.36.06/ui_kits/activum/Hero.jsx
try { (() => {
// Hero.jsx — Activum hero section with pattern background
// Fonts: Roboto Serif (headings) + Roboto (body)
const ActivumHero = ({
  onNavigate
}) => {
  const heroStyles = {
    section: {
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      background: '#1F1D1A',
      backgroundImage: 'url("../../assets/pattern-dark.svg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      position: 'relative',
      overflow: 'hidden'
    },
    overlay: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(135deg, rgba(31,29,26,0.85) 0%, rgba(31,29,26,0.6) 100%)'
    },
    content: {
      position: 'relative',
      zIndex: 1,
      maxWidth: '720px',
      padding: '0 48px'
    },
    eyebrow: {
      fontFamily: "'DM Sans', sans-serif",
      fontSize: '11px',
      fontWeight: 500,
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      color: '#C06078',
      marginBottom: '24px',
      display: 'block'
    },
    h1: {
      fontFamily: "'Cormorant Garamond', serif",
      fontSize: 'clamp(48px, 7vw, 88px)',
      fontWeight: 300,
      letterSpacing: '-0.02em',
      lineHeight: 1.05,
      color: '#F5F3F2',
      marginBottom: '28px'
    },
    sub: {
      fontFamily: "'DM Sans', sans-serif",
      fontSize: '16px',
      fontWeight: 300,
      lineHeight: 1.7,
      color: 'rgba(235,227,219,0.75)',
      marginBottom: '44px',
      maxWidth: '460px'
    },
    btnRow: {
      display: 'flex',
      gap: '16px',
      alignItems: 'center'
    },
    btnPrimary: {
      fontFamily: "'DM Sans', sans-serif",
      fontSize: '11px',
      fontWeight: 500,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      background: '#8E2D44',
      color: '#F5F3F2',
      padding: '13px 28px',
      borderRadius: '4px',
      border: 'none',
      cursor: 'pointer',
      transition: 'background 200ms'
    },
    btnSecondary: {
      fontFamily: "'DM Sans', sans-serif",
      fontSize: '11px',
      fontWeight: 500,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      background: 'transparent',
      color: 'rgba(245,243,242,0.7)',
      padding: '12px 28px',
      borderRadius: '4px',
      border: '1px solid rgba(245,243,242,0.25)',
      cursor: 'pointer',
      transition: 'all 200ms'
    },
    stats: {
      position: 'absolute',
      bottom: '48px',
      left: '48px',
      right: '48px',
      zIndex: 1,
      display: 'flex',
      gap: '48px',
      borderTop: '1px solid rgba(245,243,242,0.1)',
      paddingTop: '32px'
    },
    statNum: {
      fontFamily: "'Cormorant Garamond', serif",
      fontSize: '36px',
      fontWeight: 300,
      color: '#F5F3F2',
      lineHeight: 1
    },
    statLabel: {
      fontFamily: "'DM Sans', sans-serif",
      fontSize: '10px',
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'rgba(235,227,219,0.5)',
      marginTop: '6px'
    }
  };
  return /*#__PURE__*/React.createElement("section", {
    style: heroStyles.section
  }, /*#__PURE__*/React.createElement("div", {
    style: heroStyles.overlay
  }), /*#__PURE__*/React.createElement("div", {
    style: heroStyles.content
  }, /*#__PURE__*/React.createElement("span", {
    style: heroStyles.eyebrow
  }, "Colecci\xF3n 2026"), /*#__PURE__*/React.createElement("h1", {
    style: heroStyles.h1
  }, "Espacios que", /*#__PURE__*/React.createElement("br", null), "inspiran"), /*#__PURE__*/React.createElement("p", {
    style: heroStyles.sub
  }, "Desarrollamos proyectos residenciales y comerciales de alta gama con una visi\xF3n de permanencia, belleza y excelencia constructiva."), /*#__PURE__*/React.createElement("div", {
    style: heroStyles.btnRow
  }, /*#__PURE__*/React.createElement("button", {
    style: heroStyles.btnPrimary,
    onMouseEnter: e => e.target.style.background = '#6B1F32',
    onMouseLeave: e => e.target.style.background = '#8E2D44',
    onClick: () => onNavigate('proyectos')
  }, "Ver proyectos"), /*#__PURE__*/React.createElement("button", {
    style: heroStyles.btnSecondary,
    onMouseEnter: e => {
      e.target.style.borderColor = 'rgba(245,243,242,0.5)';
      e.target.style.color = '#F5F3F2';
    },
    onMouseLeave: e => {
      e.target.style.borderColor = 'rgba(245,243,242,0.25)';
      e.target.style.color = 'rgba(245,243,242,0.7)';
    }
  }, "Conocer el estudio"))), /*#__PURE__*/React.createElement("div", {
    style: heroStyles.stats
  }, [['18+', 'Años de experiencia'], ['240', 'Proyectos entregados'], ['12', 'Ciudades'], ['98%', 'Satisfacción']].map(([n, l]) => /*#__PURE__*/React.createElement("div", {
    key: l
  }, /*#__PURE__*/React.createElement("div", {
    style: heroStyles.statNum
  }, n), /*#__PURE__*/React.createElement("div", {
    style: heroStyles.statLabel
  }, l)))));
};
Object.assign(window, {
  ActivumHero
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "uploads/Activum Design System 20.36.06/ui_kits/activum/Hero.jsx", error: String((e && e.message) || e) }); }

})();
