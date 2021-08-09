import React, { KeyboardEventHandler, memo } from 'react';
import classNames from 'classnames';
import { PlaylistItemProps } from './playlistItem.types';
import PlaylistItemViewCount from '../../atoms/playlistItemViewCount/playlistItemViewCount';
import PlaylistItemPublishDate from '../../atoms/playlistItemPublishDate/playlistItemPublishDate';
import PlaylistItemTitle from '../../atoms/playlistItemTitle/playlistItemTitle';
import PlaylistItemCoverImage from '../../atoms/playlistItemCoverImage/playlistItemCoverImage';
import Styles from './playlistItem.module.css';

const PlaylistItem = memo<PlaylistItemProps>((props) => {
  const {
    video,
    active,
    onClick,
    className,
    style,
  } = props;

  const onClickHandler = (): void => {
    onClick?.(video.videoId);
  };

  const onKeyPress: KeyboardEventHandler<HTMLDivElement> = (event): void => {
    if (event.key === 'Enter') {
      onClickHandler();
    }
  };

  return (
    <div
      style={style}
      data-testid="playlistItem"
      onClick={onClickHandler}
      onKeyPress={onKeyPress}
      role="button"
      tabIndex={0}
      className={classNames(Styles.playlistItem, { [Styles.playlistItemActive]: active }, className)}
    >
      <PlaylistItemCoverImage thumbnails={video.thumbnails} />

      <PlaylistItemTitle>
        {video.title}
      </PlaylistItemTitle>

      <div className={Styles.playlistItemStatistics}>
        <div className={Styles.playlistItemStatisticsLeft}>
          <PlaylistItemViewCount viewCount={video.viewCount} />
        </div>
        <div className={Styles.playlistItemStatisticsRight}>
          <PlaylistItemPublishDate publishDate={video.publishedAt} />
        </div>
      </div>
    </div>
  );
});

export default PlaylistItem;
