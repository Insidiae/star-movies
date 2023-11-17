import { Tabs } from "expo-router/tabs";
import { MaterialIcons } from "@expo/vector-icons";

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="home" size={32} color={color} />
          ),
          tabBarLabel: "Home",
        }}
      />
      <Tabs.Screen
        name="favourites"
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="star" size={32} color={color} />
          ),
          tabBarLabel: "Favourites",
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="search" size={32} color={color} />
          ),
          tabBarLabel: "Search",
        }}
      />
    </Tabs>
  );
}
