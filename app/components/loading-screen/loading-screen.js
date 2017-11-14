import React from 'react';
import {View, ActivityIndicator } from 'react-native';
import styles from './styles';

export default class LoadingScreen extends React.PureComponent {
  render = () => (
    <View style={styles.indicator}>
      <ActivityIndicator />
    </View>
  );
}