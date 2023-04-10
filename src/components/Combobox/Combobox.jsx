import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const ComboBox = () => {
  const [selectedItem, setSelectedItem] = useState('dadasas');

  return (
    <View>
      <Picker
        style={styles.boxPicker}
        selectedValue={selectedItem}
        onValueChange={(itemValue, itemIndex) => setSelectedItem(itemValue)}
      >
        <Picker.Item label="Comida" value="food" />
        <Picker.Item label="item2" value="valor2" />
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  boxPicker: {
    width: 150,
  },
});

export default ComboBox;
