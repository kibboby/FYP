import React, { Component } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Table, TableWrapper, Row } from 'react-native-table-component';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tableHead: ['Leads', 'Contacted', 'Quote Sent', 'Won/Lost'],
            widthArr: [100, 80, 90, 80]
        }
    }

    render() {
        const state = this.state;
        const data = [];
        for (let i = 0; i < 30; i += 1) {
            const dataRow = [];
            for (let j = 0; j < 9; j += 1) {
                dataRow.push(`${i}${j}`);
            }
            data.push(dataRow);
        }

        return (
            <View style={styles.container}>
                <View>
                    <Table borderStyle={{borderWidth: 1, borderColor: '#000000'}}>
                        <Row data={state.tableHead} widthArr={state.widthArr} style={styles.head} textStyle={styles.text} />
                    </Table>
                    <ScrollView style={styles.dataWrapper}>
                        <Table borderStyle={{borderWidth: 1, borderColor: '#000000'}}>
                            {
                                data.map((dataRow, index) => (
                                    <Row
                                        key={index}
                                        data={dataRow}
                                        widthArr={state.widthArr}
                                        style={[styles.row, index % 2 && { backgroundColor: '#ffffff' }]}
                                        textStyle={styles.textColumn}
                                    />
                                ))
                            }
                        </Table>
                    </ScrollView>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        paddingTop: 30,
        backgroundColor: '#ffffff',
        marginStart: -10,
        marginEnd: -5
    },
    head: {
        height: 50,
        backgroundColor: 'lightgrey',
    },
    text: {
        textAlign: 'center',
        fontWeight: 'bold'
    },
    textColumn: {
        textAlign: 'center',
        fontWeight: '200'
    },
    dataWrapper: {
        marginTop: -1
    },
    row: {
        height: 40,
    }
});
