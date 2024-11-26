import React, { Component } from "react";
import { Text, View } from "react-native";
import { Stack } from "expo-router";
import "../global.css";

const _layout = () => {
  return (
    <Stack className="flex">
      <Stack.Screen name="index" options={{ title: "Home" }} />
      <Stack.Screen name="splash" options={{ title: "Splash" }} />
      <Stack.Screen name="login" options={{ title: "Sign In" }} />
    </Stack>
  );
};

export default _layout;
