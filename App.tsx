import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { FilterComponents } from "./app/components/FilterComponent";
import BottomBar from "./app/Tab/BottomBar";
import { ProviderHook } from "./app/hooks/Context";

const App = () => {
  return (
    <ProviderHook>
      <NavigationContainer>
        <SafeAreaProvider style={{ flex: 1 }}>
          {/* position static */}
          <FilterComponents />

          {/*  */}
          <BottomBar />
        </SafeAreaProvider>
      </NavigationContainer>
    </ProviderHook>
  );
};

export default App;
