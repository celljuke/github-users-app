import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {StackNavigator} from 'react-navigation';
import {
  ApolloClient,
  ApolloProvider,
  createNetworkInterface
} from 'react-apollo';

import config from './config';
import NavigatorService from './services/navigator';

import Search from './screens/search';
import RepositoryDetail from './screens/repository-detail';
import UserDetail from './screens/user-detail';

const networkInterface = createNetworkInterface({
  uri: config.GITHUB_GRAPHQL_API_URL
});

networkInterface.use([
  {
    applyMiddleware(req, next) {
      if (!req.options.headers) {
        req.options.headers = {};
      }
      req.options.headers['authorization'] = `bearer ${config.GITHUB_TOKEN}`;
      next();
    },
  },
]);

const apolloClient = new ApolloClient({
  networkInterface,
});

const Navigator = StackNavigator(
  {
    Search: {screen: Search},
    RepositoryDetail: {screen: RepositoryDetail},
    UserDetail: {screen: UserDetail}
  },
  {
    cardStyle: {
      paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight,
      backgroundColor: '#efefef'
    }
  }
);

export default class App extends Component<{}> {
  render() {
    return (
      <ApolloProvider client={apolloClient}>
        <Navigator ref={navigatorRef => {
          NavigatorService.setContainer(navigatorRef);
        }}/>
      </ApolloProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  },
});
