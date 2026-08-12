/* ===== AutoMark — Casos de automatización para marketeros ===== */

const CASOS = [
  {
    icon: "🤖",
    tag: "Captura de leads",
    title: "Chatbot que captura leads 24/7",
    problema: "Los prospectos llegaban de noche o fuera de horario y se perdían. Nadie respondía el formulario en tiempo real.",
    solucion: "Un chatbot en WhatsApp + formulario web conectado al CRM: califica al lead, responde al instante y agenda la llamada.",
    kpi: "+40%",
    kpiLabel: "leads capturados sin fricción",
    color: "#8b5cf6"
  },
  {
    icon: "📧",
    tag: "Nurturing",
    title: "Email nurturing automático",
    problema: "Los leads entraban y nadie les daba seguimiento. Se enfriaban en días.",
    solucion: "Secuencia de 5 correos disparada por comportamiento (descarga, visita, abandono) con contenido segmentado por etapa.",
    kpi: "+30%",
    kpiLabel: "conversión de leads fríos",
    color: "#22d3ee"
  },
  {
    icon: "🎬",
    tag: "Contenido",
    title: "De 1 webinar a 30 piezas de contenido",
    problema: "Grabar un webinar tomaba horas, pero transcribirlo y convertirlo en posts tomaba días enteros.",
    solucion: "IA transcribe el video, genera 30 piezas (posts, hilos, reels scripts, newsletter) y las programa automáticamente.",
    kpi: "10h",
    kpiLabel: "ahorradas por semana",
    color: "#f472b6"
  },
  {
    icon: "📊",
    tag: "Reporting",
    title: "Dashboard de marketing en vivo",
    problema: "Los reportes mensuales se armaban a mano y llegaban tarde. Las decisiones se tomaban con datos viejos.",
    solucion: "Pipeline que junta métricas de ads, web y CRM, genera el dashboard y envía el resumen a Slack/WhatsApp cada mañana.",
    kpi: "Tiempo real",
    kpiLabel: "decisiones con datos frescos",
    color: "#8b5cf6"
  },
  {
    icon: "🎯",
    tag: "IA + Scoring",
    title: "Lead scoring con IA",
    problema: "El equipo vendía a ciegas: no sabía qué lead estaba listo para comprar.",
    solucion: "IA puntúa cada lead según datos (cargo, empresa, comportamiento) y prioriza la cola del equipo comercial.",
    kpi: "+30%",
    kpiLabel: "tasa de cierre",
    color: "#22d3ee"
  },
  {
    icon: "📱",
    tag: "Redes sociales",
    title: "Publicación automática en redes",
    problema: "Crear y publicar contenido en 4 redes cada día consumía toda la mañana.",
    solucion: "Calendario con generación de copy por IA + publicación programada en todas las plataformas desde un solo lugar.",
    kpi: "5 días",
    kpiLabel: "de contenido listo en 1 día",
    color: "#f472b6"
  },
  {
    icon: "🎟️",
    tag: "Eventos",
    title: "Seguimiento post-evento automático",
    problema: "Tras cada webinar, los asistentes se enfriaban y no se convertían en próximos eventos ni ventas.",
    solucion: "Flujo post-evento: email de agradecimiento, encuesta, contenido relacionado y recordatorios de la siguiente fecha.",
    kpi: "+60%",
    kpiLabel: "asistencia a eventos siguientes",
    color: "#8b5cf6"
  },
  {
    icon: "💳",
    tag: "Cobranzas",
    title: "Cobranzas y facturación automática",
    problema: "Enviar facturas y perseguir pagos manualmente generaba retrasos y tensión con clientes.",
    solucion: "Al cerrar la venta: factura se genera, se envía por email/WhatsApp, y los recordatorios de pago salen solos.",
    kpi: "-70%",
    kpiLabel: "retrasos de pago",
    color: "#22d3ee"
  },
  {
    icon: "🔗",
    tag: "CRM + Ads",
    title: "CRM sincronizado con anuncios",
    problema: "Los leads de los ads se registraban a mano en el CRM y se perdían datos en el camino.",
    solucion: "Cada conversión de ads crea el contacto en el CRM, lo asigna a una lista y dispara la campaña de nurturing.",
    kpi: "100%",
    kpiLabel: "de leads sincronizados sin errores",
    color: "#f472b6"
  },
  {
    icon: "🔔",
    tag: "Alertas",
    title: "Alertas de intención de compra",
    problema: "Los clientes mostraban señales de compra (visitas, clics) y nadie lo notaba a tiempo.",
    solucion: "IA detecta señales de alta intención y avisa al equipo por WhatsApp al instante para contactar en el momento justo.",
    kpi: "Minutos",
    kpiLabel: "de reacción en vez de días",
    color: "#8b5cf6"
  }
];

function renderCasos() {
  const grid = document.getElementById('casosGrid');
  grid.innerHTML = CASOS.map((c, i) => `
    <article class="caso-card" style="--card-color: ${c.color}; animation-delay: ${i * 0.05}s">
      <div class="caso-icon">${c.icon}</div>
      <span class="caso-tag">${c.tag}</span>
      <h3 class="caso-title">${c.title}</h3>
      <div class="caso-problema">
        <span class="caso-label">Problema</span>
        <p>${c.problema}</p>
      </div>
      <div class="caso-solucion">
        <span class="caso-label">Solución</span>
        <p>${c.solucion}</p>
      </div>
      <div class="caso-resultado">
        <span class="kpi">${c.kpi}</span>
        <span>${c.kpiLabel}</span>
      </div>
    </article>
  `).join('');
}

function animateCounters() {
  const counters = document.querySelectorAll('.stat-num[data-count]');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = +el.dataset.count;
      let current = 0;
      const step = Math.max(1, Math.round(target / 40));
      const timer = setInterval(() => {
        current += step;
        if (current >= target) { current = target; clearInterval(timer); }
        el.textContent = current;
      }, 30);
      observer.unobserve(el);
    });
  }, { threshold: 0.5 });
  counters.forEach(c => observer.observe(c));
}

document.addEventListener('DOMContentLoaded', () => {
  renderCasos();
  animateCounters();
});
