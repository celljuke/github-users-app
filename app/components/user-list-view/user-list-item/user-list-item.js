import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import {Thumbnail, Icon} from 'native-base';

export default class UserListItem extends React.PureComponent {

  _onPress = () => {
    this.props.onPressItem(this.props.user);
  };

  render = () => (
    <TouchableOpacity onPress={this._onPress}>
      <View style={styles.container}>
        <Thumbnail source={{uri: this.props.user.avatar_url}}/>
        <View style={styles.userInfoRight}>
          <Text style={styles.text}>
            {this.props.user.login}
          </Text>
          <View style={styles.contributions}>
            <Icon name="ios-git-commit" style={styles.icon}/>
            <Text style={styles.iconText}>{this.props.user.contributions} commits</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
