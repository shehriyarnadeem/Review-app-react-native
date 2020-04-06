import { createStackNavigator } from "react-navigation-stack";
import React from "react";
import About from "../screens/about";
import Header from "../shared/header";
const screens = {
  About: {
    screen: About,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => (
          <Header navigation={navigation} title="About zone" />
        ),
        // headerStyle: { backgroundColor: "#333" },
      };
    },
  },
};
const AboutStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerStyle: { backgroundColor: "#eee" },
  },
});

export default AboutStack;
