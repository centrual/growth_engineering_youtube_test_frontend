import React, {
  memo,
  UIEventHandler,
  useRef,
  WheelEventHandler,
} from 'react';
import classNames from 'classnames';
import { useWindowSize } from 'rooks';
import Loader from 'react-loader-spinner';
import { PlaylistProps } from './playlist.types';
import Styles from './playlist.module.css';
import PlaylistToggleButton from '../../atoms/playlistToggleButton/playlistToggleButton';
import PlaylistItem from '../../molecules/playlistItem/playlistItem';

const Playlist = memo<PlaylistProps>((props) => {
  const {
    playlist,
    opened,
    activeVideoId,
    onVideoItemClicked,
    onTogglePlaylistButtonClicked,
    isLoadingMoreItems,
    isMoreItemsAvailable,
    onScrolledToEnd,
  } = props;

  const { innerWidth } = useWindowSize();

  const playlistScrollerDiv = useRef<HTMLDivElement|null>(null);

  const scrollHandler: UIEventHandler<HTMLDivElement> = (event): void => {
    if (!isMoreItemsAvailable || isLoadingMoreItems || !opened || !innerWidth) {
      return;
    }

    const target = (event.target as HTMLDivElement);

    if (target.scrollWidth - innerWidth - target.scrollLeft < (innerWidth / 2)) {
      onScrolledToEnd?.();
    }
  };

  const onWheel: WheelEventHandler<HTMLDivElement> = (event): void => {
    if (playlistScrollerDiv.current === null || event.deltaY === 0) {
      return;
    }

    playlistScrollerDiv.current.scrollTo({ left: playlistScrollerDiv.current.scrollLeft + event.deltaY });
  };

  const renderItems = (): JSX.Element[] | JSX.Element => {
    if (playlist.length === 0 && !isLoadingMoreItems) {
      return (
        <div className={Styles.playlistEmpty} data-testid="emptyPlaylist">
          <img
            src="/images/image_not_found.svg"
            alt="Empty playlist"
            className={Styles.playlistEmptyImage}
          />
        </div>
      );
    }

    return playlist.map((videoInfo) => (
      <PlaylistItem
        key={videoInfo.videoId}
        className={Styles.playlistItem}
        video={videoInfo}
        onClick={onVideoItemClicked}
        active={activeVideoId === videoInfo.videoId}
      />
    ));
  };

  const renderLoader = (): JSX.Element | null => {
    if (!isLoadingMoreItems && !isMoreItemsAvailable) {
      return null;
    }

    return (
      <div className={classNames(Styles.loaderContainer, { [Styles.loaderContainerEmptyList]: playlist.length === 0 })}>
        <Loader type="Grid" width={80} height={80} color="rgba(112, 112, 112, 0.75)" />
      </div>
    );
  };

  return (
    <div className={classNames(Styles.playlist, { [Styles.playlistOpened]: opened })}>
      <div className={Styles.toggleButtonWrapper}>
        <PlaylistToggleButton
          toggled={opened}
          onClick={onTogglePlaylistButtonClicked}
        />
      </div>

      <div
        className={Styles.playlistItems}
        onScroll={scrollHandler}
        onWheel={onWheel}
        data-testid="playlistScrollArea"
        ref={playlistScrollerDiv}
      >
        {renderItems()}
        {renderLoader()}
      </div>
    </div>
  );
});

export default Playlist;
