// src/screens/LoginScreen.tsx
import React from 'react';
import { Button, SafeAreaView, StyleSheet, Text } from 'react-native';

const LoginScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>
                {Platform.OS === 'windows' ? 'Login - Windows' : 'Login - Android'}
            </Text>
            {/* Aquí iría el formulario de login */}
            <Button title="Entrar al Dashboard" onPress={() => navigation.navigate('Dashboard')} />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    text: {
        fontSize: 24,
        marginBottom: 20,
    },
});

export default LoginScreen;
