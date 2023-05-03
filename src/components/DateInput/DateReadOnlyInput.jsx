import React from 'react';
import moment from 'moment-timezone';
import { TextInput } from 'react-native';
import { useEffect, useState } from 'react';

const dateHour = 'DD/MM/YYYY HH:mm';
const saoPauloTz = 'America/Sao_Paulo';

const DateReadOnlyInput = () => {
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(moment().tz(saoPauloTz).format(dateHour));
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  const [currentDate, setCurrentDate] = useState(
    moment().tz(saoPauloTz).format(dateHour),
  );

  return (
    <TextInput
      value={currentDate}
      className="text-black"
      editable={false}
      onChangeText={setCurrentDate}
    />
  ); //readonly (editable false)
};

export default DateReadOnlyInput;
