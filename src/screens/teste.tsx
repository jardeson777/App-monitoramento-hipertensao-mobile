import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "../theme/colors";

const TesteScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: colors.secondary }}>
      <Text>Teste</Text>
    </SafeAreaView>
  );
}

export default TesteScreen;