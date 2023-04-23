import { useState } from 'react';
import React from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  View,
  TextInput,
} from 'react-native';
import DatePicker from 'react-native-modern-datepicker';
import { AntDesign } from '@expo/vector-icons';

const Calendar = ({ parentCallback }) => {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState('');

  const handleOnPress = () => {
    setOpen(!open);
  };
  const handleChange = propDate => {
    setDate(propDate);
    parentCallback(propDate);
  };

  let brazilianDate = date.split('/').reverse().join('/');

  return (
    <View style={styles.container}>
      <View style={styles.dateContainer}>
        <TouchableOpacity onPress={handleOnPress}>
          <Text style={styles.dateLabel}>Data</Text>
          <TextInput editable={false} style={styles.dateContent}>
            {brazilianDate}
          </TextInput>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setDate('')}>
          <Text>
            Apagar
            <AntDesign name="delete" size={24} color="black" />
          </Text>
        </TouchableOpacity>
      </View>

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
  brazilianDate: {
    fontWeight: 'bold',
  },
  dateContainer: {
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'flex-end',
    width: '100%',
    marginRight: 50,
    alignItems: 'center',
  },
  dateContent: {
    width: 100,
    backgroundColor: '#ddd',
    borderRadius: 5,
    height: 40,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'black',
  },
  dateLabel: {
    textAlign: 'center',
    margin: 5,
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Calendar;
