import * as React from 'react';
import { View } from 'react-native';
import Header from '../Layout/Header';
import BtnRegisterSalaryPage from './Navigation/BtnRegisterSalaryPage';

function HomeScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center' }}>
        <Header title={"GreenyTime"} />
        <BtnRegisterSalaryPage navigation={navigation}/>
      </View>
    );
}

export default HomeScreen;