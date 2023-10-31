/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {TextInput, View} from 'react-native';

export interface InputProps {
  onSubmitEditing: (value: string) => void;
}

const Input = ({onSubmitEditing}: InputProps) => {
  return (
    <View
      style={{
        borderBottomWidth: 1,
        borderWidth: 1,
        flexGrow: 1,
        borderRadius: 60,
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
      }}>
      <TextInput
        onSubmitEditing={event => onSubmitEditing(event.nativeEvent.text)}
        returnKeyType="search"
      />
    </View>
  );
};

export default Input;
