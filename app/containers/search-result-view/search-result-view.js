import React from 'react';
import {View, TextInput, Button, Text} from 'react-native';
import { gql, graphql } from 'react-apollo';

import RepositoryListView from '../../components/repo-list-view';
import LoadingScreen from '../../components/loading-screen';

class SearchResultView extends React.PureComponent {

  loadMoreEntries = () => {
    if (!this.props.loading) {
      const search = this.props.data.search;
      if (!search.pageInfo.hasNextPage) {
        return;
      }

      return this.props.data.fetchMore({
        query: SearchQuery,
        variables: {
          cursor: search.pageInfo.endCursor,
          query: this.props.searchText
        },
        updateQuery: (previousResult, { fetchMoreResult }) => {
          const newItems = fetchMoreResult.search.nodes;
          return {
            search: {
              ...fetchMoreResult.search,
              nodes: [...previousResult.search.nodes, ...newItems],
            },
          };
        }
      });
    }
  };

  render() {
    if (this.props.data.loading) {
      return <LoadingScreen />;
    } else {
      return (
        <RepositoryListView
          repositories={this.props.data.search}
          refreshing={this.props.data.loading}
          onRefresh={() => this.props.data.refetch()}
          onLoadMore={this.loadMoreEntries}
        />
      );
    }
  }
}

const SearchQuery = gql`
  query SearchQuery($cursor: String, $query: String!) {
    search(type: REPOSITORY, query: $query, first: 10, after: $cursor) {
      repositoryCount
      nodes {
        ... on Repository {
          id
          nameWithOwner
          viewerHasStarred
        }
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
`;

const SearchResultViewContainer = graphql(SearchQuery, {
  options: props => {
    return {
      variables: {
        query: props.searchText,
      },
    };
  },
})(SearchResultView);

export default SearchResultViewContainer;
