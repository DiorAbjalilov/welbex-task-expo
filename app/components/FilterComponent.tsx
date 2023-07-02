import { ScrollView, StyleSheet, Text, TouchableOpacity } from "react-native";
import React, { useCallback, useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
export const data = [
  {
    title: "Грузовой",
    isSelected: false,
  },
  {
    title: "Пассажирский",
    isSelected: false,
  },
  {
    title: "Спецтранспорт",
    isSelected: false,
  },
];

export const FilterComponents = () => {
  const insets = useSafeAreaInsets();
  const [useData, setData] = useState(data);

  const handleSelected = useCallback((index: number) => {
    setData((oldData) =>
      oldData.map((item, key) =>
        key === index
          ? { ...item, isSelected: !item.isSelected }
          : { ...item, isSelected: false },
      ),
    );
  }, []);

  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      horizontal
      style={[
        styles.content,
        { top: insets.top, right: insets.right + 10, left: insets.left },
      ]}
    >
      {useData?.map((item, index) => {
        return (
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => handleSelected(index)}
            style={[styles.box, item.isSelected && styles.selected]}
          >
            <Text>{item.title}</Text>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  content: {
    position: "absolute",
    width: "100%",
    zIndex: 10,
    // paddingHorizontal: 10,
  },
  box: {
    width: 140,
    paddingVertical: 10,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    alignItems: "center",
    marginHorizontal: 5,
  },
  selected: {
    backgroundColor: "#60b2f9",
  },
});
