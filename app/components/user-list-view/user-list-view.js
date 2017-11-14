import React, {Component} from 'react';
import {FlatList} from 'react-native';
import UserListItem from './user-list-item';
import NavigatorService from '../../services/navigator';


export default class UserListView extends React.PureComponent {

  _onPressItem = (item: object) => {
    NavigatorService.navigate('UserDetail', {user: item});
  };

  _renderItem = ({item}) => {
    return <UserListItem user={item} onPressItem={this._onPressItem}/>;
  };

  _keyExtractor = (item, index) => item.id + index;

  render() {
    return (
      <FlatList
        data={this.props.users}
        renderItem={this._renderItem}
        keyExtractor={this._keyExtractor}
      />
    );
  }
}
