import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  container1: {
    flex: 1,
    padding: 24,
  },
  mapStyle: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 60,
  },

  score: {
    flexDirection: 'row',
  },
  trip_detail: {
    fontFamily: 'Baskerville',
    fontWeight: 'bold',
    fontSize: 19,
    marginTop: 10,

    paddingLeft: 25,
  },

  text_bootom: {
    fontSize: 15,
    paddingBottom: 5,
    textAlign: 'left',
  },
  text_bootom_text: {
    fontSize: 15,
    fontWeight: 'bold',
    paddingBottom: 5,
    color: 'white',
  },
  help_button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#8f17b7',
    width: 130,
    padding: 10,
    marginTop: 10,
    marginLeft: 100,
    borderRadius: 6,
  },
  trip_list_data: {
    flexDirection: 'row',
    flex: 1,
  },
  trip_list_data1: {
    flexDirection: 'row',
    flex: 1,
    marginTop: 20,
  },
  start_place: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  trip_list_data1: {
    flexDirection: 'row',
    flex: 1,
    marginTop: 20,
  },

  score: {
    flexDirection: 'row',
    fontFamily: 'Baskerville',
    fontWeight: 'bold',
    marginTop: 30,
    width: '95%',

    alignSelf: 'center',

    backgroundColor: 'white',
    padding: 18,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    borderRadius: 6,
  },
  overall: {
    width: '35%',
  },
  circle: {
    justifyContent: 'center',
    alignSelf: 'center',
    flex: 1,
  },
  other: {
    width: '35%',
    marginTop: -20,
  },

  barline: {
    width: 200,
    marginTop: 20,
  },

  battext: {
    position: 'relative',

    flexDirection: 'row',
    top: 15,
  },
  battext1: {
    position: 'relative',
    alignItems: 'flex-start',
    width: '100%',
    fontWeight: 'bold',
    textAlign: 'right',
    fontSize: 15,
    marginLeft: -12,
  },
  battext11: {
    position: 'relative',
    alignItems: 'flex-end',
    width: '100%',
    color: 'gray',
  },

  trip: {
    flex: 1,
    marginTop: 25,
    marginBottom: 20,
    marginLeft: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  trips: {
    fontFamily: 'Baskerville',
    width: '44%',
    backgroundColor: 'white',
    padding: 5,
    marginTop: 20,

    paddingLeft: 15,
    height: 60,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    borderRadius: 6,
    marginRight: 20,
  },
  trip_text: {
    fontFamily: 'Baskerville',
    color: 'gray',
  },
  value: {
    fontFamily: 'Baskerville',
    fontWeight: 'bold',
    fontSize: 19,
    marginTop: 5,
  },

  bubble: {
    flexDirection: 'column',
    alignSelf: 'flex-start',
    backgroundColor: '#fff',
    borderRadius: 6,
    borderColor: '#ccc',
    borderWidth: 0.5,
    padding: 15,
    width: 250,
  },
  // Arrow below the bubble
  arrow: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderTopColor: '#fff',
    borderWidth: 16,
    alignSelf: 'center',
    marginTop: -32,
  },
  arrowBorder: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderTopColor: '#007a87',
    borderWidth: 16,
    alignSelf: 'center',
    marginTop: -0.5,
    // marginBottom: -15
  },
  // Character name
  name: {
    fontSize: 16,
    marginBottom: 5,
  },
  // Character image
  image: {
    width: '100%',
    height: 80,
  },
  help_list_border: {
    borderBottomWidth: 1,
    borderBottomColor: '#cecdce',
    width: '90%',
    fontWeight: 'normal',
    marginTop: -7,
  },
  help_list_row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  first_cell: {
    width: '60%',
  },
  help_button_Ask: {
    borderColor: '#8f17b7',
    borderWidth: 1,
    width: 120,
    padding: 7,
    paddingRight: 6,
    borderRadius: 6,
  },
});
