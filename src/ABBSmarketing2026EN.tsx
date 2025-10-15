import React, { useEffect, useMemo, useState } from "react";

// ---------------------------------------------------------------------------
// ABB Smarketing 2026 — Single-file React page
// Assets expected under /public:
//   /assets/abb-logo.svg
//   /assets/fonts/ABBvoice-Regular.woff2
//   /assets/fonts/ABBvoice-Bold.woff2
//   /assets/fonts/ABBvoice-Italic.woff2
// ---------------------------------------------------------------------------

type Props = {
  lang: 'es' | 'en'
  onLanguageChange: (lang: 'es' | 'en') => void
}

export default function ABBSmarketing2026EN({ lang, onLanguageChange }: Props) {
  const ids = useMemo(() => [
    "basicos","vision","flujo","inicio30","ejemplo","principios",
    "sprints","trabajo","gobernanza","roles","rituales","kpis",
    "stakeholders","riesgos","normas","glosario","faq","plantillas"
  ], []);

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

  const base = import.meta.env.BASE_URL;
  const toggleClass = (target: 'es' | 'en') => [
    "rounded-xl border px-3 py-2 text-sm font-semibold transition",
    lang === target
      ? "bg-[var(--abb-red)] text-white border-[var(--abb-red)] shadow-sm"
      : "bg-white text-[var(--abb-red)] border-[var(--abb-red)] hover:bg-[var(--abb-red)]/10"
  ].join(" ");

  return (
    <div className="min-h-screen bg-white text-neutral-900">
      
      <header className="sticky top-0 z-50 bg-white text-[var(--ink)] border-b border-[var(--line)] shadow-sm">
        <div className="mx-auto max-w-6xl px-5 py-3 grid grid-cols-[auto_1fr_auto] items-center gap-4">
          <div className="flex items-center">
            <img src={`${base}assets/abb-logo.svg`} alt="ABB" className="h-8 w-auto" onError={(e)=>{(e.currentTarget as HTMLImageElement).style.display='none'}} />
          </div>
          <div className="text-center font-bold tracking-wide text-[var(--abb-red)]">Working Guide — Smarketing Agreement 2026</div>
          <div className="flex items-center justify-end gap-2">
            <button
              type="button"
              onClick={() => onLanguageChange('es')}
              className={toggleClass('es')}
              aria-pressed={lang === 'es'}
            >
              ES
            </button>
            <button
              type="button"
              onClick={() => onLanguageChange('en')}
              className={toggleClass('en')}
              aria-pressed={lang === 'en'}
            >
              EN
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="border-b border-[var(--line)] bg-[var(--paper)]">
        <div className="mx-auto max-w-6xl px-5 py-10 grid grid-cols-1 md:grid-cols-[1.2fr_.8fr] gap-6">
          <div>
            <span className="inline-block rounded-full bg-[var(--abb-red)] px-3 py-1 text-xs font-bold text-white">Solution-focused transformation</span>
            <h1 className="h-headline-short mt-2 text-3xl uppercase md:text-5xl leading-tight">One unified commercial engine for 2026</h1>
            <p className="mt-2 text-[var(--muted)]">
              How Product Marketing and Sales operate as <b>one team</b> to accelerate growth with <b>OKRs</b>,
              <b> sprints</b> and <b>monthly reviews</b>. This page explains everything from scratch with no prior knowledge required.
            </p>
            <p className="mt-3 text-xs text-[var(--muted)]">Updated: October 13, 2025 · ABB Internal Document</p>
          </div>

          <div>
            <div className="rounded-2xl border border-[var(--line)] bg-white p-5">
              <h2 className="text-lg font-semibold">60-second recap</h2>
              <ol className="mt-2 list-decimal space-y-2 pl-4 text-sm">
                <li><b>What it is:</b> "Smarketing" = Sales + Marketing acting as one unified team.</li>
                <li><b>How:</b> clear objectives (OKRs), short work cycles (sprints), and monthly reviews.</li>
                <li><b>Why:</b> less noise, more measurable outcomes with real customers.</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Main layout */}
      <div className="mx-auto max-w-6xl px-5 py-6 grid grid-cols-1 md:grid-cols-[260px_1fr] gap-7">
        {/* TOC */}
        <nav aria-label="Contents" className="sticky top-24 hidden md:block self-start rounded-2xl border border-[var(--line)] bg-white p-4">
          <h3 className="mb-2 text-xs font-semibold uppercase tracking-wide text-[var(--muted)]">Contents</h3>
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

          <Section id="basicos" title="0) In plain language: what is Smarketing and why does it matter?">
            <Callout type="info" title="Core idea">
              <p><b>Smarketing</b> means Sales and Marketing stop working separately. We plan and execute <b>together</b>, with a shared objective and a single board.</p>
            </Callout>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
              <Card title="Before (old habits)">
                <ul className="list-disc pl-5 text-sm space-y-1">
                  <li>Lengthy plans nobody reads.</li>
                  <li>Materials customers never use.</li>
                  <li>Sales asks for one thing, Marketing delivers something else.</li>
                </ul>
              </Card>
              <Card title="Now (Smarketing)">
                <ul className="list-disc pl-5 text-sm space-y-1">
                  <li>Concrete, measurable objectives (OKRs).</li>
                  <li>Short cycles with useful deliverables.</li>
                  <li>Monthly reviews to adjust quickly.</li>
                </ul>
              </Card>
            </div>
          </Section>

          <Section id="vision" title="1) Vision: a new way of working">
            <p>
              We move from siloed annual plans to a living, collaborative <b>Smarketing Agreement 2026</b>. Inspired by the Solution-Focused methodology from the (re)Work program, we define a <b>preferred future</b> and work toward it with small, measurable, concrete steps.
            </p>
            <Details summary="The question that changes the game">
              <p>
                Instead of asking "why did last year's plan fail?", we ask:
                <b> “If a miracle happened overnight and our collaboration were perfect, what would feel different tomorrow?”</b>
                That question opens possibilities and points energy at the outcomes we want.
              </p>
            </Details>
          </Section>

          <Section id="flujo" title="2) How the work flows (from opportunity to learning)">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card title="1. Spot and choose">
                <p className="text-sm">Sales surfaces real opportunities. The Circle picks a <b>small</b> set of priorities with impact.</p>
              </Card>
              <Card title="2. Contract and prepare">
                <p className="text-sm">Contracting session: roles, deliverables, metrics. We build a simple plan with <b>owners</b> and dates.</p>
              </Card>
              <Card title="3. Execute and measure">
                <p className="text-sm">Short sprints, high-usage materials, customer-facing activities. We measure what actually <b>changes</b>.</p>
              </Card>
            </div>
            <Callout type="tip" title="Minimum viable data" className="mt-3">
              <p>To get started you only need: the opportunity, a plain-language objective, 2–3 clear activities, one success measure, and a realistic date.</p>
            </Callout>
          </Section>

          <Section id="inicio30" title="3) Get started in 30 minutes (practical checklist)">
            <ol className="list-decimal pl-5 space-y-2">
              <li><b>Write an objective in plain language.</b> Example: “Have three top panel builders test the new contactor.”</li>
              <li><b>Define 2–3 measurable KRs.</b> Example: “Three pilot tests signed,” “Two demos in the workshop.”</li>
              <li><b>Select 3 useful activities.</b> Example: 2-minute demo video, quick installation guide, joint visit with Sales.</li>
              <li><b>Assign owners and dates.</b> One person per deliverable; avoid “everyone”.</li>
              <li><b>Open the Circle board.</b> Three columns: “To do”, “In progress”, “Done”.</li>
              <li><b>Schedule the monthly review.</b> 30–45 minutes focused on results and decisions.</li>
            </ol>
          </Section>

          <Section id="ejemplo" title="4) Practical example (realistic case)">
            <p className="text-sm">Case: “Levante panel builders — introducing the new contactor.”</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card title="Short plan">
                <ul className="list-disc pl-5 text-sm space-y-1">
                  <li><b>Objective:</b> Become specified by three top panel builders before 30/06.</li>
                  <li><b>KRs:</b> Three pilot tests; two bills of materials featuring our contactor; one accepted comparison chart.</li>
                  <li><b>Activities:</b> 2-minute demo, quick installation guide, joint visit with Sales.</li>
                </ul>
              </Card>
              <Card title="Execution">
                <ul className="list-disc pl-5 text-sm space-y-1">
                  <li>Weeks 1–2: materials ready and validated with a salesperson.</li>
                  <li>Weeks 3–4: two visits and one online demo.</li>
                  <li>Monthly: review results and agree on next steps.</li>
                </ul>
              </Card>
            </div>
          </Section>

          <Section id="principios" title="5) Guiding principles in action">
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
              <Card title="Start with the preferred future">
                <p>We describe our “preferred future” and make it tangible with OKRs.</p>
                <ul className="list-disc pl-5 text-sm mt-2 space-y-1">
                  <li><b>Objective:</b> Become the preferred option for panel builders in Levante.</li>
                  <li><b>KR:</b> Three of the top five panel builders include the new contactor before 30/06.</li>
                </ul>
              </Card>
              <Card title="Leverage what already exists">
                <p>We co-create with people on the ground: Channel leads and Product experts. Installers value <b>speed of installation</b>, so a two-minute video plus visual guide beats a purely technical catalogue.</p>
              </Card>
              <Card title="Co-create with stakeholders">
                <ul className="list-disc pl-5 text-sm space-y-1">
                  <li>What do you need from me to succeed?</li>
                  <li>How will we measure progress together?</li>
                  <li>How do we handle disagreements constructively?</li>
                </ul>
              </Card>
              <Card title="Small, concrete steps">
                <p>We work in short sprints to learn and adjust without stress; experimentation is safe.</p>
              </Card>
              <Card title="Transparency and focus">
                <p>One visible plan, clear priorities, explicit dependencies, and data-driven decisions.</p>
              </Card>
              <Card title="Shared ownership">
                <p>We move from “your plan / my plan” to a <b>shared plan</b>; common language and shared accountability.</p>
              </Card>
            </div>
          </Section>

          <Section id="sprints" title="6) Roadmap (the sprints)">
            <Timeline items={[
              { title: 'Sprint 1 — Jul–Sep 2025', body: 'Build the foundation: psychological safety, define Circles, map stakeholders, and agree on a shared purpose. Status: complete.' },
              { title: 'Sprint 2 — Oct–Dec 2025', body: 'Create the final plan: turn channel opportunities into concrete, prioritised, budgeted action plans — agreement between Sales and Product Marketing. Status: in progress.' },
              { title: 'Sprint 3 — Jan–Mar 2026', body: 'Launch, review, evolve: governance with monthly Circle reviews, ongoing learning, celebrating wins, and real-time adjustments.' },
            ]} />
          </Section>

          <Section id="trabajo" title="7) How we work week to week">
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
              <Card title="Circles">
                <p>Multidisciplinary teams with a shared objective and a prioritised backlog. Full transparency of the plan and dependencies.</p>
              </Card>
              <Card title="Contracting sessions">
                <p>Explicit launch agreements: roles, deliverables, metrics, and communication cadence.</p>
              </Card>
              <Card title="Living OKRs">
                <p>Defined quarterly, reviewed monthly, clear traceability from initiatives to results.</p>
              </Card>
              <Card title="Sprint rituals">
                <ul className="list-disc pl-5 text-sm space-y-1">
                  <li>Biweekly planning based on real capacity.</li>
                  <li>Review/demo focused on usable outcomes.</li>
                  <li>Short retro: what we keep, what we adjust.</li>
                </ul>
              </Card>
            </div>
            <Details summary="Quick OKR template (copy/paste)" className="mt-3">
              <pre className="whitespace-pre-wrap rounded-xl border border-[var(--line)] bg-white p-4 text-sm">{`OBJECTIVE (qualitative): __________________________________________
WHY IT MATTERS (expected impact): ________________________________

KRs (3-4 maximum, measurable):
  - KR1: __________________________________  (date, owner)
  - KR2: __________________________________  (date, owner)
  - KR3: __________________________________  (date, owner)

HEALTH METRICS (rituals, blockers, material usage): _______________
NEXT REVIEW: __________________________  STATUS (G/Y/R): _________
OWNER: ________________________________  CIRCLE: _______________`}</pre>
            </Details>
          </Section>

          <Section id="gobernanza" title="8) Follow-up and governance">
            <ul className="list-disc pl-5 space-y-2">
              <li><b>Monthly Circle review:</b> measure OKRs, surface risks/blockers, take quick decisions.</li>
              <li><b>Single shared board:</b> actions, owners, dates, and budget per initiative.</li>
              <li><b>Dynamic reallocation:</b> stop what is underperforming and shift resources to what works (capacity up to 10% per quarter).</li>
            </ul>
            <Details summary="Monthly review checklist" className="mt-3">
              <ul className="list-disc pl-5 text-sm space-y-1">
                <li>What <b>result</b> did we deliver since the last review? (beyond tasks)</li>
                <li>What <b>adjustment</b> do we make to plan, budget, or focus?</li>
                <li>Which <b>dependencies</b> or risks need a decision today?</li>
                <li>Which <b>lessons</b> become a standard or should be shared?</li>
              </ul>
            </Details>
          </Section>

          <Section id="roles" title="9) Roles and responsibilities">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card title="Product Marketing">
                <ul className="list-disc pl-5 text-sm space-y-1">
                  <li>Co-lead Circle OKR definition.</li>
                  <li>Design and prioritise initiatives focused on commercial impact.</li>
                  <li>Provide high-usage materials (guides, comparisons, demos, BOMs, checklists).</li>
                  <li>Measure material adoption by Sales and customers; iterate fast.</li>
                </ul>
              </Card>
              <Card title="Sales">
                <ul className="list-disc pl-5 text-sm space-y-1">
                  <li>Surface opportunities grounded in customers and channels.</li>
                  <li>Execute customer-facing activities and feed insights back to the Circle.</li>
                  <li>Report outcomes (leads, offers, conversion, wins/losses).</li>
                </ul>
              </Card>
            </div>
            <Details summary="Simplified RACI (who does what)" className="mt-3">
              <ul className="list-disc pl-5 text-sm space-y-1">
                <li><b>Circle OKRs:</b> R=PM+Sales; A=Leadership; C=Channel/TP; I=Comms.</li>
                <li><b>2-minute demo asset:</b> R=PM; A=PM; C=Sales/TP; I=Channel.</li>
                <li><b>Customer visits:</b> R=Sales; A=Sales; C=PM/TP; I=Comms.</li>
              </ul>
            </Details>
          </Section>

          <Section id="rituales" title="10) Rituals and cadence">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card title="Weekly">
                <ul className="list-disc pl-5 text-sm space-y-1">
                  <li>15–20 minute Circle stand-up: focus, blockers, quick decisions.</li>
                  <li>Update the shared board.</li>
                </ul>
              </Card>
              <Card title="Biweekly">
                <ul className="list-disc pl-5 text-sm space-y-1">
                  <li>Sprint planning with real capacity.</li>
                  <li>Short demo of usable progress.</li>
                </ul>
              </Card>
              <Card title="Monthly">
                <ul className="list-disc pl-5 text-sm space-y-1">
                  <li>OKR review + budget reallocation decisions.</li>
                  <li>Lessons learned and standardisation.</li>
                </ul>
              </Card>
            </div>
          </Section>

          <Section id="kpis" title="11) Key metrics (no vanity metrics)">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card title="Execution and value">
                <ul className="list-disc pl-5 text-sm space-y-1">
                  <li>Joint time-to-launch per initiative.</li>
                  <li>Real usage of materials by the sales team.</li>
                  <li>Lead → opportunity conversion (quality, not empty volume).</li>
                  <li>Win rate in prioritised accounts/segments.</li>
                </ul>
              </Card>
              <Card title="System health">
                <ul className="list-disc pl-5 text-sm space-y-1">
                  <li>Cadence of rituals attended (weekly/biweekly/monthly).</li>
                  <li>Blockers resolved vs. new blockers.</li>
                  <li>Percentage of budget reallocated with impact.</li>
                </ul>
              </Card>
            </div>
            <p className="mt-2 text-sm text-[var(--muted)]">We measure outcomes and learning. We adapt without ego.</p>
          </Section>

          <Section id="stakeholders" title="12) Stakeholder map and commitments">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card title="Internal">
                <ul className="list-disc pl-5 text-sm space-y-1">
                  <li>Product Marketing, Sales, Channel, Technical Promotion, Communications.</li>
                  <li>Leadership: unblock and arbitrate when needed.</li>
                </ul>
              </Card>
              <Card title="Customers and partners">
                <ul className="list-disc pl-5 text-sm space-y-1">
                  <li>OEMs, panel builders, installers, distributors, engineering firms.</li>
                  <li>Technology alliances and influencers.</li>
                </ul>
              </Card>
              <Card title="Commitments">
                <ul className="list-disc pl-5 text-sm space-y-1">
                  <li>Contracted expectations per initiative (who/what/when/how).</li>
                  <li>Communication and feedback checklist.</li>
                </ul>
              </Card>
            </div>
          </Section>

          <Section id="riesgos" title="13) Risks and assumptions (and how we handle them)">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card title="Common risks">
                <ul className="list-disc pl-5 text-sm space-y-1">
                  <li>Sliding back into silos due to day-to-day pressure.</li>
                  <li>An endless plan with no real prioritisation.</li>
                  <li>Materials created without usage (poor fit with the field).</li>
                </ul>
              </Card>
              <Card title="System responses">
                <ul className="list-disc pl-5 text-sm space-y-1">
                  <li>Minimum mandatory rituals and dependency transparency.</li>
                  <li>Monthly reviews with the power to stop and reassign.</li>
                  <li>Early validation with channels/customers.</li>
                </ul>
              </Card>
            </div>
            <Callout type="warn" title="Warning sign" className="mt-2">
              <p>If an initiative goes through two reviews without measurable progress, we pause, simplify, or close it.</p>
            </Callout>
          </Section>

          <Section id="normas" title="14) Working agreements and communication (the basics)">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card title="Do">
                <ul className="list-disc pl-5 text-sm space-y-1">
                  <li>Speak clearly and concisely. Use examples.</li>
                  <li>One owner per deliverable. Realistic date.</li>
                  <li>Measure outcomes, not tasks.</li>
                  <li>Share blockers in the stand-up; ask for help early.</li>
                </ul>
              </Card>
              <Card title="Don't">
                <ul className="list-disc pl-5 text-sm space-y-1">
                  <li>Endless documents without usage.</li>
                  <li>“Everyone” as a responsible.</li>
                  <li>Starting ten things at once.</li>
                  <li>Debating without data or without the customer in mind.</li>
                </ul>
              </Card>
            </div>
            <Details summary="Tools (example)" className="mt-3">
              <p className="text-sm">Board (Trello/Planner/Asana), shared folder for materials, OKR and monthly review templates, shared rituals calendar.</p>
            </Details>
          </Section>

          <Section id="glosario" title="15) Minimal glossary">
            <dl className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <Gloss term="Circle" def="Multidisciplinary team with a shared purpose and prioritised backlog." />
              <Gloss term="OKR" def="Objectives and Key Results: qualitative objective plus measurable results." />
              <Gloss term="Contracting session" def="Alignment meeting for roles, expectations, and metrics before starting." />
              <Gloss term="Review/Demo" def="Showing usable outcomes at the end of each sprint." />
              <Gloss term="Monthly review" def="Ceremony to evaluate OKRs, decide reallocations, and standardise learnings." />
              <Gloss term="Backlog" def="Prioritised list of pending work." />
              <Gloss term="Cadence" def="Rhythm of meetings and deliveries (weekly, biweekly, monthly)." />
              <Gloss term="Traffic light" def="Status of an OKR or initiative: green/amber/red depending on progress." />
            </dl>
          </Section>

          <Section id="faq" title="16) Quick FAQ">
            <Details summary="Does this replace the annual plan?">
              <p>No. It connects the plan to commercial reality through sprints, OKRs, and monthly reviews.</p>
            </Details>
            <Details summary="Does it add more work?">
              <p>It reduces bureaucracy and removes low-impact tasks. Less noise, clearer priorities.</p>
            </Details>
            <Details summary="How do we measure success?">
              <p>Outcome KRs (conversion, time to launch, real usage) and data-driven reallocation decisions.</p>
            </Details>
            <Details summary="What if a KR goes off-track?">
              <p>We analyse the cause, simplify the plan, or change the approach. Failing fast and cheaply is part of learning.</p>
            </Details>
          </Section>

          <Section id="plantillas" title="17) Extended templates (copy/paste)">
            <Details summary="Full OKR template">
              <pre className="whitespace-pre-wrap rounded-xl border border-[var(--line)] bg-white p-4 text-sm">{`OBJECTIVE (qualitative): __________________________________________
WHY IT MATTERS (expected impact): ________________________________

KRs (3-4 maximum, measurable):
  - KR1: __________________________________  (date, owner)
  - KR2: __________________________________  (date, owner)
  - KR3: __________________________________  (date, owner)

INITIATIVES (max 5, clear outcome):
  - Initiative 1 -> result sought _________________________________
  - Initiative 2 -> result sought _________________________________
  - Initiative 3 -> result sought _________________________________

HEALTH METRICS (rituals, blockers, usage): ________________________
NEXT REVIEW: __________________________  STATUS (G/Y/R): _________
OWNER: ________________________________  CIRCLE: _______________`}</pre>
            </Details>
            <Details summary="Contracting session template (kickoff)">
              <pre className="whitespace-pre-wrap rounded-xl border border-[var(--line)] bg-white p-4 text-sm">{`INITIATIVE PURPOSE: _____________________________________________
EXPECTED OUTCOME (KR contribution): _______________________________
SCOPE (what's in / out): _________________________________________
DELIVERABLES (definition of done): ________________________________
ROLES (R / A / C / I): _________________________________________
CHECK-IN RITUALS: ________________________________________________
DECISION RIGHTS: ________________________________________________
SUCCESS MEASURES: _______________________________________________
RISKS & DEPENDENCIES: ___________________________________________
NEXT REVIEW: __________________________  STATUS (G/Y/R): _________`}</pre>
            </Details>
            <Details summary="Monthly review agenda">
              <pre className="whitespace-pre-wrap rounded-xl border border-[var(--line)] bg-white p-4 text-sm">{`1) Outcomes since the last review (5-10')
2) Health metrics (rituals, blockers, adoption) (5')
3) Decisions & reallocations needed (10')
4) Standards / learnings to share (5')`}</pre>
            </Details>
          </Section>


          <footer className="pt-6 text-xs text-[var(--muted)]">
            © ABB Electrification — Smart Power · Internal use · This page summarises the “Working Guide: Smarketing Agreement 2026”.
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
    case "basicos": return "0. In plain language";
    case "vision": return "1. Vision";
    case "flujo": return "2. Work flow";
    case "inicio30": return "3. Start in 30'";
    case "ejemplo": return "4. Practical example";
    case "principios": return "5. Principles";
    case "sprints": return "6. Roadmap";
    case "trabajo": return "7. Week to week";
    case "gobernanza": return "8. Governance";
    case "roles": return "9. Roles";
    case "rituales": return "10. Rituals";
    case "kpis": return "11. Metrics";
    case "stakeholders": return "12. Stakeholders";
    case "riesgos": return "13. Risks";
    case "normas": return "14. Agreements";
    case "glosario": return "15. Glossary";
    case "faq": return "16. FAQ";
    case "plantillas": return "17. Templates";
    default: return id;
  }
}
