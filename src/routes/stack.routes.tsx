import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/login";
import TabRoutes from "./tab.routes";

export type RootStackParamList = {
  login: undefined;
  private: undefined;
}

const Stack = createNativeStackNavigator<RootStackParamList>();

const StackRoutes = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="login" component={LoginScreen} />
      <Stack.Screen name="private" component={TabRoutes} />
    </Stack.Navigator>
  );
}

export default StackRoutes;