import { Icon } from 'react-native-elements';cohj
import { createBottomTabNavigator } from 'vue-native-router';
import Home from './views/Home.vue';
import Calendar from './views/Calendar.vue';
import Stats from './views/Stats.vue';

export default createBottomTabNavigator(
  {
    Home: Home,
    Calendar: Calendar,
    Stats: Stats,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = 'home';
        } else if (routeName === 'Calendar') {
          iconName = 'calendar';
        } else if (routeName === 'Stats') {
          iconName = 'stats';
        }
        // You can return any component that you like here!
        return <Icon name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'blue',
      inactiveTintColor: 'gray',
    },
  },
);
