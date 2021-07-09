import React from 'react';
import {} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '@/pages/Home';
import Bin2Dec from '@/pages/Bin2Dec';
import BorderRadiusPreviewer from '@/pages/BorderRadiusPreviewer';

const {Navigator, Screen} = createStackNavigator();

const Routes = (): JSX.Element => (
  <Navigator>
    <Screen name="Home" component={Home} options={{title: 'App Ideas'}} />
    <Screen name="Bin2Dec" component={Bin2Dec} />
    <Screen name="BorderRadiusPreviewer" component={BorderRadiusPreviewer} />
  </Navigator>
);

export default Routes;
