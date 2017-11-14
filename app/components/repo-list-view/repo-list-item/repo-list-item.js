import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import {Button, Icon} from 'native-base';

export default class RepositoryListItem extends React.PureComponent {

  _onPress = () => {
    this.props.onPressItem(this.props.repository);
  };

  render = () => (
    <TouchableOpacity onPress={this._onPress}>
      <View style={styles.container}>
        <Text style={styles.title}>
          {this.props.repository.nameWithOwner}
        </Text>
        <View style={styles.footer}>
          <View style={styles.footerItem}>
            <Icon name="ios-star" style={styles.icon}/>
            <Text style={styles.iconText}>{this.props.repository.stargazers.totalCount} stars</Text>
          </View>
          <View style={styles.footerItem}>
            <Icon name="ios-git-branch" style={styles.icon}/>
            <Text style={styles.iconText}>{this.props.repository.forks.totalCount} forks</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
