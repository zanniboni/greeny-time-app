import React from "react";
import { DateReadOnlyInput } from "./AddWorkHours/DateReadOnlyInput";
import { View, StyleSheet } from "react-native";
import Header from "../Layout/Header";
import AddWorkHoursForm from "./AddWorkHours/AddWorkHoursForm";

const WorkHoursScreen = () => {
  return (
    <View style={styles.container}>
      <View>
        <Header title={'Registrar as horas trabalhadas'} />
        <AddWorkHoursForm />
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
    justifyContent: 'space-between',
  },
});
export default WorkHoursScreen;
