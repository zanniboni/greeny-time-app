import React from "react";
import moment from "moment-timezone";
import { TextInput, StyleSheet } from "react-native";
import { useEffect, useState } from "react";

export const DateReadOnlyInput = () => {
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(moment().tz("America/Sao_Paulo").format("DD/MM/YYYY HH:mm"));
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  const [currentDate, setCurrentDate] = useState(moment().tz("America/Sao_Paulo").format("DD/MM/YYYY HH:mm"));

  return <TextInput value={currentDate} style={styles.inputText} editable={false} onChangeText={setCurrentDate} />; //readonly (editable false)
};

const styles = StyleSheet.create({
  inputText: {
    color: "#222"
  }
});