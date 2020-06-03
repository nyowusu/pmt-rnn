import React from 'react';
import {StyleSheet, View} from 'react-native';
import {CreditCardInput} from 'react-native-input-credit-card';

const PaymentForm = () => {
  const onChange = (formData: any) => {
    console.log(formData);
  };

  const onFocus = (field: any) => {
    console.log('focusing', field);
  };

  return (
    <View style={s.container}>
      <CreditCardInput
        requiresName
        requiresCVC
        labels={{
          name: 'Full Name',
          number: 'Card Number',
          expiry: 'Expiry Date',
          cvc: 'CVC/CCV',
          postalCode: 'POSTAL CODE',
        }}
        placeholders={{
          name: 'Full name',
          number: '1111 2222 3333 4444',
          expiry: 'MM/YY',
          cvc: 'CVC',
          postalCode: '3211',
        }}
        labelStyle={s.label}
        inputStyle={s.input}
        validColor="black"
        invalidColor="red"
        placeholderColor="darkgray"
        allowScroll
        onFocus={onFocus}
        onChange={onChange}
      />
    </View>
  );
};

const s = StyleSheet.create({
  switch: {
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  container: {
    backgroundColor: '#F5F5F5',
    marginTop: 60,
  },
  label: {
    color: 'black',
    fontSize: 12,
  },
  input: {
    fontSize: 16,
    color: 'black',
  },
});
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//   },
//   buttonWrapper: {
//     padding: 10,
//     zIndex: 100,
//   },
//   alertTextWrapper: {
//     flex: 20,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   alertIconWrapper: {
//     padding: 5,
//     flex: 4,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   alertText: {
//     color: '#c22',
//     fontSize: 16,
//     fontWeight: '400',
//   },
//   alertWrapper: {
//     backgroundColor: '#ecb7b7',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     borderRadius: 5,
//     paddingVertical: 5,
//     marginTop: 10,
//   },
// });

export default PaymentForm;
