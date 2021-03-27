import {Platform, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D5D0EC',
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  header22: {
    paddingBottom: 30,
  },
  header1: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingTop: 35,
    paddingBottom: 25,
  },
  header_search: {
    paddingTop: 10,
    paddingBottom: 15,
  },
  textSearch: {
    backgroundColor: 'white',
    borderRadius: 10,
    paddingLeft: 20,
    color: 'black',
  },
  footer: {
    flex: Platform.OS === 'ios' ? 3 : 5,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },

  footer2: {
    flex: Platform.OS === 'ios' ? 3 : 6,
    paddingVertical: 20,
  },
  footer1: {
    flex: Platform.OS === 'ios' ? 3 : 2.2,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,
  },

  text_footer: {
    color: '#39324C',
    fontSize: 18,
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#39324C',
  },
  button: {
    alignItems: 'center',
    marginTop: 30,
  },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  textPrivate: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 20,
  },
  color_textPrivate: {
    color: 'grey',
  },
  forget_password: {
    alignItems: 'flex-end',
  },
  textforget: {
    color: '#39324C',
    fontWeight: 'bold',
    marginTop: 10,
    fontSize: 15,
  },
  blog_view: {
    paddingVertical: 10,
    backgroundColor: 'white',
    width: '100%',

    shadowColor: '#fff',
    shadowOffset: {
      width: 30,
      height: 2,
    },

    shadowOpacity: 1,
    shadowRadius: 3.84,

    elevation: 5,
    borderRadius: 6,
    marginRight: 20,
    marginBottom: 20,
  },
  no_blog: {
    flex: 1,
    justifyContent: 'center',

    alignSelf: 'center',
  },
});
