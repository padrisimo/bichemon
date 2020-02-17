import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const Spinner = () => (
  <View
    style={{
      flex: 1,
      backgroundColor: 'lightslategray',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
    <ActivityIndicator size="large" color="white" />
  </View>
);

export default Spinner;
