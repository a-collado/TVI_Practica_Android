import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {MusicVideoComponentProps} from '../components/MusicVideoComponent/MusicVideoComponent';
import Video from 'react-native-video';

const styles = StyleSheet.create({
  video: {
    height: 144,
    width: 200,
  },
});

export default function DetailScreen({route, navigation}) {
  const musicVideo: MusicVideoComponentProps = route.params.musicVideo;
  route.name = musicVideo.trackName;
  return (
    <View>
      <Text> {musicVideo.trackName} </Text>
      <Text> {musicVideo.artistName} </Text>
      <Video
        style={styles.video}
        source={{uri: musicVideo.previewUrl}}
        paused={false}
        controls={true}
      />
      <Text> País: {musicVideo.country} </Text>
      <Text> Género: {musicVideo.genre} </Text>
      <Text> Precio: {musicVideo.trackPrice}USD</Text>
      <Text> Fecha de salida: {musicVideo.releaseDate} </Text>
    </View>
  );
}
