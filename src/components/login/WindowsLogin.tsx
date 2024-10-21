import React, { useState } from 'react';
import { TouchableOpacity, SafeAreaView, StyleSheet, TextInput, View, Image, Alert } from 'react-native';
import CustomText from '../typography/CustomText';
import { loginUser } from '../../utils/api'; // Ajustar la ruta de importación según la estructura del proyecto

const WindowsLogin = ({ handleNavigateToRegister, navigation }) => {
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
            <View style={styles.leftPane}>
                <Image source={require('../../../assets/images/logo.png')} style={styles.logo} />
                <CustomText variant="Regular" style={styles.brandText}>
                    Bienvenido a MoviesApp
                </CustomText>
            </View>
            <View style={styles.rightPane}>
                <View style={styles.formContainer}>
                    <CustomText variant="Regular" style={styles.welcomeText}>
                        Iniciar Sesión
                    </CustomText>
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
        flexDirection: 'row',
        backgroundColor: '#141414',
    },
    leftPane: {
        flex: 0.6,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    formContainer: {
        width: '80%',
    },
    rightPane: {
        flex: 0.4,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1A1A1A',
        padding: 20,
    },
    logo: {
        width: 200,
        height: 200,
        marginBottom: 20,
    },
    welcomeText: {
        fontSize: 22,
        fontWeight: '600',
        color: '#FFFFFF',
        marginBottom: 20,
        textAlign: 'center',
    },
    brandText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FFFFFF',
        textAlign: 'center',
    },
    input: {
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
        marginTop: 10,
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

export default WindowsLogin;
