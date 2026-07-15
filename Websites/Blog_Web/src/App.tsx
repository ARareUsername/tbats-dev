import { useMotionValueEvent, useTransform, useScroll } from 'framer-motion'
import { useTheme } from '@hooks/useTheme'
import { useRouter } from '@hooks/useRouter'
import Navbar from '@components/Navbar'
import HeroSection from '@components/HeroSection'
import PostGrid from '@components/PostGrid'
import IndividualPost from '@components/IndividualPost'
import AboutPage from '@components/AboutPage'
import ContactPage from '@components/ContactPage'
import Footer from '@components/Footer'

export default function App() {
  const { theme, toggleTheme } = useTheme()
  const { route, params, navigate } = useRouter()

  const { scrollYProgress } = useScroll()

  const bgColor = useTransform(
    scrollYProgress,
    [0, 0.33, 0.66, 1],
    [
      'var(--zone-surface-bg)',
      'var(--zone-reef-bg)',
      'var(--zone-abyss-bg)',
      'var(--zone-abyss-bg)',
    ],
  )

  useMotionValueEvent(bgColor, 'change', (value) => {
    document.documentElement.style.setProperty('--app-bg', value)
  })

  return (
    <div style={{ backgroundColor: 'var(--app-bg, var(--zone-surface-bg))', minHeight: '100vh', transition: 'background-color 0.6s ease' }}>
      <Navbar
        theme={theme}
        onToggleTheme={toggleTheme}
        onNavigate={navigate}
        currentRoute={route}
      />
      <main>
        {route === 'home' && (
          <>
            <HeroSection />
            <PostGrid onSelectPost={(slug) => navigate('post', { slug })} />
          </>
        )}
        {route === 'post' && params.slug && (
          <IndividualPost slug={params.slug} onBack={() => navigate('home')} />
        )}
        {route === 'about' && <AboutPage />}
        {route === 'contact' && <ContactPage />}
      </main>
      <Footer />
    </div>
  )
}
