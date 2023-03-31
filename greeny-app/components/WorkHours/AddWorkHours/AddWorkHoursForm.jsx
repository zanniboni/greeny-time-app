import React, { useState } from "react";
import { View, TextInput, StyleSheet, Text, TouchableOpacity } from "react-native";
import CheckBox from "expo-checkbox";

const AddWorkHoursForm = () => {
  const [hours, setHours] = useState("");
  const [isChecked, setChecked] = useState(false);
  const [data, setData] = useState([
    { id: 1, title: "Diário", isChecked: false },
    { id: 2, title: "Semanal", isChecked: false },
    { id: 3, title: "Mensal", isChecked: false },
  ]);

  const handleChecked = (itemId) => {
    const newData = data.map((item) => {
      if (item.id === itemId) {
        return { ...item, isChecked: true };
      } else {
        return { ...item, isChecked: false };
      }
    });
    setData(newData);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.infoText}>Horas trabalhadas</Text>
        <TextInput
          style={styles.input}
          placeholder="Horas trabalhadas"
          value={hours}
          onChangeText={setHours}
        />
      </View>
      <Text style={styles.infoText}>Período</Text>
       <View style={styles.dataContainer}>
      {data.map((item) => (
        <View key={item.id} style={styles.checkBoxItem}>
          <CheckBox style={styles.cbteste}
            value={item.isChecked}
            onValueChange={() => handleChecked(item.id)}
          />
          <Text>{item.title}</Text>
        </View>
      ))}
      </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.btnText}>Enviar</Text>
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  checkBoxItem: {
    justifyContent: 'center',
    flexDirection: 'row',
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginTop: 20,
    paddingLeft: 10,
    paddingRight: 10,

  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer:{ 
    width: '80%',
  },
  infoText: {
    textAlign: 'center',
    marginTop: 10,
    fontSize: 24,
  },
  dataContainer: {
    flexDirection: 'row',
    gap: 45,
    paddingTop: 20
  },
  cbteste: {
    marginRight: 10
  },
  button: {
    backgroundColor: '#00b894',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
    width: '50%',
    marginTop: 20
  },
  btnText:{
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    letterSpacing: 1
  }

})
export default AddWorkHoursForm;
