import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import RegisterSalaryScreen from "./src/components/Salary/Home";
import HomeScreen from "./src/components/Home/HomeScreen";
import WorkHoursScreen from "./src/components/WorkHours/Home";
import WelcomeScreen from "./src/components/WelcomeScreen/WelcomeScreen";
import Login from "./src/components/Login/Login";
import Register from "./src/components/Register/Register";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Bem vindo" component={WelcomeScreen} options={{headerTitleAlign: 'center'}}/>
        <Stack.Screen name="Login" component={Login} options={{headerTitleAlign: 'center'}} />
        <Stack.Screen name="Register" component={Register} options={{headerTitleAlign: 'center'}} />
        <Stack.Screen name="Home" component={HomeScreen} options={{headerTitleAlign: 'center'}} />
        <Stack.Screen name="RegisterSalary" component={RegisterSalaryScreen} options={{headerTitleAlign: 'center'}} />
        <Stack.Screen name="WorkHours" component={WorkHoursScreen} options={{headerTitleAlign: 'center'}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
