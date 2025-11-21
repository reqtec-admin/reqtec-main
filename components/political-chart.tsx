'use client'

import { ChartData } from 'chart.js'
import BarChart from './bar-chart'

interface PoliticalData {
  profession: string
  democrat: number
  republican: number
}

const data: PoliticalData[] = [
  { profession: 'Programmer', democrat: 76, republican: 24 },
  { profession: 'Data Scientist', democrat: 95, republican: 5 },
]

export default function PoliticalChart() {
  const chartData: ChartData<'bar'> = {
    labels: data.map((d) => d.profession),
    datasets: [
      {
        label: 'Democrat %',
        data: data.map((d) => d.democrat),
        backgroundColor: 'rgba(56, 182, 240, 0.7)',
        borderColor: 'rgba(56, 182, 240, 1)',
        borderWidth: 2,
        borderRadius: 4,
      },
      {
        label: 'Republican %',
        data: data.map((d) => d.republican),
        backgroundColor: 'rgba(20, 184, 166, 0.7)',
        borderColor: 'rgba(20, 184, 166, 1)',
        borderWidth: 2,
        borderRadius: 4,
      },
    ],
  }

  return (
    <BarChart
      data={chartData}
      options={{
        scales: {
          x: {
            max: 100,
            ticks: {
              callback: function (value) {
                return value + '%'
              },
            },
          },
        },
        plugins: {
          tooltip: {
            callbacks: {
              label: function (context) {
                return `${context.dataset.label}: ${context.parsed.x}%`
              },
            },
          },
        },
      }}
    />
  )
}
