/* eslint-disable react-native/no-inline-styles */
import React, {useCallback, useEffect, useState} from 'react';

import {View, FlatList, StyleSheet} from 'react-native';
import MusicVideoComponent, {
  MusicVideoComponentProps,
} from '../components/MusicVideoComponent/MusicVideoComponent';
import {storage} from '../../App';
import {useIsFocused} from '@react-navigation/native';

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

export default function FavouritesScreen({navigation}: any) {
  const [songs, setSongs] = useState<Array<MusicVideoComponentProps>>();
  const isFocused = useIsFocused();

  const fetchData = useCallback(async () => {
    const favs = await storage.getAllDataForKey('favSong');
    setSongs(favs);
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData, isFocused]);

  return (
    <View style={[styles.flexcolumn, {width: '90%'}]}>
      <FlatList
        data={songs}
        renderItem={({item}) => (
          <MusicVideoComponent
            trackName={item.trackName}
            trackId={item.trackId}
            artistName={item.artistName}
            previewUrl={item.previewUrl}
            artworkUrl100={item.artworkUrl100}
            trackPrice={item.trackPrice}
            releaseDate={item.releaseDate}
            country={item.country}
            primaryGenreName={item.primaryGenreName}
            callback={() => {
              navigation.navigate('Detail', {musicVideo: item});
            }}
          />
        )}
      />
    </View>
  );
}