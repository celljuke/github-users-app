import React from 'react';
import {View, TextInput, Button, Text} from 'react-native';
import styles from './styles';

export default class CherryTextInput extends React.PureComponent {

  render = () => (
    <View style={styles.inputContainer}>
      <TextInput/>
    </View>
  )
}