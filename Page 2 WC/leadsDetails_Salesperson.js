import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

const App = () => {
    return (
        <SafeAreaView>
            <View style={styles.textArea}>
                <Text style={styles.Label}>Lead's Detail</Text>
                <View>
                    <Text style={styles.title}>Name: </Text>
                    <Text style={styles.info}>John David</Text>
                    <Text style={styles.title}>Email: </Text>
                    <Text style={styles.info}>Johndvd@gmail.com</Text>
                    <Text style={styles.title}>Phone Number: </Text>
                    <Text style={styles.info}>010-6769892</Text>
                    <Text style={styles.title}>Company Name: </Text>
                    <Text style={styles.info}>Facebook</Text>
                    <Text style={styles.title}>Department: </Text>
                    <Text style={styles.info}>Design</Text>
                    <Text style={styles.title}>Comment: </Text>
                    <Text style={styles.info}>No comment</Text>
                </View>
            </View>
            <View style={styles.textArea}>
                <Text>Create New: </Text>
                <DropDownPicker
                    items={[{ label: 'Call', value: 'Call' },
                    { label: 'Appointment', value: 'Appointment' },
                    { label: 'Other', value: 'Other' }]}
                    defaultValue={'Call'}
                    containerStyle={{ height: 40 }}
                    style={{ backgroundColor: '#fafafa' }}
                    itemStyle={{
                        justifyContent: 'flex-start'
                    }}
                    dropDownStyle={{ backgroundColor: '#fafafa' }}
                />
                <Text style={styles.underline}>Create</Text>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    textArea: {
        flex: 1,
        margin: 10,
        paddingLeft: 10,
        backgroundColor: '#ffd394',
        width: 250,
        paddingBottom: 5,
        paddingTop: 5
    },
    title: {
        marginTop: 10,
        fontFamily: "Cochin",
        fontSize: 14,
        fontStyle: "italic"
    },
    info: {
        marginTop: 2,
        paddingStart: 5,
        fontFamily: "Cochin",
        fontSize: 16,
    },
    Label: {
        fontFamily: "Cochin",
        fontSize: 16,
        textAlign: "center"
    },
    underline: {
        fontVariants: "underlined"
    }
});

export default App;