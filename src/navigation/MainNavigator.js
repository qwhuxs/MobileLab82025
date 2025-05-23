import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";

import CatalogScreen from "../screens/CatalogScreen";
import CartScreen from "../screens/CartScreen";
import OrdersScreen from "../screens/OrdersScreen";
import CheckoutScreen from "../screens/CheckoutScreen";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function CartStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="CartMain"
        component={CartScreen}
        options={{ title: "Кошик" }}
      />
      <Stack.Screen
        name="Checkout"
        component={CheckoutScreen}
        options={{ title: "Оформлення замовлення" }}
      />
    </Stack.Navigator>
  );
}

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === "Catalog") iconName = "home";
            else if (route.name === "Cart") iconName = "cart";
            else if (route.name === "Orders") iconName = "list";

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen
          name="Catalog"
          component={CatalogScreen}
          options={{ title: "Каталог" }}
        />
        <Tab.Screen
          name="Cart"
          component={CartStack}
          options={{ title: "Кошик" }}
        />
        <Tab.Screen
          name="Orders"
          component={OrdersScreen}
          options={{ title: "Замовлення" }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
