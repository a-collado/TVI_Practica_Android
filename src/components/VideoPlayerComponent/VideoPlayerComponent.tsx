import React, {useState} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import Video from 'react-native-video';

const VIDEO_ERROR = 'https://static.thenounproject.com/png/3255966-200.png';
export type VideoPlayerComponent = {
  videoUrl: string;
  doControls: boolean;
};

const styles = StyleSheet.create({
  video: {
    height: 250,
    width: '100%',
  },
  logo: {
    height: 50,
    width: 50,
    marginTop: -120,
    alignSelf: 'center',
    marginBottom: 100,
  },
});

function VideoPlayerComponent(props: VideoPlayerComponent) {
  const [error, setError] = useState(false);

  const onVideoError = () => {
    setError(true);
  };

  return (
    <View>
      <Video
        testID="MusicVideoPlayer"
        style={styles.video}
        source={{uri: props.videoUrl}}
        paused={false}
        controls={props.doControls}
        resizeMode="contain"
        onError={onVideoError}
      />

      {error && (
        <Image
          style={styles.logo}
          source={{uri: VIDEO_ERROR}}
          onError={onVideoError}
        />
      )}
    </View>
  );
}

export default VideoPlayerComponent;
