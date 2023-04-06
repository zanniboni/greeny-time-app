import React from "react";
import { DateReadOnlyInput } from "../DateInput/DateReadOnlyInput";
import { View, StyleSheet } from "react-native";
import Header from "../Layout/Header";
import Formulary from "../Form/Formulary";

const WorkHoursScreen = () => {


  return (
    <View style={styles.container}>
      <View>
        <Header title={"Registrar horas trabalhadas"} />
        <Formulary
          title={"Horas trabalhadas"}
          placeholder={"Digite o número de horas"}/>
      </View>
      <View>
        <DateReadOnlyInput />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  dateComponent:{
    width: 350
  }
});
export default WorkHoursScreen;
