import React, { FC } from 'react';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import Styles from './playlistToggleButton.module.css';
import { PlaylistToggleButtonProps } from './playlistToggleButton.types';

const PlaylistToggleButton: FC<PlaylistToggleButtonProps> = (props) => {
  const { toggled, onClick } = props;

  const onClickHandler = (): void => {
    onClick?.(!!toggled);
  };

  return (
    <button
      data-testid="playlistToggleButton"
      type="button"
      onClick={onClickHandler}
      className={classNames(Styles.playlistToggleButton, { [Styles.playlistToggleButtonToggled]: toggled })}
    >
      <FontAwesomeIcon icon={faChevronUp} size="2x" />
    </button>
  );
};

export default PlaylistToggleButton;
