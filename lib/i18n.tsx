'use client'

import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import { DEFAULT_LOCALE, LOCALES, messages, type Locale } from './messages'

const STORAGE_KEY = 'savecows.locale'

function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value)
}

type I18nContextValue = {
  locale: Locale
  setLocale: (next: Locale) => void
}

const I18nContext = createContext<I18nContextValue | null>(null)

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(DEFAULT_LOCALE)

  useEffect(() => {
    const stored = typeof window !== 'undefined' ? window.localStorage.getItem(STORAGE_KEY) : null
    if (stored && isLocale(stored)) {
      setLocaleState(stored)
      document.documentElement.lang = stored
      return
    }
    const browser = typeof navigator !== 'undefined' ? navigator.language.slice(0, 2) : ''
    if (isLocale(browser)) {
      setLocaleState(browser)
      document.documentElement.lang = browser
    }
  }, [])

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next)
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(STORAGE_KEY, next)
      document.documentElement.lang = next
    }
  }, [])

  const value = useMemo(() => ({ locale, setLocale }), [locale, setLocale])

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

function useI18nContext(): I18nContextValue {
  const ctx = useContext(I18nContext)
  if (!ctx) {
    // Graceful fallback for anything rendered outside the provider.
    return { locale: DEFAULT_LOCALE, setLocale: () => {} }
  }
  return ctx
}

export function useLocale(): Locale {
  return useI18nContext().locale
}

export function useSetLocale() {
  return useI18nContext().setLocale
}

function resolvePath(obj: unknown, path: string): string | undefined {
  const parts = path.split('.')
  let cur: unknown = obj
  for (const part of parts) {
    if (cur && typeof cur === 'object' && part in (cur as Record<string, unknown>)) {
      cur = (cur as Record<string, unknown>)[part]
    } else {
      return undefined
    }
  }
  return typeof cur === 'string' ? cur : undefined
}

function interpolate(template: string, vars?: Record<string, string | number>): string {
  if (!vars) return template
  return template.replace(/\{(\w+)\}/g, (_, key: string) => {
    const v = vars[key]
    return v === undefined ? `{${key}}` : String(v)
  })
}

export function useTranslations(namespace: string) {
  const { locale } = useI18nContext()
  return useCallback(
    (key: string, vars?: Record<string, string | number>) => {
      const fullPath = `${namespace}.${key}`
      const value =
        resolvePath(messages[locale], fullPath) ??
        resolvePath(messages[DEFAULT_LOCALE], fullPath) ??
        fullPath
      return interpolate(value, vars)
    },
    [locale, namespace],
  )
}
