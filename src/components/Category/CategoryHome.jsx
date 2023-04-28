import React from 'react';
import { Icon } from 'react-native-elements';
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Header from '../Layout/Header';

const Category = ({ navigation }) => {
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

  const renderCategory = ({ item }) => {
    return (
      <View style={styles.category}>
        <View>
          <Text style={styles.categoryText}>{item}</Text>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate('Edição de Categorias')}
          >
            <Icon name="bars" type="font-awesome" size={20} color="#333" />
          </TouchableOpacity>
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
          <FlatList
            data={categories}
            renderItem={renderCategory}
            keyExtractor={item => item}
            contentContainerStyle={styles.listContainer}
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
  },
  listContainer: {
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
