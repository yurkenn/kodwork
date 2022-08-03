import {TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import Config from 'react-native-config';
import useFetch from '../../hooks/useFetch';
import {FlatList} from 'react-native-gesture-handler';
import JobCard from '../../components/Cards/JobCard';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import styles from './Jobs.style';
import Icon from 'react-native-vector-icons/MaterialIcons';
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

  const nextPage = () => {
    setPage(page + 1);
  };

  const previosPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  return (
    <View style={styles.container}>
      <FlatList data={data.results} renderItem={renderJobs} />
      <View style={styles.button_container}>
        <TouchableOpacity style={styles.button_left} onPress={previosPage}>
          <Icon name="chevron-left" size={25} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button_right} onPress={nextPage}>
          <Icon name="chevron-right" size={25} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Jobs;
