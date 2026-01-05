'use client'

import type { ReactNode } from 'react'
import { InfoTooltip } from './info-tooltip'

export interface RiskItem {
  name: string
  tooltip: string
}

export interface TermItem {
  name: string
  description: string
}

interface AffiliationSectionProps {
  title: string
  affiliation: string
  chart: ReactNode
  terms: TermItem[]
  termsTitle: string
  risks: RiskItem[]
}

export function AffiliationSection({
  title,
  affiliation,
  chart,
  terms,
  termsTitle,
  risks,
}: AffiliationSectionProps) {
  return (
    <div className="mb-12">
      <h3 className="text-2xl md:text-3xl font-light tracking-wide mb-4 text-gray-100 flex items-center gap-3">
        {title}
        <InfoTooltip
          title={termsTitle}
          ariaLabel={termsTitle}
          content={
            <ul className="space-y-2 text-sm text-gray-300 ml-4 list-disc">
              {terms.map((term, index) => (
                <li key={index}>
                  <span className="font-medium">{term.name}</span>
                  <span className="block text-xs text-gray-400 mt-1">{term.description}</span>
                </li>
              ))}
            </ul>
          }
        />
      </h3>
      <p className="text-lg text-gray-400 mb-6">{affiliation}</p>
      
      {/* Chart */}
      <div className="mb-8 flex justify-center">
        <div className="w-full max-w-md">
          {chart}
        </div>
      </div>

      {/* Risks */}
      <div>
        <h4 className="text-xl font-semibold text-gray-100 mb-3">Risks</h4>
        <ul className="space-y-2 text-base text-gray-300 ml-6 list-disc">
          {risks.map((risk, index) => (
            <li key={index}>
              <span 
                className="risk-tooltip text-gray-200 font-medium" 
                data-tooltip={risk.tooltip}
              >
                {risk.name}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

