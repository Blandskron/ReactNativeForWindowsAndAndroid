import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';

import AndroidModal from '../modal/AndroidModal';
import AndroidActivityIndicator from '../activityIndicator/AndroidActivityIndicator';
import AndroidButton from '../button/AndroidButton';

const AndroidDashboard = () => {
    const [currentComponent, setCurrentComponent] = useState('modal');

    const renderComponent = () => {
        switch (currentComponent) {
            case 'modal':
                return <AndroidModal />;
            case 'activityIndicator':
                return <AndroidActivityIndicator />;
            case 'button':
                return <AndroidButton />;
            default:
                return null;
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.menu}>
                <Button title="Show Modal" onPress={() => setCurrentComponent('modal')} />
                <Button title="Show Activity Indicator" onPress={() => setCurrentComponent('activityIndicator')} />
                <Button title="Button" onPress={() => setCurrentComponent('button')} />
            </View>
            {renderComponent()}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    menu: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 20,
    },
});

export default AndroidDashboard;
