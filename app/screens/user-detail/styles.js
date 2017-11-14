import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  profileHeader: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    paddingTop: 40
  },
  profileImageWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#9893b7',
    width: 140,
    height: 140,
    borderRadius: 70,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60
  },
  profileName: {
    marginTop: 10,
    fontSize: 24,
    backgroundColor: 'transparent'
  },
  profileLoginName: {
    fontSize: 14,
    color: '#666',
    backgroundColor: 'transparent'
  },
  profileBio: {
    fontSize: 18,
    backgroundColor: 'transparent',
    padding: 15
  },
  profileDetailsContainer: {
    padding: 20,
    paddingTop: 0,
    backgroundColor: 'transparent',
    flexDirection: 'column'
  },
  textWithIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12
  },
  icon: {
    fontSize: 18,
    color: '#666'
  },
  iconText: {
    marginLeft: 5,
    fontSize: 16
  }
});

export default styles;