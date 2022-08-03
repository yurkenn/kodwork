import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';
import JobCard from '../../components/Cards/JobCard';
import {useSelector} from 'react-redux';
import styles from './FavoriteJobs.style';
import {useDispatch} from 'react-redux';
const FavoriteJobs = ({navigation}) => {
  const job = useSelector(state => state.favoriteJob);

  const dispatch = useDispatch();

  const handleRemoveFav = item => {
    dispatch({type: 'REMOVE_FAV', payload: {job: item}});
  };

  const renderFavJobs = ({item}) => {
    return (
      <View style={styles.container}>
        <JobCard job={item} />
        <View style={styles.button_container}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleRemoveFav(item)}>
            <Text style={styles.button_text}>Remove</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View>
      <FlatList data={job} renderItem={renderFavJobs} />
    </View>
  );
};

export default FavoriteJobs;
