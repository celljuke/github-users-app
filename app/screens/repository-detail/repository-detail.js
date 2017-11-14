import React from 'react';
import {View, TextInput, Text} from 'react-native';
import styles from './styles';
import config from '../../config';
import ApiUtils from '../../api-utils'
import UserListView from '../../components/user-list-view';
import LoadingScreen from '../../components/loading-screen';
import {Thumbnail, Icon, Button} from 'native-base';

export default class RepositoryDetail extends React.PureComponent {

  static navigationOptions = ({navigation}) => ({
    title: navigation.state.params.repo.nameWithOwner
  });

  state = {
    repository: this.props.navigation.state.params.repo,
    loading: false
  };

  componentDidMount() {
    this.setState({
      loading: true
    });

    return fetch(`${config.GITHUB_REST_API_URL}/repos/${this.state.repository.owner.login}/${this.state.repository.name}/contributors`, {
      headers: {
        'Authorization': `bearer ${config.GITHUB_TOKEN}`,
      }
    })
      .then(ApiUtils.checkStatus)
      .then(response => response.json())
      .then((responseJson) => {
        this.setState({
          users: responseJson,
          loading: false
        })
      })
      .catch((error) => {
        console.error(error);
      });
  };

  renderResult() {
    if (this.state.loading) {
      return <LoadingScreen />;
    } else {
      return (
        <UserListView users={this.state.users}/>
      );
    }
  };

  render = () => (
    <View>
      <View style={styles.repoInfo}>
        <Thumbnail source={{uri: this.state.repository.owner.avatarUrl}} large square/>
        <View style={styles.repoInfoLeft}>
          <Text style={styles.ownerName}>{this.state.repository.nameWithOwner}</Text>
          <View style={styles.urlTextView}>
            <Icon name="ios-link" style={styles.icon}/>
            <Text style={styles.iconText}>{this.state.repository.owner.url}</Text>
          </View>
        </View>
      </View>
      <View>
        <View style={styles.titleView}>
          <Icon name="ios-person"/>
          <Text style={styles.title}>Contributors</Text>
        </View>
        {this.renderResult()}
      </View>
    </View>
  )
}
