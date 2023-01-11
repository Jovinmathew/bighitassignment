import { StyleSheet } from "react-native";
import { isHeightSmall, isWidthSmall } from "../../constants";

export default StyleSheet.create({
  Header: {
    height: 35,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  Container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.5)",
  },
});
