// src/screens/DashboardScreen.tsx
import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';

const DashboardScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>
                {Platform.OS === 'windows' ? 'Dashboard - Windows' : 'Dashboard - Android'}
            </Text>
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

export default DashboardScreen;
