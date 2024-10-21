
import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Provider } from 'react-native-paper';

import WindowsModal from '../modal/WindowsModal';
import WindowsActivityIndicator from '../activityIndicator/WindowsActivityIndicator';
import WindowsButton from '../button/WindowsButton';

const WindowsDashboard = () => {
    const [currentComponent, setCurrentComponent] = useState('modal');

    const renderComponent = () => {
        switch (currentComponent) {
            case 'modal':
                return <WindowsModal />;
            case 'activityIndicator':
                return <WindowsActivityIndicator />;
            case 'button':
                return <WindowsButton />;
            default:
                return null;
        }
    };

    return (
        <Provider>
            <View style={styles.container}>
                {renderComponent()}
                <View style={styles.menu}>
                    <TouchableOpacity onPress={() => setCurrentComponent('modal')} style={styles.menuItem}>
                        <Text style={styles.menuText}>Modal</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setCurrentComponent('activityIndicator')} style={styles.menuItem}>
                        <Text style={styles.menuText}>Activity Indicator</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setCurrentComponent('button')} style={styles.menuItem}>
                        <Text style={styles.menuText}>Button</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Provider>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#f5f5f5',
    },
    menu: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 10,
        backgroundColor: '#6200ea',
        borderTopWidth: 1,
        borderColor: '#ddd',
    },
    menuItem: {
        flex: 1,
        alignItems: 'center',
        padding: 15,
    },
    menuText: {
        color: '#ffffff',
        fontWeight: 'bold',
    },
});

export default WindowsDashboard;
