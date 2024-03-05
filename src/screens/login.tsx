import { Button, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "../theme/colors";
import { RootStackParamList } from "../routes/stack.routes";
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type LoginScreenProps = NativeStackScreenProps<RootStackParamList, 'login'>;

const LoginScreen = ({ navigation }: LoginScreenProps) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text style={{ color: colors.black }}>Login</Text>

      <Button
        title="Go to private"
        onPress={() => navigation.navigate('private')}
      />
    </SafeAreaView>
  );
}

export default LoginScreen;