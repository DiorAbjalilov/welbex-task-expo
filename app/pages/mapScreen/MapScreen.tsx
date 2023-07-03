import React, { useEffect, useState } from "react";
import MapView, { Marker } from "react-native-maps";
import { StyleSheet, View } from "react-native";
import data from "../../../data.json";
import { UseContext } from "../../hooks/Context";

export const MapScreen = () => {
  const { filter } = UseContext();
  const [userData, setUserData] = useState(data);
  useEffect(() => {
    if (filter !== "ALL") {
      setUserData(data);
      setUserData((oldData) =>
        oldData.filter((item) => item.car_type === filter),
      );
    } else {
      setUserData(data);
    }
  }, [filter]);
  return (
    <View style={styles.container}>
      <MapView
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        style={styles.map}
      >
        {userData.map((item) => {
          return (
            <Marker
              key={item.id.toString()}
              coordinate={item.map_coordinate}
              title={item.name + " " + item.phone + " " + item.car_type}
            />
          );
        })}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
