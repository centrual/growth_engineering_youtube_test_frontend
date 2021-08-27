import React, {
  FC, useEffect, useState,
} from 'react';
import { VideoInfo } from '@centrual/geyt_api_client';
import { useHistory } from 'react-router-dom';
import { useWindowSize } from 'rooks';
import Playlist from '../../organisms/playlist/playlist';
import { YoutubeApi } from '../../../../services/apiService';
import Config from '../../../../config';
import ReactPlayerWrapper from '../../atoms/reactPlayerWrapper/reactPlayerWrapper';

const PlaylistPage: FC = () => {
  const history = useHistory();
  const { innerWidth, innerHeight } = useWindowSize();

  const [playlistId] = useState('UUTI5S0PqpgB0DbYgcgRU6QQ');
  const [playlistItems, setPlaylistItems] = useState<VideoInfo[]>([]);
  const [nextPageToken, setNextPageToken] = useState('');
  const [isLoadingNextPage, setNextPageLoadState] = useState(true);
  const [isPlaylistOpen, setPlaylistOpenState] = useState(false);
  const [activeVideoId, setActiveVideoId] = useState('');

  const loadNextPage = async (): Promise<void> => {
    setNextPageLoadState(true);

    try {
      const { data } = await YoutubeApi.getPlaylist(playlistId, nextPageToken);

      setNextPageToken(data.playlistInfo.nextPageToken ?? '');
      setPlaylistItems([...playlistItems, ...data.videoInfo]);

      if (activeVideoId === '') {
        setActiveVideoId(data.videoInfo[0].videoId);
      }
      setNextPageLoadState(false);
    } catch (e) {
      setNextPageLoadState(false);
      history.push({ pathname: '/500' });
    }
  };

  useEffect(() => {
    (async () => {
      await loadNextPage();
    })();
    // eslint-disable-next-line
  }, []);

  const onPlaylistReachedToEnd = async (): Promise<void> => {
    await loadNextPage();
  };

  const onClickedOnVideo = (videoId: string): void => {
    setActiveVideoId(videoId);
  };

  const onTogglePlaylistButtonClicked = (currentToggleState: boolean): void => {
    setPlaylistOpenState(!currentToggleState);
  };

  let computedVideoAreaHeight: string | number = '100%';

  if (isPlaylistOpen && innerHeight != null) {
    computedVideoAreaHeight = innerHeight - 304;
  }

  return (
    <>
      <ReactPlayerWrapper
        width={innerWidth ?? '100%'}
        height={computedVideoAreaHeight}
        controls
        url={`${Config.youtube.baseUrl}${activeVideoId}`}
        playing
      />

      <Playlist
        playlist={playlistItems}
        isMoreItemsAvailable={nextPageToken !== ''}
        isLoadingMoreItems={isLoadingNextPage}
        opened={isPlaylistOpen}
        activeVideoId={activeVideoId}
        onScrolledToEnd={onPlaylistReachedToEnd}
        onVideoItemClicked={onClickedOnVideo}
        onTogglePlaylistButtonClicked={onTogglePlaylistButtonClicked}
      />
    </>
  );
};

export default PlaylistPage;
