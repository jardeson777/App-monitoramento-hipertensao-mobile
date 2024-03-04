import { ReactNode } from "react";
import { StyleSheet, TouchableOpacity } from 'react-native';
import { colors } from "../theme/colors";

type ButtonProps = {
  children: ReactNode;
  onPress: () => void;
  variant: "primary" | "destructive" | "outlinePrimary" |
  "outlineDestructive" | "default";
  size: "full" | "icon" | "md";
}

const stylesVariant = StyleSheet.create({
  primary: {
    backgroundColor: colors.primary,
  },
  destructive: {
    backgroundColor: colors.red300,
  },
  default: {
    backgroundColor: colors.gray400,
  },
  outlinePrimary: {
    backgroundColor: colors.white,
    borderColor: colors.primary,
    borderWidth: 1,
  },
  outlineDestructive: {
    backgroundColor: colors.white,
    borderColor: colors.red600,
    borderWidth: 1,
  },
})

const stylesSize = StyleSheet.create({
  full: {
    width: '100%',
    height: 48,
    borderRadius: 100,
  },
  md: {
    width: 125,
    height: 48,
    borderRadius: 100,
  },
  icon: {
    width: 100,
    height: 100,
    borderRadius: 200,
  },
})

const variantStyles = {
  primary: stylesVariant.primary,
  destructive: stylesVariant.destructive,
  default: stylesVariant.default,
  outlinePrimary: stylesVariant.outlinePrimary,
  outlineDestructive: stylesVariant.outlineDestructive,
}

const sizeStyles = {
  full: stylesSize.full,
  md: stylesSize.md,
  icon: stylesSize.icon,
}

export const Button = (input: ButtonProps) => {
  return (
    <TouchableOpacity
      onPress={input.onPress}
      style={[variantStyles[input.variant], sizeStyles[input.size]]}>

      {input.children}
    </TouchableOpacity>
  )
}