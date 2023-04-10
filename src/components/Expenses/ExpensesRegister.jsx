import React from "react";
import { View, StyleSheet, TextInput, Text } from "react-native";
import Header from "../Layout/Header";
import Formulary from "../Form/Formulary";
import Calendar from "../Calendar/Calendar";
import ComboBox from "../Combobox/Combobox";
import SubmitButton from "../SubmitButton/SubmitButton";

const Expenses = () => {
  return (
    <>
      <Header />
      <View style={styles.container}>
        <Text style={styles.inputLabel}>
            Adicione o gasto
        </Text>
        <TextInput placeholder="Snickers na padaria" style={styles.textInput}/>
        <View style={styles.headingContainer}>

          <Text style={styles.headingText}>Categoria</Text>
          <Text style={styles.headingText}>Valor</Text>
        </View>
        <View style={styles.content}>
          <ComboBox />
          <Formulary
            style={styles.formContainer}
            placeholder={"R$ 10.000,00"}
          />
        </View>
        <Calendar />
        <View style={styles.btn}>
          <SubmitButton />
        </View>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
  },
  formContainer: {
    width: "40%",
  },
  content: {
    justifyContent: "space-between",
    flexDirection: "row",
    marginHorizontal: 10,
    marginTop: 20,
  },
  inputTxt: {
    backgroundColor: "#dddddd99",
    borderRadius: 5,
    paddingHorizontal: 10,
    width: "40%",
  },
  headingContainer: {
    justifyContent: "space-between",
    flexDirection: "row",
    marginHorizontal: 20,
    marginTop: 20,
  },
  headingText: {
    fontSize: 30,
    fontWeight: '600'
  },
  textInput: {
    marginTop: 10,
    backgroundColor: '#dddddd55',
    borderRadius: 10,
    padding: 10,
    fontWeight: 'bold',
    fontSize: 20
  },
  inputLabel: {
    fontSize: 25,
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10,
    fontWeight: '600'
  },
  btn:{
    width: '100%'
  }
});

export default Expenses;
