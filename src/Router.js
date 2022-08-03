import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Jobs from './pages/Jobs';
import JobsDetail from './pages/JobsDetail';
import {NavigationContainer} from '@react-navigation/native';
import FavoriteJobs from './pages/FavoriteJobs/FavoriteJobs';
import UserProvider from './context/Provider';

const Drawer = createDrawerNavigator();

const Router = () => {
  return (
    <UserProvider>
      <NavigationContainer>
        <Drawer.Navigator
          screenOptions={{
            headerTitleAlign: 'center',
            headerTintColor: '#FF4D4D',
            drawerActiveBackgroundColor: '#FF4D4D',
            drawerActiveTintColor: 'white',
          }}>
          <Drawer.Screen
            name="JobsScreen"
            component={Jobs}
            options={{
              headerTitle: 'Jobs',
            }}
          />
          <Drawer.Screen
            name="JobDetailScreen"
            component={JobsDetail}
            options={{
              headerTitle: 'Implementation Consultant',
              drawerItemStyle: {display: 'none'},
            }}
          />
          <Drawer.Screen
            name="FavoriteJobs"
            component={FavoriteJobs}
            options={{
              headerTitle: 'Favorite Jobs',
            }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </UserProvider>
  );
};

export default Router;
