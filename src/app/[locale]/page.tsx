'use client'

import { useLayoutEffect } from 'react'
import { useTranslations } from 'next-intl'
import { Button } from '@nextui-org/react'
import { useCounterStore } from '@/store/counterStore'
import { useDarkModeStore } from '@/store/darkModeStore'

export default function Page() {
  const t = useTranslations('Home')
  const { count, inc } = useCounterStore()
  const { isDarkMode, setDarkMode, initializeDarkMode } = useDarkModeStore()

  useLayoutEffect(() => {
    initializeDarkMode()
  }, [initializeDarkMode])

  return (
    <main className="dark:bg-black dark:text-red-700">
      <div>{isDarkMode ? 'Dark Mode on' : 'Dark Mode off'}</div>
      <div>{t('title')}</div>
      <h1>Count: {count}</h1>
      <Button onClick={inc}>Increment</Button>
      <Button onClick={() => setDarkMode(!isDarkMode)}>Dark Mode</Button>
    </main>
  )
}
