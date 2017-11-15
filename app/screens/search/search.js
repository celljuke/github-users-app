import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import SearchResultView from '../../containers/search-result-view';
import {Item, Input, Button} from 'native-base';

export default class Search extends React.PureComponent {

  static navigationOptions = {
    title: 'Search for Repositories'
  };

  state = {
    searchText: '',
    activeSearch: null
  };

  handleChange = text => {
    this.setState({
      searchText: text,
    });
  };

  handlePerformSearch = () => {
    if (this.state.searchText.length > 3) {
      this.setState({
        activeSearch: this.state.searchText
      });
    }
  };

  renderResult() {
    if (this.state.activeSearch) {
      return (
        <View style={styles.listContainer}>
          <SearchResultView searchText={this.state.activeSearch}/>
        </View>
      );
    }
  }

  render = () => (
    <View>
      <View style={styles.formContainer}>
        <Item rounded style={styles.input}>
          <Input placeholder='start typing...' value={this.state.searchText}
            onChangeText={this.handleChange}/>
        </Item>
        <Button style={styles.searchButton} onPress={this.handlePerformSearch} block rounded primary>
          <Text style={styles.searchButtonText}>Search</Text>
        </Button>
      </View>
      {this.renderResult()}
    </View>
  )
}
