/* eslint-disable react-native/no-inline-styles */
import React from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {View, StyleSheet, Text, FlatList} from 'react-native';
import Input from '../components/Input/Input';
import MusicVideoComponent from '../components/MusicVideoComponent/MusicVideoComponent';
import {useFetch} from '../Api/Api';
import { Touchable } from 'react-native';
import { TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  flexcolumn: {
    flexDirection: 'column',
    alignSelf: 'center', 
    alignItems: 'center'
  },
  flexrow: {
    flexDirection: 'row',
    width: '90%',
    alignSelf: 'center', 
    alignItems: 'center'
  },
  searchbutton: {
    padding: 14, 
    backgroundColor:'lightgray', 
    borderRadius: 30, 
    alignSelf: 'center',
    borderWidth: 1,
    width: 75
  },
});

export default function MainScreen({navigation}) {
  const {search, data} = useFetch();

  const onSearch = (value: string) => {
    search(value);
  };

  return (
    //<View style = {{backgroundColor: 'lightblue'}}>
    <View style = {[styles.flexcolumn, {width: '90%'}]}>

      <Text style = {{fontSize: 33, margin: 30}}>LS Search</Text>

      <View style={{flexDirection: 'row', alignSelf: 'center', justifyContent:'space-around'}}>
        <Input onSubmitEditing = {onSearch} />

        <TouchableOpacity style={[styles.searchbutton, {marginLeft: 15}]}>
          <Text style = {{color: 'white'}}>Buscar</Text>
        </TouchableOpacity>
      </View>

      {data && (
        <View style={{marginTop: 16}}>
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
    </View>
    //</View>
  );
}
