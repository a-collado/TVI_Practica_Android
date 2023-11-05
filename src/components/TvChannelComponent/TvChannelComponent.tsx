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
  logo: {
    height: 40,
    width: 40,
  },
});

function TvChannelComponent(props: TvChannelComponentProps) {
  return (
    <TouchableOpacity style = {{margin: 3}} onPress={props.callback}>
        {props.logo && (
          <Image style= {styles.logo} source={{uri: props.logo}} />
        )}
          <Text style = {{fontStyle: 'italic'}}>Click</Text>
        
    </TouchableOpacity>
  );
}

export default TvChannelComponent;