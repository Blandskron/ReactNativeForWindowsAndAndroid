import React from 'react';
import { Platform } from 'react-native';
import WindowsLogin from '../../components/login/WindowsLogin';
import AndroidLogin from '../../components/login/AndroidLogin';

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
