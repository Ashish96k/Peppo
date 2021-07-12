import React from "react";
import { View } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const Spacing = (props) => {
  // Prop Destructuring
  const { vertical = 0, horizontal = 0 } = props;

  return (
    <View
      style={{
        height: vertical ? hp(vertical) : 0,
        width: horizontal ? wp(horizontal) : 0,
      }}
    />
  );
};

export default Spacing;
