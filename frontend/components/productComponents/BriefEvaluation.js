import { View, Text } from "react-native";
import React from "react";
import Evaluation from "./Evaluation";
import HeaderEvaluation from "./HeaderEvaluation";

export default function BriefEvaluation({ judges }) {
  let stars = 0;
  if (judges) {
    judges.forEach((judge) => {
      stars += judge.stars;
    });
    stars = stars / judges.length;
  }
  const listData = [
    {
      id: 1,
      userIcon: require("../../assets/icon/ao123.png"),
      userName: "Lê Công Nam",
      ratingStars: 5,
      comment: "Sản phẩm vjppr0",
      date: "05-03-2022",
      time: "13:45",
    },
    {
      id: 2,
      userIcon: require("../../assets/icon/ao123.png"),
      userName: "Lê Công Nam",
      ratingStars: 5,
      comment: "Sản phẩm vjppr0",
      date: "05-03-2022",
      time: "13:45",
    },
  ];
  return (
    <View>
      <HeaderEvaluation
        stars={stars ? stars : 0}
        numOfComment={judges ? judges.length : 0}
      />
      {judges
        ? judges.map((judge) => <Evaluation judge={judge} key={judge.id} />)
        : null}
    </View>
  );
}
