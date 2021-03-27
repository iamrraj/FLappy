import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  add_guardian: {
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 80,
  },
  add_guardian_list: {
    marginTop: 60,
    paddingLeft: 40,
  },
  add_guardian_button: {
    backgroundColor: '#8f17b7',
    borderWidth: 1,
    width: 170,
    padding: 12,
    textAlign: 'center',
    paddingRight: 6,
    borderRadius: 6,
    marginTop: 15,
  },
  guardian_list: {
    paddingLeft: 40,
  },
  back: {
    marginTop: 20,
    paddingLeft: 5,
    paddingTop: 6,
    borderRadius: 50,
    backgroundColor: 'white',
    width: 40,
    height: 40,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  back_section: {
    paddingLeft: 20,
  },
  form_add: {
    marginTop: 30,
  },
  textInput: {
    borderBottomWidth: 2,
    borderBottomColor: '#8f17b7',
    width: '85%',
    marginTop: 20,
  },
  help_button_Ask: {
    borderColor: '#8f17b7',
    borderWidth: 1,
    width: 120,
    padding: 7,
    paddingRight: 6,
    borderRadius: 6,
  },
  help_list_row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text_bootom_text: {
    fontSize: 15,
    fontWeight: 'bold',
    paddingBottom: 5,
    color: 'white',
  },
  first_cell: {
    width: '60%',
  },
  time: {
    backgroundColor: 'gray',
    width: 85,
    padding: 10,
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    borderRadius: 6,
  },
});
