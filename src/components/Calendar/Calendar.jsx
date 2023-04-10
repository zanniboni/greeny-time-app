import { useState } from 'react';
import React from 'react';
import { Text, StyleSheet, TouchableOpacity, Modal, View } from 'react-native';
import DatePicker from 'react-native-modern-datepicker';

const Calendar = () => {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState('');

  function handleOnPress() {
    setOpen(!open);
  }
  function handleChange(propDate) {
    setDate(propDate);
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleOnPress}>
        <Text style={styles.title}>Selecione a data clicando aqui</Text>
      </TouchableOpacity>
      <Modal animationType="slide" transparent={true} visible={open}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <DatePicker
              mode="calendar"
              selected={date}
              onDateChange={handleChange}
            />
            <TouchableOpacity onPress={handleOnPress}>
              <Text>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  centeredView: {
    justifyContent: 'center',
    alignContent: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    width: '80%',
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  title: {
    margin: 20,
    fontSize: 20,
  },
});

export default Calendar;
