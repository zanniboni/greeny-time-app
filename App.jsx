import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import RegisterSalaryScreen from './src/components/Salary/Home';
import RegisterScreen from './src/components/Register/Register';
import HomeScreen from './src/components/Home/HomeScreen';
import WorkHoursScreen from './src/components/WorkHours/Home';
import WelcomeScreen from './src/components/WelcomeScreen/Home';
import Login from './src/components/Login/Login';
import ExpensesScreen from './src/components/Expenses/ExpensesRegister';
import CategoryScreen from './src/components/Category/Category';
import IncomesScreen from './src/components/Incomes/Incomes';

const Stack = createNativeStackNavigator();
const titleAlign = { headerTitleAlign: 'center' };
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={WelcomeScreen}
          options={titleAlign}
        />
        <Stack.Screen name="Entrar" component={Login} options={titleAlign} />
        <Stack.Screen
          name="Registrar"
          component={RegisterScreen}
          options={titleAlign}
        />
        <Stack.Screen
          name="Início"
          component={HomeScreen}
          options={titleAlign}
        />
        <Stack.Screen
          name="Registro de salário"
          component={RegisterSalaryScreen}
          options={titleAlign}
        />
        <Stack.Screen
          name="Registro de horas trabalhadas"
          component={WorkHoursScreen}
          options={titleAlign}
        />
        <Stack.Screen
          name="Registro de gastos"
          component={ExpensesScreen}
          options={titleAlign}
        />
        <Stack.Screen
          name="Registro de receitas"
          component={IncomesScreen}
          options={titleAlign}
        />
        <Stack.Screen
          name="Categoria"
          component={CategoryScreen}
          options={titleAlign}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
