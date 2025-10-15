import React, { useEffect, useMemo, useState } from "react";

export default function ABBSmarketing2026EN() {
  const ids = useMemo(() => [
    "basics","vision","flow","start30","example","principles",
    "sprints","work","governance","roles","cadence","metrics",
    "stakeholders","risks","norms","glossary","faq","templates","annexes"
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
            <div className="font-bold tracking-wide">Working Guide — Smarketing Agreement 2026</div>
          </div>
          <button onClick={()=>window.print()} className="rounded-xl border border-white/60 bg-white/10 px-3 py-2 text-sm hover:bg-white/20">Print / PDF</button>
        </div>
      </header>

      <section className="border-b border-[var(--line)] bg-[var(--paper)]">
        <div className="mx-auto max-w-6xl px-5 py-10 grid grid-cols-1 md:grid-cols-[1.2fr_.8fr] gap-6">
          <div>
            <span className="inline-block rounded-full bg-[var(--abb-red)] px-3 py-1 text-xs font-bold text-white">Solution‑focused transformation</span>
            <h1 className="h-headline-short uppercase mt-2 text-3xl md:text-5xl leading-tight">One unified commercial engine for 2026</h1>
            <p className="mt-2 text-[var(--muted)]">How Product Marketing and Sales operate as <b>one team</b> with <b>OKRs</b>, <b>sprints</b> and <b>monthly reviews</b>. Explained from zero.</p>
            <p className="mt-3 text-xs text-[var(--muted)]">Last updated: October 13, 2025 · ABB Internal</p>
          </div>
          <div className="rounded-2xl border border-[var(--line)] bg-white p-5">
            <h2 className="text-lg font-semibold">60‑second summary</h2>
            <ol className="mt-2 list-decimal space-y-2 pl-4 text-sm">
              <li><b>What:</b> “Smarketing” = Sales + Marketing as a single unit.</li>
              <li><b>How:</b> OKRs, sprints, monthly reviews.</li>
              <li><b>Why:</b> less noise, more measurable outcomes with real customers.</li>
            </ol>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-5 py-6 grid grid-cols-1 md:grid-cols-[260px_1fr] gap-7">
        <nav aria-label="Contents" className="sticky top-24 hidden md:block self-start rounded-2xl border border-[var(--line)] bg-white p-4">
          <h3 className="mb-2 text-xs font-semibold uppercase tracking-wide text-[var(--muted)]">Contents</h3>
          <ul className="space-y-1 text-sm">
            {ids.map((id) => (
              <li key={id}>
                <a href={`#${id}`} className={`block rounded-lg px-2 py-1 ${active===id? 'bg-[var(--paper)] text-[var(--abb-red)]' : 'text-inherit hover:bg-[var(--paper)]'}`}>{labelEN(id)}</a>
              </li>
            ))}
          </ul>
        </nav>

        <main className="space-y-5">
          {SectionEN("basics","0) In plain English: what is Smarketing and why it matters",
            `<div class='rounded-xl border border-[var(--abb-red)] bg-white p-3'>
              <div class='text-sm font-semibold'>Core idea</div>
              <div class='mt-1 text-[15px] leading-relaxed'><b>Smarketing</b> = Sales and Marketing plan and execute <b>together</b>, with one goal and one shared board.</div>
            </div>
            <div class='grid grid-cols-1 md:grid-cols-2 gap-4 mt-3'>
              <div class='rounded-2xl border border-[var(--line)] bg-[var(--paper)] p-4'>
                <h4 class='text-[16px] font-semibold'>Before (old way)</h4>
                <ul class='list-disc pl-5 text-sm space-y-1'>
                  <li>Big plans nobody reads.</li>
                  <li>Materials customers don’t use.</li>
                  <li>Sales asks for A, Marketing ships B.</li>
                </ul>
              </div>
              <div class='rounded-2xl border border-[var(--line)] bg-[var(--paper)] p-4'>
                <h4 class='text-[16px] font-semibold'>Now (Smarketing)</h4>
                <ul class='list-disc pl-5 text-sm space-y-1'>
                  <li>Measurable OKRs.</li>
                  <li>Short cycles with useful deliverables.</li>
                  <li>Monthly reviews to adjust quickly.</li>
                </ul>
              </div>
            </div>`
          )}

          {SectionEN("vision","1) Vision: a new way of working",
            `We move from yearly siloed plans to a living, collaborative <b>Smarketing Agreement 2026</b>. We define a <b>preferred future</b> and walk toward it with small, measurable steps.`
          )}

          {SectionEN("flow","2) How the work flows",
            `<div class='grid grid-cols-1 md:grid-cols-3 gap-4'>
              ${CardEN("1. Spot & choose","Sales surfaces real opportunities. The Circle picks a <b>few</b> priorities with impact.")}
              ${CardEN("2. Agree & prepare","Contracting session: roles, deliverables, metrics. Simple plan with <b>owners</b> and dates.")}
              ${CardEN("3. Execute & measure","Short sprints, high‑use materials, customer activities. Measure what <b>changes</b>.")}
            </div>
            <div class='rounded-xl border border-[var(--ok)] bg-white p-3 mt-3'>
              <div class='text-sm font-semibold'>Minimum viable data</div>
              <div class='mt-1 text-[15px] leading-relaxed'>One opportunity, one objective, 2–3 activities, one success measure, a realistic date.</div>
            </div>`
          )}

          {SectionEN("start30","3) Start in 30 minutes (checklist)",
            `<ol class='list-decimal pl-5 space-y-2'>
              <li><b>Plain objective</b>.</li>
              <li><b>2–3 measurable KRs</b>.</li>
              <li><b>3 useful activities</b>.</li>
              <li><b>Owners & dates</b> (one per deliverable).</li>
              <li><b>Circle board</b> (To do / In progress / Done).</li>
              <li><b>Monthly review</b> (30–45 min).</li>
            </ol>`
          )}

          {SectionEN("example","4) Practical example",
            `<p class='text-sm'>“Panel builders — introduce a new contactor”.</p>
            <div class='grid grid-cols-1 md:grid-cols-2 gap-4'>
              ${CardEN("Short plan",
                "<ul class='list-disc pl-5 text-sm space-y-1'><li><b>Objective:</b> Be specified by 3 top panel builders before 06/30.</li><li><b>KRs:</b> 3 pilots; 2 BOMs including our contactor; 1 accepted comparison.</li><li><b>Activities:</b> 2‑min demo; quick install guide; joint visit with Sales.</li></ul>"
              )}
              ${CardEN("Execution",
                "<ul class='list-disc pl-5 text-sm space-y-1'><li>Weeks 1–2: materials ready and validated.</li><li>Weeks 3–4: 2 visits and 1 online demo.</li><li>Monthly: review results and next steps.</li></ul>"
              )}
            </div>`
          )}

          {SectionEN("principles","5) Guiding principles in action",
            `<div class='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4'>
              ${CardEN("Start with the end","“Preferred future” made tangible with OKRs.")}
              ${CardEN("Leverage resources","Co‑create with Channel and Product; prioritize install speed.")}
              ${CardEN("Co‑create","Agree needs, measures, and how to handle disagreements.")}
              ${CardEN("Small steps","Short sprints to learn without overload.")}
              ${CardEN("Transparency & focus","One visible plan, clear priorities, explicit dependencies.")}
              ${CardEN("Shared ownership","From “your plan / my plan” to a shared plan.")}
            </div>`
          )}

          {SectionEN("sprints","6) Roadmap (sprints)",
            `<div class='relative ml-3'>
              <div class='absolute left-[-12px] top-0 h-full w-px bg-[var(--line)]'></div>
              <div class='space-y-4'>
                ${TimelineEN("Sprint 1 — Jul–Sep 2025","Base, Circles, stakeholders, shared purpose. Status: complete.")}
                ${TimelineEN("Sprint 2 — Oct–Dec 2025","Final plan, prioritization, budget. Status: in progress.")}
                ${TimelineEN("Sprint 3 — Jan–Mar 2026","Launch, review, evolve: continuous learning.")}
              </div>
            </div>`
          )}

          {SectionEN("work","7) Week by week",
            `<div class='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4'>
              ${CardEN("Circles","Cross‑functional teams with a prioritized backlog.")}
              ${CardEN("Contracting session","Roles, deliverables, metrics, comms rhythm.")}
              ${CardEN("Living OKRs","Quarterly; monthly review.")}
              ${CardEN("Sprint rituals","Bi‑weekly planning; demo; short retro.")}
            </div>`
          )}

          {SectionEN("governance","8) Tracking & governance",
            `<ul class='list-disc pl-5 space-y-2'>
              <li><b>Monthly Circle review</b> (OKRs, risks, decisions).</li>
              <li><b>Single board</b> (actions, owners, dates, budget).</li>
              <li><b>Dynamic reallocation</b> (stop what doesn’t work).</li>
            </ul>`
          )}

          {SectionEN("roles","9) Roles & responsibilities",
            `<div class='grid grid-cols-1 md:grid-cols-2 gap-4'>
              ${CardEN("Product Marketing","OKRs; prioritization; high‑use materials; measure adoption.")}
              ${CardEN("Sales","Find opportunities; validate messages; run customer activities; report results.")}
            </div>`
          )}

          {SectionEN("cadence","10) Rituals & cadence",
            `<div class='grid grid-cols-1 md:grid-cols-3 gap-4'>
              ${CardEN("Weekly","Stand‑up 15–20'; update the board.")}
              ${CardEN("Bi‑weekly","Planning; short demo.")}
              ${CardEN("Monthly","OKR review; reallocation; lessons learned.")}
            </div>`
          )}

          {SectionEN("metrics","11) Key metrics",
            `<div class='grid grid-cols-1 md:grid-cols-2 gap-4'>
              ${CardEN("Execution & value","Time‑to‑launch; real usage; Lead→Opportunity; Win rate.")}
              ${CardEN("System health","Ritual adherence; blockers resolved; % budget re‑allocated.")}
            </div>`
          )}

          {SectionEN("stakeholders","12) Stakeholders & engagement",
            `<div class='grid grid-cols-1 md:grid-cols-3 gap-4'>
              ${CardEN("Internal","PM, Sales, Channel, TP, Communications; Leadership unblocks.")}
              ${CardEN("Customers & partners","OEMs, panel builders, installers, distributors, engineering firms.")}
              ${CardEN("Engagement","Expectation contracts; comms + feedback checklist.")}
            </div>`
          )}

          {SectionEN("risks","13) Risks & assumptions",
            `<div class='grid grid-cols-1 md:grid-cols-2 gap-4'>
              ${CardEN("Typical risks","Back to silos; infinite plan; materials without usage.")}
              ${CardEN("System responses","Minimum rituals; monthly power to stop; early validation.")}
            </div>
            <div class='rounded-xl border border-[var(--warn)] bg-white p-3 mt-2'>
              <div class='text-sm font-semibold'>Warning sign</div>
              <div class='mt-1 text-[15px] leading-relaxed'>Two reviews without measurable progress → pause, simplify, or close.</div>
            </div>`
          )}

          {SectionEN("norms","14) Working norms & communication",
            `<div class='grid grid-cols-1 md:grid-cols-2 gap-4'>
              ${CardEN("Do","Be clear and brief; one owner per deliverable; measure outcomes; ask for help early.")}
              ${CardEN("Avoid","Long docs; “everyone” responsible; start 10 things; debate without data.")}
            </div>`
          )}

          {SectionEN("glossary","15) Mini glossary",
            `<div class='grid grid-cols-1 md:grid-cols-2 gap-4 text-sm'>
              ${GlossEN("Circle","Cross‑functional team with a prioritized backlog.")}
              ${GlossEN("OKR","Objectives and Key Results.")}
              ${GlossEN("Contracting session","Align roles, expectations, and metrics.")}
              ${GlossEN("Review/Demo","Show usable outcomes each sprint.")}
              ${GlossEN("Monthly review","Evaluate OKRs and reallocate budget.")}
              ${GlossEN("Backlog","Prioritized list of work.")}
              ${GlossEN("Cadence","Rhythm of meetings and deliveries.")}
              ${GlossEN("Traffic light","Status: green/yellow/red.")}
            </div>`
          )}

          {SectionEN("faq","16) Quick FAQ",
            `<details class='rounded-xl border border-[var(--line)] bg-white p-3'><summary class='cursor-pointer font-semibold'>Does this replace the annual plan?</summary><div class='mt-2'>No. It connects it to reality with sprints, OKRs, and monthly reviews.</div></details>
             <details class='rounded-xl border border-[var(--line)] bg-white p-3'><summary class='cursor-pointer font-semibold'>Does it add more work?</summary><div class='mt-2'>It reduces bureaucracy and removes low‑impact tasks.</div></details>
             <details class='rounded-xl border border-[var(--line)] bg-white p-3'><summary class='cursor-pointer font-semibold'>How do we measure success?</summary><div class='mt-2'>KR outcomes and data‑driven reallocation.</div></details>
             <details class='rounded-xl border border-[var(--line)] bg-white p-3'><summary class='cursor-pointer font-semibold'>What if a KR goes off track?</summary><div class='mt-2'>Inspect causes, simplify, or change approach.</div></details>`
          )}

          {SectionEN("templates","17) Templates (copy/paste)",
            `<details class='rounded-xl border border-[var(--line)] bg-white p-3'><summary class='cursor-pointer font-semibold'>Full OKR</summary><pre class='whitespace-pre-wrap rounded-xl border border-[var(--line)] bg-white p-4 text-sm'>OBJECTIVE: __________________________________________
WHY IT MATTERS: ______________________________________
KRs:
  - KR1: ______________________________ (date, owner)
  - KR2: ______________________________ (date, owner)
  - KR3: ______________________________ (date, owner)
PRIORITIZED INITIATIVES: _____________________________</pre></details>`
          )}

          {SectionEN("annexes","18) Annexes",
            `<div class='grid grid-cols-1 lg:grid-cols-2 gap-4'>
              ${CardEN("Monthly Review pack","Cover with OKRs; Top 3 risks; initiatives table with progress, usage, budget, next step.")}
              ${CardEN("Example Circles","Distribution (Installers); Power Conversion OEM (export USA); GenSet OEM (certifications & GTM).")}
            </div>`
          )}

          <footer className="pt-6 text-xs text-[var(--muted)]">
            © ABB Electrification — Smart Power · Internal use. Use “Print / PDF” to export.
          </footer>
        </main>
      </div>
    </div>
  );
}

function SectionEN(id: string, title: string, html: string) {
  return (
    <section id={id} className="rounded-2xl border border-[var(--line)] bg-white p-5">
      <h2 className="mb-2 text-2xl font-semibold">{title}</h2>
      <div className="max-w-none text-[15px] leading-relaxed" dangerouslySetInnerHTML={{__html: html}} />
    </section>
  );
}

function CardEN(title: string, html: string) {
  return `<div class='rounded-2xl border border-[var(--line)] bg-[var(--paper)] p-4'><h4 class='text-[16px] font-semibold'>${title}</h4><div class='mt-1 text-[15px] leading-relaxed'>${html}</div></div>`;
}

function TimelineEN(title: string, body: string) {
  return `<div class='relative'><div class='absolute left-[-18px] top-1 h-3 w-3 rounded-full border-2 border-[var(--abb-red)] bg-white'></div><h4 class='text-[16px] font-semibold'>${title}</h4><p class='mt-1 text-[15px] leading-relaxed'>${body}</p></div>`;
}

function GlossEN(term: string, def: string) {
  return `<div class='rounded-xl border border-[var(--line)] bg-white p-3'><div class='text-sm'><b>${term}:</b> ${def}</div></div>`;
}

function labelEN(id: string) {
  const map: Record<string,string> = {
    basics:"0. In plain English", vision:"1. Vision", flow:"2. Work flow", start30:"3. Start in 30'",
    example:"4. Practical example", principles:"5. Principles", sprints:"6. Roadmap", work:"7. Week by week",
    governance:"8. Governance", roles:"9. Roles", cadence:"10. Cadence", metrics:"11. Metrics",
    stakeholders:"12. Stakeholders", risks:"13. Risks", norms:"14. Norms", glossary:"15. Glossary",
    faq:"16. FAQ", templates:"17. Templates", annexes:"18. Annexes"
  };
  return map[id] ?? id;
}
