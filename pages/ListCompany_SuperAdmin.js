import React, { Component } from 'react';
import { Text, View, StyleSheet, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import { Card } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class ListofCompany extends Component {
    constructor(props) {
        super(props);

        this.state = {
            CompanyList: [
                { CompanyName: 'Facebook' }
                , { CompanyName: 'Facebook' }
            ]
        }
    }

    //to be further implemented by onPress function to go to company's detail page
    getCompanyData = (item) => {
        //var RollNo = item.RollNo;
        //var StudentName = item.StudentName;
        //var Course = item.Course;

        //alert(RollNo + "\n" + StudentName + "\n" + Course);
    }

    //to implement changing between pages
    _onPressButton() {
        //alert('You tapped the button!')
    }

    render() {
        return (
            <View style={{ flex: 1, padding: 5 }}>

                <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                    <TouchableOpacity
                        onPress={this._onPressButton}
                        style={styles.nav}>
                        <Text style={styles.navTitle}>Overall Report</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={this._onPressButton}
                        style={styles.cardActive}>
                        <Text style={styles.activeTitle}>Company Report</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={this._onPressButton}
                        style={styles.nav}>
                        <Text style={styles.navTitle}>Salesperson Report</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={this._onPressButton}
                        style={styles.nav}>
                        <Text style={styles.navTitle}>Leads Report</Text>
                    </TouchableOpacity>
                </View>

                <ScrollView>
                    <FlatList
                        data={this.state.CompanyList}
                        renderItem={({ item }) =>

                            <Card style={styles.card} onPress={() => this.getCompanyData(item)}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={styles.CompanyName}>{item.CompanyName}</Text>
                                    <View style={{ justifyContent: "flex-end" }}>
                                        <Icon name="right" size={15}/>
                                    </View>
                                </View>
                            </Card>
                        }
                    />
                </ScrollView>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    nav: {
        margin: 5,
        backgroundColor: 'lightgrey',
        padding: 5,
        textAlign: 'center',
        borderRadius: 5
    },
    navTitle: {
        fontSize: 12
    },
    cardActive: {
        backgroundColor: 'black',
        width: '25%',
        textAlign: 'center',
        borderRadius: 5
    },
    activeTitle: {
        color: 'white',
        fontSize: 12
    },
    pieChartArea: {
        height: '30%',
        borderColor: 1,
        borderWidth: 1,
        width: '60%',
        alignSelf: 'center'
    },
    CompanyName: {
        fontSize: 12,
        flex: 1
    },
    card: {
        backgroundColor: 'lightgrey',
        margin: 5,
    }
});