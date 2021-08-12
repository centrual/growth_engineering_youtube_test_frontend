import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import classNames from 'classnames';
import PlaylistToggleButton from './playlistToggleButton';
import Styles from './playlistToggleButton.module.css';

test('renders default toggle button', () => {
  render(<PlaylistToggleButton toggled={false} />);
  const elm = screen.getByTestId('playlistToggleButton');
  expect(elm).toBeInTheDocument();
  expect(elm).toHaveClass(Styles.playlistToggleButton);
  expect(elm).not.toHaveClass(Styles.playlistToggleButtonToggled);
});

test('click event of playlist toggle button should work', () => {
  const onClickHandler = jest.fn();

  render(<PlaylistToggleButton toggled={false} onClick={onClickHandler} />);
  const elm = screen.getByTestId('playlistToggleButton');
  fireEvent.click(elm);
  expect(onClickHandler).toBeCalledTimes(1);
});

test('renders toggled toggle button', () => {
  const onClickHandler = jest.fn();

  render(<PlaylistToggleButton toggled onClick={onClickHandler} />);
  const elm = screen.getByTestId('playlistToggleButton');
  expect(elm).toHaveClass(classNames(Styles.playlistToggleButton, Styles.playlistToggleButtonToggled));
});
