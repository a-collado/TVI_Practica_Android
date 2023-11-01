import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export type MusicVideoComponentProps = {
  trackName: string;
  artistName: string;
  previewUrl: string;
  artworkUrl: string;
  trackPrice: number;
  releaseDate: string;
  country: string;
  genre: string;
  callback: () => void;
};

const styles = StyleSheet.create({
  thumbnail: {
    height: 144,
    width: 200,
  },
});

function MusicVideoComponent(props: MusicVideoComponentProps) {
  /*const navigation = useNavigation();
  const onPress = () => {
    navigation.navigate('Detail', {musicVideo: props});
  };*/

  return (
    <TouchableOpacity testID="MusicVideoButton" onPress={props.callback}>
      <Text>{props.trackName}</Text>
      <Text>{props.artistName}</Text>
      {props.previewUrl ? (
        <Image style={styles.thumbnail} source={{uri: props.artworkUrl}} />
      ) : (
        <View style={styles.thumbnail} />
      )}
    </TouchableOpacity>
  );
}

export default MusicVideoComponent;
