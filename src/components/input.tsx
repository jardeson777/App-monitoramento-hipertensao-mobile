import { StyleSheet, Text, TextInput, View } from "react-native";
import { colors } from "../theme/colors";
import { fontFamily } from "../theme/font-family";
import { fontSize } from "../theme/font-size";

type InputProps = {
  label: string;
  value?: string;
  placeholder: string;
  onChangeText?: (text: string) => void;
}

const Input = ({ label, onChangeText, placeholder, value = "" }: InputProps) => {
  return (
    <View>
      <TextInput style={styles.input} onChangeText={onChangeText} placeholder={placeholder} value={value} />
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
    marginTop: -68,
    marginLeft: 10,
    paddingHorizontal: 10,
    backgroundColor: colors.secondary,
    alignSelf: "flex-start",
    fontFamily: fontFamily.regular,
  }
});

export default Input;






