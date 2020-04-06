import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "../screens/home";
import ReviewDetails from "../screens/reviewDetails";
import Header from "../shared/header";
const screens = {
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header navigation={navigation} title="Game zone" />,
        // headerStyle: { backgroundColor: "#333" },
      };
    },
  },

  ReviewDetails: {
    screen: ReviewDetails,
    navigationOptions: {
      title: "Review details",
    },
  },
};
const HomeStack = createStackNavigator(screens);

// export default createAppContainer(HomeStack);
export default HomeStack;
