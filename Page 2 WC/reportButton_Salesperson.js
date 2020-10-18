import React, { Component } from 'react';
import { Button, StyleSheet, View, Text } from 'react-native';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';

export default class ButtonBasics extends Component {
    _onPressButton() {
        alert('You tapped the button!')
    }

    render() {
        return (
            <View style={styles.allview}>
                <Text style={styles.title}>
                    Click one of these options: 
                </Text>
                <View style={styles.LayoutButtonContainer}>
                    <TouchableNativeFeedback style={styles.ButtonWon}>
                        <Button
                            onPress={this._onPressButton}
                            title="Won Leads"
                            color="#32cd32"
                        />
                    </TouchableNativeFeedback>
                    <TouchableNativeFeedback style={styles.ButtonLost}>
                        <Button
                            onPress={this._onPressButton}
                            title="Lost leads"
                            color="ff0000"
                        />
                    </TouchableNativeFeedback>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    title:{
        textAlign:"center",
        fontSize: 16,
        fontFamily: "Arial",
        color:'grey',
        marginTop: 20
    },
    LayoutButtonContainer: {
        marginLeft: 20,
        marginRight: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    ButtonWon: {
        borderRadius: 10,
        //width: '100%',
        margin: 10,
        height: 80,
        width:150,
        backgroundColor: "#32cd32",
        justifyContent: 'center',
        borderColor: "#32cd32"
    },
    ButtonLost: {
        borderRadius: 10,
        //width: '100%',
        margin: 10,
        //height: '50%',
        height: 80,
        width:150,
        backgroundColor: "#ff0000",
        justifyContent: 'center'
    },

    allview:{
    flex:1,
    padding:"10%",
    },
});