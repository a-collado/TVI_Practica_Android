/* eslint-disable react-native/no-inline-styles */
import React from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {View, Text, FlatList} from 'react-native';
import InputComponent from '../components/InputComponent/InputComponent';
import MusicVideoComponent from '../components/MusicVideoComponent/MusicVideoComponent';
import {useFetch} from '../Api/Api';

export default function MainScreen({navigation}: any) {
  const {search, data} = useFetch();

  const onSearch = (value: string) => {
    search(value);
  };

  return (
    <View>
      <InputComponent onSubmitEditing={onSearch} />
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
  );
}
