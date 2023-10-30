/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Platform, SafeAreaView, StyleSheet} from 'react-native';
import AppNavigation from './src/navigation/AppNavigation';

const styles = StyleSheet.create({
  droidSafeArea: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: Platform.OS === 'android' ? 25 : 0,
  },
});

function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.droidSafeArea}>
      <NavigationContainer>
        <AppNavigation />
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default App;
