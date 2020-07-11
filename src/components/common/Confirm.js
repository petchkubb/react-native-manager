import React from 'react';
import {Text, View, Modal, StyleSheet} from 'react-native';
import {Button} from './Button';
import {CardSection} from './CardSection';

const Confirm = ({children, visible, onAccept, onDecline}) => {
  return (
    <Modal
      visible={visible}
      animationType="slide"
      onRequestClose={() => {}}
      transparent>
      <View style={styles.containerStyle}>
        <CardSection style={styles.cardSectionStyle}>
          <Text style={styles.textStyle}>{children}</Text>
        </CardSection>
        <CardSection>
          <Button title="Yes" onPress={onAccept} />
          <Button title="No" onPress={onDecline} />
        </CardSection>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  cardSectionStyle: {
    justifyContent: 'center',
  },
  textStyle: {
    flex: 1,
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 40,
  },
  containerStyle: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.75)',
  },
});

export {Confirm};
