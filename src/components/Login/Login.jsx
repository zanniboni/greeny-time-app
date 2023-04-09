import React from "react";
import { View, StyleSheet, Text, TextInput } from "react-native";
import Header from "../Layout/Header";
import BtnNavigation from "../Home/Navigation/BtnNavigation";

const Login = ({ navigation }) => {
  return (
    <>
      <Header title="Greeny Time" />
      <View style={styles.container}>
        <View>
          <View>
            <Text style={styles.title}>
              {`Bem-vindo(a)! Por favor, faça login para continuar.`}
            </Text>
          </View>
          <View>
            <TextInput style={styles.input} placeholder="E-mail"/>
            <TextInput
              style={styles.input}
              placeholder="Senha"
              secureTextEntry
            />
            <Text style={styles.pass}>Esqueceu sua senha?</Text>
          </View>
        </View>
        <View style={styles.btnContainer}>
          <BtnNavigation
            style={styles.btnStyle}
            title={"Entrar"}
            route={"Home"}
            navigation={navigation}
          />
        </View>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
    alignItems: "center",
    overflow: "hidden",
  },
  input: {
    backgroundColor: "#ddd",
    fontSize: 20,
    borderRadius: 10,
    marginTop: 20,
    height: 50,
    paddingHorizontal: 20,
    maxWidth: "95%",
  },
  btnStyle: {
    color: "white",
    backgroundColor: "#00b894",
    height: 50,
    borderRadius: 10,
    textAlignVertical: "center",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
  },
  btnContainer: {
    width: "100%",
  },
  title: {
    fontSize: 30,
    fontWeight: "600",
    marginTop: 20,
  },
  pass: {
    textAlign: "right",
    marginTop: 20,
    fontWeight: "400",
    fontSize: 15,
  },
});

export default Login;
