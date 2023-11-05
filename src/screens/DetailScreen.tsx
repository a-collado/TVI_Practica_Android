/* eslint-disable react-native/no-inline-styles */
import React, {useCallback, useEffect, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {MusicVideoComponentProps} from '../components/MusicVideoComponent/MusicVideoComponent';
import VideoPlayerComponent from '../components/VideoPlayerComponent/VideoPlayerComponent';
import {storage} from '../../App';

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
export default function DetailScreen({navigation, route}: any) {
  const [fav, setFav] = useState<Boolean>(false);

  const musicVideo: MusicVideoComponentProps = route.params.musicVideo;
  route.name = musicVideo.trackName;

  const fetchData = useCallback(async () => {
    const data = await storage
      .load({key: 'favSong', id: musicVideo.trackId})
      .catch(err => {
        if (err.name === 'NotFoundError') {
          return false;
        }
      });
    if (!data) {
      setFav(true);
    }
  }, [musicVideo.trackId]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const onPressFav = () => {
    setFav(false);
    storage.save({
      key: 'favSong',
      id: musicVideo.trackId,
      data: musicVideo,
      expires: null,
    });
  };

  const onPressNoFav = () => {
    setFav(true);
    storage.remove({
      key: 'favSong',
      id: musicVideo.trackId,
    });
  };

  return (
    <View>
      <VideoPlayerComponent
        videoUrl={musicVideo.previewUrl}
        doControls={true}
      />
      <Text style={styles.title}> {musicVideo.trackName} </Text>
      <Text style={styles.artist}> {musicVideo.artistName} </Text>
      <View style={{top: 10}}>
        <Text style={styles.text}>País: {musicVideo.country} </Text>
        <Text style={styles.text}>Género: {musicVideo.primaryGenreName} </Text>
        <Text style={styles.text}>Precio: {musicVideo.trackPrice} USD</Text>
        <Text style={styles.text}>
          Fecha de salida: {musicVideo.releaseDate}
        </Text>
        {fav ? (
          <TouchableOpacity style={styles.button} onPress={onPressFav}>
            <Text style={styles.text}>Guardar en favoritos</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.button} onPress={onPressNoFav}>
            <Text style={styles.text}>Quitar de favoritos</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}
