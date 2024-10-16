import React from 'react';
import { Platform } from 'react-native';
import WindowsHome from '../../components/windows/home/WindowsHome';
import AndroidHome from '../../components/android/home/AndroidHome';

const HomeScreen = ({ navigation }) => {
    const [email, setEmail] = React.useState('');

    const handleNavigateToRegister = () => {
        navigation.navigate('Register', { email });
    };

    if (Platform.OS === 'windows') {
        return (
            <WindowsHome
                email={email}
                setEmail={setEmail}
                handleNavigateToRegister={handleNavigateToRegister}
                navigation={navigation}
            />
        );
    }

    return (
        <AndroidHome
            email={email}
            setEmail={setEmail}
            handleNavigateToRegister={handleNavigateToRegister}
            navigation={navigation}
        />
    );
};

export default HomeScreen;
