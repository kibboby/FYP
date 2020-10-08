import React, { Component } from 'react';
import { Text, View, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import { Card } from 'react-native-paper';
import { black } from 'react-native-paper/lib/typescript/src/styles/colors';

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

                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <TouchableOpacity
                        onPress={this._onPressButton}
                        style={styles.nav}>
                        <Text style={styles.navTitle, styles.active}>Overall Report</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={this._onPressButton}
                        style={styles.nav}>
                        <Text style={styles.navTitle}>Company Report</Text>
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

                <FlatList
                    data={this.state.CompanyList}
                    renderItem={({ item }) =>

                        <Card style={styles.card} onPress={() => this.getCompanyData(item)}>
                            <View style={styles.cardView}>
                                <View >
                                    <Text style={styles.CompanyName}>{item.CompanyName}</Text>
                                </View>
                            </View>
                        </Card>
                    }
                    keyExtractor={item => item.ID}
                />
            </View>
        );
    }
}


const styles = StyleSheet.create({
    nav:{
        margin: 5,
        backgroundColor: 'lightgrey',
        padding: 5,
        paddingTop: 7
    },
    navTitle:{
        fontSize:10
    },
    active:{
        backgroundColor:'black',
    },  
    card: {
        margin: 5,
        backgroundColor: 'lightgrey',
    },
    cardView: {
        padding: 10,
        marginLeft: 5
    },
    CompanyName: {
        fontSize: 12
    }
});