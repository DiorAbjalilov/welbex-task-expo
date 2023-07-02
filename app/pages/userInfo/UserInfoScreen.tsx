import { useRoute } from "@react-navigation/native";
import React from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

type UserInfoType = {
  id: string;
  name: string;
  car_type: string;
  phone: string;
  avatar: string;
  current_address: string;
  car_number: string;
};

export const UserInfoScreen = () => {
  const params: UserInfoType = useRoute().params;

  return (
    <SafeAreaView style={styles.flex}>
      <ScrollView style={styles.wrap}>
        <View style={styles.container}>
          <View style={styles.imageBox}>
            <Image source={{ uri: params.avatar }} style={styles.image} />
          </View>
          <View style={styles.content}>
            <Text style={styles.text}>
              Id: <Text style={styles.bold}>{params.id}</Text>
            </Text>
            <Text style={styles.text}>
              Name: <Text style={styles.bold}>{params.name}</Text>
            </Text>
            <Text style={styles.text}>
              Phone: <Text style={styles.bold}>{params.phone}</Text>
            </Text>
            <Text style={styles.text}>
              Address: <Text style={styles.bold}>{params.current_address}</Text>
            </Text>
            <Text style={styles.text}>
              Car Type: <Text style={styles.bold}>{params.car_type}</Text>
            </Text>
            <Text style={styles.text}>
              Car Number: <Text style={styles.bold}>{params.car_number}</Text>
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  wrap: {
    marginTop: 60,
    padding: 10,
  },
  container: {
    borderRadius: 5,
    padding: 5,
    margin: 10,
    backgroundColor: "#fff",
    flexDirection: "row",
  },
  imageBox: {},
  image: {
    width: 100,
    height: 100,
  },
  content: {
    marginLeft: 10,
  },
  text: {
    lineHeight: 20,
  },
  bold: {
    fontWeight: "500",
  },
});
