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
    height: 100,
    width: 140,
  },
  flexcolumn: {
    flexDirection: 'column',
    alignSelf: 'flex-start',
    marginLeft: 5
  },
  flexrow: {
    flexDirection: 'row',
    alignSelf: 'flex-start'
  },
});

function MusicVideoComponent(props: MusicVideoComponentProps) {
  /*const navigation = useNavigation();
  const onPress = () => {
    navigation.navigate('Detail', {musicVideo: props});
  };*/

  return (
    <TouchableOpacity testID="MusicVideoButton" onPress={props.callback}>
      <View style={[styles.flexrow, {marginTop: 10}]}>
        {props.previewUrl ? (
          <Image style={styles.thumbnail} source={{uri: props.artworkUrl}} />
        ) : (
          <View style={styles.thumbnail} />
        )}
        
        <View style={styles.flexcolumn}>
          <Text style = {{fontWeight: 'bold'}}>{props.trackName}</Text>
          <Text>{props.artistName}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default MusicVideoComponent;
