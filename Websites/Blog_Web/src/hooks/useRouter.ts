import { useState, useCallback } from 'react'

type Route = 'home' | 'posts' | 'depths' | 'about' | 'contact' | 'post'

export function useRouter() {
  const [route, setRoute] = useState<Route>('home')
  const [params, setParams] = useState<Record<string, string>>({})

  const navigate = useCallback((path: string, extraParams?: Record<string, string>) => {
    setRoute(path as Route)
    if (extraParams) setParams(extraParams)
    else setParams({})
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  return { route, params, navigate }
}
