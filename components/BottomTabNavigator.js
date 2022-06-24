import React, {Component} from "react";
import { NavigationContainer} from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import TransactionScreem from "../screens/Transaction";
import SearchScreem from "../screens/Search";

const Tab = createBottomTabNavigator();

export default class BottomTabNavigator extends component {
    render(){
        return(
            <NavigationContainer>
                 <Tab.Navigator>
                    <Tab.Screen name= "Transacción" component={TransactionScreen}/>
                    <Tab.Screen name= "Busqueda" component={SearchScreen}/>
                 </Tab.Navigator>
            </NavigationContainer>
           
        )
    }
}