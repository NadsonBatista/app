import React from 'react'
import {View, StyleSheet} from 'react-native'
import {FontAwesome5, AntDesign} from '@expo/vector-icons';

const Menu = () => {
    return (
        <View style={styles.container}>
            <FontAwesome5 name= "user-alt" size={30}color="black"/>
            <AntDesign name="clouddownload" size={30}color="black"/>
            <AntDesign name="setting" size={30}color="black"/>
            <AntDesign name="delete" size={30}color="black"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        width: '100%',
        marginTop: '5%',
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row' 
    }
});

export default Menu;