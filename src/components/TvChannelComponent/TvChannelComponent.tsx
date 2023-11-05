/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export type TvChannelComponentProps = {
  name: string;
  type: string;
  logo: string;
  url: string;
  country: string;
  callback: () => void;
};

const styles = StyleSheet.create({
  video: {
    height: 100,
    width: 140,
  },
  flexcolumn: {
    flexDirection: 'column',
    alignSelf: 'flex-start',
    marginLeft: 5,
  },
  flexrow: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
  },
});

function TvChannelComponent(props: TvChannelComponentProps) {
  return (
    <Text></Text>/*<TouchableOpacity onPress={props.callback}>
      <View style={[styles.flexrow, {marginTop: 10}]}>
        {props.previewUrl ? (
          <Image style={styles.video} source={{uri: props.artworkUrl100}} />
        ) : (
          <View style={styles.video} />
        )}

        <View style={styles.flexcolumn}>
          <Text style={{fontWeight: 'bold'}}>{props.trackName}</Text>
          <Text>{props.artistName}</Text>
        </View>
      </View>
    </TouchableOpacity>*/
  );
}

export default TvChannelComponent;