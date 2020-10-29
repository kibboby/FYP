import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StyleSheet, Text, View, FlatList, ActivityIndicator } from 'react-native';
import { Card } from 'react-native-paper';
import Settings from 'react-native-vector-icons/AntDesign';

export default class SalesPersonAccount extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoading = true,
            TaskList: [
                { Type: 'Others', Date: '25/11/2020' }
            ]
        }
    }

    componentDidMount() {
        return fetch('http://localhost/BAckend/retrieveAccountInfo.php')
            .then((response) => response.json())
            .then((responseJson) => {
                let ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
                this.setState({
                    isLoading: false,
                    dataSource: ds.cloneWithRows(responseJson),
                }, function () {
                    // In this block you can do something with new state.
                });
            })
            .catch((error) => {
                console.error(error);
            });
    }

    render() {
        if (this.state.isLoading) {
            return (
                <View style={{ flex: 1, padding: "10%" }}>
                    <ActivityIndicator/>
                    <Settings name='setting' size={25} style={{ alignSelf: 'flex-end' }} onPress={() => this.props.navigation.navigate('Account Settings')} />
                    <View style={styles.Direction}>
                        <Icon name='user' size={55} style={styles.profileImg} />
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


                    <FlatList
                        data={this.state.TaskList}
                        renderItem={({ item }) =>

                            <Card style={styles.card}>
                                <View style={styles.Task}>
                                    <Text style={styles.Type}>{item.Type}</Text>
                                    <Text style={styles.Date}> | </Text>
                                    <Text style={styles.Date}>{item.Date}</Text>
                                </View>
                            </Card>
                        }
                        keyExtractor={item => item.ID}
                    />
                </View>
            )
        }
    }
}

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
        backgroundColor: 'lightgrey',
        padding: 7,
        marginBottom: 2,
        flexDirection: 'row',
    },
    Date: {
        marginStart: 5,
    },
    card: {
        margin: 5,
        backgroundColor: 'lightgrey',
        borderRadius: 10
    },
});