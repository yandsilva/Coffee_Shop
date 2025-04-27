import React, { useCallback, useEffect } from "react";
import { View, StatusBar } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigator from "./src/navigators/TabNavigator";
import DetailsScreen from "./src/screens/DetailsScreen";
import PaymentScreen from "./src/screens/PaymentScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    IcoMoon: require("./assets/fonts/app_icons.ttf"),
  });

  useEffect(() => {
    async function prepare() {
      if (fontsLoaded) {
        await SplashScreen.hideAsync();
      }
    }
    prepare();
  }, [fontsLoaded]);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen
            name="Tab"
            component={TabNavigator}
            options={{ animation: "slide_from_bottom" }}
          />
          <Stack.Screen
            name="Details"
            component={DetailsScreen}
            options={{ animation: "slide_from_bottom" }}
          />
          <Stack.Screen
            name="Payment"
            component={PaymentScreen}
            options={{ animation: "slide_from_bottom" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}
