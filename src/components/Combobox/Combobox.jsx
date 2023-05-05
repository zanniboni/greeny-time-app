import React, { useState } from 'react';
import { View } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const ComboBox = () => {
  const [selectedItem, setSelectedItem] = useState('dadasas');

  return (
    <View>
      <Picker
        className="w-40"
        selectedValue={selectedItem}
        onValueChange={(itemValue, itemIndex) => setSelectedItem(itemValue)}
      >
        <Picker.Item label="item1" value="item1" />
        <Picker.Item label="item2" value="valor2" />
      </Picker>
    </View>
  );
};

export default ComboBox;
