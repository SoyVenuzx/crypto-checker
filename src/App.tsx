'use client'

import { CustomBackground } from './components/BackgroundPath/CustomBackground'
import { MainCard } from './components/Card/CardContainer'
import { Header } from './components/Header'
import { ThemeProvider } from './components/theme-provider'

export default function App () {
  return (
    <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
      <Header />
      <div className='min-h-screen relative w-full flex items-center justify-center overflow-hidden bg-white dark:bg-neutral-950'>
        <CustomBackground />
        <MainCard />
      </div>
    </ThemeProvider>
  )
}
