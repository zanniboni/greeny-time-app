import React, { useState } from "react";
import { View, TextInput, StyleSheet, Text, ToastAndroid } from "react-native";
import SaveWorkHourBtn from "./SaveWorkHourBtn";
import validator from "validator";
import { DateReadOnlyInput } from "./DateReadOnlyInput";

const AddWorkHoursForm = () => {
  const [inputValue, setInputValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (text) => {
    setInputValue(text);
    setErrorMessage(isValidPositiveNumber(text));
  };

  const isValidPositiveNumber = (value) => {
    const regex = /^[0-9,.]+$/; // regex para números, vírgulas e pontos
    if (!value) {
      return ''; // retorna string vazia se apagar todo o valor
    } else if (!regex.test(value)) {
      ToastAndroid.show(
        'Por favor, digite apenas números, vírgulas e pontos',
        ToastAndroid.SHORT
      );
      return 'Por favor, digite apenas números, vírgulas e pontos';
    }
    return '';
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.infoText}>Horas trabalhadas</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite o número de horas"
          value={inputValue}
          onChangeText={handleInputChange}
          keyboardType="numeric"
        />
        {errorMessage ? (
          <Text style={styles.errorText}>{errorMessage}</Text>
        ) : null}
        <DateReadOnlyInput />
      </View>
      <SaveWorkHourBtn />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginTop: 20,
    paddingLeft: 10,
    paddingRight: 10,
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    width: "80%",
  },
  infoText: {
    textAlign: "center",
    marginTop: 10,
    fontSize: 24,
  },
  errorText: {
    color: "red",
  },
  toastContainer: {
    backgroundColor: "red",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    marginHorizontal: 20,
    marginVertical: 50,
  },
});

export default AddWorkHoursForm;
