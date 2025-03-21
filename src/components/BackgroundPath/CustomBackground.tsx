import BackgroundPaths from './background-paths'

export const CustomBackground = () => {
  return (
    <div className='absolute inset-0 brightness-90'>
      <div className='absolute inset-0 bg-gradient-to-b from-white/50 to-white/90 dark:from-black/50 dark:to-black/90 z-10' />
      <BackgroundPaths />
    </div>
  )
}
