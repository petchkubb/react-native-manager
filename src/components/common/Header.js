import React from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';

const Header = ({text}) => {
  return (
    <SafeAreaView style={styles.viewStyle}>
      <Text style={styles.textSize}>{text}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  textSize: {
    fontSize: 20,
  },
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    paddingTop: 15,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
  },
});

export {Header};
