import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/home";
import NotificationsScreen from "../screens/notifications";

export type TabParamList = {
  home: undefined;
  notifications: undefined;
}

const Tab = createBottomTabNavigator<TabParamList>();

const TabRoutes = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="home" component={HomeScreen} />
      <Tab.Screen name="notifications" component={NotificationsScreen} />
    </Tab.Navigator>
  );
}

export default TabRoutes;