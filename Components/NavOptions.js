import React, { Component } from "react";
import { Text, View, FlatList, TouchableOpacity, Image } from "react-native";
import { Icon } from "react-native-elements";
import tw from "tailwind-react-native-classnames";

const data = [
  {
    id: "123",
    title: "Get a ride",
    image: "https://links.papareact.com/3pn",
    screen: "MapScreen",
  },
  {
    id: "456",
    title: "Order food",
    image: "https://links.papareact.com/28w",
    screen: "EatsScreen",
  },
];

export class NavOptions extends Component {
  render() {
    return (
      <FlatList
        data={data}
        horizontal
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity>
            <View style={tw`bg-gray-200 m-2 pt-4 pb-8 pl-6 w-40`}>
              <Image
                style={{ width: 120, height: 120, resizeMode: "contain" }}
                source={{
                  uri: item.image,
                }}
              />
              <Text style={tw`mt-3 font-semibold text-lg`}>{item.title}</Text>
              <Icon
                style={tw`p-2 bg-black rounded-full w-10 mt-4`}
                type="antdesign"
                name="arrowright"
                color="white"
              />
            </View>
          </TouchableOpacity>
        )}
      />
    );
  }
}

export default NavOptions;
