import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RegisterSalaryScreen from './components/Salary/Home';
import HomeScreen from './components/Home/HomeScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="RegisterSalary" component={RegisterSalaryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;