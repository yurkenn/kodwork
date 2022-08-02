import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  upper_container: {
    padding: 5,
  },
  job_name: {
    fontSize: 23,
    fontWeight: 'bold',
    color: 'black',
  },
  location_container: {
    flexDirection: 'row',
    marginTop: 5,
  },
  location: {
    color: 'black',
    fontSize: 15,
    fontWeight: '500',
  },
  location_title: {
    fontSize: 15,
    fontWeight: '500',
    color: '#FF4D4D',
  },
  level_container: {
    flexDirection: 'row',
    marginTop: 5,
  },
  jobLevel_title: {
    fontSize: 15,
    fontWeight: '500',
    color: '#FF4D4D',
  },
  level: {
    color: 'black',
    fontSize: 15,
    fontWeight: '500',
  },

  jobDetailTitle: {
    fontSize: 23,
    fontWeight: '700',
    color: 'black',
    alignSelf: 'center',
  },
  jobDetail: {
    borderWidth: 1,
    borderColor: '#D1D1D1',
    backgroundColor: 'white',
    padding: 5,
  },
  button: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderRadius: 5,
  },
  submit_button: {
    padding: 3,
    backgroundColor: '#FF4D4D',
    width: 170,
    borderRadius: 7,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  submit_text: {
    color: 'white',
    fontSize: 20,
    fontWeight: '500',
    padding: 7,
  },
  fav_button: {
    width: 170,
    padding: 3,
    backgroundColor: '#FF4D4D',
    borderRadius: 7,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fav_text: {
    color: 'white',
    fontSize: 20,
    fontWeight: '500',
    padding: 7,
  },
});
