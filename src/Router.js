import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Jobs from './pages/Jobs';
import JobsDetail from './pages/JobsDetail';
const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="JobsScreen"
          component={Jobs}
          options={{
            headerTitle: 'Jobs',
            headerTitleAlign: 'center',
            headerTintColor: '#FF4D4D',
          }}
        />
        <Stack.Screen
          name="JobDetailScreen"
          component={JobsDetail}
          options={{
            headerTitle: 'Implementation Consultant',
            headerTitleAlign: 'center',
            headerTintColor: '#FF4D4D',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
