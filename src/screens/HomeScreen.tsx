// src/screens/HomeScreen.tsx
import React from 'react';
import { Button, SafeAreaView, StyleSheet, Text } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>
                {Platform.OS === 'windows' ? 'Hola, bienvenido a Windows' : 'Bienvenido a Android'}
            </Text>
            <Button
                title={Platform.OS === 'windows' ? 'Regístrate, estás en Windows' : 'Regístrate, estás en Android'}
                onPress={() => navigation.navigate('Register')}
            />
            <Button
                title={Platform.OS === 'windows' ? 'Login, estás en Windows' : 'Login, estás en Android'}
                onPress={() => navigation.navigate('Login')}
            />
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

export default HomeScreen;
