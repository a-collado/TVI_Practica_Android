/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const IMG_ERROR = 'https://static.thenounproject.com/png/2099077-200.png'

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
const [error, setError] = useState(false);

const onImageError = () => {
    setError(true)
};

  return (
    <TouchableOpacity style = {{margin: 3}} onPress={props.callback}>
        {props.logo && (
          <Image style= {styles.logo} source={{uri: props.logo}} onError={onImageError}/>
        )}
        {(error || !props.logo) && (
          <Image style= {[styles.logo, {marginTop: -40}]} source={{uri: IMG_ERROR}} onError={onImageError}/>
        )}
    </TouchableOpacity>
  );
}

export default TvChannelComponent;