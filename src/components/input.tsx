import { StyleSheet, Text, TextInput, View } from "react-native";
import { colors } from "../theme/colors";
import { fontFamily } from "../theme/font-family";
import { fontSize } from "../theme/font-size";

type InputProps = {
  label: string;
  value?: string;
  placeholder: string;
  onChangeText?: (text: string) => void;
  secureTextEntry?: boolean;
}

const Input = ({ label, onChangeText, placeholder, value = "", secureTextEntry = false }: InputProps) => {
  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        placeholder={placeholder}
        value={value}
        secureTextEntry={secureTextEntry}
      />
      <Text style={styles.label}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    width: "100%",
    height: 56,
    borderColor: colors.black,
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 20,
  },
  label: {
    fontSize: fontSize.md,
    position: "relative",
    top: -68,
    marginLeft: 10,
    paddingHorizontal: 10,
    backgroundColor: colors.secondary,
    alignSelf: "flex-start",
    fontFamily: fontFamily.regular,
  }
});

export default Input;






