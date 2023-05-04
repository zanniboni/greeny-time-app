import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import Header from '../Layout/Header';
import { useState } from 'react';
import { Icon } from 'react-native-elements';
import useFetch from '../../hooks/useFetch';
import { baseUrl } from '../../enviroments/enviroment';
import { useCategory } from '../../context/categoryContext';

const CategoryEdit = ({ route, navigation }) => {
  const [name, setName] = useState('');
  const { fetchData } = useFetch();
  const { item } = route.params;
  const { setReload } = useCategory();

  const updateCategoryName = async () => {
    await fetchData({
      url: `${baseUrl}/category/${item.id}`,
      method: 'PUT',
      body: JSON.stringify({
        name: name,
      }),
    });

    setReload(true);
    navigation.goBack();
  };
  const deleteCategory = async () => {
    await fetchData({
      url: `${baseUrl}/category/${item.id}`,
      method: 'DELETE',
    });

    setReload(true);
    navigation.goBack();
  };

  return (
    <>
      <Header />
      <View className="justify-between gap-5">
        <View className="">
          <View className="my-5 flex-row justify-between">
            <Text className="text-lg">Editar {item.name}</Text>
            <TouchableOpacity onPress={deleteCategory}>
              <Icon name="trash" type="font-awesome" />
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <View className="flex-row gap-1">
            <Text>
              <Icon name="pencil" type="font-awesome" />
            </Text>
            <Text className="text-2xl">Novo nome</Text>
          </View>
          <TextInput
            className="border-gray-300 border-b-2 h-12 text-lg my-2"
            onChangeText={text => setName(text)}
            value={name}
          />
        </View>
        <TouchableOpacity
          onPress={updateCategoryName}
          className="mt-1 py-2 text-center w-full items-center justify-center bg-green-300 h-12 rounded-xl"
        >
          <Text className="text-white font-normal text-xl w-full text-center">
            Salvar
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default CategoryEdit;
