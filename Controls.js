import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image } from 'react-native';
import Music from './Music.json'
import Note from './Note'

export default class Controls extends React.Component{

    render(){

        return(

            <View>
                <TouchableOpacity onPress={ () => {
                    this.playMusic();
                }}> 
                    <Image source={require("./assets/play.png")} style={styles.image} /> 
                </TouchableOpacity>

                <TouchableOpacity onPress = { () => {
                    this.stopMusic();
                }}> 
                    <Image source={require("./assets/pause.png")} style={styles.image} /> 
                </TouchableOpacity>
            </View>

        )

    }

    async playMusic(){
        
        for(var i = 0; i < 8; i++){

            console.log(Music);
            var currentIndex = this.getIndex(i);
            console.log(currentIndex);
            var currentNote = Music[currentIndex].noteval ;
            console.log(currentNote);

            /*
            await Audio.createAsync( require( './assets/' + currentNote + '.wav' ), {shouldPlay: true}  );*/

        }

    }

    stopMusic(){
        //Audio.
    }

    getIndex(val){

        switch (val) {
            case 1: return "one"

                break;
        
            case 2: return "two"
                               
                break;

            case 3: return "three"
                               
                break;

            case 4: return "four"
                               
                break;

            case 5: return "five"
                               
                break;

            case 6: return "six"
                               
                break;

            case 7: return "seven"
                               
                break;

            case 8: return "eight"
                               
                break;

            default:
                break;
        }

    }

}

const styles = StyleSheet.create({

    image: {
        width: 50,
        height: 50
    }

})