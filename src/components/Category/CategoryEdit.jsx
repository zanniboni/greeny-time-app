import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Header from '../Layout/Header';
import { useState } from 'react';
import { Icon } from 'react-native-elements';
import SubmitButton from '../SubmitButton/SubmitButton';

const CategoryEdit = () => {
  const [name, setName] = useState('');
  const categories = [
    'Viagem',
    'Educação',
    'Transporte',
    'Streams',
    'Comida e Bebida',
    'Tecnologia',
    'Esportes',
    'Música',
    'Entretenimento',
    'Finanças',
    'Moda',
    'Arte',
    'Cinema',
    'Negócios',
  ];

  return (
    <>
      <Header />
      <View style={styles.container}>
        <View style={styles.headerContent}>
          <View>
            <Text style={styles.textAlign}>Editar categoria</Text>
          </View>
          <TouchableOpacity>
            <Icon name="trash" type="font-awesome" />
          </TouchableOpacity>
        </View>
        <View>
          <View style={styles.title}>
            <Text>
              <Icon name="pencil" type="font-awesome" />
            </Text>
            <Text>Nome</Text>
          </View>
          <TextInput
            style={styles.textInput}
            onChangeText={text => setName(text)}
            value={name}
          />
        </View>
        <SubmitButton title={'Salvar'} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    marginHorizontal: 20,
    gap: 20,
  },
  headerContent: {
    marginVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  textAlign: {
    textAlign: 'center',
  },
  textInput: {
    borderColor: '#ddd',
    borderBottomWidth: 1,
    height: 50,
  },
  title: {
    flexDirection: 'row',
    gap: 5,
  },
});
export default CategoryEdit;
