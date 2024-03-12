import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Card } from "../components/card";
import { colors } from "../theme/colors";
import { RootStackParamList } from "../routes/stack.routes";
import { fontFamily } from "../theme/font-family";
import { fontSize } from "../theme/font-size";
import { Button } from "../components/button";
import { Feather } from '@expo/vector-icons';
import { StatusBar } from "expo-status-bar";
import { ModalComponent } from "../components/modal";
import { useState } from "react";
import Confirmed from "../../assets/confirmed.png"
import Sad from "../../assets/sad.png"

type TakeMedicineScreenProps = NativeStackScreenProps<RootStackParamList, 'takeMedicine'>;

const TakeMedicineScreen = ({ navigation }: TakeMedicineScreenProps) => {

  const [modalVisibleOnTime, setModalVisibleOnTime] = useState(false);
  const [modalVisibleTakenLate, setModalVisibleTakenLate] = useState(false);
  const [modalVisibleNotTaken, setModalVisibleNotTaken] = useState(false);

  const medicines = [
    {
      id: "1",
      title: "Losartana",
      interval: "08 horas",
      start: "01 de março, 2024",
      date: "06 março, 2024",
      time: "21:00",
    },
    {
      id: "2",
      title: "Losartana",
      interval: "08 horas",
      start: "01 de março, 2024",
      date: "07 março, 2024",
      time: "05:00",
    },
  ]

  return (
    <SafeAreaView style={styles.container}>

      <ModalComponent
        visible={modalVisibleOnTime}
        onRequestClose={() => setModalVisibleOnTime(!modalVisibleOnTime)}>

        <View style={stylesModal.modalContainer}>
          <View style={stylesModal.containerSecondary}>

            <View style={stylesModal.textContainer}>
              <Text style={stylesModal.text}>Você confirma que tomou este remédio?</Text>
              <View style={stylesModal.textSpace}></View>
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
            </View>

            <Image style={stylesModal.image} source={Confirmed} />

            <View style={stylesModal.containerButton}>
              <Button
                variant="default"
                size="md"
                onPress={() => setModalVisibleOnTime(!modalVisibleOnTime)}>
                <View style={styles.buttonContent}>
                  <Text style={stylesModal.textButton}>Não</Text>
                </View>
              </Button>

              <Button
                variant="primary"
                size="md">
                <View style={styles.buttonContent}>
                  <Text style={stylesModal.textButton}>Sim</Text>
                </View>
              </Button>
            </View>

          </View>
        </View>

      </ModalComponent>

      <ModalComponent
        visible={modalVisibleTakenLate}
        onRequestClose={() => setModalVisibleTakenLate(!modalVisibleTakenLate)}>

        <View style={stylesModal.modalContainer}>
          <View style={stylesModal.containerSecondary}>

            <View style={stylesModal.textContainer}>
              <Text style={stylesModal.text}>Tudo bem, na próxima tente tomar no horário certo.</Text>
            </View>

            <Image style={stylesModal.image} source={Sad} />

            <View style={stylesModal.containerButton}>
              <Button
                variant="default"
                size="md"
                onPress={() => setModalVisibleTakenLate(!modalVisibleTakenLate)}>
                <View style={styles.buttonContent}>
                  <Text style={stylesModal.textButton}>Fechar</Text>
                </View>
              </Button>

              <Button
                variant="primary"
                size="md">
                <View style={styles.buttonContent}>
                  <Text style={stylesModal.textButton}>Confirmar</Text>
                </View>
              </Button>
            </View>

          </View>
        </View>

      </ModalComponent>

      <ModalComponent
        visible={modalVisibleNotTaken}
        onRequestClose={() => setModalVisibleNotTaken(!modalVisibleNotTaken)}>

        <View style={stylesModal.modalContainer}>
          <View style={stylesModal.containerSecondary}>

            <View style={stylesModal.textContainer}>
              <Text style={stylesModal.text}>Você realmente não tomou o remédio?</Text>
            </View>

            <Image style={stylesModal.image} source={Sad} />

            <View style={stylesModal.containerButton}>
              <Button
                variant="default"
                size="md"
                onPress={() => setModalVisibleNotTaken(!modalVisibleNotTaken)}>
                <View style={styles.buttonContent}>
                  <Text style={stylesModal.textButton}>Fechar</Text>
                </View>
              </Button>

              <Button
                variant="primary"
                size="md">
                <View style={styles.buttonContent}>
                  <Text style={stylesModal.textButton}>Confirmar</Text>
                </View>
              </Button>
            </View>

          </View>
        </View>

      </ModalComponent>

      <FlatList
        data={medicines}
        contentContainerStyle={{ gap: 20 }}
        renderItem={({ item }) => (

          <View style={styles.card}>
            <Card variant="primary">

              <View style={styles.containerText}>
                <Text style={styles.text}>Nome: </Text>
                <Text style={styles.textVariable}>{item.title}</Text>
              </View>
              <View style={styles.containerText}>
                <Text style={styles.text}>Tomar a cada: </Text>
                <Text style={styles.textVariable}>{item.interval}</Text>
              </View>
              <View style={styles.containerText}>
                <Text style={styles.text}>Início: </Text>
                <Text style={styles.textVariable}>{item.start}</Text>
              </View>

              <View style={styles.containerCalendarClock}>
                <View style={styles.calendarContent}>
                  <Feather name="calendar" size={18} color="black" />
                  <Text style={styles.textCalendarClock}>{item.date}</Text>
                </View>

                <View style={styles.clockContent}>
                  <Feather name="clock" size={18} color="black" />
                  <Text style={styles.textCalendarClock}>{item.time}</Text>
                </View>
              </View>

              <View style={styles.containerButtons}>
                <Button
                  variant="primary"
                  size="full"
                  onPress={() => setModalVisibleOnTime(true)}>
                  <View style={styles.buttonContent}>
                    <Text style={styles.textButton}>Tomei</Text>
                  </View>
                </Button>

                <Button
                  variant="outlinePrimary"
                  size="full"
                  onPress={() => setModalVisibleTakenLate(true)}>
                  <View style={styles.buttonContent}>
                    <Text style={styles.textButton}>Tomei com atraso</Text>
                  </View>
                </Button>

                <Button
                  variant="outlineDestructive"
                  size="full"
                  onPress={() => setModalVisibleNotTaken(true)}>
                  <View style={styles.buttonContent}>
                    <Text style={styles.textButton}>Não tomei</Text>
                  </View>
                </Button>
              </View>

            </Card>
          </View>

        )}

        keyExtractor={(item) => item.id}
      />

      <StatusBar backgroundColor={colors.secondary} />

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary,
    paddingTop: 10,
    paddingBottom: 10,
  },
  card: {
    paddingHorizontal: 30,
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

const stylesModal = StyleSheet.create({
  modalContainer: {
    backgroundColor: colors.white,
    paddingVertical: 40,
    marginHorizontal: 10,
    borderRadius: 8,
  },
  containerSecondary: {
    paddingHorizontal: 1,
    margin: 15,
    borderWidth: 1,
    borderColor: colors.white,
  },
  textContainer: {
    paddingHorizontal: 50,
    paddingBottom: 40,
  },
  textSpace: {
    paddingBottom: 10,
  },
  containerButton: {
    justifyContent: 'center',
    paddingTop: 40,
    flexDirection: 'row',
    columnGap: 20,
  },
  text: {
    fontFamily: fontFamily.bold,
    fontSize: fontSize.lg,
  },
  textButton: {
    fontFamily: fontFamily.medium,
    fontSize: fontSize.md,
  },
  image: {
    alignSelf: 'center',
    width: 249,
    height: 190,
  },
})

export default TakeMedicineScreen;