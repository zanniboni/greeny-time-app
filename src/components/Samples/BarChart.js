import React from 'react';
import { BarChart } from 'react-native-chart-kit';

const data = {
  labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
  datasets: [
    {
      data: [20, 45, 28, 80, 99, 43],
    },
  ],
};

const BarChartComponent = () => (
  <BarChart
    data={data}
    width={350}
    height={220}
    yAxisLabel="$"
    chartConfig={{
      backgroundColor: '#e26a00',
      backgroundGradientFrom: '#fb8c00',
      backgroundGradientTo: '#ffa726',
      decimalPlaces: 0,
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      style: {
        borderRadius: 16,
      },
    }}
    verticalLabelRotation={30}
  />
);

export default BarChartComponent;
