import React, { useEffect, useState } from 'react';
import BtnNavigation from '../Home/Navigation/BtnNavigation';
import { Icon } from 'react-native-elements';
import useFetch from '../../hooks/useFetch';
import { baseUrl } from '../../enviroments/enviroment';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import Header from '../Layout/Header';

const Category = ({ navigation }) => {
  const { loading, error, data, fetchData } = useFetch();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const loadCategories = async () => {
      await fetchData({
        url: `${baseUrl}/category`,
        method: 'GET',
      });
    };

    loadCategories();
  }, []);

  useEffect(() => {
    setCategories(data);
  }, [loading]);

  const renderCategory = ({ item }) => {
    return (
      <View className="border-b-2 border-gray-300 p-4 flex-row justify-between">
        <View>
          <Text className="text-2xl">{item.name}</Text>
        </View>
        <View>
          {!item.permanent && (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('Edição de Categorias', { item })
              }
            >
              <Icon name="bars" type="font-awesome" size={20} color="#333" />
            </TouchableOpacity>
          )}
        </View>
      </View>
    );
  };

  return (
    <>
      <Header title={'Greeny Time'} />
      <View className="flex-1">
        <View>
          <Text className="text-center">Categorias</Text>
        </View>
        <View>
          {loading ? (
            <Text>Carregando</Text>
          ) : (
            <FlatList
              className="h-3/4"
              data={categories}
              renderItem={renderCategory}
              keyExtractor={item => item.id}
              contentContainerStyle="flex-1"
            />
          )}
          <View className="items-center">
            <TouchableOpacity
              className="bg-green-300 rounded-sm p-2 items-center w-full mt-5"
              onPress={() => navigation.navigate('Gerenciamento de Categorias')}
            >
              <Text className="text-2xl text-white font-bold">
                Criar categoria
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};

export default Category;
