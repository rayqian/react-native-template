import { createBottomTabNavigator } from 'react-navigation';
import * as screenNames from '../screen_names';
import Settings from 'features/settings/containers';

export default createBottomTabNavigator(
  {
    [screenNames.SETTINGS]: {
      screen: Settings
    }
  },
  {
    tabBarPosition: 'bottom',
    tabBarOptions: {
      swipeEnabled: false,
      activeTintColor: '#ff5a5f',
      inactiveTintColor: '#555',
      style: {
        backgroundColor: '#fff',
        paddingVertical: 7
      },
      labelStyle: {
        fontSize: 20
      }
    }
  }
);