import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";

import { UserInfoScreen } from "../screens/userInfo/UserInfoScreen";
import { UserListScreen } from "../pages/userList/UserList";
import { Screens } from "../constants/Screens";

const Stack = createStackNavigator();

export default function ListNavigate() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={Screens.USERS_SCREEN} component={UserListScreen} />
      <Stack.Screen
        name={Screens.USERS_INFO_SCREEN}
        component={UserInfoScreen}
      />
    </Stack.Navigator>
  );
}
