import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  check: {
    borderRadius: 50,
    borderWidth: 1,
    paddingLeft: 0,
  },
  itemList: {
    marginTop: 20,
    position: 'relative',
    marginBottom: 40,
  },
  header: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#364f6b',
    marginBottom: 0,
    marginTop: 50,
  },
  item: {
    backgroundColor: 'white',
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 10,
    marginBottom: 10,
    flexDirection: 'row',
  },
  checkBoxTxt: {
    marginLeft: 20,
  },
  submit: {
    width: '90%',
    backgroundColor: '#fc5185',
    borderRadius: 20,
    padding: 10,

    marginTop: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
  },
});
