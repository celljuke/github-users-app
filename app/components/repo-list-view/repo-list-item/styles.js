import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    borderBottomWidth: 1,
    borderBottomColor: '#d8d8d8',
    height: 80,
    padding: 10
  },
  title: {
    fontSize: 18,
    color: '#2657aa'
  },
  footer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 20
  },
  footerItem: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  icon: {
    fontSize: 20,
    color: '#666'
  },
  iconText: {
    marginLeft: 5
  }
});

export default styles;
