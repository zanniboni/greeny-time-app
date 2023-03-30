import * as React from 'react';
import { View } from 'react-native';
import Header from '../Layout/Header';
import BtnNavigation from './Navigation/BtnNavigation';

function HomeScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center' }}>
        <Header title={"GreenyTime"} />
        <BtnNavigation title={'Registrar Salário'} route={'RegisterSalary'} navigation={navigation}/>
        <BtnNavigation title={'Registrar horas'} route={'WorkHours'} navigation={navigation}/>
        
      </View>
    );
}

export default HomeScreen;