import React from 'react';
import { Text, StyleSheet } from 'react-native';

const CustomText = ({ children, variant = 'Regular', style, ...props }) => {
    let fontFamily;

    switch (variant) {
        case 'Bold':
            fontFamily = 'MontserratAlternates-Bold';
            break;
        case 'Light':
            fontFamily = 'MontserratAlternates-Light';
            break;
        case 'Regular':
        default:
            fontFamily = 'MontserratAlternates-Regular';
            break;
    }

    return (
        <Text style={[{ fontFamily }, styles.text, style]} {...props}>
            {children}
        </Text>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 16,
    },
});

export default CustomText;
