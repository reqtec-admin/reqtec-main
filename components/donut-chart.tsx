'use client'

import { Doughnut } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartData,
  ChartOptions,
} from 'chart.js'

ChartJS.register(ArcElement, Tooltip, Legend)

interface DonutChartProps {
  data: ChartData<'doughnut'>
  options?: ChartOptions<'doughnut'>
  height?: string
}

export default function DonutChart({ data, options, height = 'h-64 md:h-80' }: DonutChartProps) {
  const defaultOptions: ChartOptions<'doughnut'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'right' as const,
        labels: {
          color: '#f8fafc',
          font: {
            size: 14,
            family: 'var(--font-inter), sans-serif',
          },
          padding: 15,
          usePointStyle: true,
        },
      },
      tooltip: {
        backgroundColor: 'rgba(8, 40, 65, 0.95)',
        titleColor: '#f8fafc',
        bodyColor: '#f8fafc',
        borderColor: 'rgba(56, 182, 240, 0.3)',
        borderWidth: 1,
        padding: 12,
        displayColors: true,
        callbacks: {
          label: function (context) {
            const label = context.label || ''
            const value = context.parsed || 0
            return `${label}: ${value}%`
          },
        },
      },
    },
    cutout: '60%',
    ...options,
  }

  return (
    <div className={`w-full ${height}`}>
      <Doughnut data={data} options={defaultOptions} />
    </div>
  )
}


