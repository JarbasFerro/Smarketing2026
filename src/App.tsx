import React, { useState } from 'react'
import ES from './ABBSmarketing2026'
import EN from './ABBSmarketing2026EN'

export default function App() {
  const [lang, setLang] = useState<'es'|'en'>('es')
  return (
    <>
      <div className="fixed top-3 right-3 z-50 flex gap-2">
        <button onClick={()=>setLang('es')} className="rounded-lg border px-2 py-1 bg-white">ES</button>
        <button onClick={()=>setLang('en')} className="rounded-lg border px-2 py-1 bg-white">EN</button>
      </div>
      {lang === 'es' ? <ES/> : <EN/>}
    </>
  )
}
