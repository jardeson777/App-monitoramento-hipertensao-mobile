import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Card } from "../components/card";
import { colors } from "../theme/colors";
import { RootStackParamList } from "../routes/stack.routes";
import { fontFamily } from "../theme/font-family";
import { fontSize } from "../theme/font-size";
import { Button } from "../components/button";
import { Feather } from '@expo/vector-icons';

type TakeMedicineScreenProps = NativeStackScreenProps<RootStackParamList, 'takeMedicine'>;

const TakeMedicineScreen = ({ navigation }: TakeMedicineScreenProps) => {
  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.card}>
        <Card variant="primary">

          <View style={styles.containerText}>
            <Text style={styles.text}>Nome: </Text>
            <Text style={styles.textVariable}>Losartana</Text>
          </View>
          <View style={styles.containerText}>
            <Text style={styles.text}>Tomar a cada: </Text>
            <Text style={styles.textVariable}>08 horas</Text>
          </View>
          <View style={styles.containerText}>
            <Text style={styles.text}>Início: </Text>
            <Text style={styles.textVariable}>01 de março, 2024</Text>
          </View>

          <View style={styles.containerCalendarClock}>
            <View style={styles.calendarContent}>
              <Feather name="calendar" size={18} color="black" />
              <Text style={styles.textCalendarClock}>06 março, 2024</Text>
            </View>

            <View style={styles.clockContent}>
              <Feather name="clock" size={18} color="black" />
              <Text style={styles.textCalendarClock}>21:00</Text>
            </View>
          </View>

          <View style={styles.containerButtons}>
            <Button variant="primary" size="full">
              <View style={styles.buttonContent}>
                <Text style={styles.textButton}>Tomei</Text>
              </View>
            </Button>

            <Button variant="outlinePrimary" size="full">
              <View style={styles.buttonContent}>
                <Text style={styles.textButton}>Tomei com atraso</Text>
              </View>
            </Button>

            <Button variant="outlineDestructive" size="full">
              <View style={styles.buttonContent}>
                <Text style={styles.textButton}>Não tomei</Text>
              </View>
            </Button>
          </View>

        </Card>
      </View>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary,
  },
  card: {
    paddingHorizontal: 30,
    paddingTop: 40,
  },
  containerCalendarClock: {
    paddingTop: 20,
    flexDirection: 'row',
  },
  containerText: {
    flexDirection: 'row',
  },
  calendarContent: {
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  clockContent: {
    flexDirection: 'row',
    paddingHorizontal: 25,
  },
  textCalendarClock: {
    fontFamily: fontFamily.regular,
    fontSize: fontSize.md,
    transform: [{ translateX: 5 }],
  },
  containerButtons: {
    paddingTop: 15,
    gap: 10,
  },
  text: {
    fontFamily: fontFamily.medium,
    fontSize: fontSize.md,
  },
  textVariable: {
    fontFamily: fontFamily.regular,
    fontSize: fontSize.md,
  },
  buttonContent: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textButton: {
    fontFamily: fontFamily.regular,
    fontSize: fontSize.md,
  },
})

export default TakeMedicineScreen;