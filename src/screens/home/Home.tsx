import React from 'react';
import {Dimensions, View, Text, StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

import fonts from '../../constants/fonts';
import colors from '../../constants/colors';

interface IProps {
  componentId: string;
}

const BankAccount = ({componentId}: IProps) => {
  console.log(componentId);

  return (
    <View style={styles.container}>
      <Text style={styles.dummyText}>Welcome to the Home Page</Text>
      <Button title="Settings" raised />
    </View>
  );
};

BankAccount.options = {
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

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    width,
    height,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.darkBlue,
  },
  dummyText: {
    fontFamily: fonts.OpenSansSemiBold,
    fontSize: 16,
    color: colors.white,
  },
});

export default BankAccount;
