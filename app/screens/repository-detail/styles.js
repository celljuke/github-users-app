import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  repoInfo: {
    flexDirection: 'row',
    padding: 20
  },
  repoInfoLeft: {
    flexDirection: 'column',
    marginLeft: 10
  },
  ownerName: {
    fontSize: 24,
    color: '#2657aa'
  },
  urlTextView: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  icon: {
    fontSize: 16,
    color: '#999'
  },
  iconText: {
    marginLeft: 5
  },
  titleView: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
    paddingBottom: 20,
    marginTop: 20
  },
  title: {
    fontSize: 18,
    marginLeft: 5
  }
});

export default styles;