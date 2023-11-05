/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import VideoPlayerComponent from '../components/VideoPlayerComponent/VideoPlayerComponent';
import {TvChannelComponentProps} from '../components/TvChannelComponent/TvChannelComponent';

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    color: 'black',
  },
  artist: {
    fontSize: 14,
    color: 'black',
    left: 10,
  },
  text: {
    fontSize: 14,
    color: 'black',
    left: 5,
  },
  button: {
    alignSelf: 'center',
    top: 15,
    padding: 14,
    backgroundColor: 'lightgray',
    borderRadius: 30,
    borderWidth: 1,
    width: '40%',
  },
  buttonText: {
    alignSelf: 'center',
  },
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function StreamScreen({navigation, route}: any) {
  const streamVideo: TvChannelComponentProps = route.params.streamVideo;
  route.name = streamVideo.name;

  return (
    <View>
      <VideoPlayerComponent videoUrl={streamVideo.url} doControls={false} />

      <Text style={styles.title}>
        {' '}
        {streamVideo.name}{' '}
        <Text style={styles.text}> ( {streamVideo.country} )</Text>
      </Text>

      <View style={{top: 10}}>
        <Text style={styles.text}>Tipo: {streamVideo.type} </Text>
      </View>
    </View>
  );
}
