import { useEffect, useState } from 'react';
import { Bar, Pie, Doughnut, Radar } from 'react-chartjs-2';
import { 
  Chart as ChartJS, 
  ArcElement, 
  Tooltip, 
  Legend, 
  CategoryScale, 
  LinearScale, 
  BarElement, 
  RadialLinearScale,
  ChartData,
  ChartOptions
} from 'chart.js';
import styles from '@/styles/Home.module.css';

import { TechPoliticsData } from '@/types/techPollitics';

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, RadialLinearScale);

export default function Home() {
  const [techData, setTechData] = useState<TechPoliticsData | null>(null);

  useEffect(() => {
    fetch('/data/techPolitics.json')
      .then(response => response.json())
      .then((data: TechPoliticsData) => setTechData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  if (!techData) return <div>Loading...</div>;

  const { professions } = techData;
  const labels: string[] = professions.map(prof => prof.name);
  const democratData: number[] = professions.map(prof => prof.democrat);
  const republicanData: number[] = professions.map(prof => prof.republican);

  // Chart configurations with types
  const barChartData: ChartData<'bar'> = {
    labels,
    datasets: [
      {
        label: 'Democrat %',
        data: democratData,
        backgroundColor: 'rgba(54, 162, 235, 0.7)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
      {
        label: 'Republican %',
        data: republicanData,
        backgroundColor: 'rgba(255, 99, 132, 0.7)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  };

  const pieChartData: ChartData<'pie'> = {
    labels,
    datasets: [{
      data: democratData,
      backgroundColor: [
        'rgba(54, 162, 235, 0.7)',
        'rgba(75, 192, 192, 0.7)',
        'rgba(153, 102, 255, 0.7)',
        'rgba(255, 159, 64, 0.7)',
      ],
      borderColor: ['#fff'],
      borderWidth: 2,
    }],
  };

  const doughnutChartData: ChartData<'doughnut'> = {
    labels,
    datasets: [{
      data: republicanData,
      backgroundColor: [
        'rgba(255, 99, 132, 0.7)',
        'rgba(255, 205, 86, 0.7)',
        'rgba(201, 203, 207, 0.7)',
        'rgba(255, 159, 64, 0.7)',
      ],
      borderColor: ['#fff'],
      borderWidth: 2,
    }],
  };

  const radarChartData: ChartData<'radar'> = {
    labels,
    datasets: [
      {
        label: 'Democrat %',
        data: democratData,
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 2,
      },
      {
        label: 'Republican %',
        data: republicanData,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 2,
      },
    ],
  };

  const options: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: '#333',
          font: {
            size: 14
          }
        }
      },
      title: {
        display: true,
        color: '#333',
        font: {
          size: 18
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        ticks: {
          color: '#333'
        }
      },
      x: {
        ticks: {
          color: '#333'
        }
      }
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Tech Profession Political Leanings</h1>
      
      <div className={styles.chartContainer}>
        <h2>Comparison Bar Chart</h2>
        <div className={styles.chartWrapper}>
          <Bar 
            data={barChartData} 
            options={{
              ...options,
              plugins: {
                ...options.plugins,
                title: { ...options.plugins?.title, text: 'Democrat vs Republican by Profession' }
              }
            } as ChartOptions<'bar'>}
          />
        </div>
      </div>

      <div className={styles.chartContainer}>
        <h2>Democrat Distribution (Pie)</h2>
        <div className={styles.chartWrapper}>
          <Pie 
            data={pieChartData} 
            options={{
              ...options,
              plugins: {
                ...options.plugins,
                title: { ...options.plugins?.title, text: 'Democrat Distribution' }
              }
            } as ChartOptions<'pie'>}
          />
        </div>
      </div>

      <div className={styles.chartContainer}>
        <h2>Republican Distribution (Doughnut)</h2>
        <div className={styles.chartWrapper}>
          <Doughnut 
            data={doughnutChartData} 
            options={{
              ...options,
              plugins: {
                ...options.plugins,
                title: { ...options.plugins?.title, text: 'Republican Distribution' }
              }
            } as ChartOptions<'doughnut'>}
          />
        </div>
      </div>

      <div className={styles.chartContainer}>
        <h2>Radar Comparison</h2>
        <div className={styles.chartWrapper}>
          <Radar 
            data={radarChartData} 
            options={{
              ...options,
              plugins: {
                ...options.plugins,
                title: { ...options.plugins?.title, text: 'Political Leanings Comparison' }
              }
            } as ChartOptions<'radar'>}
          />
        </div>
      </div>
    </div>
  );
}