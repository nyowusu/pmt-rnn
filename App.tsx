import React from 'react';
// import {StyleSheet, View, Text} from 'react-native';

import {ScreenNames} from './src/constants/screens';

// Screens
import Home from './src/screens/Home';
import PaymentForm from './src/components/PaymentFormView';

const Screens = {
  [ScreenNames.HomeScreen]: Home,
  [ScreenNames.PaymentScreen]: PaymentForm,
};

// import stripe from 'tipsi-stripe';

// import Config from 'react-native-config';

const App = () => {
  return <PaymentForm />;
};

export default App;

// export default class CardFormScreen extends PureComponent {
//   static title = 'Card Form';

//   state = {
//     loading: false,
//     token: null,
//   };

//   handleCardPayPress = async () => {
//     try {
//       this.setState({loading: true, token: null});
//       const token = await stripe.paymentRequestWithCardForm({
//         // Only iOS support this options
//         smsAutofillDisabled: true,
//         requiredBillingAddressFields: 'full',
//         prefilledInformation: {
//           billingAddress: {
//             name: 'Gunilla Haugeh',
//             line1: 'Canary Place',
//             line2: '3',
//             city: 'Macon',
//             state: 'Georgia',
//             country: 'US',
//             postalCode: '31217',
//             email: 'ghaugeh0@printfriendly.com',
//           },
//         },
//       });

//       this.setState({loading: false, token});
//     } catch (error) {
//       this.setState({loading: false});
//     }
//   };

//   render() {
//     const {loading, token} = this.state;

//     return (
//       <View style={styles.container}>
//         <Text style={styles.header}>Card Form Example</Text>
//         <Text style={styles.instruction}>
//           Click button to show Card Form dialog.
//         </Text>
//         <Button
//           text="Enter you card and pay"
//           loading={loading}
//           onPress={this.handleCardPayPress}
//         />
//         <View style={styles.token}>
//           {token && (
//             <Text style={styles.instruction}>
//               Token: {token !== null && token.tokenId}
//             </Text>
//           )}
//         </View>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   header: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instruction: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
//   token: {
//     height: 20,
//   },
// });
