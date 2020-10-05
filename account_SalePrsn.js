import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Platform, StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

const Salesperson = () => {
    return (
        <View
            style={{
                flex: 1,
            }}>


            <View style={styles.Direction}>
                <Icon
                    name='user'
                    size={55}
                    style={styles.profileImg} />
                <View>
                    <Text style={styles.Username}>
                        John David
                    </Text>
                    <Text style={styles.designation}>
                        Salesperson
                    </Text>
                </View>
            </View>
            <View style={styles.Direction}>
                <View style={styles.Text}>
                    <Text style={styles.TextMargin}>Name</Text>
                    <Text style={styles.TextMargin}>Email</Text>
                    <Text style={styles.TextMargin}>Contact</Text>
                </View>

                <View style={styles.Info}>
                    <Text style={styles.TextMargin}>John David Beckham</Text>
                    <Text style={styles.TextMargin}>abc@gmail.com</Text>
                    <Text style={styles.TextMargin}>+6 012 345 6789</Text>
                </View>
            </View>

            <Text style={styles.TaskTitle}>
                UPCOMING TASKS
            </Text>

            <View style={styles.Task}>
                <Text style={styles.Type}>
                    Others</Text>
                <Text> | </Text>
                <Text style={styles.Date}>25/10/2020</Text>
            </View>

            <View style={styles.Task}>
                <Text style={styles.Type}>
                    Others</Text>
                <Text> | </Text>
                <Text style={styles.Date}>25/10/2020</Text>
            </View>

            <View style={styles.Task}>
                <Text style={styles.Type}>
                    Others</Text>
                <Text> | </Text>
                <Text style={styles.Date}>25/10/2020</Text>
            </View>
        </View>
    )
}
export default Salesperson;

const styles = StyleSheet.create({
    Direction: {
        flexDirection: 'row',
        marginTop: 10
    },
    profileImg: {
        borderRadius: 50,
        marginStart: 10,
        marginTop: 2.5,
        height: 70,
        width: 70,
        overflow: 'hidden',
        borderColor: 'black',
        borderWidth: 1,
        paddingStart: 15,
        paddingTop: 4
    },
    Username: {
        marginLeft: 15,
        marginTop: 10,
        fontSize: 20,
    },
    designation: {
        marginLeft: 15,
        fontSize: 12,
    },
    Info: {
        marginTop: 2.5,
        marginStart: 35,
        fontSize: 14,
    },
    Text: {
        marginTop: 2.5,
        marginLeft: 15,
        fontSize: 14,
    },
    TextMargin: {
        marginBottom: 5
    },
    TaskTitle: {
        fontFamily: 'Roboto',
        fontSize: 16,
        marginTop: 20,
        marginStart: 15,
        fontWeight: 'bold'
    },
    Task: {
        flexDirection: 'row',
        marginTop: 5,
        marginStart: 15,
        backgroundColor: 'lightgrey',
        padding: 7,
        width: 250,
        marginBottom: 2
    },
    Type: {
        marginStart: 5,
    },
    Date: {
        marginStart: 5,
    }
});