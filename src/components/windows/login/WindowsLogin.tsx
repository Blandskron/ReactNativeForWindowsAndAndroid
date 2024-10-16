import React from 'react';
import { TouchableOpacity, SafeAreaView, StyleSheet, TextInput, View, Image } from 'react-native';
import CustomText from '../../typography/CustomText';

const WindowsLogin = ({ email, setEmail, handleNavigateToRegister, navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Image source={require('../../../../assets/images/logo.png')} style={styles.logo} />
            </View>
            <View style={styles.content}>
                <CustomText variant="Regular" style={styles.welcomeText}>
                    Bienvenido a la aplicacion
                </CustomText>
                <View style={styles.inputButtonContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Ingresa tu correo"
                        value={email}
                        onChangeText={setEmail}
                        placeholderTextColor="#999"
                    />
                    <TouchableOpacity style={styles.button} onPress={handleNavigateToRegister}>
                        <CustomText style={styles.buttonText} variant="Regular">
                            Registrarse
                        </CustomText>
                    </TouchableOpacity>
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
        paddingVertical: 20,
    },
    logo: {
        width: 100,
        height: 100,
        marginBottom: 20,
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 20,
    },
    welcomeText: {
        fontSize: 32,
        fontWeight: '800',
        color: '#FFFFFF',
        marginBottom: 5,
        textAlign: 'center',
    },
    inputButtonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 20,
    },
    input: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#2bb871',
        backgroundColor: 'rgba(43, 113, 225, 0.2)',
        padding: 10,
        marginRight: 10,
        borderRadius: 4,
        color: '#FFF',
    },
    button: {
        backgroundColor: '#E50914',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 4,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
        textAlign: 'center',
    },
});

export default WindowsLogin;
