import React, { Component } from 'react';
import { Text, View, StyleSheet, FlatList, ScrollView } from 'react-native';
import { Card } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class ListofEmployee extends Component {
    constructor(props) {
        super(props);

        this.state = {
            EmployeeList: [
                { Image: '', SalespersonName: 'John David', CompanyName: 'Facebook', Designation: 'Salesperson' }
                , { Image: '', SalespersonName: 'John David', CompanyName: 'Facebook', Designation: 'Salesperson' }
            ]
        }
    }

    //to be further implemented by onPress function to go to lead's detail page
    getEmployeeData = (item) => {
        //var RollNo = item.RollNo;
        //var StudentName = item.StudentName;
        //var Course = item.Course;

        //alert(RollNo + "\n" + StudentName + "\n" + Course);
    }

    render() {
        return (
            <View style={{ flex: 1, padding: '10%' }}>
                <ScrollView>
                    <FlatList
                        data={this.state.EmployeeList}
                        renderItem={({ item }) =>

                            <Card style={styles.card} onPress={() => this.getEmployeeData(item)}>
                                <View style={styles.cardView}>
                                    <Icon
                                        name='user'
                                        size={35}
                                        style={styles.profileImg} />
                                    <View style={styles.texts}>
                                        <Text style={styles.Name}>{item.SalespersonName}</Text>
                                        <Text style={styles.CompanyName}>({item.CompanyName})</Text>
                                        <Text style={styles.Designation}>{item.Designation}</Text>
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
    displayContainer: {
        flexDirection: 'row',
    },
    profileImg: {
        borderRadius: 50,
        height: 40,
        width: 40,
        overflow: 'hidden',
        borderColor: 'black',
        borderWidth: 1,
        paddingStart: 6
    },
    card: {
        margin: 5,
        backgroundColor: 'lightgrey',
        borderRadius: 10
    },
    cardView: {
        flexDirection: 'row',
        padding: 10,
        marginLeft: 10
    },
    texts: {
        marginLeft: 10
    },
    Name: {
        fontSize: 14
    },
    CompanyName: {
        fontSize: 14
    },
    Designation: {
        fontSize: 12
    }
})