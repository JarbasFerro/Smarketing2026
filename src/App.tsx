import React, { useCallback, useState } from 'react'
import ES from './ABBSmarketing2026'
import EN from './ABBSmarketing2026EN'

export default function App() {
  const [lang, setLang] = useState<'es' | 'en'>('en')
  const handleLanguageChange = useCallback((next: 'es' | 'en') => {
    setLang(next)
  }, [])

  return lang === 'es'
    ? <ES lang={lang} onLanguageChange={handleLanguageChange} />
    : <EN lang={lang} onLanguageChange={handleLanguageChange} />
}
