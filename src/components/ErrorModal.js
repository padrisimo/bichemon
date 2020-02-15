import React from 'react';
import { View, Text, Modal, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const ErrorModal = ({ errorMessage, clearErrorMessage }) => {
  return (
    <Modal animationType="fade" transparent visible={errorMessage !== ''}>
      <View style={styles.container}>
        <TouchableOpacity onPress={clearErrorMessage}>
          <View style={styles.card}>
            <Text style={styles.text}>{errorMessage}</Text>
            <Text style={styles.text}>Try again</Text>
          </View>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  card: {
    backgroundColor: 'tomato',
    padding: 30,
    alignItems: 'center',
    borderRadius: 30
  },
  text: { color: 'white', fontSize: 18 }
});

export default ErrorModal;
