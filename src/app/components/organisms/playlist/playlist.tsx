import React, { memo } from 'react';
import classNames from 'classnames';
import { AutoSizer, Grid } from 'react-virtualized';
import { PlaylistProps } from './playlist.types';
import Styles from './playlist.module.css';
import PlaylistToggleButton from '../../atoms/playlistToggleButton/playlistToggleButton';
import PlaylistItem from '../../molecules/playlistItem/playlistItem';

const Playlist = memo<PlaylistProps>((props) => {
  const { playlist, opened } = props;

  return (
    <div className={classNames(Styles.playlist, { [Styles.playlistOpened]: opened })}>
      <div className={Styles.toggleButtonWrapper}>
        <PlaylistToggleButton toggled={opened} />
      </div>

      <AutoSizer>
        {({ height, width }) => (
          <Grid
            cellRenderer={({
              columnIndex,
              key,
              style,
            }) => (
              <PlaylistItem key={key} style={style} video={playlist.videoInfo[columnIndex]} />
            )}
            columnCount={playlist.videoInfo.length}
            columnWidth={304}
            height={height}
            rowCount={1}
            rowHeight={height - 32}
            width={width}
          />
        )}
      </AutoSizer>
    </div>
  );
});

export default Playlist;
