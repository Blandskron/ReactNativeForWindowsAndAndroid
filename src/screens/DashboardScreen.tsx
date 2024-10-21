import React from 'react';
import { Platform } from 'react-native';

// Importa los dashboards específicos para cada plataforma
import WindowsDashboard from '../components/docs/dashboard/WindowsDashboard';
import AndroidDashboard from '../components/docs/dashboard/AndroidDashboard';

const DashboardScreen = ({ navigation }) => {
    if (Platform.OS === 'windows') {
        return <WindowsDashboard navigation={navigation} />;
    }

    return <AndroidDashboard navigation={navigation} />;
};

export default DashboardScreen;
