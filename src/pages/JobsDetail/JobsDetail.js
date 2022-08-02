import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import React from 'react';
import useFetch from '../../hooks/useFetch';
import Config from 'react-native-config';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import styles from './JobsDetail.style';
import RenderHTML from 'react-native-render-html';
import {useWindowDimensions} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const JobsDetail = ({route}) => {
  const {id} = route.params;
  const {data, loading, error} = useFetch(`${Config.API_URL}/${id}`);

  const {width} = useWindowDimensions();
  const source = {
    html: `${data.contents}`,
  };

  if (loading) {
    <Loading />;
  }
  if (error) {
    <Error />;
  }
  return (
    <ScrollView style={styles.container}>
      <View style={styles.upper_container}>
        <Text style={styles.job_name}>{data.name}</Text>
        <View style={styles.location_container}>
          <Text style={styles.location_title}>Locations: </Text>
          <Text style={styles.location}>
            {data.location && data.location.length > 0
              ? data.location[0].name
              : 'Unknown Location'}
          </Text>
        </View>
        <View style={styles.level_container}>
          <Text style={styles.jobLevel_title}>Job Level: </Text>
          <Text style={styles.level}>
            {data.levels && data.levels.length > 0
              ? data.levels[0].short_name
              : 'Unknown Level'}
          </Text>
        </View>
        <Text style={styles.jobDetailTitle}>Job Detail</Text>
      </View>
      <View style={styles.jobDetail}>
        <RenderHTML source={source} contentWidth={width} />
      </View>
      <View style={styles.button}>
        <TouchableOpacity style={styles.submit_button}>
          <Icon name="login" size={25} color="white" />
          <Text style={styles.submit_text}>Submit</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.fav_button}>
          <Icon name="favorite" size={25} color="white" />
          <Text style={styles.fav_text}>Favorite Job</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default JobsDetail;
