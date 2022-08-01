import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  body_container: {
    padding: 10,
    margin: 10,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#D1D1D1',
    borderRadius: 8,
  },
  job_title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  companyName: {
    fontSize: 16,
    fontWeight: '500',
  },
  companyFrom: {
    backgroundColor: '#FF4D4D',
    width: 175,
    textAlign: 'center',
    borderRadius: 20,
    padding: 3,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 6,
  },

  level: {
    textAlign: 'right',
    color: '#FF4D4D',
    fontWeight: 'bold',
    fontSize: 17,
  },
});
