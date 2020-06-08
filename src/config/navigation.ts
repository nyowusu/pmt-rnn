// import {StyleSheet, View, Text} from 'react-native';
import {Navigation} from 'react-native-navigation';

import {ScreenNames} from '../constants/screens';

import Home from '../screens/home/Home';
import PaymentForm from '../components/PaymentFormView';
import BankAccount from '../screens/bank';

// Screens
const Screens = {
  [ScreenNames.HomeScreen]: Home,
  [ScreenNames.PaymentScreen]: PaymentForm,
  [ScreenNames.BankAccountScreen]: BankAccount,
};

Home.options = {
  topBar: {
    title: {
      text: 'Home',
      color: 'white',
    },
    background: {
      color: '#4d089a',
    },
  },
};

export const screensToRegister = () => {
  Object.keys(Screens).forEach((screenName) => {
    Navigation.registerComponent(screenName, () => Screens[screenName]);
  });
};

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: ScreenNames.HomeScreen,
            },
          },
        ],
      },
    },
  });
});
