import { createIconSetFromIcoMoon } from "@expo/vector-icons";
import icoMoonConfig from "../../selection.json";
const CustomIcon = createIconSetFromIcoMoon(
  icoMoonConfig,
  "IcoMoon",
  "app_images.ttf"
);
export default CustomIcon;
