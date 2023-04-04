import * as React from "react";
import { View, StyleSheet } from "react-native";
import Header from "../Layout/Header";
import BtnNavigation from "./Navigation/BtnNavigation";

function HomeScreen({ navigation }) {
  return (
    <View style={styles.mainView}>
      <Header title={"GreenyTime"} />
      <View style={styles.container}>
        <BtnNavigation title={"Registrar Salário"} route={"RegisterSalary"} navigation={navigation} />
        <BtnNavigation title={"Registrar horas"} route={"WorkHours"} navigation={navigation} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainView: {
    display: 'flex',
    alignItems: 'center',
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginTop: 6,
    backgroundColor: "#ddd",
    padding: 20,
    width: 200,
  }
});

export default HomeScreen;
