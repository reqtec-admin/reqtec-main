import PageIllustration from '@/components/page-illustration'
import Footer from '@/components/ui/footer'

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main>
      <PageIllustration />
      {children}
      <Footer />
    </main>
  )
}
