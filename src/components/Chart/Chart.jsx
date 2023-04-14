import React from 'react';
import { BarChart } from 'react-native-chart-kit';
import { View } from 'react-native';

const data = {
  labels: ['Janeiro', 'Fevereiro', 'Março'],
  datasets: [
    {
      data: [333, 222, 300],
      color: (opacity = 1) => `rgba(0, 0, 255, ${opacity})`,
    },
  ],
};

const chartConfig = {
  backgroundGradientFrom: '#fff', // cor do gradiente de fundo
  backgroundGradientTo: '#fff', // cor do gradiente de fundo
  color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`, // cor do texto
};

const GraficoDeBarras = () => {
  return (
    <View>
      <BarChart
        data={data}
        width={350}
        height={220}
        yAxisLabel="$"
        chartConfig={chartConfig}
      />
    </View>
  );
};

export default GraficoDeBarras;
