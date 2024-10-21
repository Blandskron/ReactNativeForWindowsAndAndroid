import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Dialog, Portal, Text, Provider } from 'react-native-paper';

const WindowsModal = () => {
    const [visible, setVisible] = useState(false);

    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);

    return (
        <Provider>
            <View style={styles.container}>
                <Button mode="contained" onPress={showModal}>
                    Show Modal
                </Button>
                <Portal>
                    <Dialog visible={visible} onDismiss={hideModal}>
                        <Dialog.Title>Modal Title</Dialog.Title>
                        <Dialog.Content>
                            <Text>This is a simple modal.</Text>
                        </Dialog.Content>
                        <Dialog.Actions>
                            <Button onPress={hideModal}>Close</Button>
                        </Dialog.Actions>
                    </Dialog>
                </Portal>
            </View>
        </Provider>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
    },
});

export default WindowsModal;
