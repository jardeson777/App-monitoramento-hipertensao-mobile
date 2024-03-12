import { View, StyleSheet, Text, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "../theme/colors";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { TabParamList } from "../routes/tab.routes";
import { fontSize } from "../theme/font-size";
import { fontFamily } from "../theme/font-family";
import { Button } from "../components/button";
import { Card } from "../components/card";

type CrudMedicineScreenProps = BottomTabScreenProps<TabParamList, 'crud-medicine'>;

const CrudMedicineScreen = ({ navigation }: CrudMedicineScreenProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.subtitle}>Remédios</Text>

      <FlatList style={styles.containerCard}>
        <Card variant="secondary">
          <View style={styles.cardContent}>
            <Text style={styles.textCard}>Losartana</Text> 
            <Text style={styles.textCard}>Começou: 22/01/2024</Text>
            <Text style={styles.textCard}>Intervalo: 8 horas</Text>
            <Text style={styles.textCard}>Dosagem: 1 grama</Text>
            
            <Button variant="destructive" size="full">
              <View style={styles.buttonContent}>
                <Text style={styles.textButton}>Excluir</Text>
              </View>
            </Button>
          </View>
        </Card>

        <Button variant="primary" size="icon">
          <View style={styles.buttonContent}>
            <Text style={styles.textButton}>+</Text>
          </View>
        </Button>
      </FlatList>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    backgroundColor: colors.secondary,
    paddingTop: 30,
  },
  subtitle: {
    fontSize: fontSize.lg,
    fontFamily: fontFamily.medium,
    color: colors.black,
    marginTop: 20
  },
  containerCard: {
    paddingTop: 10,
    gap: 30,
  },
  textCard: {
    fontFamily: fontFamily.medium,
    fontSize: fontSize.md,
  },
  textButton: {
    fontFamily: fontFamily.regular,
    fontSize: fontSize.md,
  },
  iconButton: {
    transform: [{ translateX: -30}],
  },
  buttonContent: {
    flexDirection: 'row',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default CrudMedicineScreen;