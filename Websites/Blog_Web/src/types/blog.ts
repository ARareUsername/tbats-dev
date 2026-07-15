export interface BlogPost {
  slug: string
  title: string
  date: string
  heroImage: string
  alt: string
  excerpt: string
  body: string
  tags: string[]
  location: string
  depth?: string
}
