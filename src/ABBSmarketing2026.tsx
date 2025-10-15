import React, { useEffect, useMemo, useState } from "react";

export default function ABBSmarketing2026() {
  const ids = useMemo(() => [
    "basicos","vision","flujo","inicio30","ejemplo","principios",
    "sprints","trabajo","gobernanza","roles","rituales","kpis",
    "stakeholders","riesgos","normas","glosario","faq","plantillas","anexos"
  ], []);

  const [active, setActive] = useState(ids[0]);
  useEffect(() => {
    const handler = () => {
      const y = window.scrollY + 140;
      let curr = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= y) curr = id;
      }
      setActive(curr);
    };
    document.addEventListener("scroll", handler, { passive: true });
    handler();
    return () => document.removeEventListener("scroll", handler as any);
  }, [ids]);

  const base = import.meta.env.BASE_URL;

  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <header className="sticky top-0 z-50 bg-[var(--abb-red)] text-white shadow">
        <div className="mx-auto max-w-6xl px-5 py-3 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src={`${base}assets/abb-logo.svg`} alt="ABB" className="h-8 w-auto" onError={(e)=>{(e.currentTarget as HTMLImageElement).style.display='none'}} />
            <div className="font-bold tracking-wide">Guía de Trabajo — Acuerdo Smarketing 2026</div>
          </div>
          <button onClick={()=>window.print()} className="rounded-xl border border-white/60 bg-white/10 px-3 py-2 text-sm hover:bg-white/20">Imprimir / PDF</button>
        </div>
      </header>

      <section className="border-b border-[var(--line)] bg-[var(--paper)]">
        <div className="mx-auto max-w-6xl px-5 py-10 grid grid-cols-1 md:grid-cols-[1.2fr_.8fr] gap-6">
          <div>
            <span className="inline-block rounded-full bg-[var(--abb-red)] px-3 py-1 text-xs font-bold text-white">Transformación basada en soluciones</span>
            <h1 className="h-headline-short uppercase mt-2 text-3xl md:text-5xl leading-tight">Un motor comercial unificado para 2026</h1>
            <p className="mt-2 text-[var(--muted)]">Cómo Product Marketing y Ventas trabajan como <b>un solo equipo</b> con <b>OKRs</b>, <b>sprints</b> y <b>revisiones mensuales</b>. Todo explicado desde cero.</p>
            <p className="mt-3 text-xs text-[var(--muted)]">Actualizado: 13 de octubre de 2025 · Documento interno ABB</p>
          </div>
          <div className="rounded-2xl border border-[var(--line)] bg-white p-5">
            <h2 className="text-lg font-semibold">Resumen en 60 segundos</h2>
            <ol className="mt-2 list-decimal space-y-2 pl-4 text-sm">
              <li><b>Qué:</b> “Smarketing” = Ventas + Marketing como un solo equipo.</li>
              <li><b>Cómo:</b> OKRs, sprints, revisiones mensuales.</li>
              <li><b>Para qué:</b> menos ruido, más resultados medibles con clientes reales.</li>
            </ol>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-5 py-6 grid grid-cols-1 md:grid-cols-[260px_1fr] gap-7">
        <nav aria-label="Índice" className="sticky top-24 hidden md:block self-start rounded-2xl border border-[var(--line)] bg-white p-4">
          <h3 className="mb-2 text-xs font-semibold uppercase tracking-wide text-[var(--muted)]">Contenido</h3>
          <ul className="space-y-1 text-sm">
            {ids.map((id) => (
              <li key={id}>
                <a href={`#${id}`} className={`block rounded-lg px-2 py-1 ${active===id? 'bg-[var(--paper)] text-[var(--abb-red)]' : 'text-inherit hover:bg-[var(--paper)]'}`}>{labelES(id)}</a>
              </li>
            ))}
          </ul>
        </nav>

        <main className="space-y-5">
          {SectionES("basicos","0) En simple: ¿qué es Smarketing y por qué importa?",
            `<div class='rounded-xl border border-[var(--abb-red)] bg-white p-3'>
              <div class='text-sm font-semibold'>Idea clave</div>
              <div class='mt-1 text-[15px] leading-relaxed'>
                <b>Smarketing</b> = Ventas y Marketing planifican y ejecutan <b>juntos</b>, con un objetivo y tablero únicos.
              </div>
            </div>
            <div class='grid grid-cols-1 md:grid-cols-2 gap-4 mt-3'>
              <div class='rounded-2xl border border-[var(--line)] bg-[var(--paper)] p-4'>
                <h4 class='text-[16px] font-semibold'>Antes (forma antigua)</h4>
                <ul class='list-disc pl-5 text-sm space-y-1'>
                  <li>Planes extensos que nadie lee.</li>
                  <li>Materiales que el cliente no usa.</li>
                  <li>Ventas pide una cosa, Marketing entrega otra.</li>
                </ul>
              </div>
              <div class='rounded-2xl border border-[var(--line)] bg-[var(--paper)] p-4'>
                <h4 class='text-[16px] font-semibold'>Ahora (Smarketing)</h4>
                <ul class='list-disc pl-5 text-sm space-y-1'>
                  <li>OKRs concretos y medibles.</li>
                  <li>Ciclos cortos y entregables útiles.</li>
                  <li>Revisiones mensuales para ajustar rápido.</li>
                </ul>
              </div>
            </div>`
          )}

          {SectionES("vision","1) Visión: una nueva forma de trabajar",
            `Pasamos de planes anuales en silos a un <b>Acuerdo Smarketing 2026</b> vivo y colaborativo. Definimos un <b>futuro preferido</b> y avanzamos con pasos pequeños, medibles y concretos.`
          )}

          {SectionES("flujo","2) Cómo fluye el trabajo",
            `<div class='grid grid-cols-1 md:grid-cols-3 gap-4'>
              ${CardES("1. Detectar y elegir","Ventas identifica oportunidades reales. El Círculo elige <b>pocas</b> prioridades con impacto.")}
              ${CardES("2. Acordar y preparar","Sesión de contratación: roles, entregables y métricas. Plan simple con <b>dueños</b> y fechas.")}
              ${CardES("3. Ejecutar y medir","Sprints cortos, materiales de alto uso y actividades con clientes. Medimos lo que <b>cambia</b>.")}
            </div>
            <div class='rounded-xl border border-[var(--ok)] bg-white p-3 mt-3'>
              <div class='text-sm font-semibold'>Dato mínimo viable</div>
              <div class='mt-1 text-[15px] leading-relaxed'>Oportunidad, objetivo simple, 2‑3 actividades, una medida de éxito y fecha realista.</div>
            </div>`
          )}

          {SectionES("inicio30","3) Empezar en 30 minutos (checklist)",
            `<ol class='list-decimal pl-5 space-y-2'>
              <li><b>Objetivo claro</b> (lenguaje normal).</li>
              <li><b>2‑3 KRs medibles</b>.</li>
              <li><b>3 actividades útiles</b>.</li>
              <li><b>Dueños y fechas</b> (uno por entrega).</li>
              <li><b>Tablero del Círculo</b> (Por hacer / En curso / Hecho).</li>
              <li><b>Review mensual</b> (30–45 min).</li>
            </ol>`
          )}

          {SectionES("ejemplo","4) Ejemplo práctico",
            `<p class='text-sm'>“Cuadristas Levante — introducir nuevo contactor”.</p>
            <div class='grid grid-cols-1 md:grid-cols-2 gap-4'>
              ${CardES("Plan corto",
                "<ul class='list-disc pl-5 text-sm space-y-1'><li><b>Objetivo:</b> Ser especificados por 3 cuadristas top antes del 30/06.</li><li><b>KRs:</b> 3 pilotos; 2 listas de materiales con nuestro contactor; 1 comparativa aceptada.</li><li><b>Actividades:</b> demo 2 min; guía rápida; visita conjunta.</li></ul>"
              )}
              ${CardES("Ejecución",
                "<ul class='list-disc pl-5 text-sm space-y-1'><li>Semana 1–2: material listo y validado.</li><li>Semana 3–4: 2 visitas y 1 demo online.</li><li>Mensual: revisión y siguientes pasos.</li></ul>"
              )}
            </div>`
          )}

          {SectionES("principios","5) Principios guía en acción",
            `<div class='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4'>
              ${CardES("Fin en mente","“Futuro preferido” con OKRs tangibles.")}
              ${CardES("Aprovechar recursos","Co‑creación con Canal y Producto; priorizar rapidez de instalación.")}
              ${CardES("Co‑creación","Acordar necesidades, medidas y gestión de desacuerdos.")}
              ${CardES("Pasos pequeños","Sprints cortos para aprender sin agobio.")}
              ${CardES("Transparencia y foco","Plan único, prioridades claras, dependencias visibles.")}
              ${CardES("Propiedad colectiva","Del “tu plan / mi plan” al plan compartido.")}
            </div>`
          )}

          {SectionES("sprints","6) Hoja de ruta (Sprints)",
            `<div class='relative ml-3'>
              <div class='absolute left-[-12px] top-0 h-full w-px bg-[var(--line)]'></div>
              <div class='space-y-4'>
                ${TimelineES("Sprint 1 — Jul–Sep 2025","Base, Círculos, stakeholders, propósito. Estado: completado.")}
                ${TimelineES("Sprint 2 — Oct–Dic 2025","Plan final, priorización y presupuesto. Estado: en curso.")}
                ${TimelineES("Sprint 3 — Ene–Mar 2026","Lanzar, revisar y evolucionar: aprendizaje continuo.")}
              </div>
            </div>`
          )}

          {SectionES("trabajo","7) Semana a semana",
            `<div class='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4'>
              ${CardES("Círculos","Equipo multifuncional con backlog priorizado.")}
              ${CardES("Sesión de contratación","Roles, entregables, métricas y ritmo.")}
              ${CardES("OKRs vivos","Trimestrales; revisión mensual.")}
              ${CardES("Rituales de sprint","Planificación quincenal; demo; retro breve.")}
            </div>`
          )}

          {SectionES("gobernanza","8) Seguimiento y gobernanza",
            `<ul class='list-disc pl-5 space-y-2'>
              <li><b>Revisión mensual por Círculo</b> (OKRs, riesgos, decisiones).</li>
              <li><b>Tablero único</b> (acciones, dueños, fechas, presupuesto).</li>
              <li><b>Reasignación dinámica</b> (parar lo que no rinde).</li>
            </ul>`
          )}

          {SectionES("roles","9) Roles y responsabilidades",
            `<div class='grid grid-cols-1 md:grid-cols-2 gap-4'>
              ${CardES("Product Marketing","OKRs; priorización; materiales de alto uso; medir adopción.")}
              ${CardES("Ventas","Detectar oportunidades; validar mensajes; ejecutar con clientes; reportar resultados.")}
            </div>`
          )}

          {SectionES("rituales","10) Rituales y cadencia",
            `<div class='grid grid-cols-1 md:grid-cols-3 gap-4'>
              ${CardES("Semanal","Stand‑up 15–20'; tablero actualizado.")}
              ${CardES("Quincenal","Planificación; demo breve.")}
              ${CardES("Mensual","Revisión OKRs; reasignación; lecciones.")}
            </div>`
          )}

          {SectionES("kpis","11) Métricas clave",
            `<div class='grid grid-cols-1 md:grid-cols-2 gap-4'>
              ${CardES("Ejecución y valor","Time‑to‑launch; uso real de materiales; Lead→Oportunidad; Win‑rate.")}
              ${CardES("Salud del sistema","Rituales cumplidos; bloqueos resueltos; % presupuesto re‑asignado.")}
            </div>`
          )}

          {SectionES("stakeholders","12) Stakeholders y compromiso",
            `<div class='grid grid-cols-1 md:grid-cols-3 gap-4'>
              ${CardES("Internos","PM, Ventas, Canal, TP, Comunicación; Dirección desbloquea.")}
              ${CardES("Clientes y socios","OEMs, cuadristas, instaladores, distribuidores, ingenierías.")}
              ${CardES("Compromisos","Expectativas por iniciativa; checklist de comunicación y feedback.")}
            </div>`
          )}

          {SectionES("riesgos","13) Riesgos y supuestos",
            `<div class='grid grid-cols-1 md:grid-cols-2 gap-4'>
              ${CardES("Riesgos típicos","Volver a silos; plan infinito; materiales sin uso.")}
              ${CardES("Respuestas del sistema","Rituales mínimos; revisiones con poder; validación temprana.")}
            </div>
            <div class='rounded-xl border border-[var(--warn)] bg-white p-3 mt-2'>
              <div class='text-sm font-semibold'>Señal de alarma</div>
              <div class='mt-1 text-[15px] leading-relaxed'>Dos revisiones sin avance medible → pausar, simplificar o cerrar.</div>
            </div>`
          )}

          {SectionES("normas","14) Normas de trabajo y comunicación",
            `<div class='grid grid-cols-1 md:grid-cols-2 gap-4'>
              ${CardES("Do","Claro y breve; un dueño por entrega; medir resultados; pedir ayuda pronto.")}
              ${CardES("Don't","Documentos largos; “todos” responsables; empezar 10 cosas; debatir sin datos.")}
            </div>`
          )}

          {SectionES("glosario","15) Glosario mínimo",
            `<div class='grid grid-cols-1 md:grid-cols-2 gap-4 text-sm'>
              ${GlossES("Círculo","Equipo multifuncional con backlog priorizado.")}
              ${GlossES("OKR","Objetivos y Resultados Clave.")}
              ${GlossES("Sesión de contratación","Alinear roles, expectativas y métricas.")}
              ${GlossES("Review/Demo","Muestra de resultados utilizables por sprint.")}
              ${GlossES("Revisión mensual","Evaluar OKRs y reasignar presupuesto.")}
              ${GlossES("Backlog","Lista priorizada de trabajo.")}
              ${GlossES("Cadencia","Ritmo de reuniones y entregas.")}
              ${GlossES("Semáforo","Estado: verde/amarillo/rojo.")}
            </div>`
          )}

          {SectionES("faq","16) FAQ / Aclaraciones",
            `<details class='rounded-xl border border-[var(--line)] bg-white p-3'><summary class='cursor-pointer font-semibold'>¿Sustituye el plan anual?</summary><div class='mt-2'>No. Lo conecta a la realidad con sprints, OKRs y revisiones mensuales.</div></details>
             <details class='rounded-xl border border-[var(--line)] bg-white p-3'><summary class='cursor-pointer font-semibold'>¿Añade más trabajo?</summary><div class='mt-2'>Reduce burocracia y elimina tareas de bajo impacto.</div></details>
             <details class='rounded-xl border border-[var(--line)] bg-white p-3'><summary class='cursor-pointer font-semibold'>¿Cómo medimos el éxito?</summary><div class='mt-2'>KRs de resultado y decisiones de re‑asignación con datos.</div></details>
             <details class='rounded-xl border border-[var(--line)] bg-white p-3'><summary class='cursor-pointer font-semibold'>¿Y si un KR va mal?</summary><div class='mt-2'>Analizar causa, simplificar o cambiar enfoque.</div></details>`
          )}

          {SectionES("plantillas","17) Plantillas (copiar/pegar)",
            `<details class='rounded-xl border border-[var(--line)] bg-white p-3'><summary class='cursor-pointer font-semibold'>OKR completa</summary><pre class='whitespace-pre-wrap rounded-xl border border-[var(--line)] bg-white p-4 text-sm'>OBJETIVO: __________________________________________
POR QUÉ IMPORTA: ______________________________________
KRs:
  - KR1: ______________________________ (fecha, dueño)
  - KR2: ______________________________ (fecha, dueño)
  - KR3: ______________________________ (fecha, dueño)
INICIATIVAS PRIORIZADAS: _____________________________</pre></details>`
          )}

          {SectionES("anexos","18) Anexos",
            `<div class='grid grid-cols-1 lg:grid-cols-2 gap-4'>
              ${CardES("Paquete de Revisión Mensual","Portada con OKRs; Top 3 riesgos; tabla de iniciativas con avance, uso, presupuesto, siguiente paso.")}
              ${CardES("Ejemplo de Círculos","Distribución (Instaladores); Power Conversion OEM (export USA); GenSet OEM (homologaciones y GTM).")}
            </div>`
          )}

          <footer className="pt-6 text-xs text-[var(--muted)]">
            © ABB Electrification — Smart Power · Uso interno. “Imprimir / PDF” para exportar.
          </footer>
        </main>
      </div>
    </div>
  );
}

function SectionES(id: string, title: string, html: string) {
  return (
    <section id={id} className="rounded-2xl border border-[var(--line)] bg-white p-5">
      <h2 className="mb-2 text-2xl font-semibold">{title}</h2>
      <div className="max-w-none text-[15px] leading-relaxed" dangerouslySetInnerHTML={{__html: html}} />
    </section>
  );
}

function CardES(title: string, html: string) {
  return `<div class='rounded-2xl border border-[var(--line)] bg-[var(--paper)] p-4'><h4 class='text-[16px] font-semibold'>${title}</h4><div class='mt-1 text-[15px] leading-relaxed'>${html}</div></div>`;
}

function TimelineES(title: string, body: string) {
  return `<div class='relative'><div class='absolute left-[-18px] top-1 h-3 w-3 rounded-full border-2 border-[var(--abb-red)] bg-white'></div><h4 class='text-[16px] font-semibold'>${title}</h4><p class='mt-1 text-[15px] leading-relaxed'>${body}</p></div>`;
}

function GlossES(term: string, def: string) {
  return `<div class='rounded-xl border border-[var(--line)] bg-white p-3'><div class='text-sm'><b>${term}:</b> ${def}</div></div>`;
}

function labelES(id: string) {
  const map: Record<string,string> = {
    basicos:"0. En simple", vision:"1. Visión", flujo:"2. Flujo", inicio30:"3. Empezar en 30'",
    ejemplo:"4. Ejemplo", principios:"5. Principios", sprints:"6. Hoja de ruta", trabajo:"7. Semana a semana",
    gobernanza:"8. Gobernanza", roles:"9. Roles", rituales:"10. Rituales", kpis:"11. Métricas",
    stakeholders:"12. Stakeholders", riesgos:"13. Riesgos", normas:"14. Normas", glosario:"15. Glosario",
    faq:"16. FAQ", plantillas:"17. Plantillas", anexos:"18. Anexos"
  };
  return map[id] ?? id;
}
