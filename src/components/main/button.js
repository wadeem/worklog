import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';

const Button = () => {
    return <View style={styles.view}>
        <TouchableOpacity onPress={() => console.log('pressed')}
                          style={styles.button}></TouchableOpacity>
    </View>;
};

export default Button;

const styles = StyleSheet.create({
    view: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'aquamarine',
    },
    button: {
        height: 50,
        width: 50,
        backgroundColor: 'pink',

    },
});
