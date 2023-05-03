import React from 'react';
import { TouchableHighlight, Text } from 'react-native';
import { styled } from 'nativewind';

const ButtonNavigation = ({ navigation, route, title, ...rest }) => {
  return (
    <TouchableHighlight
      underlayColor="transparent"
      className=" w-2/5 bg-green-300 rounded-md p-2 mt-1 text-center"
      {...rest}
      onPress={() => navigation.navigate(route)}
    >
      <Text className="text-center text-2xl text-white font-bold">{title}</Text>
    </TouchableHighlight>
  );
};

const BtnNavigation = styled(ButtonNavigation);
export default BtnNavigation;
