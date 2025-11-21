'use client'

import { ChartData } from 'chart.js'
import DonutChart from './donut-chart'

interface PoliticalData {
  profession: string
  democrat: number
  republican: number
}

const data: PoliticalData[] = [
  { profession: 'Programmer', democrat: 76, republican: 24 },
  { profession: 'Data Scientist', democrat: 95, republican: 5 },
]

export default function PoliticalDonutChart() {
  // Create separate donut charts for each profession
  const programmerData: ChartData<'doughnut'> = {
    labels: ['Democrat', 'Republican'],
    datasets: [
      {
        data: [data[0].democrat, data[0].republican],
        backgroundColor: [
          'rgba(56, 182, 240, 0.7)', // Blue for Democrat
          'rgba(20, 184, 166, 0.7)', // Teal for Republican
        ],
        borderColor: [
          'rgba(56, 182, 240, 1)',
          'rgba(20, 184, 166, 1)',
        ],
        borderWidth: 2,
      },
    ],
  }

  const dataScientistData: ChartData<'doughnut'> = {
    labels: ['Democrat', 'Republican'],
    datasets: [
      {
        data: [data[1].democrat, data[1].republican],
        backgroundColor: [
          'rgba(56, 182, 240, 0.7)', // Blue for Democrat
          'rgba(20, 184, 166, 0.7)', // Teal for Republican
        ],
        borderColor: [
          'rgba(56, 182, 240, 1)',
          'rgba(20, 184, 166, 1)',
        ],
        borderWidth: 2,
      },
    ],
  }

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div>
        <h3 className="text-lg font-semibold text-gray-100 mb-4 text-center">
          {data[0].profession}
        </h3>
        <DonutChart data={programmerData} />
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-100 mb-4 text-center">
          {data[1].profession}
        </h3>
        <DonutChart data={dataScientistData} />
      </div>
    </div>
  )
}


