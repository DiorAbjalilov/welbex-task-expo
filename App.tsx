import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { FilterComponents } from "./app/components/FilterComponent";
import BottomBar from "./app/Tab/BottomBar";

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaProvider style={{ flex: 1 }}>
        {/* position static */}
        <FilterComponents />

        {/*  */}
        <BottomBar />
      </SafeAreaProvider>
    </NavigationContainer>
  );
};

export default App;
