import React from 'react';
import {View, TextInput, Button, Text} from 'react-native';
import styles from './styles';
import config from '../../config';
import ApiUtils from '../../api-utils'
import {Thumbnail, Icon} from 'native-base';

export default class UserDetail extends React.PureComponent {

  static navigationOptions = ({navigation}) => ({
    title: navigation.state.params.user.login
  });

  state = {
    user: {},
  };

  componentDidMount() {
    return fetch(`${config.GITHUB_REST_API_URL}/users/${this.props.navigation.state.params.user.login}`, {
      headers: {
        'Authorization': `bearer ${config.GITHUB_TOKEN}`,
      }
    })
      .then(ApiUtils.checkStatus)
      .then(response => response.json())
      .then((responseJson) => {
        this.setState({
          user: responseJson
        })
      })
      .catch((error) => {
        console.error(error);
      });
  };

  render = () => (
    <View style={{flex: 1}}>
      <View style={styles.profileHeaderWrapper}>
        <View style={styles.profileHeaderContainer}>
          <View style={styles.profileHeader}>
            <View style={styles.profileImageWrapper}>
              <Thumbnail source={{uri: this.state.user.avatar_url}} style={styles.profileImage}/>
            </View>
            <Text style={styles.profileName}>{this.state.user.name}</Text>
            <Text style={styles.profileLoginName}>{this.state.user.login}</Text>
            {this.state.user.bio ? <Text style={styles.profileBio}>"{this.state.user.bio}"</Text> : null}
          </View>
        </View>
      </View>
      <View style={styles.profileDetailsContainer}>
        {this.state.user.location ? <View style={styles.textWithIcon}>
          <Icon name="ios-pin-outline" style={styles.icon}/>
          <Text style={styles.iconText}>{this.state.user.location}</Text>
        </View> : null}
        {this.state.user.company ? <View style={styles.textWithIcon}>
          <Icon name="ios-people" style={styles.icon}/>
          <Text style={styles.iconText}>{this.state.user.company}</Text>
        </View> : null}
        {this.state.user.email ? <View style={styles.textWithIcon}>
          <Icon name="ios-mail" style={styles.icon}/>
          <Text style={styles.iconText}>{this.state.user.email}</Text>
        </View> : null}
        {this.state.user.blog ? <View style={styles.textWithIcon}>
          <Icon name="ios-link" style={styles.icon}/>
          <Text style={styles.iconText}>{this.state.user.blog}</Text>
        </View> : null}
      </View>
    </View>
  )
}
