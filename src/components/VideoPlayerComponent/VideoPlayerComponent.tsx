import React from 'react';
import {StyleSheet} from 'react-native';
import Video from 'react-native-video';

export type VideoPlayerComponent = {
  videoUrl: string;
};

const styles = StyleSheet.create({
  video: {
    height: 144,
    width: 200,
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
    />
  );
}

export default VideoPlayerComponent;
