import React,{Component} from "react";
import { View, Text, StyleSheet } from "react-native";

export default class SearchScreem extends Component{
    render(){
        return(
            <View style = {styles.container}>
                <Text style = {styles.text}>Pantalla de busqueda</Text>
            </View>
        )
    } 
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#BC8F8F"
    },

    text: {
        color: "#FFF5EE",
        fontSize: 30
    }
})