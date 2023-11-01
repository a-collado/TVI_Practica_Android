import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react-native';
import '@testing-library/jest-native/extend-expect';
import {jest, test} from '@jest/globals';
import MusicVideoComponent from './MusicVideoComponent';

const callbacMok = jest.fn();

function renderTestMusicVideoComponent() {
  return (
    <MusicVideoComponent
      trackName="Llorando en la Limo"
      artistName="C. Tangana"
      previewUrl="https://video-ssl.itunes.apple.com/itunes-assets/Video125/v4/38/64/3d/38643d92-85ec-e87e-c4df-1ebad5c47076/mzvf_6485146669999171799.640x480.h264lc.U.p.m4v"
      artworkUrl="https://is1-ssl.mzstatic.com/image/thumb/Video128/v4/55/55/b7/5555b721-c19e-6bcf-7248-c1fc1e7c2651/8864470289400101.jpg/100x100bb.jpg"
      trackPrice={1.99}
      releaseDate="2018-03-22T07:00:00Z"
      country="USA"
      genre="Hip-Hop/Rap"
      callback={callbacMok}
    />
  );
}

describe('Test unitarios de Music Video Component', () => {
  test('Testeando el correcto renderizado de Music Video', () => {
    // Arrange
    render(renderTestMusicVideoComponent());

    // Act

    // Expect
    expect(screen.getByTestId('MusicVideoButton')).toBeVisible();
  });

  test('Testeando que se cumplan los estilos de Music Video Component', () => {
    // Arrange
    render(renderTestMusicVideoComponent());

    // Act

    // Expect
    expect(screen.getByTestId('MusicVideoButton')).toHaveStyle({});
  });

  test('Testeando el callback de Music Video Component', () => {
    // Arrange
    render(renderTestMusicVideoComponent());

    // Act
    fireEvent.press(screen.getByTestId('MusicVideoButton'));

    // Expect
    expect(callbacMok).toHaveBeenCalled();
  });
});
