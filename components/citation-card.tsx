import type { ReactNode } from 'react'

export interface Citation {
  title: string
  description: string
  source: string
}

interface CitationCardProps {
  citation: Citation
}

export function CitationCard({ citation }: CitationCardProps) {
  return (
    <div className="border-l-2 border-gray-600 pl-6">
      <h3 className="text-xl md:text-2xl font-semibold text-gray-100 mb-3">{citation.title}</h3>
      <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-4">{citation.description}</p>
      <p className="text-base text-gray-500 italic">{citation.source}</p>
    </div>
  )
}

interface CitationListProps {
  citations: Citation[]
}

export function CitationList({ citations }: CitationListProps) {
  return (
    <div className="space-y-8">
      {citations.map((citation, index) => (
        <CitationCard key={index} citation={citation} />
      ))}
    </div>
  )
}

