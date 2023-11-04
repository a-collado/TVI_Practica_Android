/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import {View, Text, FlatList, StyleSheet} from 'react-native';
import MusicVideoComponent from '../components/MusicVideoComponent/MusicVideoComponent';
import {useFetch} from '../Api/Api';
import {TouchableOpacity} from 'react-native';
import InputComponent from '../components/InputComponent/InputComponent';

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
    borderWidth: 1
  },
});

export default function MainScreen({navigation}: any) {
  const {search, data} = useFetch();

  const onSearch = (value: string) => {
    search(value);
  };
  
  const onPressChannelNavigation = () => {
    navigation.navigate('Channel')
  }

  return (
    //<View style = {{backgroundColor: 'lightblue'}}>
    <View style={[styles.flexcolumn, {width: '90%'}]}>
      
      <Text style={{fontSize: 33, margin: 30}}>LS Search</Text>

      <View style={{flexDirection: 'row', alignSelf: 'center', justifyContent:'space-around'}}>
        <InputComponent onSubmitEditing={onSearch} />

        <TouchableOpacity /*onPress={onPressSearch}*/ style={[styles.searchbutton, {marginLeft: 15, width: 75}]}>
          <Text style = {{color: 'white'}}>Buscar</Text>
        </TouchableOpacity>
      </View>

      {data && (
        <View style={{marginTop: 16, backgroundColor: 'lightgray', height: '68%'}}>
          <FlatList
            data={data}
            renderItem={({item}) => (
              <MusicVideoComponent
                trackName={item.trackName}
                artistName={item.artistName}
                previewUrl={item.previewUrl}
                artworkUrl={item.artworkUrl100}
                trackPrice={item.trackPrice}
                releaseDate={item.releaseDate}
                country={item.country}
                genre={item.primaryGenreName}
                callback={() => {
                  navigation.navigate('Detail', {musicVideo: item});
                }}
              />
            )}
          />
        </View>
      )}

      <TouchableOpacity onPress={onPressChannelNavigation} style={[styles.searchbutton, {marginTop: 9}]}>
        <Text style = {{color: 'white'}}>Canales TV</Text>
      </TouchableOpacity>

    </View>
    //</View>
  );
}
