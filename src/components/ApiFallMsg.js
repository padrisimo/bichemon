import React from 'react';
import { View, Text } from 'react-native';

const ApiFallMsg = ({ error }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ color: 'tomato' }}>{error}</Text>
    </View>
  );
};

export default ApiFallMsg;
