import React, { Component } from "react";
import { Text, StyleSheet, SafeAreaView, Image, View } from "react-native";
import tw from "tailwind-react-native-classnames";
import NavOptions from "../Components/NavOptions";
export class HomeScreen extends Component {
  render() {
    return (
      <SafeAreaView style={tw`bg-white h-full`}>
        <View style={tw`p-5`}>
          <Image
            style={{ width: 100, height: 100, resizeMode: "contain" }}
            source={{
              uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png",
            }}
          />
          <NavOptions />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    color: "blue",
  },
});

export default HomeScreen;
