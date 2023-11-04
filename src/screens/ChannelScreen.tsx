import React, { useState, useEffect } from "react";
import {View, Text, Image} from 'react-native'

export default function ChannelScreen ({navigation, route}: any) {
    /*const data = require('../Api/tv.json');
    const [data, setData] = useState(null);
    console.log(data);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await fetch(url);
                if (!response.ok) {
                  throw new Error(response.statusText);
                }
                const json = await response.json();
                setLoading(false);
                setData(json.results);
                setError('');
            } catch (e) {
                setError(`${e} Could not Fetch Data `);
                setLoading(false);
            }
        };
        fetchData();
    }, [url]);*/

    return (
        <Text>fabss</Text>
    );
}