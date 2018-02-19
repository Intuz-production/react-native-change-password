/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */


import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal,
} from 'react-native';

import ChangePasswordController from './app/component/ChangePasswordController';

export default class App extends Component {
  
    constructor(props) {
        super(props);
        this.state = {

        };
    }

  render() {
    return (
      <View style={{flex:1, margin: 10, backgroundColor:'white' }}>
        <ChangePasswordController backgroundColor='white' submitText='Done' placeHolderCurrentPassword='Old Password' placeHolderNewPassword='New Password' placeHolderConfirmPassword='Confirm Password' />
      </View>
    );
  }
}
