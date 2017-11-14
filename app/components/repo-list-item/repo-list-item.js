import React, {Component} from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

export default class RepositoryListItem extends Component {
  render = () => (
    <View style={styles.container}>
      <Text style={styles.text}>
        {this.props.repository.nameWithOwner}
      </Text>
    </View>
  );
}
