import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

export default class AppHeader extends React.Component
{

    render(){
        return(

            <View style={styles.HeaderContainor}>
                <Text style={styles.HeaderText}>MUSIC MAN</Text>
            </View>

        )
    }    

}

const styles = StyleSheet.create({
    HeaderContainor: {
        flex: 0.2,
        backgroundColor: "darkorange",
        width: "100%",
        justifyContent: "center"
    },

    HeaderText: {textAlign: "center", fontSize: 20}
})