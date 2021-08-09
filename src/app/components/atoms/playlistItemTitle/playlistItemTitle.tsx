import React, { FC, PropsWithChildren } from 'react';
import Styles from './playlistItemTitle.module.css';

const PlaylistItemTitle: FC<PropsWithChildren<unknown>> = (props) => {
  const { children } = props;

  return (
    <div className={Styles.playlistItemTitle}>
      {children}
    </div>
  );
};

export default PlaylistItemTitle;
