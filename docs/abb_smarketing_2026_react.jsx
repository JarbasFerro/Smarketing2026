import React, { useEffect, useMemo, useState } from "react";

// ---------------------------------------------------------------------------
// ABB Smarketing 2026 — Single-file React page (BEGINNER-FRIENDLY EXPANDED)
// Brand assets (place in /public as shown or adjust paths below):
//   /assets/abb-logo.svg
//   /assets/fonts/ABBvoice-Regular.woff2
//   /assets/fonts/ABBvoice-Bold.woff2
//   /assets/fonts/ABBvoice-Italic.woff2
// ---------------------------------------------------------------------------

export default function ABBSmarketing2026() {
  // Side nav active section on scroll
  const ids = useMemo(
    () => [
      "basicos",
      "vision",
      "flujo",
      "inicio30",
      "ejemplo",
      "principios",
      "sprints",
      "trabajo",
      "gobernanza",
      "roles",
      "rituales",
      "kpis",
      "stakeholders",
      "riesgos",
      "normas",
      "glosario",
      "faq",
      "plantillas",
      "anexos",
    ],
    []
  );

  const [active, setActive] = useState(ids[0]);
  useEffect(() => {
    const handler = () => {
      const y = window.scrollY + 140;
      let current = ids[0];
      for (const id of ids) {
        const node = document.getElementById(id);
        if (node && node.offsetTop <= y) current = id;
      }
      setActive(current);
    };
    document.addEventListener("scroll", handler, { passive: true });
    handler();
    return () => document.removeEventListener("scroll", handler as any);
  }, [ids]);

  return (
    <div className="min-h-screen bg-white text-neutral-900">
      {/* Global brand styles (ABB Voice + tokens) */}
      <style>{`
        @font-face { font-family: 'ABBvoice'; src: url('/assets/fonts/ABBvoice-Regular.woff2') format('woff2'); font-weight: 400; font-style: normal; font-display: swap; }
        @font-face { font-family: 'ABBvoice'; src: url('/assets/fonts/ABBvoice-Bold.woff2') format('woff2'); font-weight: 700; font-style: normal; font-display: swap; }
        @font-face { font-family: 'ABBvoice'; src: url('/assets/fonts/ABBvoice-Italic.woff2') format('woff2'); font-weight: 400; font-style: italic; font-display: swap; }
        :root{
          --abb-red:#E4002B;
          --ink:#0b0b0b;
          --muted:#5C5C5C;
          --line:#E6E6E6;
          --paper:#F7F7F7;
          --ok:#0E8345;
          --warn:#B45309;
        }
        html, body, #root { font-family: ABBvoice, -apple-system, Segoe UI, Roboto, Inter, Helvetica, Arial, system-ui, 'Apple Color Emoji', 'Segoe UI Emoji'; }
        .abb-link { color: var(--abb-red); text-decoration: none; }
        .abb-link:hover { text-decoration: underline; }
      `}</style>

      {/* Topbar */}
      <header className="sticky top-0 z-50 bg-[var(--abb-red)] text-white shadow">
        <div className="mx-auto max-w-6xl px-5 py-3 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src="/assets/abb-logo.svg" alt="ABB" className="h-8 w-auto" onError={(e)=>{(e.target as HTMLImageElement).style.display='none'}} />
            <div className="font-bold tracking-wide">Guía de Trabajo — Acuerdo Smarketing 2026</div>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={()=>window.print()} className="rounded-xl border border-white/60 bg-white/10 px-3 py-2 text-sm hover:bg-white/20">Imprimir / PDF</button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="border-b border-[var(--line)] bg-[var(--paper)]">
        <div className="mx-auto max-w-6xl px-5 py-10 grid grid-cols-1 md:grid-cols-[1.2fr_.8fr] gap-6">
          <div>
            <span className="inline-block rounded-full bg-[var(--abb-red)] px-3 py-1 text-xs font-bold text-white">Transformación basada en soluciones</span>
            <h1 className="mt-2 text-3xl md:text-5xl font-bold leading-tight">Un motor comercial unificado para 2026</h1>
            <p className="mt-2 text-[var(--muted)]">
              Cómo Product Marketing y Ventas trabajan como <b>un solo equipo</b> para acelerar el crecimiento con <b>OKRs</b>,
              <b> sprints</b> y <b>revisiones mensuales</b>. Este sitio explica todo desde cero, sin suponer conocimientos previos.
            </p>
            {/* No KPI tiles per request */}
            <p className="mt-3 text-xs text-[var(--muted)]">Actualizado: 13 de octubre de 2025 · Documento interno ABB</p>
          </div>

          <div>
            <div className="rounded-2xl border border-[var(--line)] bg-white p-5">
              <h2 className="text-lg font-semibold">Resumen en 60 segundos</h2>
              <ol className="mt-2 list-decimal space-y-2 pl-4 text-sm">
                <li><b>Qué es:</b> "Smarketing" = Sales + Marketing funcionando como un solo equipo.</li>
                <li><b>Cómo:</b> objetivos claros (OKRs), trabajo en ciclos cortos (sprints) y revisiones mensuales.</li>
                <li><b>Para qué:</b> hacer menos ruido y más resultados medibles con clientes reales.</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Main layout */}
      <div className="mx-auto max-w-6xl px-5 py-6 grid grid-cols-1 md:grid-cols-[260px_1fr] gap-7">
        {/* TOC */}
        <nav aria-label="Índice" className="sticky top-24 hidden md:block self-start rounded-2xl border border-[var(--line)] bg-white p-4">
          <h3 className="mb-2 text-xs font-semibold uppercase tracking-wide text-[var(--muted)]">Contenido</h3>
          <ul className="space-y-1 text-sm">
            {ids.map((id) => (
              <li key={id}>
                <a href={`#${id}`} className={`block rounded-lg px-2 py-1 ${active===id? 'bg-[var(--paper)] text-[var(--abb-red)]' : 'text-inherit hover:bg-[var(--paper)]'}`}>{label(id)}</a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Content */}
        <main className="space-y-5">

          {/* Basics for beginners */}
          <Section id="basicos" title="0) En simple: ¿qué es Smarketing y por qué importa?">
            <Callout type="info" title="Idea clave">
              <p><b>Smarketing</b> significa que Ventas y Marketing dejan de trabajar por separado. Se planifica y ejecuta <b>juntos</b>, con un mismo objetivo y un mismo tablero.</p>
            </Callout>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
              <Card title="Antes (formas antiguas)">
                <ul className="list-disc pl-5 text-sm space-y-1">
                  <li>Planes extensos que nadie lee.</li>
                  <li>Materiales que el cliente no usa.</li>
                  <li>Ventas pidiendo una cosa, Marketing entregando otra.</li>
                </ul>
              </Card>
              <Card title="Ahora (Smarketing)">
                <ul className="list-disc pl-5 text-sm space-y-1">
                  <li>Objetivos concretos y medibles (OKRs).</li>
                  <li>Trabajo en ciclos cortos con entregables útiles.</li>
                  <li>Revisiones mensuales para ajustar rápido.</li>
                </ul>
              </Card>
            </div>
          </Section>

          <Section id="vision" title="1) Visión: una nueva forma de trabajar">
            <p>
              Pasamos de planes anuales en silos a un <b>Acuerdo Smarketing 2026</b> vivo y colaborativo. Inspirados por la metodología
              <i> Solution‑Focused</i> del programa (re)Work, definimos un <b>futuro preferido</b> y trabajamos hacia él con pasos
              pequeños, medibles y concretos.
            </p>
            <Details summary="La pregunta que cambia el juego">
              <p>
                En lugar de “¿por qué falló el plan pasado?”, nos preguntamos:
                <b> “Si una noche ocurriera un milagro y nuestra colaboración fuera perfecta, ¿qué notaríamos diferente mañana?”</b>
                Esta pregunta abre posibilidades y focaliza la energía en resultados deseados.
              </p>
            </Details>
          </Section>

          <Section id="flujo" title="2) Cómo fluye el trabajo (de la oportunidad al aprendizaje)">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card title="1. Detectar y elegir">
                <p className="text-sm">Ventas identifica oportunidades reales. El Círculo elige <b>pocas</b> prioridades con impacto.</p>
              </Card>
              <Card title="2. Acordar y preparar">
                <p className="text-sm">Sesión de contratación: roles, entregables, métricas. Se crea un plan simple con <b>dueños</b> y fechas.</p>
              </Card>
              <Card title="3. Ejecutar y medir">
                <p className="text-sm">Sprints cortos, materiales de alto uso y actividades con clientes. Medimos lo que <b>cambia</b>, no solo lo que hacemos.</p>
              </Card>
            </div>
            <Callout type="tip" title="Dato mínimo viable" className="mt-3">
              <p>Para empezar basta con: oportunidad, objetivo simple, 2‑3 actividades claras, una medida de éxito y una fecha realista.</p>
            </Callout>
          </Section>

          <Section id="inicio30" title="3) Empezar en 30 minutos (checklist práctico)">
            <ol className="list-decimal pl-5 space-y-2">
              <li><b>Escribe un objetivo en lenguaje normal.</b> Ej.: “Conseguir que 3 cuadristas prueben el nuevo contactor”.</li>
              <li><b>Define 2‑3 KRs medibles.</b> Ej.: "3 pruebas piloto firmadas", "2 demos en taller".</li>
              <li><b>Elige 3 actividades útiles.</b> Ej.: demo grabada 2 min, comparativa A vs B, visita técnica.</li>
              <li><b>Asigna dueños y fechas.</b> Una persona por entrega; evita “todos”.</li>
              <li><b>Abre el tablero del Círculo.</b> 3 columnas: "Por hacer", "En curso", "Hecho".</li>
              <li><b>Agenda el review mensual.</b> 30–45 min con foco en resultados y decisiones.</li>
            </ol>
          </Section>

          <Section id="ejemplo" title="4) Ejemplo práctico (caso realista)">
            <p className="text-sm">Caso: “Cuadristas Levante — introducir nuevo contactor”.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card title="Plan corto">
                <ul className="list-disc pl-5 text-sm space-y-1">
                  <li><b>Objetivo:</b> Ser especificados por 3 cuadristas top antes del 30/06.</li>
                  <li><b>KRs:</b> 3 pruebas piloto; 2 listas de materiales con nuestro contactor; 1 comparativa aceptada.</li>
                  <li><b>Actividades:</b> demo 2 min; guía de instalación rápida; visita conjunta con Ventas.</li>
                </ul>
              </Card>
              <Card title="Ejecución">
                <ul className="list-disc pl-5 text-sm space-y-1">
                  <li>Semana 1–2: material listo y validado con un vendedor.</li>
                  <li>Semana 3–4: 2 visitas y 1 demo online.</li>
                  <li>Mensual: revisión de resultados y siguientes pasos.</li>
                </ul>
              </Card>
            </div>
          </Section>

          <Section id="principios" title="5) Principios guía en acción">
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
              <Card title="Empezar con el final en mente">
                <p>Definimos nuestro “futuro preferido” y lo hacemos tangible con OKRs.</p>
                <ul className="list-disc pl-5 text-sm mt-2 space-y-1">
                  <li><b>Objetivo:</b> Ser la opción preferida para cuadristas en Levante.</li>
                  <li><b>KR:</b> 3 de los 5 principales cuadristas incluyen el nuevo contactor antes del 30/06.</li>
                </ul>
              </Card>
              <Card title="Aprovechar recursos existentes">
                <p>
                  Co‑creamos con quienes están en el terreno: Jefes de Canal y expertos de Producto. Para instaladores prima la
                  <b> rapidez de instalación</b> → mejor vídeo de 2 min + guía visual que un catálogo solo técnico.
                </p>
              </Card>
              <Card title="Co‑creación con stakeholders">
                <ul className="list-disc pl-5 text-sm space-y-1">
                  <li>¿Qué necesitas de mí para tener éxito?</li>
                  <li>¿Cómo mediremos el progreso juntos?</li>
                  <li>¿Cómo gestionamos desacuerdos constructivamente?</li>
                </ul>
              </Card>
              <Card title="Pasos pequeños y concretos">
                <p>Trabajamos en sprints cortos para aprender y ajustar sin agobio; cultura de experimentación segura.</p>
              </Card>
              <Card title="Transparencia y foco">
                <p>Plan único y visible, priorización clara, dependencias explícitas y decisiones basadas en datos.</p>
              </Card>
              <Card title="Propiedad colectiva">
                <p>Del “tu plan / mi plan” al <b>plan compartido</b>; lenguaje común y pertenencia.</p>
              </Card>
            </div>
          </Section>

          <Section id="sprints" title="6) Hoja de ruta (los Sprints)">
            <Timeline items={[
              { title: 'Sprint 1 — Julio–Sept 2025', body: 'Construir la base: seguridad psicológica, definición de Círculos, mapeo de stakeholders y propósito compartido. Estado: completado.' },
              { title: 'Sprint 2 — Oct–Dic 2025', body: 'Crear el plan final: traducir oportunidades de canal en planes de acción concretos, priorizados y presupuestados — acuerdo entre Ventas y Product Marketing. Estado: en curso.' },
              { title: 'Sprint 3 — Ene–Mar 2026', body: 'Lanzar, revisar y evolucionar: gobernanza con revisiones mensuales por Círculo; aprendizaje continuo, celebración de logros y ajustes en tiempo real.' },
            ]} />
          </Section>

          <Section id="trabajo" title="7) Cómo trabajamos (semana a semana)">
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
              <Card title="Círculos">
                <p>Equipos multifuncionales con objetivo compartido y backlog priorizado. Transparencia total del plan y dependencias.</p>
              </Card>
              <Card title="Sesiones de contratación">
                <p>Acuerdos explícitos de inicio: roles, entregables, métricas y ritmo de comunicación.</p>
              </Card>
              <Card title="OKRs vivos">
                <p>Definidos por trimestre; revisados mensualmente; trazabilidad de iniciativas → resultados.</p>
              </Card>
              <Card title="Rituales de sprint">
                <ul className="list-disc pl-5 text-sm space-y-1">
                  <li>Planificación quincenal según capacidad real.</li>
                  <li>Review/Demo orientado a resultados utilizables.</li>
                  <li>Retro breve: qué mantener y qué ajustar.</li>
                </ul>
              </Card>
            </div>
            <Details summary="Plantilla breve de OKR (copiar/pegar)" className="mt-3">
              <pre className="whitespace-pre-wrap rounded-xl border border-[var(--line)] bg-white p-4 text-sm">{`Objetivo: ______________________________
KR1: __________________________________  (fecha)
KR2: __________________________________  (fecha)
KR3: __________________________________  (fecha)
Iniciativas:
  - __________________________________________
  - __________________________________________
Propietario: __________   Círculo: __________`}</pre>
            </Details>
          </Section>

          <Section id="gobernanza" title="8) Seguimiento y gobernanza">
            <ul className="list-disc pl-5 space-y-2">
              <li><b>Revisión mensual por Círculo:</b> medir OKRs, visibilidad de riesgos/bloqueos, decisiones rápidas.</li>
              <li><b>Tablero único:</b> acciones, responsables, fechas y presupuesto por iniciativa.</li>
              <li><b>Reasignación dinámica:</b> parar lo que no rinde y mover recursos a lo que sí (capacidad hasta 10%/trimestre).</li>
            </ul>
            <Details summary="Checklist de revisión mensual" className="mt-3">
              <ol className="list-decimal pl-5 space-y-2">
                <li>¿Qué <b>resultado</b> conseguimos desde la última revisión? (no solo tareas)</li>
                <li>¿Qué <b>ajuste</b> hacemos en plan, presupuesto o foco?</li>
                <li>¿Qué <b>dependencias</b> y riesgos requieren decisión hoy?</li>
                <li>¿Qué <b>aprendizajes</b> estandarizamos o compartimos?</li>
              </ol>
            </Details>
          </Section>

          <Section id="roles" title="9) Roles y responsabilidades (resumen operativo)">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card title="Product Marketing">
                <ul className="list-disc pl-5 text-sm space-y-1">
                  <li>Co-liderar la definición de OKRs de Círculo.</li>
                  <li>Diseñar y priorizar iniciativas con foco en impacto comercial.</li>
                  <li>Proveer materiales de alto uso (guías, comparativas, demos, BOMs, checklists).</li>
                  <li>Medir adopción de materiales por ventas y clientes; iterar.</li>
                </ul>
              </Card>
              <Card title="Ventas (Canales y Territorios)">
                <ul className="list-disc pl-5 text-sm space-y-1">
                  <li>Identificar oportunidades reales por segmento/cliente.</li>
                  <li>Validar mensajes y materiales para casos de uso concretos.</li>
                  <li>Ejecutar actividades con clientes y retroalimentar el Círculo.</li>
                  <li>Reportar resultados (leads, ofertas, conversión, wins/losses).</li>
                </ul>
              </Card>
            </div>
            <Details summary="RACI simplificado (quién hace qué)" className="mt-3">
              <ul className="list-disc pl-5 text-sm space-y-1">
                <li><b>OKRs de Círculo:</b> R=PM+Ventas; A=Dirección; C=Canal/TP; I=Comunic.</li>
                <li><b>Material demo 2 min:</b> R=PM; A=PM; C=Ventas/TP; I=Canal.</li>
                <li><b>Visitas a cliente:</b> R=Ventas; A=Ventas; C=PM/TP; I=Comunic.</li>
              </ul>
            </Details>
          </Section>

          <Section id="rituales" title="10) Rituales y cadencia">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card title="Semanal">
                <ul className="list-disc pl-5 text-sm space-y-1">
                  <li>Stand‑up de Círculo (15‑20 min): foco, bloqueos, decisiones rápidas.</li>
                  <li>Actualización del tablero único.</li>
                </ul>
              </Card>
              <Card title="Quincenal">
                <ul className="list-disc pl-5 text-sm space-y-1">
                  <li>Planificación de sprint y revisión de capacidad.</li>
                  <li>Demo breve de avances utilizables.</li>
                </ul>
              </Card>
              <Card title="Mensual">
                <ul className="list-disc pl-5 text-sm space-y-1">
                  <li>Revisión de OKRs + decisiones de reasignación presupuestaria.</li>
                  <li>Lecciones aprendidas y estandarización.</li>
                </ul>
              </Card>
            </div>
          </Section>

          <Section id="kpis" title="11) Métricas clave (sin vanity metrics)">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card title="Ejecución y valor">
                <ul className="list-disc pl-5 text-sm space-y-1">
                  <li>Tiempo de lanzamiento conjunto por iniciativa.</li>
                  <li>Uso real de materiales por el equipo de ventas.</li>
                  <li>Lead → oportunidad (calidad, no volumen vacío).</li>
                  <li>Win‑rate en cuentas/segmentos priorizados.</li>
                </ul>
              </Card>
              <Card title="Salud del sistema">
                <ul className="list-disc pl-5 text-sm space-y-1">
                  <li>Ritmo de rituales cumplidos (semanal/quincenal/mensual).</li>
                  <li>Bloqueos resueltos vs. nuevos.</li>
                  <li>Porcentaje de presupuesto re‑asignado con impacto.</li>
                </ul>
              </Card>
            </div>
            <p className="mt-2 text-sm text-[var(--muted)]">Medimos resultado y aprendizaje. Ajustamos sin orgullo de autor.</p>
          </Section>

          <Section id="stakeholders" title="12) Mapa de stakeholders y compromiso">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card title="Internos">
                <ul className="list-disc pl-5 text-sm space-y-1">
                  <li>Product Marketing, Ventas, Canal, Technical Promotion, Comunicación.</li>
                  <li>Dirección: desbloqueo y arbitraje cuando sea necesario.</li>
                </ul>
              </Card>
              <Card title="Clientes y socios">
                <ul className="list-disc pl-5 text-sm space-y-1">
                  <li>OEMs, cuadristas, instaladores, distribuidores, ingenierías.</li>
                  <li>Alianzas tecnológicas y prescriptores.</li>
                </ul>
              </Card>
              <Card title="Compromisos">
                <ul className="list-disc pl-5 text-sm space-y-1">
                  <li>Expectativas contratadas por iniciativa (quién/qué/cuándo/cómo).</li>
                  <li>Checklist de comunicación y feedback.</li>
                </ul>
              </Card>
            </div>
          </Section>

          <Section id="riesgos" title="13) Riesgos y supuestos (y cómo los gestionamos)">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card title="Riesgos típicos">
                <ul className="list-disc pl-5 text-sm space-y-1">
                  <li>Volver a silos por presión del día a día.</li>
                  <li>Plan infinito sin priorización real.</li>
                  <li>Materiales creados sin uso (pobre encaje con el terreno).</li>
                </ul>
              </Card>
              <Card title="Respuestas del sistema">
                <ul className="list-disc pl-5 text-sm space-y-1">
                  <li>Rituales mínimos obligatorios, visibilidad de dependencias.</li>
                  <li>Revisiones mensuales con poder de parar y re‑asignar.</li>
                  <li>Validación temprana con canales/clientes.</li>
                </ul>
              </Card>
            </div>
            <Callout type="warn" title="Señal de alarma" className="mt-2">
              <p>Si una iniciativa acumula dos revisiones sin avance medible, se pausa, se simplifica o se cierra.</p>
            </Callout>
          </Section>

          <Section id="normas" title="14) Normas de trabajo y comunicación (lo básico)">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card title="Do (haz)">
                <ul className="list-disc pl-5 text-sm space-y-1">
                  <li>Habla claro y breve. Usa ejemplos.</li>
                  <li>Un dueño por entrega. Fecha realista.</li>
                  <li>Mide resultados, no tareas.</li>
                  <li>Comparte bloqueos en el stand‑up; pide ayuda pronto.</li>
                </ul>
              </Card>
              <Card title="Don't (evita)">
                <ul className="list-disc pl-5 text-sm space-y-1">
                  <li>Documentos largos sin uso.</li>
                  <li>“Todos” como responsables.</li>
                  <li>Empezar 10 cosas a la vez.</li>
                  <li>Discutir sin datos o sin cliente.</li>
                </ul>
              </Card>
            </div>
            <Details summary="Herramientas (ejemplo)" className="mt-3">
              <p className="text-sm">Tablero (Trello/Planner/Asana), Carpeta compartida para materiales, Plantillas de OKR y Revisión mensual, Calendario común de rituales.</p>
            </Details>
          </Section>

          <Section id="glosario" title="15) Glosario mínimo">
            <dl className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <Gloss term="Círculo" def="Equipo multifuncional con propósito compartido y backlog priorizado." />
              <Gloss term="OKR" def="Objectives and Key Results: objetivo cualitativo + resultados medibles." />
              <Gloss term="Sesión de contratación" def="Encuentro para alinear roles, expectativas y métricas antes de arrancar." />
              <Gloss term="Review/Demo" def="Muestra de resultados utilizables al fin de cada sprint." />
              <Gloss term="Revisión mensual" def="Ceremonia para evaluar OKRs, decidir reasignaciones y estandarizar aprendizajes." />
              <Gloss term="Backlog" def="Lista priorizada de trabajo pendiente." />
              <Gloss term="Cadencia" def="Ritmo de reuniones y entregas (semanal, quincenal, mensual)." />
              <Gloss term="Semáforo" def="Estado de OKR o iniciativa: verde/amarillo/rojo según avance." />
            </dl>
          </Section>

          <Section id="faq" title="16) Preguntas frecuentes (rápidas)">
            <Details summary="¿Esto sustituye el plan anual?">
              <p>No. Lo conecta mejor con la realidad comercial mediante sprints, OKRs y revisiones mensuales.</p>
            </Details>
            <Details summary="¿Añade más trabajo?">
              <p>Reduce burocracia y elimina tareas de bajo impacto. Menos, pero mejor: prioridad clara.</p>
            </Details>
            <Details summary="¿Cómo medimos el éxito?">
              <p>KRs de resultado (conversión, tiempo de lanzamiento, uso real) y decisiones de re‑asignación basadas en datos.</p>
            </Details>
            <Details summary="¿Qué pasa si un KR va mal?">
              <p>Se analiza la causa, se simplifica el plan o se cambia el enfoque. Fallar rápido y barato es parte del aprendizaje.</p>
            </Details>
          </Section>

          <Section id="plantillas" title="17) Plantillas ampliadas (copiar/pegar)">
            <Details summary="Plantilla OKR completa">
              <pre className="whitespace-pre-wrap rounded-xl border border-[var(--line)] bg-white p-4 text-sm">{`OBJETIVO (qualitativo): __________________________________________
POR QUÉ IMPORTA (impacto esperado): ________________________________

KRs (3-4 máximos, medibles):
  - KR1: __________________________________  (fecha, dueño)
  - KR2: __________________________________  (fecha, dueño)
  - KR3: __________________________________  (fecha, dueño)
SUPOSICIONES CLAVE: ________________________________________________
RIESGOS PRINCIPALES: _______________________________________________

INICIATIVAS PRIORIZADAS (MoSCoW):
  [MUST] ___________________________________________________________
  [SHOULD] _________________________________________________________
  [COULD] __________________________________________________________

MÉTRICAS DE SALUD (rituales, bloqueos, uso de materiales): _________`}</pre>
            </Details>
            <Details summary="Plantilla de Sesión de contratación (kickoff)">
              <pre className="whitespace-pre-wrap rounded-xl border border-[var(--line)] bg-white p-4 text-sm">{`PROPÓSITO DE LA INICIATIVA: _______________________________________
ALCANCE (in/out): _________________________________________________
ENTREGABLES CLAVE: ________________________________________________
MÉTRICAS DE ÉXITO: ________________________________________________
ROLES (RACI): ______________________________________________________
CALENDARIO (hitos y rituales): ____________________________________
RIESGOS/BLOQUEOS INICIALES: _______________________________________`}</pre>
            </Details>
            <Details summary="Agenda de Review mensual (30-45 min)">
              <pre className="whitespace-pre-wrap rounded-xl border border-[var(--line)] bg-white p-4 text-sm">{`1) Resultados desde la última revisión (5-10')
2) Top 3 bloqueos/decisiones (10-15')
3) Ajustes de plan/presupuesto (10')
4) Estándares/Aprendizajes a compartir (5')`}</pre>
            </Details>
          </Section>

          <Section id="anexos" title="18) Anexos (ejemplos y atajos)">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <Card title="Paquete de Revisión Mensual (ejemplo)">
                <ul className="list-disc pl-5 text-sm space-y-1">
                  <li>Portada con OKRs + estado semáforo.</li>
                  <li>Top 3 riesgos/bloqueos con propuesta de decisión.</li>
                  <li>Tabla de iniciativas: avance, uso, presupuesto, siguiente paso.</li>
                </ul>
              </Card>
              <Card title="Ejemplo de Círculos">
                <ul className="list-disc pl-5 text-sm space-y-1">
                  <li>Canal Distribución — enfoque Instaladores.</li>
                  <li>OEM Power Conversion — enfoque export USA.</li>
                  <li>GenSet OEM — soporte homologaciones y GTM.</li>
                </ul>
              </Card>
            </div>
          </Section>

          <footer className="pt-6 text-xs text-[var(--muted)]">
            © ABB Electrification — Smart Power · Uso interno · Esta página resume la «Guía de Trabajo: Acuerdo Smarketing 2026». Para imprimir o guardar, use «Imprimir / PDF».
          </footer>
        </main>
      </div>
    </div>
  );
}

// --- Small building blocks --------------------------------------------------
function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="rounded-2xl border border-[var(--line)] bg-white p-5">
      <h2 className="mb-2 text-2xl font-semibold">{title}</h2>
      <div className="prose max-w-none text-[15px] leading-relaxed prose-p:my-2 prose-ul:my-2 prose-ol:my-2">
        {children}
      </div>
    </section>
  );
}

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-[var(--line)] bg-[var(--paper)] p-4">
      <h4 className="text-[16px] font-semibold">{title}</h4>
      <div className="mt-1 text-[15px] leading-relaxed">{children}</div>
    </div>
  );
}

function Details({ summary, children, className = "" }: { summary: string; children: React.ReactNode; className?: string }) {
  return (
    <details className={`rounded-xl border border-[var(--line)] bg-white p-3 ${className}`}>
      <summary className="cursor-pointer select-none font-semibold">{summary}</summary>
      <div className="mt-2 text-[15px] leading-relaxed">{children}</div>
    </details>
  );
}

function Timeline({ items }: { items: { title: string; body: string }[] }) {
  return (
    <div className="relative ml-3">
      <div className="absolute left-[-12px] top-0 h-full w-px bg-[var(--line)]" />
      <div className="space-y-4">
        {items.map((it, i) => (
          <div key={i} className="relative">
            <div className="absolute left-[-18px] top-1 h-3 w-3 rounded-full border-2 border-[var(--abb-red)] bg-white" />
            <h4 className="text-[16px] font-semibold">{it.title}</h4>
            <p className="mt-1 text-[15px] leading-relaxed">{it.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function Gloss({ term, def }: { term: string; def: string }) {
  return (
    <div className="rounded-xl border border-[var(--line)] bg-white p-3">
      <div className="text-sm"><b>{term}:</b> {def}</div>
    </div>
  );
}

function Callout({ type, title, children, className = "" }: { type: 'info'|'tip'|'warn'; title: string; children: React.ReactNode; className?: string }) {
  const color = type === 'warn' ? 'border-[var(--warn)]' : type === 'tip' ? 'border-[var(--ok)]' : 'border-[var(--abb-red)]';
  return (
    <div className={`rounded-xl border ${color} bg-white p-3 ${className}`}>
      <div className="text-sm font-semibold">{title}</div>
      <div className="mt-1 text-[15px] leading-relaxed">{children}</div>
    </div>
  );
}

function label(id: string) {
  switch (id) {
    case "basicos": return "0. En simple";
    case "vision": return "1. Visión";
    case "flujo": return "2. Flujo de trabajo";
    case "inicio30": return "3. Empezar en 30'";
    case "ejemplo": return "4. Ejemplo práctico";
    case "principios": return "5. Principios";
    case "sprints": return "6. Hoja de ruta";
    case "trabajo": return "7. Semana a semana";
    case "gobernanza": return "8. Gobernanza";
    case "roles": return "9. Roles";
    case "rituales": return "10. Rituales";
    case "kpis": return "11. Métricas";
    case "stakeholders": return "12. Stakeholders";
    case "riesgos": return "13. Riesgos";
    case "normas": return "14. Normas";
    case "glosario": return "15. Glosario";
    case "faq": return "16. FAQ";
    case "plantillas": return "17. Plantillas";
    case "anexos": return "18. Anexos";
    default: return id;
  }
}
