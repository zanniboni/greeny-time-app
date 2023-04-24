import React from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
} from 'react-native';
import { useState } from 'react';
import Header from '../Layout/Header';
import useFetch from '../../hooks/useFetch';
import { baseUrl } from '../../enviroments/enviroment';

const CategoryScreen = () => {
  const [description, setDescription] = useState('');
  const [name, setName] = useState('');
  const { loading, error, data, fetchData } = useFetch();

  const handlePress = () => {
    fetchData({
      url: `${baseUrl}/category`,
      method: 'POST',
      body: JSON.stringify({
        name: name,
        description: description,
      }),
    });
  };

  return (
    <>
      <Header />
      <View style={styles.container}>
        <View style={styles.content}>
          <Text>Digite a categoria</Text>
          <TextInput
            placeholder="Vendas"
            style={styles.textInput}
            value={name}
            onChangeText={text => setName(text)}
          />
          <Text>Deixe uma breve descrição sobre a categoria</Text>
          <TextInput
            style={styles.description}
            multiline={true}
            numberOfLines={4}
            onChangeText={text => setDescription(text)}
            value={description}
          />
          <TouchableOpacity style={styles.button} onPress={handlePress}>
            <Text style={styles.btnText}>Enviar</Text>
            {loading && <Text>Loading...</Text>}
            {error && <Text>Error: {error.message}</Text>}
            {data && []}
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  content: {
    alignItems: 'center',
  },
  formContainer: {
    width: '80%',
  },
  btn: {
    width: '100%',
  },
  textInput: {
    marginTop: 10,
    backgroundColor: '#dddddd55',
    borderRadius: 10,
    padding: 10,
    fontWeight: 'bold',
    fontSize: 20,
    width: '100%',
  },
  description: {
    marginTop: 10,
    fontSize: 20,
    padding: 5,
    width: '100%',
    borderColor: 'black',
    borderWidth: 1,
    textAlignVertical: 'top',
    maxHeight: 150,
  },

  button: {
    backgroundColor: '#00b894',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
    width: '100%',
    marginTop: 20,
  },
});
export default CategoryScreen;
