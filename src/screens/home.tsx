import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { TabParamList } from "../routes/tab.routes";

type HomeScreenProps = BottomTabScreenProps<TabParamList, 'home'>;

const HomeScreen = ({ navigation }: HomeScreenProps) => {
  return (
    <SafeAreaView>
      <Text>Home</Text>
    </SafeAreaView>
  );
}

export default HomeScreen;