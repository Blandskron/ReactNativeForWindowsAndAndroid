import React, { useState } from 'react';
import { TouchableOpacity, SafeAreaView, StyleSheet, TextInput, View, Image, Alert } from 'react-native';
import CustomText from '../../typography/CustomText';
import { loginUser } from '../../../utils/api'; // Ajustar la ruta de importación según la estructura del proyecto

const AndroidLogin = ({ handleNavigateToRegister, navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            const response = await loginUser(email, password);
            if (response.ok) {
                const data = await response.json();
                navigation.navigate('Dashboard');
            } else {
                Alert.alert('Error de inicio de sesión', 'Credenciales incorrectas.');
            }
        } catch (error) {
            console.error('Error en el inicio de sesión:', error);
            Alert.alert('Error', 'Hubo un problema al iniciar sesión.');
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Image source={require('../../../../assets/images/logo.png')} style={styles.logo} />
            </View>
            <View style={styles.content}>
                <CustomText variant="Regular" style={styles.welcomeText}>
                    Bienvenido a MoviesApp
                </CustomText>
                <View style={styles.inputButtonContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Ingresa tu usuario"
                        value={email}
                        onChangeText={setEmail}
                        placeholderTextColor="#999"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Ingresa tu contraseña"
                        value={password}
                        onChangeText={setPassword}
                        placeholderTextColor="#999"
                        secureTextEntry
                    />
                    <TouchableOpacity style={styles.button} onPress={handleLogin}>
                        <CustomText style={styles.buttonText} variant="Regular">
                            Iniciar sesión
                        </CustomText>
                    </TouchableOpacity>
                    <View style={styles.registerContainer}>
                        <CustomText style={styles.registerText} variant="Regular">
                            ¿No tienes cuenta?
                        </CustomText>
                        <TouchableOpacity onPress={handleNavigateToRegister}>
                            <CustomText style={styles.registerLink} variant="Regular">
                                Regístrate
                            </CustomText>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#141414',
        padding: 16,
    },
    header: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 30,
    },
    logo: {
        width: 120,
        height: 120,
        marginBottom: 20,
    },
    content: {
        flex: 1,
        alignItems: 'center',
        paddingVertical: 20,
    },
    welcomeText: {
        fontSize: 24,
        fontWeight: '600',
        color: '#FFFFFF',
        marginBottom: 30,
        textAlign: 'center',
    },
    inputButtonContainer: {
        width: '100%',
        paddingHorizontal: 20,
    },
    input: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#2bb871',
        backgroundColor: 'rgba(43, 113, 225, 0.2)',
        padding: 12,
        marginBottom: 15,
        borderRadius: 4,
        color: '#FFF',
    },
    button: {
        backgroundColor: '#E50914',
        paddingVertical: 12,
        borderRadius: 4,
        marginBottom: 15,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 18,
        textAlign: 'center',
    },
    registerContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
    },
    registerText: {
        color: '#FFFFFF',
        fontSize: 14,
        marginRight: 5,
    },
    registerLink: {
        color: '#E50914',
        fontSize: 14,
    },
});

export default AndroidLogin;
