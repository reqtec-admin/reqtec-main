'use client'

import { ChartData } from 'chart.js'
import DonutChart from './donut-chart'

export default function ProgrammerChart() {
  const chartData: ChartData<'doughnut'> = {
    labels: ['Democrat', 'Republican'],
    datasets: [
      {
        data: [76, 24],
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

  return <DonutChart data={chartData} />
}


