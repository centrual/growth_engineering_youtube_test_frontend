import React, {
  FC, useCallback, useEffect, useState,
} from 'react';
import { VideoInfo } from '@centrual/geyt_api_client';
import ReactDOM from 'react-dom';
import { useHistory } from 'react-router-dom';
import Playlist from '../../organisms/playlist/playlist';
import { YoutubeApi } from '../../../../services/apiService';

const PlaylistPage: FC = () => {
  const history = useHistory();

  const [playlistId] = useState('UUTI5S0PqpgB0DbYgcgRU6QQ');
  const [playlistItems, setPlaylistItems] = useState<VideoInfo[]>([]);
  const [nextPageToken, setNextPageToken] = useState('');
  const [isLoadingNextPage, setNextPageLoadState] = useState(false);
  const [isPlaylistOpen, setPlaylistOpenState] = useState(false);
  const [activeVideoId, setActiveVideoId] = useState('');

  const loadNextPage = useCallback(async (): Promise<void> => {
    ReactDOM.flushSync(() => {
      setNextPageLoadState(true);
    });

    try {
      const { data } = await YoutubeApi.getPlaylist(playlistId, nextPageToken);

      setNextPageToken(data.playlistInfo.nextPageToken ?? '');
      setPlaylistItems(data.videoInfo);
      setNextPageLoadState(false);
    } catch (e) {
      setNextPageLoadState(false);
      history.push('/500');
    }
  }, [history, nextPageToken, playlistId]);

  useEffect(() => {
    (async () => {
      await loadNextPage();
    })();
  }, [loadNextPage]);

  const onPlaylistReachedToEnd = async (): Promise<void> => {
    await loadNextPage();
  };

  const onClickedOnVideo = (videoId: string): void => {
    setActiveVideoId(videoId);
  };

  const onTogglePlaylistButtonClicked = (currentToggleState: boolean): void => {
    setPlaylistOpenState(!currentToggleState);
  };

  return (
    <>
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
