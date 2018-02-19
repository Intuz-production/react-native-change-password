// Copyright (C) 2018 INTUZ. 

// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to
// the following conditions:

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR
// ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH
// THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    ScrollView,
    ListView,
    Keyboard,
    TextInput
} from 'react-native';

import styles from './styles'

class ChangePasswordController extends Component {
    /**
     * Default props
     */
    static defaultProps = {   
        backgroundColor :"white",
        submitText:"Save",
        placeHolderCurrentPassword:"Current Password",
        placeHolderNewPassword:"New Password",
        placeHolderConfirmPassword:"Confirm Password"
    };

    constructor(props) {
        super(props);
        this.state = {
            newPassword: "",
            currentPassword: "",
            confirmPassword: ""
        };
    }

    /**
     * Button Save pressed 
     */
    onbtnSavePress() {
        if (this.state.currentPassword.trim().length == 0) {
            console.log("Please enter current password");
        } else if (this.state.newPassword.trim().length == 0) {
            console.log("Please enter new password");
        } else if (this.state.newPassword != this.state.confirmPassword) {
            console.log("Password dose not match");
        } else {
            Keyboard.dismiss();
            this.changePassword();
        }
    }

    /**
     * Call your webservice for update password
     */
    changePassword() {
        
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={[styles.bottomView,{backgroundColor:this.props.backgroundColor}]}>
                <View style={styles.inputView}>
                    <TextInput style={styles.inputText} placeholder={this.props.placeHolderCurrentPassword}
                        multiline={false} placeholderTextColor={"#3c3c3c"} autoCorrect={false} underlineColorAndroid={'transparent'}  secureTextEntry={true} onChangeText={(currentPassword) => this.setState({currentPassword})} value={this.state.currentPassword}></TextInput>
                </View>
                <View style={styles.inputView}>
                    <TextInput style={styles.inputText} placeholder={this.props.placeHolderNewPassword}
                        multiline={false} placeholderTextColor={"#3c3c3c"} autoCorrect={false} underlineColorAndroid={'transparent'}  secureTextEntry={true} onChangeText={(newPassword) => this.setState({newPassword})} value={this.state.newPassword}></TextInput>
                </View>
                <View style={styles.inputView}>
                    <TextInput style={styles.inputText} placeholder={this.props.placeHolderConfirmPassword}
                        multiline={false} placeholderTextColor={"#3c3c3c"} autoCorrect={false} underlineColorAndroid={'transparent'}  secureTextEntry={true} onChangeText={(confirmPassword) => this.setState({confirmPassword})} value={this.state.confirmPassword}></TextInput>
                </View>
                <TouchableOpacity style={styles.btnSave} activeOpacity={0.6} onPress={() => this.onbtnSavePress()}>
                    <Text style={styles.textSave} numberOfLines={1}>
                        {this.props.submitText}</Text>
                </TouchableOpacity>
                </View>
            </View>
           
        );
    }
}

export default ChangePasswordController