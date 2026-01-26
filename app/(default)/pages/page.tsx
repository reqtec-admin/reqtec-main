import { redirect } from 'next/navigation'

export default function LegacyPostsIndexRedirect() {
  redirect('/posts')
}
