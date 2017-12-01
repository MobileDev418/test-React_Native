import React, { Component } from "react";
import MainScreen from "./MainScreen.js";
import YtbScreen from "./YtbScreen.js";
import GitScreen from "./GitScreen.js";
import { StackNavigator } from "react-navigation";

export default (DrawNav = StackNavigator(
    {
        MainScreen: { screen: MainScreen },
        YtbScreen: { screen: YtbScreen },
        GitScreen: { screen: GitScreen }
    }
));
