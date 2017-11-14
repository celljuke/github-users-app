/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

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

import Search from './screens/search';

const networkInterface = createNetworkInterface({
  uri: 'https://api.github.com/graphql'
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
    Search: {screen: Search}
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
        <Navigator/>
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
