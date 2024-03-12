import { ActivityIndicator, FlatList, SafeAreaView, StatusBar, StyleSheet, Text, View, useWindowDimensions } from "react-native"
import { colors } from "../theme/colors";
import { fontFamily } from "../theme/font-family";
import { fontSize } from "../theme/font-size";
import YoutubeIframe from "react-native-youtube-iframe";
import { useState } from "react";

const extractVideoId = (link: string) => {
  const urlObj = new URL(link);
  const params = new URLSearchParams(urlObj.search);
  const idVideo = params.get("v");

  return idVideo
}

const ArrayVideos = [
  {
    link: "https://www.youtube.com/watch?v=iPkWdp4irnE&ab_channel=HospitalIsraelitaAlbertEinstein",
    title: "Titulo"
  },
  {
    link: "https://www.youtube.com/watch?v=WRkbUg86HDs&ab_channel=Dr.SamuelDalleLaste",
    title: "Titulo"
  },
  {
    link: "https://www.youtube.com/watch?v=dKSvsAZttr4&ab_channel=Dr.RobertoYano",
    title: "Titulo"
  }
]

type VideoProps = {
  link: string,
  videoId: string,
  title: string
}

const ListOfVideosScreen = () => {
  const { width } = useWindowDimensions();
  const video_height = 250;

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.textTitle}>
        Vídeos
      </Text>

      <FlatList
        style={styles.listVideos}
        data={ArrayVideos}
        renderItem={({ item }) =>
          <View style={styles.videoPlayer}>
            <YoutubeIframe
              videoId={extractVideoId(item.link)} //No link do video fica v=ID em string
              height={video_height}
              width={width - 30}
              play={false}
            />
            <Text style={styles.textTitleVideo}>{item.title}</Text>
          </View>}
      />

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary,
    paddingHorizontal: 20
  },
  textTitle: {
    fontFamily: fontFamily.bold,
    fontSize: fontSize.xl,
    marginTop: 30
  },
  videoPlayer: {
    gap: 5,
    width: "100%",
    height: 250,
  },
  listVideos: {
    marginTop: 36
  },
  textTitleVideo: {
    position: "absolute",
    justifyContent: "flex-start",
    alignContent: "flex-start",
    bottom: '5%',
    fontFamily: fontFamily.medium,
    fontSize: fontSize.md
  }
})

export default ListOfVideosScreen;