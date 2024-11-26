import {
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
} from "react-native";
import React from "react";

export default function login() {
  return (
    <View style={styles.container}>
      <Image
        style={{ resizeMode: "contain", width: 200, height: 170 }}
        source={require("../assets/logo.png")}
      ></Image>
      <Text style={{ fontWeight: 600, fontSize: 24, marginBlock: 25 }}>
        Sign-In
      </Text>
      <View
        style={{
          borderStyle: "solid",
          borderRadius: 9,
          borderWidth: 1,
          padding: 20,
          shadowColor: "#5b6267",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.25,
          shadowRadius: 5,
          elevation: 5,
          gap: 15,
        }}
      >
        <Text style={{ fontWeight: 500, fontSize: 18 }}>Sait Email</Text>
        <TextInput style={styles.inputBox} placeholder={"Value"}></TextInput>

        <Text style={{ fontWeight: 500, fontSize: 18 }}>Password</Text>
        <TextInput style={styles.inputBox} placeholder={"Value"}></TextInput>

        <Pressable style={styles.button}>
          <Text style={{ color: "white", padding: 4, fontWeight: 500 }}>
            Sign In
          </Text>
        </Pressable>

        <Pressable style={{}}>
          <Text>Forgot Password?</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingBlock: 50,
    padding: 0,
    gap: 15,
  },
  inputBox: {
    borderStyle: "solid",
    borderRadius: 9,
    borderWidth: 1,
    padding: 12,
    width: 300,
  },
  button: {
    borderRadius: 8,
    backgroundColor: "#37b6f5",
    color: "white",
    padding: 8,
    alignItems: "center",
    justifyContent: "center",
    marginBlock: 10,
  },
});
