import React, {Component} from 'react';
import {FlatList} from 'react-native';
import RepositoryListItem from '../repo-list-item';

export default class RepositoryListView extends Component {

  _renderItem = ({item}) => {
    return <RepositoryListItem repository={item}/>;
  };

  _keyExtractor = (item, index) => item.id + index;

  render() {
    return (
      <FlatList
        data={this.props.repositories.nodes}
        renderItem={this._renderItem}
        onEndReached={() => this.props.onLoadMore()}
        refreshing={this.props.refreshing}
        onRefresh={() => this.props.onRefresh()}
        keyExtractor={this._keyExtractor}
      />
    );
  }
}
