import { VideoInfo } from '@centrual/geyt_api_client';

export interface PlaylistProps {
  playlist: VideoInfo[];
  activeVideoId?: string;
  onVideoItemClicked?: (videoId: string) => void;
  isMoreItemsAvailable?: boolean;
  isLoadingMoreItems?: boolean;
  onScrolledToEnd?: () => void;
  onTogglePlaylistButtonClicked?: (currentState: boolean) => void;
  opened?: boolean;
}
