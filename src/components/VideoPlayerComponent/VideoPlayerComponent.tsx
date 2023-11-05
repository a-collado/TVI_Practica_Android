import React from 'react';
import {StyleSheet} from 'react-native';
import Video from 'react-native-video';

export type VideoPlayerComponent = {
  videoUrl: string;
};

const styles = StyleSheet.create({
  video: {
    height: 250,
    width: '100%',
  },
});

function VideoPlayerComponent(props: VideoPlayerComponent) {
  return (
    <Video
      testID="MusicVideoPlayer"
      style={styles.video}
      source={{uri: props.videoUrl}}
      paused={false}
      controls={true}
      resizeMode="contain"
    />
  );
}

export default VideoPlayerComponent;
