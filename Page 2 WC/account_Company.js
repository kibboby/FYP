import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

const CompanyAccount = () => {
    return (
        <View
            style={{
                flex: 1,
                padding:"10%",
            }}>

            <Text style={styles.CompanyName}>ABC Company</Text>

            <View>
                <View style={styles.Direction}>
                    <Text style={styles.Text}>Username</Text>
                    <Text style={styles.Info}>John David Beckham</Text>
                </View>

                <View style={styles.Direction}>
                    <Text style={[styles.Text, {marginEnd: 10}]}>Address</Text>
                    <Text style={styles.Info}>123, Lot 1234, Lorong ABC, Jalan ABC, 93350 Kuching, Sarawak</Text>
                </View>

                <View style={styles.Direction}>
                    <Text style={[styles.Text , {marginEnd: 25}]}>Email</Text>
                    <Text style={styles.Info}>abc@gmail.com</Text>
                </View>
                <View style={styles.Direction}>
                    <Text style={[styles.Text, {marginEnd: 8}]}>Address</Text>
                    <Text style={styles.Info}>+6 012 345 6789</Text>
                </View>
            </View>
        </View>
    )
};

export default CompanyAccount;

const styles = StyleSheet.create({
    CompanyName:{
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: 18,
        marginLeft: 15,
        marginTop: 10
    },
    Direction: {
        flexDirection: 'row',
        marginTop: 10,
        alignItems: 'baseline'
    },
    Text: {
        marginTop: 2.5,
        marginLeft: 15,
        fontSize: 14,
        marginBottom: 5
    },
    Info: {
        width: 200,
        marginTop: 2.5,
        marginStart: 35,
        fontSize: 14,
    },
});