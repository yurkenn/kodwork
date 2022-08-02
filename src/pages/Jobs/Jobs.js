import {View} from 'react-native';
import React, {useState} from 'react';
import Config from 'react-native-config';
import useFetch from '../../hooks/useFetch';
import {FlatList} from 'react-native-gesture-handler';
import JobCard from '../../components/Cards/JobCard';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import styles from './Jobs.style';
const Jobs = ({navigation}) => {
  const [page, setPage] = useState(1);

  const {data, loading, error} = useFetch(`${Config.API_URL}?page=${page}`);

  if (loading) {
    <Loading />;
  }

  if (error) {
    <Error />;
  }

  const handleSelect = id => {
    navigation.navigate('JobDetailScreen', {id});
  };

  const renderJobs = ({item}) => (
    <JobCard job={item} onSelect={() => handleSelect(item.id)} />
  );

  return (
    <View style={styles.container}>
      <FlatList data={data.results} renderItem={renderJobs} />
    </View>
  );
};

export default Jobs;
