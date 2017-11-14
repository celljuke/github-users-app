import React from 'react';
import {View, ActivityIndicator } from 'react-native';
import styles from './styles';
import { Spinner } from 'native-base';

export default class LoadingScreen extends React.PureComponent {
  render = () => (
    <View style={styles.indicator}>
      <Spinner color='blue' />
    </View>
  );
}