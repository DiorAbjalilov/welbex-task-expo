import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import dataUser from "../../../data.json";
import { Screens } from "../../constants/Screens";
type UserInfoType = {
  id: string;
  name: string;
  car_type: string;
  phone: string;
  avatar: string;
  current_address: string;
  car_number: string;
};
export const UserListScreen = () => {
  const navigate = useNavigation();
  const [userData, setUserData] = useState(dataUser);

  const navigateUserInfo = (user: UserInfoType) => {
    navigate.navigate(Screens.USERS_INFO_SCREEN, user);
  };
  return (
    <SafeAreaView style={styles.flex}>
      <ScrollView style={styles.wrap}>
        {userData.map((user) => {
          return (
            <TouchableOpacity
              onPress={() => navigateUserInfo(user)}
              activeOpacity={0.6}
              style={styles.content}
            >
              <Text style={styles.text}>
                Название ТС: <Text style={styles.bold}>#{user.id}</Text>
              </Text>
              <Text style={styles.text}>
                Имя водителя: <Text style={styles.bold}>{user.name}</Text>
              </Text>
              <Text style={styles.text}>
                Категория ТС: <Text style={styles.bold}>{user.car_type}</Text>
              </Text>
            </TouchableOpacity>
          );
        })}
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
  content: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
  },
  text: {
    lineHeight: 20,
  },
  bold: {
    fontWeight: "600",
  },
});
