import React, { useState } from "react";
import { View, Text, Button, FlatList, TouchableOpacity } from "react-native";
import { globalStyles } from "../styles/global";
export default function Home({ navigation }) {
  const [reviews, setReviews] = useState([
    { title: "Zelda, Breath", rating: 5, body: "lorem ipsum", key: "1" },
    { title: "Zelda, Breath2", rating: 4, body: "lorem ipsum", key: "2" },
    { title: "Zelda, Breath2", rating: 5, body: "lorem ipsum", key: "3" },
    { title: "Zelda, Breath2", rating: 2, body: "lorem ipsum", key: "4" },
    { title: "Zelda, Breath2", rating: 3, body: "lorem ipsum", key: "5" },
  ]);
  // const pressHandler = () => {
  //   navigation.push("ReviewDetails");
  // };
  return (
    <View style={globalStyles.container}>
      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              // navigation.navigate("ReviewDetails", { name: "shaun", age: 23 })
              navigation.navigate("ReviewDetails", item)
            }
          >
            <Text>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
      {/* <Button title="Go to review dets" onPress={pressHandler} /> */}
    </View>
  );
}
