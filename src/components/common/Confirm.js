import React from 'react';
import { Text,View,Modal StyleSheet} from 'react-native';
import {Card} from './Card'
import {Button} from './Button'

const Confirm = ({text}) => {
  return (
    <SafeAreaView style={styles.viewStyle}>
      <Text style={styles.textSize}>{text}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  
});

export {Confirm};
