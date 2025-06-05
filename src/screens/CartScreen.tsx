import React from "react";
import { ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
import { useStore } from "../store/store";
import { COLORS } from "../theme/theme";
import HeaderBar from "../components/HeaderBar";

const CartScreen = () => {
  const CartList = useStore((state: any) => state.CartList);
  console.log("CartList = ", CartList.length);

  return (
    <View style={styles.ScreenContainer}>
      <StatusBar backgroundColor={COLORS.primaryBlackHex} />
      <ScrollView
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.ScrollViewFlex}
      >
        <HeaderBar title="Cart" />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  ScreenContainer: {
    flex: 1,
    backgroundColor: COLORS.primaryBlackHex,
  },
  ScrollViewFlex: {
    flexGrow: 1,
  },
});

export default CartScreen;
