import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import {Audio} from 'expo-av';
import Music from './Music.json'

export default class Note extends React.Component{

    constructor(){
        super();

        this.state = {
            noteval: "",
            noteLenght: "",
            noteIndex: "",
            isHilighted: false
        }
    }

    componentDidMount(){
        this.setState({noteval: this.props.noteval, noteLenght: this.props.noteLenght, noteIndex: this.props.noteIndex});
    }

    render(){
        return(
            <View>
                <TouchableOpacity style={[styles.notes, {backgroundColor: !this.state.isHilighted ? "#ff50ff" : "rgba(255, 80, 255, 0.3)"} ]} onPress={ () => { this.hilight(); this.playSound(); this.addToMusic() }}>
                    <Text style={styles.text}>{this.state.noteval}</Text>
                </TouchableOpacity>
            </View>
        )
    }

    addToMusic(){
        var index = this.getIndex();
        Music[index.toString()] = { noteval: this.state.noteval, noteLenght: this.state.noteLenght };
        console.log(Music);
    }

    playSound(){
        Audio.Sound.createAsync(require('./assets/' + this.state.noteval + '.wav'), { shouldPlay: true });
    }

    hilight(){
        if(!this.state.isHilighted){
            this.setState({isHilighted: true});
            return;
        }
        
        if(this.state.isHilighted){
            this.setState({isHilighted: false});
            return;
        }
    }

    getIndex(){

        switch (this.state.noteIndex) {
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

    notes: {
        width: 100,
        borderWidth: 2,
        borderColor: "#f500f5",
    },

    text: {
        fontSize: 15,
        opacity: 0.7,
        color: 0,
        textAlign: 'center',
    }

})