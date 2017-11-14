import React from 'react';
import {View, TextInput, Button, Text} from 'react-native';
import styles from './styles';
import SearchResultView from '../../containers/search-result-view';

export default class SearchRepositories extends React.PureComponent {

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
        <SearchResultView searchText={this.state.activeSearch}/>
      );
    }
  }

  render = () => (
    <View>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          value={this.state.searchText}
          onChangeText={this.handleChange}
        />
        <Button title="Search" onPress={this.handlePerformSearch}/>
      </View>
      {this.renderResult()}
    </View>
  )
}
