/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import {View, Text, FlatList, StyleSheet} from 'react-native';
import MusicVideoComponent from '../components/MusicVideoComponent/MusicVideoComponent';
import {useFetch} from '../Api/Api';
import InputComponent from '../components/InputComponent/InputComponent';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FavouritesScreen from './FavouritesScreen';
import ChannelScreen from './ChannelScreen';

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
  listView: {
    marginTop: 16,
    height: '68%',
  },
  header: {
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-around',
  },
});

const Tab = createBottomTabNavigator();

export default function MainScreen({navigation}: any) {
  const {search, data} = useFetch();

  const onSearch = (value: string) => {
    search(value);
  };

  function searchList() {
    return (
      <View style={[styles.flexcolumn, {width: '95%'}]}>
        <Text style={{fontSize: 33, margin: 30}}>LS Search</Text>

        <View style={styles.header}>
          <InputComponent onSubmitEditing={onSearch} />
        </View>

        {data && (
          <View style={styles.listView}>
            <FlatList
              data={data}
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
        )}
      </View>
    );
  }

  return (
    <Tab.Navigator>
      <Tab.Screen name="Buscar">{searchList}</Tab.Screen>
      <Tab.Screen name="Favoritos" component={FavouritesScreen} />
      <Tab.Screen name="TV Channels" component={ChannelScreen} />
    </Tab.Navigator>
  );
}
