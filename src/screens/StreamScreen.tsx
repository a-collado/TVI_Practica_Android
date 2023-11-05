/* eslint-disable react-native/no-inline-styles */
import React, {useCallback, useEffect, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {MusicVideoComponentProps} from '../components/MusicVideoComponent/MusicVideoComponent';
import VideoPlayerComponent from '../components/VideoPlayerComponent/VideoPlayerComponent';
import {storage} from '../../App';
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
  route.name = streamVideo.type;

  return (
    <View>
      <VideoPlayerComponent videoUrl={streamVideo.url} />
      <Text style={styles.title}> {streamVideo.name} </Text>
      <View style={{top: 10}}>
        <Text style={styles.text}>País: {streamVideo.country} </Text>
      </View>
    </View>
  );
}