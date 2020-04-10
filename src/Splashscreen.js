import React, { Component } from "react";
import { Text, View, StyleSheet, Image, StatusBar, TouchableOpacity, Linking } from "react-native";
import SyncStorage from "sync-storage";

import Background from "./assets/images/content.png";

class Splash extends Component {

    handlerLetsGo() {
        SyncStorage.set('start', true);
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar translucent backgroundColor="#ff8b0d" />
                <View style={styles.headerContainer}>
                    <View style={styles.dot} />
                    <Text style={styles.textHeader}>To-Do List</Text>
                    <View style={styles.dot} />
                </View>
                <Text style={styles.textSubHeader}>List Your Amazing Plan!</Text>
                <Image style={styles.background} source={Background}></Image>
                <Text style={styles.spiritText}>Are You Ready Brother?</Text>
                <TouchableOpacity style={styles.button} onPress={() => this.handlerLetsGo()}>
                    <Text style={styles.buttonText}>Lets Go!</Text>
                </TouchableOpacity>
                <Text onPress={() => Linking.openURL("https://wa.me/6289693943932")} style={styles.underText}>To-Do List By Bima Febriansyah</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#ff8b0d",
        height: "100%",
        paddingTop: 30,
        paddingBottom: 30,
        paddingLeft: 20,
        paddingRight: 20,
        justifyContent: "space-evenly"
    },
    headerContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    dot: {
        marginTop: 3,
        marginRight: 10,
        marginLeft: 10,
        backgroundColor: "#631647",
        width: 10,
        height: 10,
        borderRadius: 10
    },
    textHeader: {
        fontSize: 25,
        fontWeight: "bold",
        color: "#fdfff0"
    },
    textSubHeader: {
        marginTop: 20,
        fontSize: 20,
        fontWeight: "bold",
        alignSelf: "center",
        textAlign: "center",
        color: "#fdfff0"
    },
    background: {
        width: "100%",
        maxWidth: 300,
        height: "50%",
        resizeMode: "contain",
        alignSelf: "center"
    },
    spiritText: {
        color: "#fdfff0",
        fontSize: 20,
        textAlign: "center",
        fontWeight: "bold"
    },
    button: {
        backgroundColor: "#631647",
        height: 50,
        borderRadius: 50,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
        justifyContent: "center"
    },
    buttonText: {
        color: "#fdfff0",
        textAlign: "center",
        fontSize: 18
    },
    underText: {
        width: "100%",
        textAlign: "center",
        color: "#fdfff0"
    }
})

export default Splash;