import React from 'react';
import { Platform } from 'react-native';
import WindowsLogin from '../../components/windows/login/WindowsLogin';
import AndroidLogin from '../../components/android/login/AndroidLogin';

const LoginScreen = ({ navigation }) => {
    if (Platform.OS === 'windows') {
        return (
            <WindowsLogin navigation={navigation} />
        );
    }

    return (
        <AndroidLogin navigation={navigation} />
    );
};

export default LoginScreen;
