import {View, Text} from 'react-native';
import React, {useState} from 'react';
import Config from 'react-native-config';
import useFetch from '../../hooks/useFetch';
import {FlatList} from 'react-native-gesture-handler';
import JobCard from '../../components/Cards/JobCard';

const Jobs = () => {
  const [page, setPage] = useState(1);

  const {data, loading, error} = useFetch(`${Config.API_URL}?page=${page}`);

  const renderJobs = ({item}) => <JobCard job={item} />;
  console.log(data.results);
  return (
    <View>
      <FlatList data={data.results} renderItem={renderJobs} />
    </View>
  );
};

export default Jobs;
