import React from 'react';
import {} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '@/Home';

const {Navigator, Screen} = createStackNavigator();

const Routes = (): JSX.Element => (
  <Navigator>
    <Screen name="Home" component={Home} options={{headerShown: false}} />
  </Navigator>
);

export default Routes;
