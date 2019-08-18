import React from 'react';
import {View, Text} from 'react-native';
import Button from './main/button.js';

const Main = ({style}) => {
    return <View style={style}>
        <Text>This is main area</Text>
        <Button/>
    </View>;
};

export default Main;
