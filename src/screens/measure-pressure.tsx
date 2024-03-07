import { Text, View, StyleSheet, ScrollView } from "react-native"
import { fontFamily } from "../theme/font-family";
import { fontSize } from "../theme/font-size";
import Input from "../components/input";
import { useState } from "react";
import { colors } from "../theme/colors";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "../components/button";


type FormPressao = {
  date: string;
  hour: string;
  higherPressure: string;
  LowerPressure: string;
}

const MeasurePressureScreen = () => {
  const [form, setForm] = useState<FormPressao | null>(null);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.content}>
        <Text style={styles.textMedirPressao}>Medir pressão:</Text>

        <View style={styles.containerInput}>
          <Input
            label="Data"
            placeholder="Digite a data de medição"
            value={form?.date || ""}
            onChangeText={(text) => setForm({ ...form, date: text })}
          />

          <Input
            label="Hora"
            placeholder="Digite a hora de medição"
            value={form?.hour || ""}
            onChangeText={(text) => setForm({ ...form, hour: text })}
          />

          <Input
            label="Pressao Maior"
            placeholder="Digite a pressão maior"
            value={form?.higherPressure || ""}
            onChangeText={(text) => setForm({ ...form, higherPressure: text })}
          />

          <Input
            label="Pressao Menor"
            placeholder="Digite a pressão menor"
            value={form?.LowerPressure || ""}
            onChangeText={(text) => setForm({ ...form, LowerPressure: text })}
          />
        </View>


      </ScrollView >
      <Button size="full" variant="primary">
        <View style={styles.buttonContent}>
          <Text>Salvar</Text>
        </View>
      </Button>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary,
    paddingHorizontal: 20,
    paddingBottom: 20
  },
  header: {
    marginTop: '15%',
    marginLeft: 30,
  },
  content: {
    marginTop: 30,
  },
  textMedirPressao: {
    fontSize: fontSize.xl,
    fontFamily: fontFamily.bold,
    marginBottom: 36
  },
  containerInput: {
    marginTop: 30,
    gap: 20
  },
  buttonContent: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%'
  }
})

export default MeasurePressureScreen;