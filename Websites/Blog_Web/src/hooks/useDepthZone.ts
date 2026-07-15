import { useScroll, useTransform } from 'framer-motion'

export type DepthZone = 'surface' | 'reef' | 'abyss'

export function useDepthZone() {
  const { scrollYProgress } = useScroll()

  const zone = useTransform(scrollYProgress, [0, 0.33, 0.66, 1], [0, 1, 2, 2])

  const zoneName = useTransform(scrollYProgress, (progress) => {
    if (progress < 0.33) return 'surface' as DepthZone
    if (progress < 0.66) return 'reef' as DepthZone
    return 'abyss' as DepthZone
  })

  return { scrollYProgress, zone, zoneName }
}
