import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

const Input = ({label, value, onChangeText, placeholder, secureTextEntry}) => {
  return (
    <View style={styles.contianerStyle}>
      <Text style={styles.labelStyle}>{label}</Text>
      <TextInput
        placeholder={placeholder}
        style={styles.inputStyle}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputStyle: {
    color: '#000',
    paddingHorizontal: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2,
    height: 20,
    width: 100,
  },
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1,
  },
  contianerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export {Input};
