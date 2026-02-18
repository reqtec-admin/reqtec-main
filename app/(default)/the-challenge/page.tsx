import type { Metadata } from 'next'
import TheChallengeContent from './the-challenge-content'

export const metadata: Metadata = {
  title: 'The Challenge — Political Bias in Technology and the Need for Neutral Alternatives',
  description:
    'The tech industry\'s political homogeneity creates bias in AI systems, hiring practices, and service delivery. REQtec provides a balanced, politically neutral alternative to Big Tech with no political baggage — serving all businesses regardless of beliefs.',
  keywords: [
    'political bias in tech',
    'Big Tech bias',
    'neutral technology',
    'not woke tech company',
    'politically neutral technology',
    'no political baggage',
    'balanced technology provider',
    'alternative to Big Tech',
    'tech industry bias',
    'conservative tech company',
    'unbiased technology services',
    'tech without politics',
    'independent technology',
  ],
  openGraph: {
    title: 'The Challenge — Why Neutral Technology Matters | REQtec',
    description:
      'The political bias in Big Tech creates real risks for businesses. REQtec offers balanced, neutral technology alternatives with no political baggage.',
    url: 'https://reqtec.com/the-challenge',
  },
  alternates: {
    canonical: 'https://reqtec.com/the-challenge',
  },
}

export default function TheChallengePage() {
  return <TheChallengeContent />
}
