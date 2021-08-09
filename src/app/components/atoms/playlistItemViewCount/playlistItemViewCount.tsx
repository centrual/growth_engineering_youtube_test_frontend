import React, { FC } from 'react';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NumberFormat from 'react-number-format';
import { PlaylistItemViewCountProps } from './playlistItemViewCount.types';
import Styles from './playlistItemViewCount.module.css';

const PlaylistItemViewCount: FC<PlaylistItemViewCountProps> = (props) => {
  const { viewCount } = props;

  const computedViewCount = (() => {
    if (viewCount < 0) {
      return 0;
    }

    return viewCount;
  })();

  return (
    <span className={Styles.playlistItemViewCountRoot}>
      <FontAwesomeIcon icon={faEye} className={Styles.playlistItemViewCountIcon} size="xs" />
      <NumberFormat value={computedViewCount} displayType="text" thousandSeparator="." decimalSeparator="," suffix=" views" className={Styles.playlistItemViewCountText} />
    </span>
  );
};

export default PlaylistItemViewCount;
