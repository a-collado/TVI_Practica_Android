import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

export type MusicVideoComponentProps = {
  trackName: string;
  previewUrl: string;
  artworkUrl: string;
  trackPrice: number;
  releaseDate: string;
  country: string;
};

const styles = StyleSheet.create({
  thumbnail: {
    height: 100,
    width: 200,
  },
});

function MusicVideoComponent(props: MusicVideoComponentProps) {
  return (
    <View>
      <Text>{props.trackName}</Text>
      <Image style={styles.thumbnail} source={{uri: props.artworkUrl}} />
    </View>
  );
}

export default MusicVideoComponent;
