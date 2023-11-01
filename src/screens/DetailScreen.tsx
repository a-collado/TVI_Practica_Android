import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {MusicVideoComponentProps} from '../components/MusicVideoComponent/MusicVideoComponent';
import VideoPlayerComponent from '../components/VideoPlayerComponent/VideoPlayerComponent';

/*const styles = StyleSheet.create({
  video: {
    height: 144,
    width: 200,
  },
});*/

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function DetailScreen({navigation, route}: any) {
  const musicVideo: MusicVideoComponentProps = route.params.musicVideo;
  route.name = musicVideo.trackName;

  return (
    <View>
      <Text> {musicVideo.trackName} </Text>
      <Text> {musicVideo.artistName} </Text>
      <VideoPlayerComponent videoUrl={musicVideo.previewUrl} />
      <Text> País: {musicVideo.country} </Text>
      <Text> Género: {musicVideo.genre} </Text>
      <Text> Precio: {musicVideo.trackPrice}USD</Text>
      <Text> Fecha de salida: {musicVideo.releaseDate} </Text>
    </View>
  );
}
