import React from 'react';
import { StyleSheet, View, SafeAreaView, Text, Alert } from 'react-native';
import { Button, Provider as PaperProvider } from 'react-native-paper';

const Separator = () => <View style={styles.separator} />;

const WindowsButton = () => (
    <PaperProvider>
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={styles.title}>
                    The title and onPress handler are required. It is recommended to set
                    accessibilityLabel to help make your app usable by everyone.
                </Text>
                <Button mode="contained" onPress={() => Alert.alert('Simple Button pressed')}>
                    Press me
                </Button>
            </View>
            <Separator />
            <View>
                <Text style={styles.title}>
                    Adjust the color in a way that looks standard on each platform.
                </Text>
                <Button
                    mode="contained"
                    color="#f194ff"
                    onPress={() => Alert.alert('Button with adjusted color pressed')}
                >
                    Press me
                </Button>
            </View>
            <Separator />
            <View>
                <Text style={styles.title}>
                    All interaction for the component are disabled.
                </Text>
                <Button
                    mode="contained"
                    style={styles.disabledButton}
                    disabled
                    onPress={() => Alert.alert('Cannot press this one')}>
                    Press me
                </Button>
            </View>
            <Separator />
            <View>
                <Text style={styles.title}>
                    This layout strategy lets the title define the width of the button.
                </Text>
                <View style={styles.fixToText}>
                    <Button mode="contained" onPress={() => Alert.alert('Left button pressed')}>
                        Left button
                    </Button>
                    <Button mode="contained" onPress={() => Alert.alert('Right button pressed')}>
                        Right button
                    </Button>
                </View>
            </View>
        </SafeAreaView>
    </PaperProvider>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 16,
    },
    title: {
        textAlign: 'center',
        marginVertical: 8,
        color: 'black',
    },
    fixToText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    disabledButton: {
        backgroundColor: '#f194ff',
    },
});

export default WindowsButton;
