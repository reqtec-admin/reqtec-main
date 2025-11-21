'use client'

import { Bar } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
  ChartData,
  ChartOptions,
} from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend)

interface BarChartProps {
  data: ChartData<'bar'>
  options?: ChartOptions<'bar'>
  height?: string
}

export default function BarChart({ data, options, height = 'h-64 md:h-80' }: BarChartProps) {
  const defaultOptions: ChartOptions<'bar'> = {
    responsive: true,
    maintainAspectRatio: false,
    indexAxis: 'y' as const,
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          color: '#f8fafc',
          font: {
            size: 14,
            family: 'var(--font-inter), sans-serif',
          },
          padding: 15,
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
      },
    },
    scales: {
      x: {
        beginAtZero: true,
        ticks: {
          color: '#9ba9b4',
          font: {
            size: 12,
            family: 'var(--font-inter), sans-serif',
          },
        },
        grid: {
          color: 'rgba(56, 182, 240, 0.1)',
          lineWidth: 1,
        },
      },
      y: {
        ticks: {
          color: '#f8fafc',
          font: {
            size: 14,
            family: 'var(--font-inter), sans-serif',
            weight: '500',
          },
        },
        grid: {
          display: false,
        },
      },
    },
    ...options,
  }

  return (
    <div className={`w-full ${height}`}>
      <Bar data={data} options={defaultOptions} />
    </div>
  )
}


