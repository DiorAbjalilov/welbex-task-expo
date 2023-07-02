import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import ListNavigate from "./ListNavigate";
import { MapScreen } from "../pages/mapScreen/MapScreen";

const Tab = createBottomTabNavigator();

export default function BottomBar() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Map view"
        component={MapScreen}
        options={{ tabBarIcon: () => <Ionicons size={18} name="map" /> }}
      />
      <Tab.Screen
        name="User list"
        component={ListNavigate}
        options={{ tabBarIcon: () => <Ionicons size={18} name="ios-list" /> }}
      />
    </Tab.Navigator>
  );
}
