import { useState } from "react";

const GOLD = "#b8924a";
const CREAM = "#faf7f2";
const INK = "#1a1614";
const MUTED = "#6b6460";
const BORDER = "#e0d8cf";
const GOLD_LIGHT = "#e8d5b0";
const NAVY = "#1a2744";
const WHITE = "#ffffff";

const s = {
  page: { fontFamily: "'Georgia', serif", background: CREAM, color: INK, minHeight: "100vh" },
  inner: { maxWidth: 900, margin: "0 auto", padding: "0 1.2rem" },
  nav: { background: WHITE, borderBottom: `1px solid ${BORDER}`, padding: "1rem 1.2rem", display: "flex", justifyContent: "space-between", alignItems: "center", position: "sticky", top: 0, zIndex: 10 },
  navLogo: { fontFamily: "Georgia, serif", fontSize: "1.1rem", fontWeight: 700, color: INK },
  navGold: { color: GOLD },
  navSub: { fontSize: "0.58rem", letterSpacing: "0.12em", textTransform: "uppercase", color: MUTED, display: "block", fontFamily: "sans-serif", fontWeight: 400 },
  navBtn: { background: GOLD, color: WHITE, border: "none", borderRadius: 2, padding: "0.5rem 1rem", fontFamily: "sans-serif", fontSize: "0.78rem", fontWeight: 600, cursor: "pointer" },
  hero: { background: `linear-gradient(135deg, ${CREAM} 60%, ${GOLD_LIGHT} 100%)`, padding: "3.5rem 1.2rem 3rem", borderBottom: `1px solid ${BORDER}` },
  heroFlags: { display: "flex", gap: "0.4rem", flexWrap: "wrap", marginBottom: "1rem" },
  flagTag: { background: WHITE, border: `1px solid ${BORDER}`, borderRadius: 20, padding: "0.22rem 0.65rem", fontSize: "0.7rem", color: MUTED, fontFamily: "sans-serif" },
  heroEye: { fontSize: "0.68rem", letterSpacing: "0.14em", textTransform: "uppercase", color: GOLD, fontFamily: "sans-serif", fontWeight: 500, marginBottom: "0.8rem", display: "flex", alignItems: "center", gap: "0.4rem" },
  h1: { fontFamily: "Georgia, serif", fontSize: "clamp(1.9rem, 6vw, 2.8rem)", fontWeight: 700, lineHeight: 1.15, marginBottom: "1rem", color: INK },
  h1em: { fontStyle: "italic", color: GOLD },
  heroDesc: { color: MUTED, fontSize: "0.95rem", lineHeight: 1.8, marginBottom: "1.2rem", fontFamily: "sans-serif", maxWidth: 480 },
  priceNote: { display: "inline-flex", alignItems: "center", gap: "0.5rem", background: WHITE, border: `1px solid ${BORDER}`, borderLeft: `3px solid ${GOLD}`, padding: "0.5rem 0.9rem", borderRadius: 2, fontSize: "0.82rem", color: MUTED, marginBottom: "1.5rem", fontFamily: "sans-serif" },
  btnGroup: { display: "flex", gap: "0.8rem", flexWrap: "wrap" },
  btnPrimary: { background: GOLD, color: WHITE, border: "none", borderRadius: 2, padding: "0.85rem 1.6rem", fontFamily: "sans-serif", fontSize: "0.87rem", fontWeight: 600, cursor: "pointer", textDecoration: "none", display: "inline-block" },
  btnSecondary: { background: "transparent", color: INK, border: `1.5px solid ${BORDER}`, borderRadius: 2, padding: "0.85rem 1.6rem", fontFamily: "sans-serif", fontSize: "0.87rem", fontWeight: 500, cursor: "pointer", textDecoration: "none", display: "inline-block" },
  trustBar: { background: INK, padding: "0.9rem 1.2rem", display: "flex", justifyContent: "center", gap: "1.4rem", flexWrap: "wrap" },
  trustItem: { fontSize: "0.65rem", letterSpacing: "0.1em", textTransform: "uppercase", color: GOLD_LIGHT, opacity: 0.65, fontFamily: "sans-serif" },
  section: { padding: "3.5rem 1.2rem" },
  sectionWhite: { padding: "3.5rem 1.2rem", background: WHITE },
  sectionNavy: { padding: "3.5rem 1.2rem", background: NAVY },
  sectionDark: { padding: "3.5rem 1.2rem", background: "#111" },
  sectionLabel: { fontSize: "0.68rem", fontWeight: 600, letterSpacing: "0.16em", textTransform: "uppercase", color: GOLD, marginBottom: "0.6rem", fontFamily: "sans-serif" },
  sectionLabelLight: { fontSize: "0.68rem", fontWeight: 600, letterSpacing: "0.16em", textTransform: "uppercase", color: "#6c8cbf", marginBottom: "0.6rem", fontFamily: "sans-serif" },
  h2: { fontFamily: "Georgia, serif", fontSize: "clamp(1.6rem, 4vw, 2.1rem)", fontWeight: 700, lineHeight: 1.2, marginBottom: "0.8rem", color: INK },
  h2light: { fontFamily: "Georgia, serif", fontSize: "clamp(1.6rem, 4vw, 2.1rem)", fontWeight: 700, lineHeight: 1.2, marginBottom: "0.8rem", color: WHITE },
  divider: { width: 36, height: 2, background: GOLD, margin: "1rem 0 2rem" },
  sub: { color: MUTED, fontSize: "0.92rem", lineHeight: 1.8, marginBottom: "2rem", fontFamily: "sans-serif" },
  subLight: { color: "rgba(255,255,255,0.45)", fontSize: "0.92rem", lineHeight: 1.8, marginBottom: "2rem", fontFamily: "sans-serif" },

  // Category tabs
  tabRow: { display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "2rem" },
  tabActive: { background: GOLD, color: WHITE, border: `1.5px solid ${GOLD}`, borderRadius: 2, padding: "0.45rem 1rem", fontFamily: "sans-serif", fontSize: "0.77rem", fontWeight: 600, cursor: "pointer", letterSpacing: "0.05em" },
  tabInactive: { background: "transparent", color: MUTED, border: `1.5px solid ${BORDER}`, borderRadius: 2, padding: "0.45rem 1rem", fontFamily: "sans-serif", fontSize: "0.77rem", fontWeight: 500, cursor: "pointer", letterSpacing: "0.05em" },

  // Category block
  catBlock: { marginBottom: "2.5rem" },
  catHeader: { display: "flex", alignItems: "center", gap: "0.8rem", marginBottom: "1.2rem", paddingBottom: "0.7rem", borderBottom: `1.5px solid ${BORDER}` },
  catIcon: { fontSize: "1.4rem" },
  catTitle: { fontFamily: "Georgia, serif", fontSize: "1.2rem", fontWeight: 700, color: INK },
  catDesc: { fontSize: "0.82rem", color: MUTED, fontFamily: "sans-serif", marginTop: "0.15rem" },
  grid: { display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(230px, 1fr))", gap: "1rem" },
  card: { border: `1px solid ${BORDER}`, padding: "1.3rem", borderRadius: 3, background: CREAM },
  cardTitle: { fontFamily: "Georgia, serif", fontSize: "1rem", fontWeight: 700, marginBottom: "0.45rem", color: INK },
  cardText: { color: MUTED, fontSize: "0.82rem", lineHeight: 1.72, fontFamily: "sans-serif" },

  // USA
  usaProof: { background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", borderLeft: `3px solid ${GOLD}`, padding: "1.3rem 1.5rem", borderRadius: 3, marginBottom: "2rem" },
  usaProofLabel: { fontSize: "0.65rem", letterSpacing: "0.14em", textTransform: "uppercase", color: GOLD, marginBottom: "0.5rem", fontFamily: "sans-serif" },
  usaProofText: { fontFamily: "Georgia, serif", fontSize: "1.1rem", fontStyle: "italic", color: "rgba(255,255,255,0.85)", lineHeight: 1.6, marginBottom: "0.5rem" },
  usaProofSub: { fontSize: "0.75rem", color: "rgba(255,255,255,0.38)", fontFamily: "sans-serif" },
  usaStep: { display: "flex", gap: "0.9rem", alignItems: "flex-start", marginBottom: "1.1rem" },
  usaStepNum: { width: 26, height: 26, borderRadius: "50%", background: "rgba(184,146,74,0.18)", border: "1px solid rgba(184,146,74,0.35)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.7rem", color: GOLD, fontWeight: 700, flexShrink: 0, marginTop: 2, fontFamily: "sans-serif" },
  usaStepH: { fontSize: "0.9rem", color: GOLD_LIGHT, marginBottom: "0.2rem", fontWeight: 600, fontFamily: "sans-serif" },
  usaStepP: { fontSize: "0.82rem", color: "rgba(255,255,255,0.4)", lineHeight: 1.65, fontFamily: "sans-serif" },
  usaGrid2: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.9rem", marginBottom: "1.5rem" },
  usaCard: { background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 3, padding: "1rem", textAlign: "center" },
  usaCardIcon: { fontSize: "1.5rem", marginBottom: "0.4rem" },
  usaCardH: { fontSize: "0.82rem", color: WHITE, fontWeight: 600, marginBottom: "0.2rem", fontFamily: "sans-serif" },
  usaCardP: { fontSize: "0.72rem", color: "rgba(255,255,255,0.32)", lineHeight: 1.5, fontFamily: "sans-serif" },
  countryRow: { display: "flex", gap: "0.5rem", flexWrap: "wrap", marginTop: "0.8rem" },
  countryTag: { background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 20, padding: "0.28rem 0.7rem", fontSize: "0.74rem", color: "rgba(255,255,255,0.5)", fontFamily: "sans-serif" },

  // Process
  processGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "1.5rem" },
  stepNum: { fontFamily: "Georgia, serif", fontSize: "2.5rem", fontWeight: 700, color: "rgba(184,146,74,0.18)", lineHeight: 1, marginBottom: "0.6rem" },
  stepH: { fontFamily: "Georgia, serif", fontSize: "1.05rem", color: GOLD_LIGHT, marginBottom: "0.4rem" },
  stepP: { fontSize: "0.82rem", color: "rgba(255,255,255,0.38)", lineHeight: 1.75, fontFamily: "sans-serif" },
  stepPrice: { display: "inline-block", marginTop: "0.6rem", background: "rgba(184,146,74,0.15)", border: "1px solid rgba(184,146,74,0.3)", color: GOLD_LIGHT, fontSize: "0.74rem", padding: "0.25rem 0.65rem", borderRadius: 2, letterSpacing: "0.06em", fontFamily: "sans-serif" },

  // Form
  formGroup: { display: "flex", flexDirection: "column", gap: "0.35rem" },
  label: { fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.09em", textTransform: "uppercase", color: MUTED, fontFamily: "sans-serif" },
  input: { padding: "0.78rem 0.9rem", border: `1.5px solid ${BORDER}`, borderRadius: 2, background: CREAM, fontFamily: "sans-serif", fontSize: "0.88rem", color: INK, outline: "none" },
  textarea: { padding: "0.78rem 0.9rem", border: `1.5px solid ${BORDER}`, borderRadius: 2, background: CREAM, fontFamily: "sans-serif", fontSize: "0.88rem", color: INK, outline: "none", resize: "vertical", minHeight: 100 },
  select: { padding: "0.78rem 0.9rem", border: `1.5px solid ${BORDER}`, borderRadius: 2, background: CREAM, fontFamily: "sans-serif", fontSize: "0.88rem", color: INK, outline: "none" },
  formNote: { background: "#fffbf5", border: `1px solid ${GOLD_LIGHT}`, borderLeft: `3px solid ${GOLD}`, padding: "0.85rem 1rem", borderRadius: 2, fontSize: "0.81rem", color: MUTED, lineHeight: 1.6, fontFamily: "sans-serif" },

  testCard: { background: WHITE, border: `1px solid ${BORDER}`, borderRadius: 3, padding: "1.5rem" },
  stars: { color: GOLD, fontSize: "0.8rem", marginBottom: "0.7rem" },
  testQ: { fontFamily: "Georgia, serif", fontSize: "1rem", fontStyle: "italic", lineHeight: 1.65, color: INK, marginBottom: "1rem" },
  testAuthor: { fontSize: "0.75rem", fontWeight: 600, color: MUTED, letterSpacing: "0.05em", textTransform: "uppercase", fontFamily: "sans-serif" },
  testCountry: { fontSize: "0.72rem", color: GOLD, marginTop: "0.2rem", fontFamily: "sans-serif" },

  footer: { background: INK, padding: "2.5rem 1.2rem", textAlign: "center" },
  footerFirm: { fontFamily: "Georgia, serif", fontSize: "1.3rem", fontWeight: 700, color: WHITE, marginBottom: "0.2rem" },
  footerSub: { fontSize: "0.65rem", letterSpacing: "0.13em", textTransform: "uppercase", color: "rgba(255,255,255,0.28)", marginBottom: "0.4rem", fontFamily: "sans-serif" },
  footerLoc: { fontSize: "0.73rem", color: "rgba(255,255,255,0.24)", marginBottom: "1.2rem", fontFamily: "sans-serif" },
  footerLinks: { display: "flex", justifyContent: "center", gap: "1.5rem", flexWrap: "wrap", marginBottom: "1rem" },
  footerLink: { fontSize: "0.73rem", color: GOLD_LIGHT, textDecoration: "none", opacity: 0.55, letterSpacing: "0.08em", fontFamily: "sans-serif" },
  footerCopy: { fontSize: "0.7rem", color: "rgba(255,255,255,0.18)", fontFamily: "sans-serif" },
  waBtn: { position: "fixed", bottom: "1.4rem", right: "1.4rem", zIndex: 50, background: "#25d366", color: WHITE, width: 50, height: 50, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.4rem", textDecoration: "none", boxShadow: "0 4px 16px rgba(37,211,102,0.45)" },
};

const CATEGORIES = [
  {
    id: "familia",
    icon: "👨‍👧",
    title: "Procesos de Familia",
    desc: "Protegemos tus derechos y los de tu familia en los momentos más difíciles",
    services: [
      { title: "Custodia y cuidado personal", text: "Defiendo tus derechos y los de tus hijos. Custodia, visitas y regulación del tiempo compartido." },
      { title: "Cuota alimentaria", text: "Fijación, aumento o disminución de alimentos. Cuando la situación cambia, la cuota se ajusta." },
      { title: "Divorcios", text: "De mutuo acuerdo o contencioso. Incluye liquidación de sociedad conyugal y separación de bienes." },
      { title: "Filiación y paternidad", text: "Reconocimiento e impugnación de paternidad. Procesos de sucesiones y herencias." },
    ],
  },
  {
    id: "civil",
    icon: "⚖️",
    title: "Procesos Civiles",
    desc: "Recupera lo que es tuyo y protege tus intereses con estrategia legal",
    services: [
      { title: "Procesos ejecutivos", text: "¿Alguien te debe y no paga? Recupero tu dinero por la vía legal — mínima, menor y mayor cuantía." },
      { title: "Recuperación de cartera", text: "Estrategia integral desde gestión prejudicial hasta proceso ejecutivo completo." },
      { title: "Asesorías preventivas", text: "El mejor problema legal es el que se evita. Toma decisiones importantes con seguridad jurídica." },
    ],
  },
  {
    id: "contratos",
    icon: "📑",
    title: "Contratos",
    desc: "Cualquier tipo de contrato — redactado para protegerte, no solo para cumplir",
    services: [
      { title: "Contratos civiles", text: "Compraventa, arrendamiento, préstamo, comodato y todo tipo de acuerdo entre particulares." },
      { title: "Contratos comerciales", text: "Acuerdos entre empresas, distribución, franquicias, prestación de servicios." },
      { title: "Contratos laborales", text: "Redacción, revisión y asesoría en contratos de trabajo y vinculación." },
      { title: "Acuerdos de confidencialidad", text: "NDAs y acuerdos de no competencia para proteger tu información y negocio." },
    ],
  },
  {
    id: "migratorio",
    icon: "✈️",
    title: "Derecho Migratorio Colombiano",
    desc: "Para extranjeros que quieren vivir o permanecer legalmente en Colombia",
    services: [
      { title: "Visas colombianas", text: "Digital nomad, cónyuge, pensionado, trabajo, inversión. Te guío en el proceso completo." },
      { title: "Permisos de residencia", text: "Solicitud de Permiso Especial de Permanencia (PEP) y regularización migratoria." },
      { title: "Trámites ante Migración Colombia", text: "Salvoconductos, cédulas de extranjería, prórrogas y todos los trámites ante la autoridad migratoria." },
      { title: "Asesoría Colombia–EE.UU.", text: "Procesos migratorios que involucran ambos países. Experiencia práctica en los dos sistemas." },
    ],
  },
  {
    id: "tramites",
    icon: "🌍",
    title: "Trámites en Colombia para Colombianos en el Exterior",
    desc: "Estás afuera pero necesitas resolver algo en Colombia — lo hacemos por ti",
    services: [
      { title: "Poderes notariales", text: "Redacción y trámite de poderes para que un representante actúe en tu nombre en Colombia." },
      { title: "Procesos judiciales a distancia", text: "Representación legal en procesos civiles, familia o ejecutivos sin que tengas que viajar." },
      { title: "Trámites inmobiliarios", text: "Venta, compra, arrendamiento o administración de propiedades en Colombia desde el exterior." },
      { title: "Sucesiones y herencias", text: "Gestión de procesos sucesorales cuando el heredero o causante está fuera del país." },
    ],
  },
];

export default function CCJuristas() {
  const [activeTab, setActiveTab] = useState("todos");
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  const visibleCats = activeTab === "todos" ? CATEGORIES : CATEGORIES.filter(c => c.id === activeTab);

  return (
    <div style={s.page}>

      {/* NAV */}
      <nav style={s.nav}>
        <div>
          <div style={s.navLogo}>CC Juristas <span style={s.navGold}>&</span> Asociados</div>
          <span style={s.navSub}>Abogada Carol Castaño · Cali & Houston</span>
        </div>
        <button style={s.navBtn} onClick={() => scrollTo("formulario")}>Estudia mi caso →</button>
      </nav>

      {/* HERO */}
      <section style={s.hero}>
        <div style={s.inner}>
          <div style={s.heroFlags}>
            <span style={s.flagTag}>🇨🇴 Colombia</span>
            <span style={s.flagTag}>🇺🇸 Estados Unidos</span>
            <span style={s.flagTag}>🌎 Latinoamérica</span>
          </div>
          <div style={s.heroEye}>
            <span style={{ width: 22, height: 1, background: GOLD, display: "inline-block" }}></span>
            Derecho Civil · Familia · Migratorio · Expansión USA
          </div>
          <h1 style={s.h1}>Tu firma legal con<br />puerta de entrada a{" "}<em style={s.h1em}>Estados Unidos</em></h1>
          <p style={s.heroDesc}>Desde Cali hasta Houston — resolvemos tus asuntos legales en Colombia y abrimos las puertas del mercado americano para tu producto o negocio.</p>
          <div style={s.priceNote}>💬 <span>Consulta inicial: <strong>$50.000 COP</strong> · Diagnóstico integral</span></div>
          <div style={s.btnGroup}>
            <button style={s.btnPrimary} onClick={() => scrollTo("formulario")}>Estudiar mi caso →</button>
            <a href="https://wa.me/message/6HM42SCKD7UQC1" target="_blank" style={s.btnSecondary}>WhatsApp directo</a>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <div style={s.trustBar}>
        {["Familia", "Civil", "Contratos", "Migratorio Colombia", "Trámites para Colombianos en Exterior", "Expansión USA"].map(t => (
          <span key={t} style={s.trustItem}>{t}</span>
        ))}
      </div>

      {/* SERVICIOS POR CATEGORÍA */}
      <section style={s.sectionWhite} id="servicios">
        <div style={s.inner}>
          <div style={s.sectionLabel}>Servicios legales</div>
          <h2 style={s.h2}>¿Qué área necesitas?</h2>
          <div style={s.divider}></div>
          <p style={s.sub}>Selecciona una categoría o explora todos nuestros servicios.</p>

          {/* TABS */}
          <div style={s.tabRow}>
            {[{ id: "todos", label: "Todos" }, ...CATEGORIES.map(c => ({ id: c.id, label: c.title }))].map(tab => (
              <button
                key={tab.id}
                style={activeTab === tab.id ? s.tabActive : s.tabInactive}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* CATEGORY BLOCKS */}
          {visibleCats.map(cat => (
            <div key={cat.id} style={s.catBlock}>
              <div style={s.catHeader}>
                <span style={s.catIcon}>{cat.icon}</span>
                <div>
                  <div style={s.catTitle}>{cat.title}</div>
                  <div style={s.catDesc}>{cat.desc}</div>
                </div>
              </div>
              <div style={s.grid}>
                {cat.services.map(sv => (
                  <div key={sv.title} style={s.card}>
                    <div style={s.cardTitle}>{sv.title}</div>
                    <div style={s.cardText}>{sv.text}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* EXPANSIÓN USA */}
      <section style={s.sectionNavy} id="expansion">
        <div style={s.inner}>
          <div style={s.sectionLabelLight}>Expansión al mercado estadounidense</div>
          <h2 style={s.h2light}>Tu producto en EE.UU.<br />Nosotros abrimos la puerta.</h2>
          <div style={s.divider}></div>
          <p style={s.subLight}>¿Tienes un producto en Colombia, Ecuador, México o cualquier país de Latinoamérica y quieres entrar al mercado americano? Gestionamos todo — desde los trámites hasta conectarte con los compradores correctos. Atendemos clientes de cualquier país.</p>

          <div style={s.usaProof}>
            <div style={s.usaProofLabel}>✓ Caso real · Resultado comprobado</div>
            <div style={s.usaProofText}>"Logramos ingresar tostones de plátano de un productor ecuatoriano a las estanterías de Costco en Estados Unidos — gestionando trámites, contactos y distribución desde cero."</div>
            <div style={s.usaProofSub}>Cliente de Ecuador · Producto alimenticio · Costco USA ✓</div>
          </div>

          <div style={{ marginBottom: "2rem" }}>
            {[
              { n: "1", h: "Diagnóstico de tu producto", p: "Evaluamos tu producto, su potencial en EE.UU. y los requisitos legales y regulatorios para ingresar." },
              { n: "2", h: "Trámites y licencias", p: "Gestionamos permisos, registros FDA, etiquetado y toda la documentación para ingresar legalmente." },
              { n: "3", h: "Conexión con compradores", p: "Activamos nuestra red: distribuidores, retailers, cadenas y brokers en el mercado americano." },
              { n: "4", h: "Acompañamiento completo", p: "Te acompañamos en cada etapa hasta que tu producto esté físicamente en el mercado americano." },
            ].map(step => (
              <div key={step.n} style={s.usaStep}>
                <div style={s.usaStepNum}>{step.n}</div>
                <div>
                  <div style={s.usaStepH}>{step.h}</div>
                  <div style={s.usaStepP}>{step.p}</div>
                </div>
              </div>
            ))}
          </div>

          <div style={s.usaGrid2}>
            {[
              { icon: "🏬", h: "Cadenas retail", p: "Costco, Walmart, Target, Whole Foods" },
              { icon: "🚚", h: "Distribuidores", p: "Red local y nacional en EE.UU." },
              { icon: "🤝", h: "Brokers", p: "Conexión directa con compradores" },
              { icon: "📋", h: "Trámites completos", p: "FDA, importación, etiquetado y más" },
            ].map(m => (
              <div key={m.h} style={s.usaCard}>
                <div style={s.usaCardIcon}>{m.icon}</div>
                <div style={s.usaCardH}>{m.h}</div>
                <div style={s.usaCardP}>{m.p}</div>
              </div>
            ))}
          </div>

          <div style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.32)", textTransform: "uppercase", letterSpacing: "0.1em", fontFamily: "sans-serif", marginBottom: "0.6rem" }}>Atendemos clientes de</div>
          <div style={s.countryRow}>
            {["🇨🇴 Colombia", "🇪🇨 Ecuador", "🇲🇽 México", "🇵🇪 Perú", "🇻🇪 Venezuela", "🌎 Más países"].map(c => (
              <span key={c} style={s.countryTag}>{c}</span>
            ))}
          </div>
          <div style={{ marginTop: "1.8rem" }}>
            <button style={{ ...s.btnPrimary, width: "100%", textAlign: "center" }} onClick={() => scrollTo("formulario")}>
              Quiero llevar mi producto a EE.UU. →
            </button>
          </div>
        </div>
      </section>

      {/* PROCESO */}
      <section style={s.sectionDark} id="proceso">
        <div style={s.inner}>
          <div style={s.sectionLabel}>Cómo trabajamos</div>
          <h2 style={s.h2light}>Claro y transparente<br />desde el primer momento</h2>
          <div style={s.divider}></div>
          <div style={s.processGrid}>
            {[
              { n: "01", h: "Envías tu caso", p: "Completas el formulario. No necesitas saber los términos legales — cuéntanos con tus palabras.", price: null },
              { n: "02", h: "Consulta inicial", p: "Videollamada o reunión presencial para profundizar en tu situación.", price: "$50.000 COP" },
              { n: "03", h: "Diagnóstico integral", p: "Análisis completo: riesgos reales, opciones y estrategia recomendada.", price: null },
              { n: "04", h: "Asesoría y ejecución", p: "Trabajamos juntos con seguimiento constante. Siempre sabes en qué etapa estás.", price: null },
            ].map(step => (
              <div key={step.n}>
                <div style={s.stepNum}>{step.n}</div>
                <div style={s.stepH}>{step.h}</div>
                <div style={s.stepP}>{step.p}</div>
                {step.price && <span style={s.stepPrice}>{step.price}</span>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FORMULARIO */}
      <section style={s.section} id="formulario">
        <div style={s.inner}>
          <div style={s.sectionLabel}>Estudio de caso</div>
          <h2 style={s.h2}>Cuéntanos tu situación<br />y la analizamos juntos</h2>
          <div style={s.divider}></div>
          <div style={{ ...s.formNote, marginBottom: "1.5rem" }}>
            📋 <strong>¿Por qué este formulario?</strong> Para darte una asesoría realmente acertada necesitamos entender tu caso antes de la consulta. Así cada minuto contigo es útil y enfocado en soluciones reales.
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.1rem" }}>
            <div style={s.formGroup}>
              <label style={s.label}>Nombre completo</label>
              <input style={s.input} placeholder="Tu nombre y apellidos" />
            </div>
            <div style={s.formGroup}>
              <label style={s.label}>País</label>
              <input style={s.input} placeholder="¿Desde qué país nos escribes?" />
            </div>
            <div style={s.formGroup}>
              <label style={s.label}>WhatsApp</label>
              <input style={s.input} placeholder="+57 300 135 0609" />
            </div>
            <div style={s.formGroup}>
              <label style={s.label}>Correo electrónico</label>
              <input style={s.input} placeholder="tu@correo.com" />
            </div>
            <div style={{ ...s.formGroup, gridColumn: "1 / -1" }}>
              <label style={s.label}>¿Qué necesitas?</label>
              <select style={s.select}>
                <option value="">Selecciona el tipo de asunto</option>
                <optgroup label="👨‍👧 Procesos de Familia">
                  <option>Custodia / cuidado personal</option>
                  <option>Cuota alimentaria</option>
                  <option>Divorcio / liquidación de sociedad conyugal</option>
                  <option>Filiación / reconocimiento de paternidad</option>
                </optgroup>
                <optgroup label="⚖️ Procesos Civiles">
                  <option>Proceso ejecutivo / cobro de deuda</option>
                  <option>Recuperación de cartera</option>
                  <option>Asesoría preventiva</option>
                </optgroup>
                <optgroup label="📑 Contratos">
                  <option>Contrato civil</option>
                  <option>Contrato comercial</option>
                  <option>Acuerdo de confidencialidad</option>
                </optgroup>
                <optgroup label="✈️ Derecho Migratorio Colombiano">
                  <option>Visa colombiana para extranjero</option>
                  <option>Permiso de residencia / PEP</option>
                  <option>Trámite ante Migración Colombia</option>
                  <option>Asesoría migratoria Colombia–EE.UU.</option>
                </optgroup>
                <optgroup label="🌍 Trámites para Colombianos en el Exterior">
                  <option>Poder notarial desde el exterior</option>
                  <option>Proceso judicial a distancia</option>
                  <option>Trámite inmobiliario en Colombia</option>
                  <option>Sucesión o herencia</option>
                </optgroup>
                <optgroup label="🇺🇸 Expansión al mercado USA">
                  <option>Quiero llevar mi producto a EE.UU.</option>
                  <option>Necesito trámites / permisos para exportar</option>
                  <option>Busco distribuidores o retailers en EE.UU.</option>
                </optgroup>
                <option>No estoy seguro — necesito orientación</option>
              </select>
            </div>
            <div style={{ ...s.formGroup, gridColumn: "1 / -1" }}>
              <label style={s.label}>Describe tu situación</label>
              <textarea style={s.textarea} placeholder="Cuéntanos qué está pasando y qué necesitas lograr. No te preocupes por los términos legales — escribe con tus palabras..." />
            </div>
            <div style={{ ...s.formGroup, gridColumn: "1 / -1" }}>
              <label style={s.label}>¿Hay alguna urgencia o fecha límite?</label>
              <input style={s.input} placeholder="Ej: audiencia el 15 de julio, producto listo para exportar en agosto..." />
            </div>
            <div style={{ gridColumn: "1 / -1" }}>
              <button style={{ ...s.btnPrimary, width: "100%", padding: "1rem", fontSize: "0.93rem" }}>
                Enviar mi caso para estudio →
              </button>
              <p style={{ fontSize: "0.76rem", color: MUTED, textAlign: "center", marginTop: "0.7rem", fontFamily: "sans-serif" }}>
                También por{" "}<a href="https://wa.me/message/6HM42SCKD7UQC1" style={{ color: GOLD }}>WhatsApp</a>{" "}o al{" "}<a href="tel:+13465418165" style={{ color: GOLD }}>+1 346-541-8165</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section style={s.sectionWhite} id="testimonios">
        <div style={s.inner}>
          <div style={s.sectionLabel}>Resultados reales</div>
          <h2 style={s.h2}>Clientes que confiaron<br />en nosotros</h2>
          <div style={s.divider}></div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1.2rem" }}>
            {[
              { q: "Pensé que nunca podría ver a mi hijo con normalidad. Gracias a su gestión, tenemos un acuerdo de custodia justo.", author: "L. Gómez · Custodia", country: "🇨🇴 Cali, Colombia" },
              { q: "Me ayudaron a meter mi producto al mercado americano desde cero. No solo los trámites — me consiguieron el contacto con el distribuidor correcto.", author: "R. Torres · Expansión USA", country: "🇪🇨 Ecuador" },
              { q: "Recuperé una deuda importante que tenía meses sin pagar. Eficiente, directa y siempre me mantuvo informado del proceso.", author: "C. Morales · Proceso ejecutivo", country: "🇨🇴 Colombia" },
            ].map(t => (
              <div key={t.author} style={s.testCard}>
                <div style={s.stars}>★★★★★</div>
                <blockquote style={s.testQ}>"{t.q}"</blockquote>
                <div style={s.testAuthor}>{t.author}</div>
                <div style={s.testCountry}>{t.country}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={s.footer}>
        <div style={s.footerFirm}>CC Juristas <span style={{ color: GOLD }}>&</span> Asociados</div>
        <div style={s.footerSub}>Abogada Carol Castaño</div>
        <div style={s.footerLoc}>📍 Caney 2, Santiago de Cali · Houston, Texas, EE.UU.</div>
        <div style={s.footerLinks}>
          <a href="mailto:carol.castano@ccjuristasyasociados.com" style={s.footerLink}>carol.castano@ccjuristasyasociados.com</a>
          <a href="tel:+573001350609" style={s.footerLink}>+57 300 135 0609</a>
          <a href="tel:+13465418165" style={s.footerLink}>+1 346-541-8165</a>
        </div>
        <div style={s.footerLinks}>
          {["Facebook", "Instagram", "LinkedIn"].map(n => <a key={n} href="#" style={s.footerLink}>{n}</a>)}
          <a href="https://wa.me/message/6HM42SCKD7UQC1" style={s.footerLink}>WhatsApp</a>
        </div>
        <div style={s.footerCopy}>© 2025 · CC Juristas y Asociados · Todos los derechos reservados</div>
      </footer>

      <a href="https://wa.me/message/6HM42SCKD7UQC1" target="_blank" style={s.waBtn}>💬</a>
    </div>
  );
}
