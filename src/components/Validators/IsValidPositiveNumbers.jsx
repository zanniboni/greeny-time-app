import { ToastAndroid } from 'react-native';

const isValidPositiveNumber = value => {
  const regex = /^[0-9,.]+$/;
  if (!value) {
    return '';
  } else if (!regex.test(value)) {
    ToastAndroid.show(
      'Por favor, digite apenas números, vírgulas e pontos',
      ToastAndroid.SHORT,
    );
    return 'Por favor, digite apenas números, vírgulas e pontos';
  }
  return '';
};

export default isValidPositiveNumber;
