import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';


const startTimer = (toggle) => {
    if (!toggle) {
        console.log('start timer');
    } else {
        console.log('stop timer');
    }

};

const Button = () => {
    let toggle = true;
    return <View style={styles.view}>
        <TouchableOpacity onPress={() => {
            startTimer(toggle = !toggle);
        }}
                          style={styles.button}>
        </TouchableOpacity>
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
        height: 120,
        width: 120,
        backgroundColor: 'pink',

    },
});
