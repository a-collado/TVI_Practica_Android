/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from "react";
import {View, Text, Image, StyleSheet, TouchableOpacity, FlatList} from 'react-native'
import Video from "react-native-video";
import tvData from './../Api/tv.json';


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
    video: {
        height: 144,
        width: 200,
    },
  });
  
const FILE_PATH = './../Api/tv.json';
export default function ChannelScreen ({navigation, route}: any) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('');
    const [url, setUrl] = useState<string>('');

    route.name = 'Canales de TV';

    const [expandTouchable, setExpandTouchable] = useState<string>('');
    const [expandSecondTouchable, setExpandSecondTouchable] = useState<string>('');

    const onExpandTouchable = (id: string) => {
        if (expandTouchable === id) {
            setExpandTouchable('')
        } else {
            setExpandTouchable(id)
        }
    }

    const onExpandSecondTouchable = (id: string) => {
        if (expandSecondTouchable === id) {
            setExpandSecondTouchable('')
        } else {
            setExpandSecondTouchable(id)
        }
    }
    

    return (
        /*<Text></Text>*/<View>
            <FlatList 
            data = {tvData.countries}
            renderItem={({item}) => (
                <View>
                    <TouchableOpacity onPress = {() => onExpandTouchable(item.name)} style={[styles.searchbutton]}>
                        <Text style = {{color: 'white'}}>{item.name}</Text>
                    </TouchableOpacity>

                    {expandTouchable === item.name && (
                        <FlatList
                        data = {item.ambits}
                        renderItem={({item: item2}) => (
                            <View>
                                <TouchableOpacity onPress = {() => onExpandSecondTouchable(item2.name)} style={[styles.searchbutton]}>
                                    <Text>{item2.name}</Text>
                                </TouchableOpacity>
                                
                                {expandSecondTouchable === item2.name && (
                                    <FlatList
                                    data = {item2.channels}
                                    renderItem={({item: item3}) => (
                                        <View style={[styles.searchbutton]}>
                                            <Text>{item3.name}</Text>
                                            {item3.options.length === 0 ? (
                                                <Text>No dispone</Text>
                                            ): (
                                                <FlatList
                                                data = {item3.options}
                                                renderItem={({item: item4}) => (
                                                    <TouchableOpacity style={[styles.searchbutton]}>
                                                        <Text>{item4.url}</Text>
                                                        <Video
                                                            style={styles.video}
                                                            source={{uri: item4.url}}
                                                            paused={false}
                                                            controls={true}
                                                        />
                                                    </TouchableOpacity>
                                                )}/>
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