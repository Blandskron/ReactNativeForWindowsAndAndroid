// src/screens/RegisterScreen.tsx
import React from 'react';
import { Button, SafeAreaView, StyleSheet, Text } from 'react-native';

const RegisterScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>
                {Platform.OS === 'windows' ? 'Reg�strate en Windows' : 'Reg�strate en Android'}
            </Text>
            {/* Aqu� ir�a el formulario de registro */}
            <Button title="Terminar Registro" onPress={() => navigation.navigate('Dashboard')} />
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

export default RegisterScreen;
