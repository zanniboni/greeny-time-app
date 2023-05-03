import React, { useEffect, useState } from 'react';
import { Icon } from 'react-native-elements';
import useFetch from '../../hooks/useFetch';
import { baseUrl } from '../../enviroments/enviroment';
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
} from 'react-native';
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
      <View style={styles.category}>
        <View>
          <Text style={styles.categoryText}>{item.name}</Text>
        </View>
        <View>
          {!item.permanent && (
            <TouchableOpacity
              onPress={() => navigation.navigate('Edição de Categorias')}
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
      <Header />
      <View style={styles.container}>
        <View>
          <Text style={styles.textAlign}>Categorias</Text>
        </View>
        <View>
          {loading ? (
            <Text>Carregando</Text>
          ) : (
            <FlatList
              data={categories}
              renderItem={renderCategory}
              keyExtractor={item => item.id}
              contentContainerStyle={styles.listContainer}
            />
          )}
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContainer: {
    flexGrow: 1,
    paddingTop: 16,
    paddingBottom: 16,
  },
  category: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 16,
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  categoryText: {
    fontSize: 18,
  },
  textAlign: {
    textAlign: 'center',
  },
});
export default Category;
