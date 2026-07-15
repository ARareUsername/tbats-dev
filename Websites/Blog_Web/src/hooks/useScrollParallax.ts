import { useScroll, useTransform } from 'framer-motion'

export function useScrollParallax(ref: React.RefObject<HTMLElement | null>, offset: number = 0.5) {
  const { scrollY } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(scrollY, [0, 1], [offset * 100, -offset * 100])

  return { y, scrollY }
}
