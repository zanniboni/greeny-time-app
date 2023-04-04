import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import RegisterSalaryScreen from "./src/components/Salary/Home";
import HomeScreen from "./src/components/Home/HomeScreen";
import WorkHoursScreen from "./src/components/WorkHours/Home";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="RegisterSalary" component={RegisterSalaryScreen} />
        <Stack.Screen name="WorkHours" component={WorkHoursScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
