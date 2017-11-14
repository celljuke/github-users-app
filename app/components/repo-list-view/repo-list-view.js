import React, {Component} from 'react';
import {FlatList, View, Text} from 'react-native';
import RepositoryListItem from './repo-list-item';
import NavigatorService from '../../services/navigator';
import styles from './styles';

export default class RepositoryListView extends Component {

  _onPressItem = (item: object) => {
    NavigatorService.navigate('RepositoryDetail', {repo: item});
  };

  _renderItem = ({item}) => {
    return <RepositoryListItem repository={item} onPressItem={this._onPressItem}/>;
  };

  _keyExtractor = (item, index) => item.id + index;

  render() {
    return (
      <View>
        <View style={styles.countView}>
          <Text>{this.props.repositories.repositoryCount} repository results</Text>
        </View>
        <FlatList
          data={this.props.repositories.nodes}
          renderItem={this._renderItem}
          onEndReached={() => this.props.onLoadMore()}
          refreshing={this.props.refreshing}
          onRefresh={() => this.props.onRefresh()}
          keyExtractor={this._keyExtractor}
        />
      </View>
    );
  }
}
