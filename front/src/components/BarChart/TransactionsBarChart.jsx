import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import { BarChart } from '@mui/x-charts/BarChart';
import "./BarChatr.css"

function TransactionsBarChart({ selectedMonth }) {
  const [chartData, setChartData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchChartData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`https://assesment-hn6f.onrender.com/api/barchart/${selectedMonth.value}`);
      setChartData(response.data);
    } catch (error) {
      setError(error.message || 'An error occurred');
    } finally {
      setLoading(false);
    }
  }, [selectedMonth]);

  useEffect(() => {
    fetchChartData();
  }, [fetchChartData]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!chartData) {
    return null; // Or any other fallback UI
  }

  const barCategories = ["0-100","101-200","201-300","301-400","401-500","501-600","601-700","701-800","801-900",'901-1000'];
  const seriesData = chartData.map(data => data.count);

  return (
   <> 
    <div className='bar-chart'>
    <h1 className='chart-head'>Bar Chart Stats - {selectedMonth.label} </h1> 
      <BarChart
      xAxis={[
        {
          id: 'barCategories',
          data: barCategories,
          scaleType: 'band',
        },
      ]}
      series={[
        {
          data: seriesData,
        },
      ]}
      width={500}
      height={300}
    />
    </div></>
  );
}

export default TransactionsBarChart;
