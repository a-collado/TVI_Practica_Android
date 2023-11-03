import React from 'react';
import {render, screen /*, fireEvent*/} from '@testing-library/react-native';
import '@testing-library/jest-native/extend-expect';
import {jest, test} from '@jest/globals';
import Input from './InputComponent';

const callbacMok = jest.fn();

function renderInputComponent() {
  return <Input onSubmitEditing={callbacMok} />;
}

describe('Test unitarios de Input Component', () => {
  test('Testeando el correcto renderizado de Music Video', () => {
    // Arrange
    render(renderInputComponent());

    // Act

    // Expect
    expect(screen.getByTestId('InputSearch')).toBeVisible();
  });

  test('Testeando que se cumplan los estilos de Input Component', () => {
    // Arrange
    render(renderInputComponent());

    // Act

    // Expect
    expect(screen.getByTestId('InputSearch')).toHaveStyle({
      borderBottomWidth: 1,
      borderWidth: 1,
      flexGrow: 1,
      borderRadius: 60,
      shadowColor: '#171717',
      shadowOffset: {width: -2, height: 4},
      shadowOpacity: 0.2,
      shadowRadius: 3,
    });
  });

  /*test('Testeando el callback de Music Video Component', () => {
    // Arrange
    render(renderInputComponent());

    // Act
    fireEvent.press(screen.getByTestId('InputSearchBar'));
    // Expect
    expect(callbacMok).toHaveBeenCalled();
  });*/
});
