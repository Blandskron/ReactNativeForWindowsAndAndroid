import React from 'react';
import { TouchableOpacity, SafeAreaView, StyleSheet, Text, TextInput, View, ImageBackground, Image } from 'react-native';
import CustomText from '../../typography/CustomText';

const WindowsHome = ({ email, setEmail, handleNavigateToRegister, navigation }) => {
    const image = {
        uri: "https://cdn.clarosports.com/clarosports/2023/03/tendencias-203623.jpg",
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Image source={require('../../../../assets/images/logo.png')} style={styles.logo} />
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.buttonText}>Iniciar sesion</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.content}>
                <ImageBackground source={image} style={styles.image}>
                    <View style={styles.overlay} />
                    <View style={styles.innerContainer}>
                        <CustomText variant="Bold" style={styles.welcomeText}>
                            Peliculas y series ilimitadas y mucho mas
                        </CustomText>
                        <CustomText variant="Regular" style={styles.textRegular}>
                            A partir de $6.540. Cancela cuando quieras.
                        </CustomText>
                        <CustomText variant="Light" style={styles.instructions}>
                            Quieres ver MoviesApp ya? Ingresa tu email para crear una cuenta o reiniciar tu membresia de MoviesApp.
                        </CustomText>
                        <View style={styles.inputButtonContainer}>
                            <TextInput
                                style={styles.input}
                                placeholder="Ingresa tu correo"
                                placeholderTextColor="#fff"
                                value={email}
                                onChangeText={setEmail}
                            />
                            <TouchableOpacity style={styles.button} onPress={handleNavigateToRegister}>
                                <Text style={styles.buttonText}>Comenzar ></Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ImageBackground>
            </View>

            <View style={styles.footer}>
                <CustomText variant="Light" style={styles.instructions}>
                    Blandskron Movies App
                </CustomText>
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
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#141414',
        borderBottomWidth: 1,
        borderBottomColor: '#333333',
    },
    logo: {
        width: 60,
        height: 60,
        marginBottom: 5,
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        flex: 1,
        width: '100%',
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems: 'center',
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
    },
    innerContainer: {
        width: '60%',
        alignItems: 'center',
        position: 'relative',
    },
    welcomeText: {
        fontSize: 32,
        fontWeight: '800',
        color: '#FFFFFF',
        marginBottom: 5,
        textAlign: 'center',
    },
    textRegular: {
        fontSize: 18,
        color: '#FFFFFF',
        marginBottom: 20,
        textAlign: 'center',
    },
    instructions: {
        fontSize: 14,
        color: '#fff',
        textAlign: 'center',
        marginBottom: 7,
    },
    inputButtonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
    },
    input: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#2bb871',
        backgroundColor: 'rgba(43, 113, 225, 0.2)',
        padding: 10,
        marginRight: 10,
        borderRadius: 4,
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
    footer: {
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#141414',
        borderTopWidth: 1,
        borderTopColor: '#333333',
    },
});

export default WindowsHome;
