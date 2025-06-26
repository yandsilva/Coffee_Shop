import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Image, ImageProps, StyleSheet, Text, View } from "react-native";
import {
  BORDERRADIUS,
  COLORS,
  FONTFAMILY,
  FONTSIZE,
  SPACING,
} from "../theme/theme";

interface OrderItemCardProps {
  type: string;
  name: string;
  imagelink_square: ImageProps;
  special_ingredient: string;
  price: any;
  ItemPrice: string;
}

const OrderItemCard: React.FC<OrderItemCardProps> = ({
  type,
  name,
  imagelink_square,
  special_ingredient,
  price,
  ItemPrice,
}) => {
  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      colors={[COLORS.primaryGreyHex, COLORS.primaryBlackHex]}
      style={styles.CardLinearGradient}
    >
      <View style={styles.CardInfoContainer}>
        <View style={styles.CardImageInfoContainer}>
          <Image source={imagelink_square} style={styles.Image} />
          <View>
            <Text style={styles.CardTitle}>{name}</Text>
            <Text style={styles.CardSubtitle}>{special_ingredient}</Text>
          </View>
        </View>
        <View>
          <Text style={styles.CardCurrency}>
            $ <Text style={styles.CardPrice}>{ItemPrice}</Text>
          </Text>
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  CardLinearGradient: {
    gap: SPACING.space_20,
    padding: SPACING.space_20,
    borderRadius: BORDERRADIUS.radius_25,
  },
  CardInfoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  CardImageInfoContainer: {
    flexDirection: "row",
    gap: SPACING.space_20,
    alignItems: "center",
  },
  Image: {
    height: 90,
    width: 90,
    borderRadius: BORDERRADIUS.radius_20,
  },
  CardTitle: {
    fontFamily: FONTFAMILY.poppins_medium,
    fontSize: FONTSIZE.size_18,
    color: COLORS.primaryWhiteHex,
  },
  CardSubtitle: {
    fontFamily: FONTFAMILY.poppins_regular,
    fontSize: FONTSIZE.size_12,
    color: COLORS.secondaryLightGreyHex,
  },
  CardCurrency: {
    fontFamily: FONTFAMILY.poppins_semibold,
    fontSize: FONTSIZE.size_20,
    color: COLORS.primaryOrangeHex,
  },
  CardPrice: {
    color: COLORS.primaryWhiteHex,
  },
});

export default OrderItemCard;
