import React, { useContext } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Storija from './src/vendors/storija.json';
import HomeScreen from './src/components/HomeScreen';
import VendorMenuScreen from './src/components/VendorMenuScreen';
import CondimentsScreen from './src/components/CondimentsScreen';
import VendorContext from './src/VendorContext';
import { headerColor } from './src/styles';
import transitionConfig from './src/transitionConfiguration';

const AppNavigator = createStackNavigator(
  {
    Home: { screen: HomeScreen },
    VendorMenu: { screen: VendorMenuScreen },
    Condiments: { screen: CondimentsScreen },
  },
  {
    transitionConfig,
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: headerColor,
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  },
);

const AppContainer = createAppContainer(AppNavigator);

export default function App({ vendors }) {
  const vendorContext = useContext(VendorContext);
  vendorContext.vendors = vendors || [Storija];

  return <AppContainer />;
}
