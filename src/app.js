import React from 'react';
import {View, StyleSheet} from 'react-native';
import Header from './components/header.js';
import Footer from './components/footer.js';
import Main from './components/main.js';

const App = () => {
    const {container, header, main, footer} = styles;

    return <View style={container}>
        <Header style={header}/>
        <Main style={main}/>
        <Footer style={footer}/>
    </View>;
};

export default App;

const styles = StyleSheet.create({
        container: {
            flex: 6,
        },
        header: {flex: 1, backgroundColor: 'blue'},
        main: {flex: 4, backgroundColor: 'white',justifyContent:'center'},
        footer: {flex: 1, backgroundColor: 'yellow'},
    },
);
