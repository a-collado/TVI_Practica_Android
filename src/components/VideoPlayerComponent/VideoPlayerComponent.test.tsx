import React from 'react';
import {render, screen /*, fireEvent*/} from '@testing-library/react-native';
import '@testing-library/jest-native/extend-expect';
import {jest, test} from '@jest/globals';
import VideoPlayerComponent from './VideoPlayerComponent';

jest.mock('react-native-video', () => 'Video');
//const callbacMok = jest.fn();

function renderTestVideoPlayerComponent() {
  return (
    <VideoPlayerComponent
      videoUrl="https://video-ssl.itunes.apple.com/itunes-assets/Video125/v4/38/64/3d/38643d92-85ec-e87e-c4df-1ebad5c47076/mzvf_6485146669999171799.640x480.h264lc.U.p.m4v"
      doControls={true}
    />
  );
}

describe('Test unitarios de Video Player Component', () => {
  test('Testeando el correcto renderizado de Music Video', () => {
    // Arrange
    render(renderTestVideoPlayerComponent());

    // Act

    // Expect
    expect(screen.getByTestId('MusicVideoPlayer')).toBeVisible();
  });

  test('Testeando que se cumplan los estilos de Video Player Component', () => {
    // Arrange
    render(renderTestVideoPlayerComponent());

    // Act

    // Expect
    expect(screen.getByTestId('MusicVideoPlayer')).toHaveStyle({
      height: 250,
      width: '100%',
    });
  });

  /*test('Testeando el callback de Video Player Component', () => {
    // Arrange
    render(renderTestVideoPlayerComponent());

    // Act
    fireEvent.press(screen.getByTestId('MusicVideoPlayer'));

    // Expect
    expect(callbacMok).toHaveBeenCalled();
  });*/
});
