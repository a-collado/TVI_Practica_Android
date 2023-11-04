import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {MusicVideoComponentProps} from '../components/MusicVideoComponent/MusicVideoComponent';
import VideoPlayerComponent from '../components/VideoPlayerComponent/VideoPlayerComponent';

const styles = StyleSheet.create({
  flexcolumn: {
    flexDirection: 'column',
    alignSelf: 'center', 
    alignItems: 'center'
  },
  flexrow: {
    flexDirection: 'row',
    width: '90%',
    alignSelf: 'center', 
    alignItems: 'center'
  },
  searchbutton: {
    padding: 14, 
    backgroundColor:'lightgray', 
    borderRadius: 30, 
    alignSelf: 'center',
    borderWidth: 1
  },
});

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
