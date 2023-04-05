import {ToastAndroid} from "react-native";

export const isValidPositiveNumber = (value) => {
    const regex = /^[0-9,.]+$/; // regex para números, vírgulas e pontos
    if (!value) {
      return ''; // retorna string vazia se apagar todo o valor
    } else if (!regex.test(value)) {
      ToastAndroid.show(
        'Por favor, digite apenas números, vírgulas e pontos',
        ToastAndroid.SHORT
      );
      return 'Por favor, digite apenas números, vírgulas e pontos';
    }
    return '';
  };