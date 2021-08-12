import React, { FC } from 'react';
import Styles from './playlistItemTitle.module.css';

const PlaylistItemTitle: FC = (props) => {
  const { children } = props;

  return (
    <div className={Styles.playlistItemTitle}>
      {children}
    </div>
  );
};

export default PlaylistItemTitle;
