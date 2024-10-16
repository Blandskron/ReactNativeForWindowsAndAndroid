import React from 'react';
import { Platform } from 'react-native';
import WindowsLogin from '../../components/windows/login/WindowsLogin';
import AndroidLogin from '../../components/android/login/AndroidLogin';

const LoginScreen = ({ navigation }) => {
    const handleNavigateToRegister = () => {
        navigation.navigate('Register');
    };

    if (Platform.OS === 'windows') {
        return (
            <WindowsLogin navigation={navigation} handleNavigateToRegister={handleNavigateToRegister} />
        );
    }

    return (
        <AndroidLogin navigation={navigation} handleNavigateToRegister={handleNavigateToRegister} />
    );
};

export default LoginScreen;
