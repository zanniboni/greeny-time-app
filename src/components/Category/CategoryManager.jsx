import React from 'react';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import Header from '../Layout/Header';
import useFetch from '../../hooks/useFetch';
import { baseUrl } from '../../enviroments/enviroment';

const CategoryManager = ({ navigation }) => {
  const [name, setName] = useState('');
  const { loading, error, data, fetchData } = useFetch();

  const createCategory = async () => {
    await fetchData({
      url: `${baseUrl}/category`,
      method: 'POST',
      body: JSON.stringify({
        name: name,
      }),
    });
    navigation.goBack();
  };

  return (
    <>
      <Header />
      <View className="flex-1 justify-between">
        <View className="items-center">
          <Text>Digite a categoria</Text>
          <TextInput
            placeholder="Vendas"
            className="mt-2 bg-gray-300 rounded-md p-2 font-bold text-2xl w-full"
            value={name}
            onChangeText={text => setName(text)}
          />
          <TouchableOpacity
            className="bg-green-300 rounded-sm p-2 items-center w-full mt-5"
            onPress={createCategory}
          >
            <Text>Enviar</Text>
            {loading && <Text>Loading...</Text>}
            {error && <Text>Error: {error.message}</Text>}
            {data && []}
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default CategoryManager;
