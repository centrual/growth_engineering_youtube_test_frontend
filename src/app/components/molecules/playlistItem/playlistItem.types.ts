import { VideoInfo } from '@centrual/geyt_api_client';
import { CSSProperties } from 'react';

export interface PlaylistItemProps
{
  video: VideoInfo;
  active?: boolean;
  onClick?: (videoId: string) => void;
  className?: string;
  style?: CSSProperties;
}
