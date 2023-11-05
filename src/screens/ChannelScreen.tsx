/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import tvData from './../Api/tv.json';
import TvChannelComponent from '../components/TvChannelComponent/TvChannelComponent';


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
    button: {
      padding: 14,
      
      margin: 4,
    },
    section: {
        borderRadius: 30,
        borderWidth: 1,
        margin: 5,
    },
    video: {
        height: 144,
        width: 200,
    },
  });
  
export default function ChannelScreen ({navigation}: any) {

    const [expandTouchable, setExpandTouchable] = useState<string>('');
    const [expandSecondTouchable, setExpandSecondTouchable] = useState<string>('');

    const onExpandTouchable = (id: string) => {
        if (expandTouchable === id) {
            setExpandTouchable('');
        } else {
            setExpandTouchable(id);
        }
        setExpandSecondTouchable('');
    };

    const onExpandSecondTouchable = (id: string) => {
        if (expandSecondTouchable === id) {
            setExpandSecondTouchable('');
        } else {
            setExpandSecondTouchable(id);
        }
    };

    return (
        <View>
            <FlatList 
            data = {tvData.countries}
            renderItem={({item}) => (
                <View style = {styles.section}>
                    <TouchableOpacity onPress = {() => onExpandTouchable(item.name)} style={[styles.button, {width: '95%', alignSelf: 'center'}]}>
                        <Text style = {{fontWeight: 'bold'}}>{item.name}</Text>
                    </TouchableOpacity>

                    {expandTouchable === item.name && (
                        <FlatList
                        data = {item.ambits}
                        renderItem={({item: item2}) => (
                            <View  style = {[styles.section, {width: '85%', alignSelf: 'flex-end'}]}>
                                <TouchableOpacity onPress = {() => onExpandSecondTouchable(item2.name)} style={[styles.button, {width: '95%', alignSelf: 'center'}]}>
                                    <Text style = {{fontWeight: 'bold'}}>{item2.name}</Text>
                                </TouchableOpacity>
                                
                                {expandSecondTouchable === item2.name && (
                                    <FlatList
                                    data = {item2.channels}
                                    renderItem={({item: item3}) => (
                                        <View style={[styles.button, {width: '80%', alignSelf: 'flex-end'}]}>
                                            <Text style={{fontWeight: 'bold', fontStyle: 'italic', color: 'gray'}}>{item3.name}</Text>
                                            {item3.options.length === 0 ? (
                                                <Text style={{fontStyle: 'italic'}}>No dispone</Text>
                                            ) : (
                                                <View>
                                                    <FlatList style = {{flexDirection: 'row'}}
                                                    data = {item3.options}
                                                    renderItem={({item: item4}) => (
                                                        <TvChannelComponent 
                                                            name = {item3.name}
                                                            type = {item2.name}
                                                            logo = {item3.logo}
                                                            url = {item4.url}
                                                            country = {item.name}
                                                            callback = {() => {
                                                                navigation.navigate('Stream', {
                                                                    streamVideo: {
                                                                        name: item3.name,
                                                                        type: item2.name,
                                                                        logo: item3.logo,
                                                                        url: item4.url,
                                                                        country: item.name,
                                                                    },
                                                                });
                                                            }}
                                                        />
                                                    )}/>
                                                </View>
                                            )}
                                        </View>
                                    )}/>
                                )}
                            </View>
                        )}/>
                    )}
                </View>
            )}/>
        </View>
    );
}
