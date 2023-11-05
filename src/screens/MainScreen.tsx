/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, FlatList, StyleSheet, Image} from 'react-native';
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
    height: '79%',
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
    <Tab.Navigator
      screenOptions={({route}) => ({
        // eslint-disable-next-line react/no-unstable-nested-components
        tabBarIcon: ({focused, color, size}) => {
          let iconUrl = '';

          switch (route.name) {
            case 'Buscar':
              iconUrl = focused
                ? 'https://img.icons8.com/?size=256&id=7695&format=png'
                : 'https://img.icons8.com/?size=256&id=132&format=png';
              break;
            case 'Favoritos':
              iconUrl = focused
                ? 'https://img.icons8.com/?size=256&id=7856&format=png'
                : 'https://img.icons8.com/?size=256&id=104&format=png';
              break;
            case 'Canales TV':
              iconUrl = focused
                ? 'https://img.icons8.com/?size=50&id=9989&format=png'
                : 'https://img.icons8.com/?size=256&id=540&format=png';
              break;
          }

          return (
            <Image
              source={{uri: iconUrl}}
              style={{height: size, width: size, tintColor: color}}
            />
          );
        },
      })}>
      <Tab.Screen name="Buscar" options={{headerShown: false}}>
        {searchList}
      </Tab.Screen>
      <Tab.Screen
        name="Favoritos"
        component={FavouritesScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Canales TV"
        component={ChannelScreen}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
}
