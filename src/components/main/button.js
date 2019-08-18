import React from 'react';
import {StyleSheet, TouchableOpacity, Image, View} from 'react-native';
import {startTimer} from './timer.js';

const pathPlay = '../../files/png/play.png';
const pathStop = '../../files/png/stop.png';

export default class Button extends React.Component {

    state = {
        toggle: false,
    };

    render() {
        return <View style={styles.view}>
            <TouchableOpacity onPress={() => {
                this.setState({toggle:!this.state.toggle})
                startTimer(this.state.toggle);
            }}
                              style={styles.button}>
                <Image source={(this.state.toggle === true ? require(pathStop) : require(pathPlay))}
                       style={styles.button}/>
            </TouchableOpacity>
        </View>;
    };
}


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
        // backgroundColor: 'pink',
    },
});
