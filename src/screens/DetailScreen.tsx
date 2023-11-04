import React, {useCallback, useEffect, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {MusicVideoComponentProps} from '../components/MusicVideoComponent/MusicVideoComponent';
import VideoPlayerComponent from '../components/VideoPlayerComponent/VideoPlayerComponent';
import {storage} from '../../App';

const styles = StyleSheet.create({
  flexcolumn: {
    flexDirection: 'column',
    alignSelf: 'center',
    alignItems: 'center',
  },
  flexrow: {
    flexDirection: 'row',
    width: '90%',
    alignSelf: 'center',
    alignItems: 'center',
  },
  searchbutton: {
    padding: 14,
    backgroundColor: 'lightgray',
    borderRadius: 30,
    alignSelf: 'center',
    borderWidth: 1,
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

  /*const isFav = () => {
    storage.load({key: 'favSong', id: musicVideo.trackId}).catch(err => {
      if (err.name === 'NotFoundError') {
        console.log('Not saved');
        return false;
      }
    });
  };*/

  const onPressFav = () => {
    setFav(false);
    storage.save({
      key: 'favSong',
      id: musicVideo.trackId,
      data: musicVideo,
      expires: null,
    });
  };

  return (
    <View>
      <Text> {musicVideo.trackName} </Text>
      <Text> {musicVideo.artistName} </Text>
      <VideoPlayerComponent videoUrl={musicVideo.previewUrl} />
      <Text> País: {musicVideo.country} </Text>
      <Text> Género: {musicVideo.genre} </Text>
      <Text> Precio: {musicVideo.trackPrice}USD</Text>
      <Text> Fecha de salida: {musicVideo.releaseDate} </Text>
      {fav ? (
        <TouchableOpacity onPress={onPressFav}>
          <Text>Save to favourites</Text>
        </TouchableOpacity>
      ) : (
        <View />
      )}
    </View>
  );
}
