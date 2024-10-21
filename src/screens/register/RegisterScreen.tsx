import React from 'react';
import { Platform } from 'react-native';
import WindowsRegister from '../../components/register/WindowsRegister';
import AndroidRegister from '../../components/register/AndroidRegister';

const RegisterScreen = ({ navigation }) => {
    const handleNavigateToLogin = () => {
        navigation.navigate('Login');
    };

    if (Platform.OS === 'windows') {
        return (
            <WindowsRegister navigation={navigation} handleNavigateToLogin={handleNavigateToLogin} />
        );
    }

    return (
        <AndroidRegister navigation={navigation} handleNavigateToLogin={handleNavigateToLogin} />
    );
};

export default RegisterScreen;
