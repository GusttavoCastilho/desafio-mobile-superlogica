import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../views/Home";

import Ionicons from "@expo/vector-icons/Ionicons";
import { useTheme } from "styled-components";
import Episodes from "../views/Episodes/Index";
import Locations from "../views/Locations";
import { Text } from "react-native";

const Tab = createBottomTabNavigator();

const TabBarNavigation: React.FC = () => {
  const theme = useTheme();

  const ActiveLabelColor = theme.colors.gray;
  const InactiveLabelColor = theme.colors.dark_light;

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#202329",
          borderTopWidth: 0,
        },
        tabBarLabel: ({ focused }) => (
          <Text
            style={{
              fontSize: 10,
              color: focused ? ActiveLabelColor : InactiveLabelColor,
              paddingBottom: 3,
            }}
          >
            Home
          </Text>
        ),
        tabBarActiveTintColor: theme.colors.gray,
        tabBarInactiveTintColor: theme.colors.dark_light,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" size={22} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Locations"
        component={Locations}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="ios-location" size={22} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Episodes"
        component={Episodes}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="play" size={22} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabBarNavigation;
