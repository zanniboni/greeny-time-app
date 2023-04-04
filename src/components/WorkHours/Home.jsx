import React from 'react';
import { View } from 'react-native';
import Header from '../Layout/Header';
import AddWorkHoursForm from './AddWorkHours/AddWorkHoursForm';

const WorkHoursScreen = () => {
  return (
    <View>
      <Header title={'Registrar as horas trabalhadas'} />
      <AddWorkHoursForm/>

    </View>
  );
};

export default WorkHoursScreen;