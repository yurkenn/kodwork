import {View, Text, TouchableWithoutFeedback} from 'react-native';
import React from 'react';
import styles from './JobCard.style';

const JobCard = ({job, onSelect}) => {
  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <View style={styles.container}>
        <View style={styles.body_container}>
          <Text style={styles.job_title}>{job.name}</Text>
          <Text style={styles.companyName}>{job.company.name}</Text>
          <Text style={styles.companyFrom}>{job.locations[0].name}</Text>
          <Text style={styles.level}>{job.levels[0].short_name}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default JobCard;
