import PostGrid from '@components/PostGrid'

interface PostsPageProps {
  onSelectPost: (slug: string) => void
}

export default function PostsPage({ onSelectPost }: PostsPageProps) {
  return <PostGrid onSelectPost={onSelectPost} />
}
