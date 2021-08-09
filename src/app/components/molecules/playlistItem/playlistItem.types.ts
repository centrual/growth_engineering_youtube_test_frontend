import { VideoInfo } from '@centrual/geyt_api_client';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface PlaylistItemProps
  extends Partial<Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, 'onClick' | 'keyPress' | 'role' | 'tabIndex'>>
{
  video: VideoInfo;
  active?: boolean;
  onClick?: (videoId: string) => void;
}
