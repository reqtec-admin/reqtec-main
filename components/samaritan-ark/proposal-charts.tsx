'use client'

import { Bar } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
  ChartOptions,
} from 'chart.js'
import { cutSurfaces, incidentYears } from '@/data/samaritan-ark-proposal'

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend)

const tooltipDefaults = {
  backgroundColor: 'rgba(8, 40, 65, 0.95)',
  titleColor: '#f8fafc',
  bodyColor: '#f8fafc',
  borderColor: 'rgba(56, 182, 240, 0.3)',
  borderWidth: 1,
  padding: 12,
}

export function DeplatformingBarChart() {
  const options: ChartOptions<'bar'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: '#f8fafc',
          font: { size: 13, family: 'var(--font-inter), sans-serif' },
          padding: 16,
          usePointStyle: true,
        },
      },
      tooltip: tooltipDefaults,
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          color: '#9ba9b4',
          stepSize: 1,
          font: { size: 12, family: 'var(--font-inter), sans-serif' },
        },
        grid: { color: 'rgba(56, 182, 240, 0.1)' },
        title: {
          display: true,
          text: 'Incidents in this sample',
          color: '#9ba9b4',
          font: { size: 12, family: 'var(--font-inter), sans-serif' },
        },
      },
      x: {
        ticks: {
          color: '#f8fafc',
          font: { size: 13, family: 'var(--font-inter), sans-serif', weight: 500 },
        },
        grid: { display: false },
      },
    },
  }

  return (
    <div className="h-72 md:h-80">
      <Bar
        data={{
          labels: [...incidentYears.map((row) => row.year)],
          datasets: [
            {
              label: 'Peak window (venues, banks, YouTube, hosts)',
              data: incidentYears.map((row) => (row.peak ? row.count : 0) as number),
              backgroundColor: '#c4704a',
              borderRadius: 4,
              barPercentage: 0.72,
              stack: 'incidents',
            },
            {
              label: 'Earlier / later reported cases',
              data: incidentYears.map((row) => (row.peak ? 0 : row.count) as number),
              backgroundColor: '#1e4d7b',
              borderRadius: 4,
              barPercentage: 0.72,
              stack: 'incidents',
            },
          ],
        }}
        options={options}
      />
    </div>
  )
}

export function CutSurfaceBarChart() {
  const options: ChartOptions<'bar'> = {
    responsive: true,
    maintainAspectRatio: false,
    indexAxis: 'y',
    plugins: {
      legend: { display: false },
      tooltip: tooltipDefaults,
    },
    scales: {
      x: {
        beginAtZero: true,
        ticks: {
          color: '#9ba9b4',
          stepSize: 2,
          font: { size: 12, family: 'var(--font-inter), sans-serif' },
        },
        grid: { color: 'rgba(56, 182, 240, 0.1)' },
        title: {
          display: true,
          text: 'Cases in this sample',
          color: '#9ba9b4',
          font: { size: 12, family: 'var(--font-inter), sans-serif' },
        },
      },
      y: {
        ticks: {
          color: '#f8fafc',
          font: { size: 13, family: 'var(--font-inter), sans-serif', weight: 500 },
        },
        grid: { display: false },
      },
    },
  }

  return (
    <div className="h-72 md:h-80">
      <Bar
        data={{
          labels: [...cutSurfaces.map((row) => row.label)],
          datasets: [
            {
              data: cutSurfaces.map((row) => row.count),
              backgroundColor: [...cutSurfaces.map((row) => row.color)],
              borderRadius: 4,
              barPercentage: 0.7,
            },
          ],
        }}
        options={options}
      />
    </div>
  )
}
