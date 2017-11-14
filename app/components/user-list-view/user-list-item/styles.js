import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    padding: 10,
    height: 80
  },
  text: {
    fontSize: 20,
    color: '#2657aa'
  },
  userInfoRight: {
    flexDirection: 'column',
    marginLeft: 10
  },
  contributions: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5
  },
  icon: {
    fontSize: 14,
    color: '#666'
  },
  iconText: {
    marginLeft: 5,
    fontSize: 12,
    color: '#666'
  }
});

export default styles;
