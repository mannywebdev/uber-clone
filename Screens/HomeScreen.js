import React, { Component } from "react";
import { Text, StyleSheet, SafeAreaView } from "react-native";
import tw from "tailwind-react-native-classnames";

export class HomeScreen extends Component {
  render() {
    return (
      <SafeAreaView style={tw`bg-white-100 h-full`}>
        <Text style={[tw`text-red-500 p-10`, styles.text]}>
          {" "}
          I am homescreen{" "}
        </Text>
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
