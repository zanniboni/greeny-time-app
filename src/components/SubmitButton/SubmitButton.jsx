import { Text, StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";

const SubmitButton = () => {
  return (

      <TouchableOpacity style={styles.button}>
        <Text style={styles.btnText}>Enviar</Text>
      </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container:{
    alignItems: 'center'
  },
  button: {
    backgroundColor: "#00b894",
    borderRadius: 5,
    padding: 10,
    alignItems: "center",
    width: "100%",
    marginTop: 20,
  },
  btnText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
    letterSpacing: 1,
  },
});

export default SubmitButton;
